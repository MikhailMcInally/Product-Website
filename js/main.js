
const masthead = document.querySelector('.inner-masthead');
const title = document.querySelector('.inner-masthead h1');
const subTitle = document.querySelector('.inner-masthead h5');
const brand = document.querySelector('nav .logo');
const h1 = document.querySelector('nav h1');
console.log(h1);


h1.addEventListener('click', event => {
    brand.classList.add('highlight');
});

masthead.addEventListener('click', event => {
    //add class to to-be-transitioned elements
});