/** @param {chrome.tabs.Tab} tab  */
async function activate_Ext(tab) {
  // if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {

  // ;not_working;  const colorOn = 'rgba(0, 255, 0, 1)';@¦const colorOff = 'rgba(255, 255, 255, 0)';@¦@¦/** @param {chrome.tabs.Tab} tab  */@¦async function activate_Ext(tab) {@¦  // if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {@¦@¦  const prevState = await chrome.action.getBadgeBackgroundColor({ tabId: tab.id });@¦  const nextState = prevState === colorOn ? colorOff : colorOn;@¦@¦  // Set the action badge to the next state@¦  chrome.action.setBadgeBackgroundColor({@¦    tabId: tab.id,@¦    color: nextState,@¦  });

  const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
  const nextState = prevState === 'ON' ? 'OFF' : 'ON';

  // Set the action badge to the next state
  await chrome.action.setBadgeText({
    tabId: tab.id,
    text: nextState,
  });

  if (nextState === 'ON') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        det_PopupHtmlVisible: true,
      });
    });
  } else if (nextState === 'OFF') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        det_PopupHtmlVisible: false,
      });
    });
  }
}

chrome.action.onClicked.addListener(activate_Ext);

// https://dev.to/paulasantamaria/adding-shortcuts-to-your-chrome-extension-2i20
chrome.commands.onCommand.addListener(function (command) {
  if (command === 'activate-ext') {
    chrome.tabs.query({ active: true, currentWindow: true }, activate_Ext);
  } else if (command === 'run-highlight') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        exec_RunHighlight: true,
      });
    });
  } else {
    console.log(`Command ${command} not found`);
  }
});
