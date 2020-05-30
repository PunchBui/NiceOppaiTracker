// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const updateButton = document.getElementById('updateButton')
const addButton = document.getElementById('urlAddButton')
const urlInput = document.getElementById('urlInput')
const listItem = document.getElementById('listItem')

updateButton.onclick = async () => {
  console.log('updating')
  let data = await fetchingUrl()
}

addButton.onclick = () => {
  let data = urlInput.value
  saveToSyncStorage(data)
}

listItem.onclick = () => {
  chrome.tabs.create({url: "http://www.stackoverflow.com"})
}

const saveToSyncStorage = (data) => {
  chrome.storage.sync.set({key: data}, function() {
    console.log('Value is set to ' + data);
  })
}

const getFromSyncStorage = () => {
  chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key)
    return result.key
  })
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