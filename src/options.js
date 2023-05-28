function save_Options() {
  /** @type {HTMLTextAreaElement} */ let eltTextArea_hltWrap_arrRegexWord;
  /** @type {HTMLTextAreaElement} */ let eltTextArea_hltWrap_sel;
  /** @type {HTMLInputElement} */ let eltCb_MatchWholeWord;
  /** @type {HTMLInputElement} */ let eltCb_PlainMatchNoRegex;
  /** @type {HTMLInputElement} */ let eltCb_Ws2ss;
  /** @type {HTMLInputElement} */ let eltCb_CaseInsensitive;

  // const elt_PopupHtml = document.getElementById('eltId_PopupHtml');
  eltTextArea_hltWrap_sel = document.getElementById('hltWrap_sel');
  eltTextArea_hltWrap_arrRegexWord = document.getElementById('hltWrap_arrRegexWord');
  eltCb_MatchWholeWord = document.getElementById('id_cb_MatchWholeWord');
  eltCb_PlainMatchNoRegex = document.getElementById('id_cb_PlainMatchNoRegex');
  eltCb_Ws2ss = document.getElementById('id_cb_Ws2ss');
  eltCb_CaseInsensitive = document.getElementById('id_cb_CaseInsensitive');

  chrome.storage.local.set(
    {
      content_hltWrap_sel_default: eltTextArea_hltWrap_sel.value,
      content_arrRegexWord_default: eltTextArea_hltWrap_arrRegexWord.value,
      det_IgnoreWordBoundary_default: !eltCb_MatchWholeWord.checked,
      det_PlainMatchNoRegex_default: eltCb_PlainMatchNoRegex.checked,
      det_Ws2ss_default: eltCb_Ws2ss.checked,
      det_CaseInsensitive_default: eltCb_CaseInsensitive.checked,
    },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('id_SaveStatus');
      const time = new Date();
      status.textContent = 'Options saved. :: ' + time;
      setTimeout(() => {
        status.textContent = time;
      }, 750);
    }
  );
}

function reset_Options() {
  chrome.storage.local.remove(
    [
      'content_hltWrap_sel_default',
      'content_arrRegexWord_default',
      'det_IgnoreWordBoundary_default',
      'det_PlainMatchNoRegex_default',
      'det_Ws2ss_default',
      'det_CaseInsensitive_default',
    ], // prettier-ignore
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('id_SaveStatus');
      const time = new Date();
      status.textContent = 'Options reset-ed. :: ' + time;
      setTimeout(() => {
        status.textContent = time;
      }, 750);
    }
  );
}

document.getElementById('id_RunSave').addEventListener('click', save_Options);
document.getElementById('id_RunReset').addEventListener('click', reset_Options);
