// Your code goes here
  
// Destination Button change to red font
const signUpButton = document.querySelectorAll('.destination > .btn')

signUpButton.forEach(each => {
    each.addEventListener('mouseover', function (event, index) {
    each.style.color = 'red';})
})

// Doubleclick on page, receive sunset, ????, profit
const bodyWork = document.querySelector('body')

bodyWork.addEventListener('dblclick', function () {
    bodyWork.style.backgroundImage = "url('../img/DSC_0645.jpg')"
    ;
    bodyWork.style.backgroundImage.width = '10%';
    console.log('hi')
})

// Loading pop up image
window.addEventListener('load', function() {
    alert('Page has loaded!')
})

window.addEventListener('scroll', function (event) {
//    let element = event.target;
//    console.log(event);
    console.log(`innerheight ${window.innerHeight}`);
    console.log(`y off ${window.pageYOffset}`);
    if (window.pageYOffset === window.innerHeight)
    {
        alert('Please accept our offers!');
    }
});

// Drag and receive Doggo
const doggoDragPhoto = document.querySelectorAll ('.img-content > img')[0];

doggoDragPhoto.addEventListener ('drag', function () {
    doggoDragPhoto.style.src = '../img/DSC_0224.jpg'
    return false;
})


// Rotate Bus Image by Scroll
const busImage = document.querySelector('.intro > img')

busImage.addEventListener ('wheel', function () {
    busImage.style.transform = 'rotate(180deg)';
})

// Remove ability to click on Nav Elements
const navItems = document.querySelector('nav')

navItems.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('hi')
    return false;
  })

navItems.addEventListener('auxclick', function (event) {
    event.preventDefault();
    console.log('hi')
    return false;
})

navItems.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    console.log('hi')
    return false;
})


