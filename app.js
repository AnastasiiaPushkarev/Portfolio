const section = document.querySelectorAll(".selection");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector('.main-content');



function pageTransition(){
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++){ // count of sectBtn on the page
        sectBtn[i].addEventListener('click', () =>{
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        });
    }
}

pageTransition();