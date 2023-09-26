<h1>TextHighlighter_Cev</h1>
<ul>
  <li>
    <h3>intro m</h3>
    <ul>
      <li><strong>find</strong> &amp; <strong>highlight</strong> the words</li>
    </ul>
  </li>
  <li>
    <h3>demo (graph)</h3>
    <ul>
      <li><img src="TextHighlighter_Cev 20230528 demo.png" style="max-height: 400px;" alt=""/></li>
    </ul>
  </li>
  <li>
    <h3>working environment</h3>
  </li>
  <ul>
    <li>as a Google Chrome Extension</li>
  </ul>
  <li>
    <h3>prior statement</h3>
    <ul>
      <li>this project is <strong>experimental</strong></li>
    </ul>
  </li>
  <li>
    <h3>to_use</h3>
    <ul style="font-family: Consolas">
      <li>click <strong>icon</strong> || @hotkey[!g] -> activate extension (auto focus)</li>
      <li>click <strong>Run Highlight</strong> || @hotkey[!k] -> find & highlight the words</li>
      <li>right click icon > <strong>option</strong> page -> set default options</li>
      <li>click on the <strong>highlight position marker</strong> -> <strong>scroll</strong> to the found word</li>
      <li><strong>scroll</strong> on the <strong>regex word stat table</strong> -> scroll to next/prev found word</li>
    </ul>
  </li>
  <li>
    <h3>flaw</h3>
    <ul>
      <li>it may <strong>not</strong> find <strong>all</strong> words, due to overlapping</li>
      <li>it may find words that are <strong>hidden</strong></li>
      <li>try not to search on <strong><code>body / div</code></strong> -- its <strong>laggy</strong> & potential buggy</li>
      <li>_ the <strong>order</strong> of matched words _ is <strong>messy</strong> -- because the way <strong>selector</strong> works (maybe)</li>
    </ul>
    <ul>
      <li>I know the On/Off has some issues, could have fixed it in code related to `tabId: tab.id,` / `tabs[0]`, too lazy to do so...</li>
    </ul>
  </li>
  <li>
    <h3>installation</h3>
    <ol>
      <li>download the released <code>.crx</code> file</li>
      <li>unzip it</li>
      <li>load it as an unpacked extension in Google Chrome Extension Page (under development mode)</li>
      <li style="list-style-type: disc;">(This is not in Google Chrome Extension Store -- I was unable to do so (or, currently))</li>
    </ol>
  </li>
</ul>
