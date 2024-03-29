
let crsr =  document.querySelector(".cursur");
 
document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    }
)

Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos:["./0.mp4","./2.mp4","./3.mp4"]});



  

gsap.to(".f-left-elem",{
    scrollTrigger:{
        trigger: "#featured-main",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub:1
    },
    y: "-300%",
    ease: Power1
})

let sections =  document.querySelectorAll(".f-left-elem")
Shery.imageEffect(".images", {
    style: 5,
    config: {onMouse : {value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index){
            scrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub:1,
                onUpdate: function (prog) {
                    setScroll(prog.progress+index);
                }
            });
        });
    }
});

