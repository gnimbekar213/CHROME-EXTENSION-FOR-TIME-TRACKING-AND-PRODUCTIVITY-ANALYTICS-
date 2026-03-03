document.addEventListener("DOMContentLoaded", () => {
  chrome.runtime.sendMessage({ action: "getTime" }, (response) => {
    if (response && response.timeSpent >= 0) {
      document.getElementById("time").innerText =
        response.timeSpent + " sec";
    } else {
      document.getElementById("time").innerText = "0 sec";
    }
  });
});