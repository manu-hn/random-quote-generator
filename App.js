window.onload = init;
function init() {
    generateQuote()

}
async function generateQuote() {
    const body = document.getElementsByTagName('body')
      
    
    const data = await fetch('https://api.adviceslip.com/advice');
  
    const fetchData = await data.json()
    
    const text = document.getElementById("text");

    text.innerHTML = `<h3> ${fetchData.slip.advice}</h3>`;

    const author = document.getElementById("author");
    author.innerHTML = `<h5>- Author ID ${fetchData.slip.id}</h5>`;

    body[0].style.background = `rgb(${251}, ${105}, ${100})`;
    text.style.color = `rgb(${251}, ${105}, ${100})`
   


}

