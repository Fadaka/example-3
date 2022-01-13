/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const inputEl = document.querySelector("#message-input");
    inputEl.value = "Setting input value"

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    let newDiv = document.createElement("div");
    newDiv.append(inputEl.value);
    newDiv.setAttribute("id","message");

    console.log('Thanks for clicking on me!')
    expect(document.querySelector('#message')).toEqual(newDiv);
  });

  it('clicks the button and removes the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const hidebuttonEl = document.querySelector('#hide-message-button');
    buttonEl.click();
    hidebuttonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});