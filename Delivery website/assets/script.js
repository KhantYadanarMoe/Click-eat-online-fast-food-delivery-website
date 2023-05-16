const menuToggler = document.querySelector('.menu-toggler');
const navbar = document.querySelector('.navbar');
const collapsibleMenu = document.querySelector('.collapsible-menu');

menuToggler.addEventListener('click', () => {
    navbar.classList.toggle('show-menu');
    if(navbar.classList.contains('show-menu')){
        collapsibleMenu.style.maxHeight = collapsibleMenu.scrollHeight + 'px';
        setTimeout(() => {
            collapsibleMenu.style.overflow = 'visible';
        }, 300);
    }else{
        collapsibleMenu.style.maxHeight = '0px';
        collapsibleMenu.style.overflow = 'hidden';
    }
})

const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

      pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwFields =>{
                if(pwFields.type === "password"){
                    pwFields.type = 'text';

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye")
                    })
                }else{
                    pwFields.type = 'password';

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash")
                    })
                }
            })
        })
      })