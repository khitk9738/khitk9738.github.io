



let notifId = null; // TO identify a notif

let appState = {
  WORK: 'work',
  BREAK: 'break',
};

const rehydrateState = () => {
  chrome.storage.local.get('ON', function (result) {
    switchOn();
    if (result.ON) {
      const timerDetails = JSON.parse(result.ON)
      Object.keys(timerDetails).map(key => {
        const type = timerDetails[key]['type'];
        const time = getMinutes(timerDetails[key]['time']);
        const timeButton = $('.time-btn-group[data-type="'+ type +'"] .btn[value="'+ time +'"]');
        timeButton.siblings('.btn').removeClass('active');
        timeButton.addClass('active');
      })
      deActivateUpdateBtn();
    } else {
      activateUpdateBtn();
    }
  });
}

rehydrateState();
// Switch tabs (Home, stats etc)
$('.nav-btn').click(function() {
  $(this).siblings('.nav-btn').removeClass('active');
  $(this).addClass('active');
  let tabName = $(this).data('tab');
  $('.' + tabName).siblings('.screen').hide('active');
  $('.' + tabName).show();
})

// Select pre-specified time by clicking on buttons
$('.time-btn-group').on('click', '.time-btn', function(e) {
  var time = e.target.value;
  $(e.target).siblings('.time-btn').removeClass('active');
  $(e.target).addClass('active');
  activateUpdateBtn();
})

const getMinutes = (seconds) => {
  const minutes = parseInt(seconds)/60;
  return minutes;
}

const setUpdateBtnText = () => {
  chrome.storage.local.get('ON', function (result) {
    if (result.ON) {
      $('.update-btn').html('Update');
      $('.instruction-text').html('Click to update the changes');

    } else {
      $('.update-btn').html('Start')
      $('.instruction-text').html('')
    }
  })
}

const activateUpdateBtn = () => {
  $('.update-btn').attr('disabled', false);
  $('.instruction-text').show();
  setUpdateBtnText()
}

const deActivateUpdateBtn = () => {
  $('.update-btn').attr('disabled', true);
  $('.instruction-text').hide();
}

const showTimer = (timerDisplayDetails) => {
  $('#timer-instruction').hide();
  $('#timer-wrapper').show();
  const currentState = timerDisplayDetails.state; // State can 'WORK' or 'BREAK'
  const timeLeft = timerDisplayDetails.timeLeft; // State can 'WORK' or 'BREAK'
  if (currentState == appState.WORK) {
    $('.work-timer').show();
    $('.break-timer').hide();
    $('#work-time').html(timeLeft);
  } else if (currentState == appState.BREAK) {
    $('.work-timer').hide();
    $('.break-timer').show();
    $('#break-time').html(timeLeft);
  }
}
// Update button
$('.update-btn').click(function() {
  let timerDetails = {};
  $('.time-btn-group').each(function() {
    const type = $(this).data('type');
    const time = $(this).children('.active').val();
    timerDetails[type] = {
      type: type, // type can be work or break
      time: 60 * parseInt(time) // timing in seconds
    }
  });
  
  // // For testing
  // if (timerDetails['work']['time'] == 900 &&  timerDetails['break']['time'] == 120) {
  //   timerDetails = {
  //     'work': {
  //       'type': 'work',
  //       'time': 10
  //     },
  //     'break': {
  //       'type': 'break',
  //       'time': 10
  //     }
  //   }
  // }

  chrome.storage.local.set({'ON': JSON.stringify(timerDetails)})
  chrome.runtime.sendMessage({
    type: 'SET_TIMER',
    timerDetails: timerDetails
  });
  deActivateUpdateBtn();
});

const clearTimer = () => {
  chrome.runtime.sendMessage({
    type: 'CLEAR_TIMER',
  });
}

const switchOff = () => {
  $('.time-btn-group button').attr('disabled', true);
  $('.update-btn').attr('disabled', true);
  $('#timer-instruction').show();
  $('#timer-wrapper').hide();
  $('.status-indicator-on').hide();
  $('.status-indicator-off').show();
  clearTimer();
  chrome.storage.local.set({'ON': null});
}

const switchOn = () => {
  $('.time-btn-group button').attr('disabled', false);
  $('.update-btn').attr('disabled', false);
  $('.status-indicator-on').show();
  $('.status-indicator-off').hide();
}

$('input[name=switch]').change(function(e) {
  if (this.checked) { // Switch On
    switchOn();
    activateUpdateBtn();
  } else {
    switchOff();
    deActivateUpdateBtn();
  }
});

$('.learn-exercise').click(function() {
  window.open('https://posturepanda.com/exercises?utm_source=extensionDirect');
});

$('.end-break').click(function() {
  chrome.runtime.sendMessage({
    type: 'STOP_BREAK'
  });
});


chrome.extension.onMessage.addListener(
  function(request, sender, send_response) {
    if (request.type == 'TIME_LEFT') {
      showTimer(request);
    }
  }
);