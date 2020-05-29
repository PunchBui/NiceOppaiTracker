// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const updateButton = document.getElementById('updateButton')
const addButton = document.getElementById('urlAddButton')
const urlInput = document.getElementById('urlInput')

updateButton.onclick = async () => {
  console.log('updating')
  let data = await fetchingUrl()
  console.log(data)
}

addButton.onclick = () => {
  console.log(urlInput.value)
}

const fetchingUrl = async () => {
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  let url = 'http://www.niceoppai.net/Rebirth-Abandoned-Less-Return/#.XtFO8J4zY1g'
  let data = ''
  let response = await fetch(`${proxy}${url}`, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
  })
    switch (response.status) {
        // status "OK"
        case 200:
            data = await response.text();
            break;
        // status "Not Found"
        case 404:
            console.log('Not Found');
            break;
    }
  return data
}
// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };

