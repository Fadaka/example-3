class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.hidebuttonEl = document.querySelector('#hide-message-button');


    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hidebuttonEl.addEventListener('click', () => {
      this.hideMessage();
   });
    this.mainContainerEl = document.querySelector("#main-container");

  }

  displayMessage() {
    let newDiv = document.createElement("div")
    newDiv.setAttribute("id", "message");
    newDiv.innerText = 'This is a message displayed by JavaScript';
    this.mainContainerEl.append(newDiv);
    console.log('Thanks for clicking me!');
  }

  hideMessage() {
    let message = document.getElementById("message");
    if (message) {
      message.remove();
    }
    }  
}

module.exports = MessageView;