```javascript id="x6n7kp"
// MOBILE MENU

const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');

if(navToggle && navMenu){

    navToggle.addEventListener('click', function(){

        if(navMenu.style.display === 'flex'){

            navMenu.style.display = 'none';

        }else{

            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';

        }

    });

}


// CONTACT FORM

const form = document.querySelector('#contact-form');

if(form){

    form.addEventListener('submit', function(e){

        e.preventDefault();

        alert(
            'Thank you! Your message has been received.'
        );

        form.reset();

    });

}


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(function(link){

    link.addEventListener('click', function(e){

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});
```
