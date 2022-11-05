let showPic = Array.from(document.querySelectorAll('.show_pic'));
let popups = Array.from(document.querySelectorAll('.popup'));
let popupBlock = document.querySelector('.popup_block');

for (let i=0; i < showPic.length; i++) {
    showPic[i].addEventListener('click', () => {
        popupBlock.classList.add('popup_block_active');
        popups[i].classList.add('popup_active');
    });
}

let closeBtn = Array.from(document.querySelectorAll('.close'));


for (let i=0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', () => {
        popupBlock.classList.remove('popup_block_active');
        popups[i].classList.remove('popup_active');
    });
}







console.log(closeBtn);

