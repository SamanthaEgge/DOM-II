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
// window.addEventListener('load', function() {

// })

// Scroll Down pop up
// window.addEventListener('scroll', function (){
//     last_known_scroll_position = window.scrollY;

//     if (!ticking) {
//       window.requestAnimationFrame(function() {
//         alert(last_known_scroll_position);
//         ticking = false;
//       });
  
//       ticking = true;
//     }
//   });
// })

// Drag and receive Doggo
const doggoDragPhoto = document.querySelectorAll ('.img-content > img')[0];

doggoDragPhoto.addEventListener ('drag', function () {
    doggoDragPhoto.style.src = 'img/DSC_0224.jpg'
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


