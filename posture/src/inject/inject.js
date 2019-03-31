window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window) {
    return;
  }

  if (event.data.type && event.data.type == 'STOP_BREAK') {
    chrome.runtime.sendMessage(event.data);
  }
});


chrome.extension.onMessage.addListener(
  (request, sender, send_response) => {
    window.postMessage(request);
  }
);