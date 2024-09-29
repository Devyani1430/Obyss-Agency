


function LoadingAnimation(){
    var tl = gsap.timeline();

tl.from(".line h1",{
    y : "15vh",
    opacity : 0,
    duration :0.7,
    stagger : 0.2
})

tl.from("#line1-part1",{
    opacity : 0,
    duration : 0.2,
    scrub : 3,
    onStart : function(){
        var h5Timer = document.querySelector("#line1-part1 h5");
        var grow = 0;
        setInterval(function(){
            if(grow < 100){
               grow++;
               h5Timer.innerHTML = grow;
            }else{grow=100}
        },34)
    }
})

tl.to(" .line h2",{
    animationName : "anime",
    opacity : 1
})

tl.from("#line1-part2",{
    opacity : 0,
    duration : 0.9,
    scrub : 3,
})

tl.to("#loader",{
    opacity : 0,
    duration : 0.2,
    delay : 3.7,
})

tl.from("#page1",{
    delay : 0.2,
    duration : 0.5,
    y : 1600,
})
tl.to("#loader",{
    display : "none"
})
tl.from ("#nav",{
    opacity : 0,
})
tl.from(".Hero h1",{
      y : "15vh",
      opacity : 0,
     stagger : 0.2,
     scrub : 5
})
}
LoadingAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            top : dets.y,
            left : dets.x
        })
    })
    Shery.makeMagnet("#nav-part2 h4");
}
cursorAnimation();











