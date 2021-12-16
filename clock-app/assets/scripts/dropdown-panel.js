const trigger = document.querySelector('.btn button');
const triggerText = trigger.querySelector('span');
const page = document.querySelector('main');

trigger.addEventListener('click', () => {
    page.classList.toggle('more-shown');
    page.classList.toggle('more-hidden');
    if(page.classList.contains('more-shown')){
        triggerText.innerText = "Less";
    } else {
        triggerText.innerText = "More";
    }
});