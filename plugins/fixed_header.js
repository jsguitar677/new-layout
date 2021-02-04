const showAnim = gsap.from('.main_header', {
    yPercent: -100,
    paused: true,
    duration: 0.1,

}).progress(1);

ScrollTrigger.create({

    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
});