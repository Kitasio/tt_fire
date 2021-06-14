const logoAnim = () => {
    const animLogo = () => {
        const tl = gsap.timeline({repeat: -1, ease: "power4.in"})
        const tl2 = gsap.timeline({repeat: -1, ease: "power4.in"})

        tl.set("#logo2", {scaleY: 0, transformOrigin: "top"})
        tl.to("#logo2", {scaleY: 1, duration: 1, transformOrigin: "bottom", delay: 4})
        tl.to("#logo2", {scaleY: 0, duration: 1, transformOrigin: "bottom", delay: 4})


        tl2.to("#logo1", {scaleY: 0, duration: 1, transformOrigin: "top", delay: 4})
        tl2.to("#logo1", {scaleY: 1, duration: 1, transformOrigin: "top", delay: 4})
    }
    return { animLogo }
}

export default logoAnim