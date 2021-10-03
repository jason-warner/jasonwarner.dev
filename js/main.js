const shutter = document.querySelectorAll(".shutter");

initShutter();
function initShutter() {
  shutter.forEach((layer, i) => {
    layer.style.display = "none";
    layer.classList.remove("a" + i);
    layer.classList.remove("b" + i);
  });
}

siteloadShutter();
function siteloadShutter() {
  shutter.forEach((layer, i) => {
    layer.style.display = "";
    layer.style.borderColor = "black";
    layer.classList.add("b" + i);
    setTimeout(function () {
      initShutter();
    }, 666);
  });
}

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => { linkShutter(e) });
});

function linkShutter(e) {
  shutter.forEach((layer, i) => {
    layer.style.display = "";
    layer.style.borderColor = "transparent";
    layer.classList.add("a" + i);
  });
  setTimeout(function () {
    initShutter();
    window.location.href = e.target.getAttribute("data-href");
    siteloadShutter();
  }, 666);
}






//select menu
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const menuBrand = document.querySelector(".menu-brand");
const navItems = document.querySelectorAll(".nav-item");
const navLinx = document.querySelectorAll(".nav-link");
const selfie = document.querySelector(".selfie");


// start menu

let showMenu = true;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (showMenu) {
    menu.classList.add("show");
    selfie.classList.add("show");
    menuBtn.classList.add("close");
    menuNav.classList.add("show");
    menuBrand.classList.add("show");
    navItems.forEach(item => {
      item.classList.add("show");
      item.classList.remove("show2");
    });
    //reset menu
    showMenu = false;
  } else {
    menu.classList.remove("show");
    selfie.classList.remove("show");
    menuBtn.classList.remove("close");
    menuNav.classList.remove("show");
    menuBrand.classList.remove("show");
    navItems.forEach(item => {
      item.classList.remove("show");
      item.classList.add("show2");
    });
    showMenu = true;
  }
}



//type effect on welcome page
var speed = 111;
var h1 = document.querySelector('h1');
var p = document.querySelector('.nb');
var delay = h1.innerHTML.length * speed + speed;

h1.style.display = "none";
p.style.display = "none";

//type effect logic
function typeEffect(element, speed) {
  if (element.style.display == "none") {
    element.style.display = 'inline-block';
  }
  let text = element.innerHTML;
  let i = 0;
  element.innerHTML = "";
  function effectLogic() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }
  var timer = setInterval(effectLogic, speed);
}
// effect to header
setTimeout(function () {
  typeEffect(h1, speed);
  // effect to body
  setTimeout(function () {
    p.style.display = "";
    typeEffect(p, speed);
  }, delay);
}, 333)


// animate welcome page

function hideWelcome() {
  document.querySelector(".shutter").style.display = "none";
}
setTimeout(function () {
  hideWelcome();
}, 1000);




//move shutter on scroll
$(window).scroll(function(){
  $("#shutter").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
});