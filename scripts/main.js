const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'imagens/mozilla.png') {
        myImage.setAttribute("src", "imagens/codigo.jpeg");

    }   else {
        myImage.setAttribute("src", "imagens/mozilla.png");

    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Por favor, digite seu nome');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();

} else {
const storedName = localStorage.getItem('name');
myHeading.innerHTML = 'Mozilla is cool, '+ storedName;
}

myButton.onclick = () => {
    setUserName();
};
