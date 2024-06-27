
export const slideUp = {
    initial: {
        y: "100%"
    },

    open: (i) => ({
        y: "0%",
        transition: {duration: 1, delay: 2.3}
    }),

    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.5}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}

export const slideUpLetter = {
    initial: {
        y: "100%",
        delay: 5
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
