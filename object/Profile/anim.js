
export const slideUp = {
    initial: {
        y: "100%"
    },

    open: (i) => ({
        y: "0%",
        transition: {duration: 1, delay: 2.7}
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