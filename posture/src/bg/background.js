
let countdownIntervalId = null;

let appState = {
  WORK: 'work',
  BREAK: 'break',
  OFF: 'off',
  CURRENT: 'off',
};

appState['timerDetails'] = {
  [appState.WORK]: {
    type: appState.WORK,
    time: 300
  },
  [appState.BREAK]: {
    type: appState.BREAK,
    time: 300
  }
};

const selectBreakMessage = () => {
  var myArray = [
    "Change your emotional state by changing your posture",
    "Know your powers. Your body language and your body itself",
    "Of all the things you wear, your posture is most important",
    "Walking is wonderful for elongating the body and posture",
    "Good posture and an attitude let you get away with anything"
  ];
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  return randomItem;
};

const selectWorkMessage = () => {
  var myArray = [
    "Keep your mind right and your head up",
    "Rule the room with great attitude and posture",
    "A good stance and posture reflect a proper state of mind",
    "Posture has a big impact on the way people perceive you",
    "Never slouch, as doing so compresses your lungs"
  ];

  let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  return randomItem;
};

let panda_url = "https://posturepanda.com/exercises";
const breakMessage = 'Check your browser for guided posture stretches!';
const breakTitle = 'Break Time';
const workMessage = 'Your body thanks you for taking a break!';
const workTitle = 'Break Over';
const breakImage = '../icons/pandaFace.png_48x48.png';
const breakOverImage = '../icons/pandaFace.png_48x48_blue.png';
let notifId = null;

chrome.extension.onMessage.addListener(
  (request, sender, send_response) => {
    if (request.type == 'SET_TIMER') {
      appState.timerDetails = request.timerDetails;
      setWorkState();
    } else if (request.type == 'CLEAR_TIMER') {
      setOffState();
    } else if (request.type == 'STOP_BREAK') {
      if (appState.CURRENT == appState.BREAK) {
        setWorkState();
      }
    }
  }
);

const setOffState = () => {
  clearTimer();
  setAppState(appState.OFF);
}

const clearTimer = () => {
  sendMessage({type: 'RESET'});
  clearInterval(countdownIntervalId)
}
const setWorkState = () => {
  clearInterval(countdownIntervalId);
  setAppState(appState.WORK);
  setTimer();
}
const toggleAppState = () => {
  appState.CURRENT = appState.CURRENT == appState.WORK ? appState.BREAK : appState.WORK;
}
const setAppState = (state) => {
  appState.CURRENT = state;
}
/**
 * Timer functions
 */
const stopCountdownTimer = () => {
  clearInterval(countdownIntervalId);
}

const setTimer = (countdownTime=-1) => {
  const clockDuration = appState.timerDetails[appState.CURRENT].time;
  const getFormattedTime = (time) => {
    time = (time == 0 ? '00': time);
    time = '' + time;
    if (time.length == 1) {
      time = '0' + time;
    }
    return time;
  }

  countdownTime = countdownTime + 1;
  let minutes = Math.floor(countdownTime / 60);
  let seconds = countdownTime % 60;
  let timeLeft = getFormattedTime(minutes) + ":" + getFormattedTime(seconds);
  sendMessage({type: 'TIME_LEFT', timeLeft: timeLeft, state: appState.CURRENT});

  if (countdownTime >= clockDuration) {
    toggleAppState();
    autoOpenUrl();
    sendNotification();
    setTimer();
  } else {
    countdownIntervalId = setTimeout(() => { setTimer(countdownTime) }, 1000);
  }
}

const sendMessage = (message) => {
  chrome.runtime.sendMessage(message);
  chrome.tabs.query({active:true, lastFocusedWindow: true}, function(tabs) {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, message);
    }
  });
}

const getReminderMessageBasedOnState = () => {
  if (appState.CURRENT == appState.BREAK) {
    return selectBreakMessage();
  } else if (appState.CURRENT == appState.WORK) {
    return selectWorkMessage();
  }
  return '';
}

const getTitleMessageBasedOnState = () => {
  if (appState.CURRENT == appState.BREAK) {
    return breakTitle;
  } else if (appState.CURRENT == appState.WORK) {
    return workTitle;
  }
  return '';
}

const getNotificationImageBasedOnState = () => {
  if (appState.CURRENT == appState.BREAK) {
    return breakImage;
  } else if (appState.CURRENT == appState.WORK) {
    return breakOverImage;
  }
  return '';
}

const autoOpenUrl = () => {
  if (appState.CURRENT == appState.BREAK) {
    chrome.tabs.query({}, function(tabs) {
       let panda_tab_id;
       tabs.map(tab => {
         if (tab.url.startsWith(panda_url)) {
           panda_tab_id = tab.id;
         }
       })
       if (panda_tab_id) {
         var updateProperties = {"active": true};
         chrome.tabs.update(panda_tab_id, updateProperties);
       } else {
         chrome.tabs.create({ url: 'https://posturepanda.com/exercises?utm_source=extensionDirect' });
       }
     });
  }   
}

const sendNotification = () => {
  if (notifId) {
    chrome.notifications.clear(notifId);
  }
  notifId = 'reminder' + String(Math.random())
  let notification = chrome.notifications.create(notifId, {
    type: 'basic',
    iconUrl: getNotificationImageBasedOnState(), // This can also be changed based on break. eg - Happy panda when break starts.
    title: getTitleMessageBasedOnState(),
    message: getReminderMessageBasedOnState(),
    requireInteraction: true
  });

  ClearNotificationTimed(notifId);

}

const ClearNotificationTimed = (notifId) => {
  if (notifId) {
    setTimeout(function() {
      chrome.notifications.clear(notifId);
    }, 9000)
  }
}

chrome.notifications.onClicked.addListener(function(notifId) {
  if (notifId.indexOf('reminder') == 0) {
    if (appState.CURRENT == appState.BREAK) {
      // chrome.tabs.create({url: 'https://posturepanda.com/exercises?utm_source=extensionDirect'});
    }
    chrome.notifications.clear(notifId);
  }
});

chrome.idle.setDetectionInterval(180);

chrome.idle.onStateChanged.addListener(
    function (state) {
      if (state === "idle") {
        clearTimer();
      } else {
        if (appState.CURRENT !== appState.OFF) {
          setWorkState();
        }
      }
    }
);

