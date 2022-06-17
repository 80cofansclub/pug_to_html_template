import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const pug = require('pug');

  let a = '';

  let text = `
div(table-grid style="--table-grid-width:repeat(5,1fr); --table-grid-gap:2px;--table-grid-padding-y:2px; --table-grid-padding-x:4px;")
table.table.table-tree
  thead(toggle-parent)
    tr
      th
        a.btn.btn-sm.btn-toggle(href="#" toggle-btn="trigAll" toggle-class="off")
          i.mdi.mdi-chevron-down
      th
        .table-grid
          -for(var y=1; y<6; y++)
            .grid-cell Title 
              = y 
  tbody
    -for(var x=0; x<5; x++)
      tr.table-tr-title(toggle-parent)
        td
          a.btn.btn-sm.btn-toggle(href="#" toggle-btn="trigNext" toggle-class="off")
            i.mdi.mdi-chevron-down
        td
          .table-grid
            -for(var y=1; y<6; y++)
              .grid-cell Item 
                = y 
      tr.table-tr-detail(toggle-element="off")
        td
        td
          .table-grid
            -for(var y=1; y<5; y++)
              .grid-cell.text-gray.tinny Sec Title
                = y 
          -for(var z=1; z<5; z++)
            .table-grid
              -for(var y=1; y<5; y++)
                .grid-cell Description 
                  = y 
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
