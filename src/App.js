import React from 'react';
import './style.css';
import '../assets/css/UI.css';

export default function App() {
  const pug = require('pug');

  let a = '';

  let text = `
a.gotop.show
	i.mdi.mdi-arrow-up
`;

  const compiledFunction = pug.compile(text);

  function createMarkup(s) {
    return { __html: s };
  }

  return (
    <div>
      <textarea id="w3review" name="w3review" rows="4" cols="50">
        {text}
      </textarea>
      <div style={{ padding: 10, border: '1px solid black' }}>
        {compiledFunction({ name: 'Timothy' })}
      </div>

      <div
        id="result"
        style={{ padding: 10, border: '1px solid black' }}
        dangerouslySetInnerHTML={createMarkup(
          compiledFunction({ name: 'Timothy' })
        )}
      />
    </div>
  );
}
