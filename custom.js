//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container')
//Items
const title = document.querySelector('.title');
const pic = document.querySelector('.pic img');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const comprar = document.querySelector('.comprar');


//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /10;
    let yAxis = (window.innerHeight / 2 - e.pageY) /10;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});
//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = 'none';
    //Popout
    title.style.transform = 'translateZ(150px)';
    pic.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    comprar.style.transform = 'translateZ(75px)';
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = 'translateZ(0px)';
    pic.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    comprar.style.transform = 'translateZ(0px)';
});