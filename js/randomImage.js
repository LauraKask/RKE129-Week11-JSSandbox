const myButton = document.querySelector('button');
const imageElement = document.querySelector('.image-container img');
const images = ["pic1.jpeg", "pic2.jpeg", "pic3.jpeg", "pic4.jpeg"];

myButton.addEventListener('click', changeImage);

function changeImage () {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    imageElement.src = 'images/' + images[randomIndex];
}