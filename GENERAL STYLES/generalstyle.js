// <===================================genreal style javascript=================================>


window.addEventListener('scroll', ()=>{
    const activeBtn = document.querySelector('.class');
    activeBtn.classList.toggle('active', window.scrollY > 0);

   
})

let navbarToggle = document.getElementById("nav_toggler");
let navlink = document.getElementById("nav_menu");
let navlinks = document.getElementById("nav_menus");
const btns = navlinks.querySelectorAll(".navlinks .btn");


const navbarToggler = () =>{
    navbarToggle.classList.toggle("active");
    navlinks.classList.toggle("open");
    navlink.classList.toggle("open");
    document.body.classList.toggle('scroll_pause');
}

navbarToggle.addEventListener("click", navbarToggler)

btns.forEach((close => {
    close.addEventListener('click', navbarToggler)
}));

const floatingBtns = document.querySelectorAll(".navlink .btnv");
const floatingNav = document.querySelector(".navlink");

floatingBtns.forEach(activate => {
    activate.addEventListener("click", () => {
       floatingNav.classList.add("clicked");
    })
})
console.log(floatingBtns);
