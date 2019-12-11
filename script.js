const mybutton = document.getElementById("scroll-on-top");
    window.onscroll = () => {
        if (document.body.scrollTop > 10 ||document.documentElement.scrollTop > 10) 
        {
            if (mybutton.classList.contains('hidden')) {
                mybutton.classList.remove('hidden');
            setTimeout(function () {
                mybutton.classList.remove('visuallyhidden');
            }, 10);
        } else {
           
        }
        } else {
            mybutton.classList.add('visuallyhidden');    
            mybutton.addEventListener('transitionend', function(e) {
                mybutton.classList.add('hidden');
            }, {
            capture: false,
            once: true,
            passive: false
            });
        }
}
mybutton.addEventListener('click',function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
const btnMenu = document.getElementById('btnMenu');
const listMenu = document.getElementById('nav-main');

btnMenu.addEventListener('click', ()=>{
    const style = listMenu.style.display;
    const styleBtn = btnMenu.style.transform;
    listMenu.style.display = style == 'block' ? 'none' : 'block';
})
const linkWhatWeDo = document.getElementById("whatwedo-link");
const listWedo = document.getElementById('list-we-do');
const btn = document.getElementById('btnMenu');
linkWhatWeDo.addEventListener('click', function(evt){
    evt.preventDefault();
    const stylelist = listWedo.style.display;
    btnMenu.style.transform = '' ? 'rotate(-45deg)': 'rotate(0)';
    const styleBtnMenu = btn.style.transform;
    console.log()
    listWedo.style.display = stylelist == 'block' ? 'none' : 'block';
    btn.style.transform = styleBtnMenu == 'rotate(-90deg)' ? 'rotate(-45deg)': 'rotete(-90deg)';
},false)