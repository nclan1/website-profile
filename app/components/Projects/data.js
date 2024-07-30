
export const projects = [
    {
        title: "state-line news",
        description: "web application that serves as a directory for news publications from different states across the united states.",
        link: "https://github.com/nclan1/stateline-news",
        github: "github!"
    },
    {
        title: "mindful-distraction",
        description: "chrome extension designed to provide a visual component of distraction during focus sessions.",
        link: "https://github.com/nclan1/mindful-distractions",
        github: "github again!"
    },
    {
        title: "quest-for-quotes",
        description: "web platform that allows users to share quotes from any novel/readings that spoke to them.",
        link: "https://github.com/nclan1/quest-for-quotes",
        github: "git the hub"
    },
    {
        title: "this site!",
        description: "my very own personal website! built with next.js, framer-motion, tailwindcss, gsap, a bunch of other cool stuff.",
        link: "https://github.com/nclan1/website-profile",
        github: "this is the last one!"
    },
]

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