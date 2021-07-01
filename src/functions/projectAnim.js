const projectAnim = () => {
    const anim = () => {
        gsap.registerPlugin(ScrollTrigger)
        let sections = gsap.utils.toArray(".labels")
        const tl = gsap.timeline({
            ease: "power4.in",
            scrollTrigger: {
                trigger: "#container",
                // markers: true,
                start: "top top",
                scrub: 1,
                pin: true,
                snap: 1 / (sections.length - 1),
            }
        })

        // setting scales 0 to all except the first
        tl.set(".proj2", {scaleY: 0, transformOrigin: "top"})
        tl.set(".proj3", {scaleY: 0, transformOrigin: "top"})

        // first animation
        tl.to(".proj1", { scaleY: 0, duration: 2, transformOrigin: "top"})
        tl.to(".proj2", { scaleY: 1, duration: 2, transformOrigin: "bottom" }, "-=2")
        tl.from("#post_bg", { scaleY: 0, transformOrigin: "bottom", duration: 2 }, "-=2")

        // second animation
        tl.to(".proj2", { scaleY: 0, duration: 2, transformOrigin: "top"})
        tl.to(".proj3", { scaleY: 1, duration: 2, transformOrigin: "bottom"}, "-=2")
        tl.to("#post_bg", { scaleY: 0, transformOrigin: "top", duration: 2 }, "-=2")
        tl.from("#tt_bg", { scaleY: 0, transformOrigin: "bottom", duration: 2 }, "-=2")
    }

    return { anim }
}

export default projectAnim