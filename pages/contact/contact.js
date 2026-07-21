




/*==================================================
CONTACT FORM
==================================================*/

const contactForm = document.querySelector(".contact-form form");

if(contactForm){

    contactForm.addEventListener("submit", function(){

        const submitBtn = this.querySelector("button");

        submitBtn.disabled = true;

        submitBtn.innerHTML =

        '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    });

}