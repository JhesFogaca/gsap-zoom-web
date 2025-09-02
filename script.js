console.clear();

gsap.registerPlugin(scrollTrigger);

window.addEventListener('load', () => {
    gsap.timeline({
        scrollTrigger: {
            trigger: 'wrapper',
            start: 'top top',
            end: '+=150%',
            pin: true,
            scrub: true,
            markers: true,
        }
    });
});
gsap.to ('img', {
    scale: 2,
    z: 350,
    transformOrigin: 'center center',
    ease: 'power1.inOut',
});
gsap.to (
    '.section.hero',
    {
        scale: 1.1,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
    },
    '<'
);