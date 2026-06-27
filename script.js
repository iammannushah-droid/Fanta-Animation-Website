gsap.registerPlugin(ScrollTrigger);
gsap.config({
    force3D: true
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
        // markers: true,
    }
})

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
        // markers: true,
    }
})


function page1Animation() {

    tl.to(".fanta", {
        top: "117%",
        left: "0%"
    }, 'orange')
    tl.to(".orange2", {
        top: "160%",
        left: "21%"
    }, 'orange')
    tl.to(".orange", {
        top: "170%",
        right: "10%"
    }, 'orange')
    tl.to(".leaf", {
        top: "105%",
        left: "76%",
        rotate: "130deg"
    }, 'orange')
    tl.to(".leaf2", {
        top: "105%",
        left: "8%",
        rotate: "200deg"
    }, 'orange')
   

}
page1Animation();

function page2Animation() {
    tl2.to(".fanta", {
        top: "208%",
        left: "30%",
        duration: 2,
        delay: 1,
        scale: 0.82,


    })

    tl2.fromTo(".lemon1",
        {
            y: -500,
            x: -500,
            top: "10%",
            opacity: 0
        },
        {
            top: "20%",
            x: -2,
            y: -280,
            opacity: 1,

        },
        "page3");


    tl2.fromTo(".lemon2",
        {
            y: -500,
            x: 500,
            top: "10%",
            opacity: 0
        },
        {
            top: "20%",
            x: -2,
            y: -280,
            opacity: 1,

        },
        "page3");

    tl2.fromTo(".lemon3",
        {
            y: 500,
            x: 0,
            top: "10%",
            opacity: 0
        },
        {
            top: "20%",
            x: -2,
            y: -280,
            opacity: 1,

        },
        "page3");
    tl2.fromTo(".pepsi",
        {
            y: 500,
            x: -200,
            top: "10%",
            opacity: 0
        },
        {
            x: -2,
            y: -150,
            opacity: 1,

        },
        "page3");
    tl2.fromTo(".cocacola",
        {
            y: 500,
            x: 200,
            top: "10%",
            opacity: 0
        },
        {
            x: -2,
            y: -150,
            opacity: 1,

        },
        "page3");

}
page2Animation();




window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});

