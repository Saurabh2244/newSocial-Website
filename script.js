
//SideBar
let menu_item = document.querySelectorAll('.menu-item');

for (let i = 0; i < menu_item.length; i++) {
    menu_item[i].addEventListener('click', function () {
        for (let j = 0; j < menu_item.length; j++) {

            menu_item[j].classList.remove('active');
        };
        menu_item[i].classList.add('active');

        if (menu_item[i].id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        }

        else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
};


//Messages


/*Highlight Message box from icon*/
let messages = document.querySelector('.messages')
let messages_notifications = document.querySelector('#messages-notifications');

messages_notifications.addEventListener('click', function () {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(function () {
        messages.style.boxShadow = 'none';
    }, 3000);
    document.querySelector('#messages-notifications .notification-count').style.display = 'none';
})

/*Chat Search*/
// let message=document.querySelectorAll('.message');
// let message_search=document.querySelector('#message-search');

// message.addEventListener('keyup', searchMsg);
// function searchMsg(){
//     let val=message_search.ariaValueMax.toLowerCase();
//     console.log(val);
// }



//Theme-Customization
let theme = document.querySelector('#theme');
let themeModal = document.querySelector('.customize-theme');

/*open model*/
function openThemModal() {
    themeModal.style.display = 'grid';
}
theme.addEventListener("click", openThemModal);

/*close model*/
function closeThemeModal(event) {
    if (event.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener("click", closeThemeModal);


/*Font Size*/
let fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(":root");

let removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontsize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontsize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }

        else if (size.classList.contains('font-size-2')) {
            fontsize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            fontsize = '15px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }

        else if (size.classList.contains('font-size-4')) {
            fontsize = '16px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }
        else if (size.classList.contains('font-size-5')) {
            fontsize = '17px';
            root.style.setProperty('----sticky-top-left', '-8rem');
            root.style.setProperty('----sticky-top-right', '-28rem');
        }

        document.querySelector('html').style.fontSize = fontsize;
    })
})

//Change Primary Colors

let colorPalette = document.querySelectorAll('.choose-color span');

const changeActiveColorClass =() =>{
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active')
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass();
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        }

        else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }

        else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})


//Background
let Bg1=document.querySelector('.bg-1');
let Bg2=document.querySelector('.bg-2');
let Bg3=document.querySelector('.bg-3');

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG=() =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);

}

Bg1.addEventListener('click',() =>{
    //Add active class
    Bg1.classList.add('active');
    //remove active from others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    window.location.reload();

});

Bg2.addEventListener('click',() =>{
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    //Add active class
    Bg2.classList.add('active');
    //remove active from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
changeBG();
});

Bg3.addEventListener('click',() =>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    //Add active class
    Bg3.classList.add('active');
    //remove active from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
changeBG();
});




