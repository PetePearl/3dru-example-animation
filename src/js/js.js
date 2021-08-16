let $page1 = document.getElementsByClassName('page--1')[0];
window.addEventListener('scroll', function (){
    const offsetPercent = Math.floor(this.scrollY * 100 / this.innerHeight)
    $page1.style.width = `${offsetPercent}%`;
})
