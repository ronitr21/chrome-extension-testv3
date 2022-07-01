chrome.runtime.onMessage.addListener((request) => {
  if (request.type === "popup-modal") {
    var currentpage = window.location.href
    if (currentpage.includes('checkout') || currentpage.includes('cart')){
      showModal();
    }
  }
});
const showModal = () => {
  const modal = document.createElement("dialog");
  modal.setAttribute(
    "style",
    `
    height:280px;
    width: 510px;
    border: none;
    top:150px;
    border-radius:3px;
    background-color:white;
    position: fixed;
    bottom: 650px;
    left: 950px;
    box-shadow: 0px 2px 9px 0px rgb(0, 0, 0 / 2%);
    overflow-y: hidden;
    overflow-x: hidden;
    `
  );
  //<iframe id="popup-content"; style="height:100%"></iframe>
  // <h id="popup-content">Rewards Found!</h>
  //   <p>Use the optimal card for maximized rewards</p>
  //   <button id="apply-button"; style="padding: 3px 3px">Apply Card</button>
  //   <div style="position:absolute; top:0px; left:5px;">
  //   <button style="padding: 8px 12px; font-size: 16px; position: relative; left: 400px; border: none; border-radius: 20px;">x</button>
  //   </div>
  // remember to change the height back to 210px and width to 443px, bottom to 750px and left to 1050px
  modal.innerHTML = `<iframe id="popup-content"; style="height:100%; width:100%;"></iframe>
  <button style="padding: 8px 12px; background: transparent; font-size: 16px; position: relative; left: 230px; bottom:100px; border: none; border-radius: 20px;"></button>
  `;
  document.body.appendChild(modal);
  const dialog = document.querySelector("dialog");
  dialog.showModal();
  const iframe = document.getElementById("popup-content");
  iframe.src = chrome.extension.getURL("content.html");
  iframe.frameBorder = 0;
  dialog.querySelector("button").addEventListener("click", () => {
    dialog.close();
  });
};
