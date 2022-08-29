let showListBtn = document.getElementById("showList");

showListBtn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: showList,
  });
});

function showList() {
  document.querySelector('#related').style.display = 'block';
}
