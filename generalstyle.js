// <===================================genreal style javascript=================================>
const preloader = document.querySelector('.preloader');
window.addEventListener('load', () =>{
  preloader.style.display = "none";
    document.body.classList.remove('scroll_pause');
})

// dark bg codes
const darkBtn = document.querySelector(".darkbg");
const darkbgToggleBtn = document.querySelector(".darkbgbtn");
const navcon = document.querySelector(".navcon");
const card = document.querySelectorAll(".cards");
const title = document.querySelector(".title");
const nav = document.querySelector(".navcon");
const aboutImg = document.querySelector('.about img');
const bgVariant = document.querySelector(".about_description");
const bgVariant1 = document.querySelector(".right_desc");
const bgVariant2 = document.querySelector(".ptext");
const port = document.querySelectorAll('.ports');
const contactInput = document.querySelector('.contact_inputs');
const contactInfo = document.querySelector('.contact_info');
const moonFill = document.querySelector('.bi-moon-fill');
const brightnessFill = document.querySelector('.bi-brightness-high-fill');



darkBtn.addEventListener('click', () => {
  navcon.classList.toggle('whitebg');
    nav.classList.toggle("onlished");
   darkBtn.classList.toggle('onlished');
   aboutImg.classList.toggle('box_shadow');
    bgVariant.classList.toggle('change');
    bgVariant1.classList.toggle('change');
    bgVariant2.classList.toggle('change');
    contactInput.classList.toggle('bordered');
    contactInfo.classList.toggle('shadowed');
   darkbgToggleBtn.classList.toggle('onlished');
                // calling moone and sun dark theme function
                if(moonFill.style.display = "block"){
                  moonFill.style.display = "none";
                  brightnessFill.style.display = "block";
                }else if(brightnessFill.style.display = "block"){
                  moonFill.style.display = "block";
                  brightnessFill.style.display = "none";
                }

        document.body.classList.toggle("darktheme");
        port.forEach(port => {
          port.classList.toggle('portportshadow');
        })
      //change background color of each card
    card.forEach(cards => {
        cards.style.background = "#000";
    });

    // LOCAL STORAGE CODES FOR DARK AND LIGHT THEME
if(localStorage.getItem('theme') == 'light'){
  localStorage.setItem('theme', 'dark');
  moonFill.style.display = "block";
  brightnessFill.style.display = "none";
}else{
  localStorage.setItem('theme', 'light');
  moonFill.style.display = "none";
  brightnessFill.style.display = "block";
}

  });


  // LOCAL STORAGE CODES FOR DARK AND LIGHT THEME
if(localStorage.getItem("theme") == 'light'){
  navcon.classList.remove('whitebg');
  nav.classList.remove("onlished");
 darkBtn.classList.remove('onlished');
 aboutImg.classList.remove('box_shadow');
  bgVariant.classList.remove('change');
  bgVariant1.classList.remove('change');
  bgVariant2.classList.remove('change');
  contactInput.classList.remove('bordered');
  contactInfo.classList.remove('shadowed');
 darkbgToggleBtn.classList.remove('onlished');

      if(moonFill.style.display = "block"){
        moonFill.style.display = "none";
        brightnessFill.style.display = "block";
      }else if(brightnessFill.style.display = "block"){
        moonFill.style.display = "block";
        brightnessFill.style.display = "none";
      }

      document.body.classList.remove("darktheme");
      port.forEach(port => {
        port.classList.remove('portshadow');
      })
    //change background color of each card
  card.forEach(cards => {
      cards.style.background = "#000";
  });


}else if(localStorage.getItem('theme') == 'dark'){
  navcon.classList.add('whitebg');
  nav.classList.add("onlished");
  darkBtn.classList.add('onlished');
  aboutImg.classList.add('box_shadow');
  bgVariant.classList.add('change');
  bgVariant1.classList.add('change');
  bgVariant2.classList.add('change');
  contactInput.classList.add('bordered');
  contactInfo.classList.add('shadowed');
  darkbgToggleBtn.classList.add('onlished');

  if(moonFill.style.display = "block"){
    moonFill.style.display = "none";
    brightnessFill.style.display = "block";
  }else if(brightnessFill.style.display = "block"){
    moonFill.style.display = "block";
    brightnessFill.style.display = "none";
  }

      moonFill.style.display = "block";
      brightnessFill.style.display="none";
      document.body.classList.add("darktheme");
      port.forEach(port => {
        port.classList.add('portshadow');
      })
    //change background color of each card
  card.forEach(cards => {
      cards.style.background = "#000";
  });
}
//END OF DARK BG CLICK EVENT.


window.addEventListener('scroll', () =>{
    const activeBtn = document.querySelector('.class');
    activeBtn.classList.toggle('active', window.scrollY > 0);
})

let navbarToggle = document.getElementById("nav_toggler");
let navlink = document.getElementById("nav_menu");
const btns = document.querySelectorAll(".navlinks .btn");
const navLinkClose = document.querySelector(".navlinks");


const navbarToggler = () =>{
    navbarToggle.classList.toggle("active");
    navlink.classList.toggle("open");
    if(window.innerWidth < 770){
    document.body.classList.toggle('scroll_pause');
    }
}
navLinkClose.addEventListener("click", () => {
    navlink.classList.remove("open");
    navbarToggle.classList.remove("active");
    if(window.innerWidth < 770){
        document.body.classList.remove('scroll_pause');
        }
})

navbarToggle.addEventListener("click", navbarToggler);

btns.forEach((close => {
    close.addEventListener('click', navbarToggler)
}));

//variables for adding active btn
const floatingBtns = document.querySelectorAll(".btnv");//floating btns
const Btns = document.querySelectorAll(".btn");//nav btns

//nav btns codes
const removeActivatedClass = () => {
    Btns.forEach(rems => {
     rems.classList.remove("active");
    });
 }
 Btns.forEach(btns => {
     btns.addEventListener("click", () => {
         removeActivatedClass();
        btns.classList.add("active");
     });
 });
 

//floating btns codes //
//function that removes the active class from the btns 
const removeActiveClass = () => {
   floatingBtns.forEach(rem => {
    rem.classList.remove("clicked");
   });
}
floatingBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        removeActiveClass();
       btn.classList.add("clicked");
    });
});

    //adding active btn on scroll
const activeBtnOnScroll = () => {
//getting btn by their ids
const homeMenu = document.querySelector(".btn1");
const aboutMenu = document.querySelector(".btn2");
const  servicesMenu = document.querySelector(".btn3");
const portfolioMenu = document.querySelector(".btn4");
const contactMenu = document.querySelector(".btn5");
const elem = document.querySelector(".clicked");

//window variables
let scrollPos = window.scrollY;
let deviceWidth = window.innerWidth;
console.log(scrollPos);

// toggle active btn class on large screen device.
    if(deviceWidth > 1100 && scrollPos < 800){
        homeMenu.classList.add("clicked");
        servicesMenu.classList.remove("clicked");
        //  removeActiveClass();
        
    }else if(deviceWidth > 1100 && scrollPos < 2400){
        servicesMenu.classList.add('clicked');
        aboutMenu.classList.remove("clicked");
        homeMenu.classList.remove("clicked");
        portfolioMenu.classList.remove("clicked");
        
      }else if (deviceWidth > 1100 && scrollPos < 3900) {
            aboutMenu.classList.add('clicked');
            servicesMenu.classList.remove('clicked');
            contactMenu.classList.remove("clicked");
            homeMenu.classList.remove("clicked");
            portfolioMenu.classList.remove('clicked');
            //  removeActiveClass();
            
            }else if(deviceWidth > 1100 && scrollPos < 5000){
              portfolioMenu.classList.add('clicked');
              aboutMenu.classList.remove('clicked');
              servicesMenu.classList.remove('clicked');
              contactMenu.classList.remove("clicked");
            }
            
            
            else if(deviceWidth > 1100 && scrollPos < 5900){
            contactMenu.classList.add("clicked");
            portfolioMenu.classList.remove("clicked");
          }else if(deviceWidth > 1100 && scrollPos < 6200){
            contactMenu.classList.remove('clicked');
            portfolioMenu.classList.remove('clicked');
          }

      
        //   when window inner weight == 1024
        if(deviceWidth == 1024 && scrollPos < 953){
            homeMenu.classList.add("clicked");
            servicesMenu.classList.remove("clicked");
            aboutMenu.classList.remove('clicked');
            //  removeActiveClass();
            
        }else if(deviceWidth == 1024 && scrollPos < 2400){
            servicesMenu.classList.add('clicked');
            portfolioMenu.classList.remove("clicked");
            homeMenu.classList.remove("clicked");
            aboutMenu.classList.remove('clicked');
            
          }else if(deviceWidth == 1024 && scrollPos < 3900) {
                aboutMenu.classList.add('clicked');
                servicesMenu.classList.remove('clicked');
                contactMenu.classList.remove("clicked");
                homeMenu.classList.remove("clicked");
                portfolioMenu.classList.remove('clicked');
                //  removeActiveClass();
                
                }else if(deviceWidth == 1024 && scrollPos < 4847){
                portfolioMenu.classList.add("clicked");
                aboutMenu.classList.remove("clicked");
                contactMenu.classList.remove('clicked');
              }else if(deviceWidth == 1024 && scrollPos < 5800){
                contactMenu.classList.add('clicked');
                portfolioMenu.classList.remove('clicked');
              }else if(deviceWidth == 1024 && scrollPos < 6300){
                contactMenu.classList.remove('clicked');
                portfolioMenu.classList.remove('clicked');
              }
              
              //active class on scroll codes for tablets
              if(deviceWidth == 768 && scrollPos < 1533){
                homeMenu.classList.add("clicked");
                servicesMenu.classList.remove("clicked");
                //  removeActiveClass();
                
            }else if(deviceWidth == 768 && scrollPos < 2900){
                servicesMenu.classList.add('clicked');
                homeMenu.classList.remove("clicked");
                aboutMenu.classList.remove("clicked");
                
              }else if (deviceWidth == 768 && scrollPos < 5100) {
                    aboutMenu.classList.add('clicked');
                    servicesMenu.classList.remove('clicked');
                    contactMenu.classList.remove("clicked");
                    homeMenu.classList.remove("clicked");
                    portfolioMenu.classList.remove('clicked');
                    //  removeActiveClass();
                    
                    }else if(deviceWidth == 768 && scrollPos < 6800){
                    portfolioMenu.classList.add("clicked");
                    aboutMenu.classList.remove("clicked");
                    contactMenu.classList.remove('clicked');
                  }else if(deviceWidth == 768 && scrollPos < 8200){
                    contactMenu.classList.add('clicked');
                    portfolioMenu.classList.remove('clicked');
                  }else if(deviceWidth == 768 && scrollPos < 8500){
                    contactMenu.classList.remove('clicked');
                    portfolioMenu.classList.remove('clicked');
                  }
                

 //   floatingBtns active toggle on scroll small screen device code when window.innerWidth > 600
    if(deviceWidth < 765 && scrollPos < 1460){
        homeMenu.classList.add("clicked");
        servicesMenu.classList.remove("clicked");
        //  removeActiveClass();
        
    }else if(deviceWidth < 765 && scrollPos < 4329){
        servicesMenu.classList.add('clicked');
        aboutMenu.classList.remove("clicked");
        homeMenu.classList.remove("clicked");
        
      }else if (deviceWidth < 765 && scrollPos < 8570) {
            aboutMenu.classList.add('clicked');
            servicesMenu.classList.remove('clicked');
            contactMenu.classList.remove("clicked");
            homeMenu.classList.remove("clicked");
            portfolioMenu.classList.remove('clicked');
            //  removeActiveClass();
            
            }else if(deviceWidth < 765 && scrollPos < 10330){
              portfolioMenu.classList.add('clicked');
              aboutMenu.classList.remove('clicked');
              servicesMenu.classList.remove('clicked');
              contactMenu.classList.remove('clicked');
            
          }else if(deviceWidth < 765 && scrollPos < 11700){
            contactMenu.classList.add("clicked");
            portfolioMenu.classList.remove("clicked");
            
          }else if (deviceWidth < 765 && scrollPos < 12400){
            contactMenu.classList.remove('clicked');
            portfolioMenu.classList.remove('clicked');
          }



  }
window.addEventListener('scroll', activeBtnOnScroll);


