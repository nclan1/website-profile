

export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 0.4}
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: {duration: 1.1, ease: [0.76, 0, 0.24, 1]}
    }
}


export const slideUpLetter = {
    initial: {
        y: "100%"
    },

    open: (i) => ({
        y: "0%",
        transition: {duration: 1.4, delay: 0.02 * i, ease: [0.76, 0, 0.24, 1]}
    }),


    exit: {
        y: "-100%",
        opacity: 0,
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    }
}
