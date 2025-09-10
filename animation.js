gsap.registerPlugin(ScrollTrigger);

const paths = document.querySelectorAll("#Generative_Object path");
console.log("hello");

paths.forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
});

// Timeline for all paths
gsap.timeline({
    scrollTrigger: {
        trigger: "#Generative_Object",  // start animating when the SVG enters view
        start: "top 5%",               // when top of SVG hits 80% of viewport
        end: "bottom 50%",              // optional, for scrubbing
        toggleActions: "play none none reverse", 
        // alternatives: "restart none none none"
        scrub: true,  // uncomment if you want animation tied to scroll position
    }
}).to("#Generative_Object path", {
    strokeDashoffset: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.05
});