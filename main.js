//kursorx 
var kursorx = new kursor({
        type: 1,
        color: 'rgba(200,100,0)',
        removeDefaultCursor: true
    })

const bgimg = document.querySelector('.background-img');
const button = document.querySelector('.sa_btn');



//Mouseover by hover the button
button.addEventListener('mouseover',function(){
    bgimg.classList.add('backgroundscale');
})


//Mouseover by leave the button
button.addEventListener('mouseout',function(){
    bgimg.classList.remove('backgroundscale');
})