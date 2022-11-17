buttons = document.querySelector("home-buttons");
buttons.addEventListener("click", expendButton());

function expendButton() {
    buttons = document.querySelectorAll("home-buttons");

    const myStyles = `
    display: block;
    width: 80%;
    background-color: red;
    border: 2px;
    font-size: 5em;
    color: white;
    margin: 20px;
    padding-left: 10px;
    padding-bottom: 10px;
    border: 2px solid black;
  `;
    buttons.style.cssText = myStyles;

}
