
export const slideUp = {
    initial: {
        y: "100%"
    },

    open: (i) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.02 * i}
    }),

    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

export const slideUpBezier = {
    initial: {
        y: "100%"
    },

    open: (i) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.02 * i, ease: [0.6, 0.05, -0.01, 0.9]}
    }),

    closed: {
        y: "100%",
        transition: {duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9]}
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