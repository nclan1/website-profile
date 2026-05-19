export const CONTENT = {
  name: "nolan ngim",
  fullName: 'chanrithya "nolan" ngim',
  role: "software engineer",
  location: "boston, ma",
  email: "ngimcnolan@gmail.com",
  resume:
    "https://drive.google.com/file/d/1ziixt4UtF_GkDDsX1iM0T5Udsp6cfau2/view?usp=sharing",
  socials: [
    { label: "github", url: "https://github.com/nclan1", handle: "@nclan1" },
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/cnnolan/",
      handle: "in/cnnolan",
    },
    { label: "medium", url: "https://medium.com/@nclan1", handle: "@nclan1" },
    {
      label: "instagram",
      url: "https://www.instagram.com/mr_lan1213/",
      handle: "@mr_lan1213",
    },
  ],
  about: {
    lead: "i'm nolan. i live in boston, i just graduated from bu, and i'm about to start working as a software engineer.",
    body: [
      "i drink iced coffee with sweetened condensed milk. i read more than i probably should — lately leaning russian. i play guitar to keep my hands busy when i'm not at a keyboard, and i carry a camera most places i go.",
      "this site isn't a pitch. it's a slow page about the things i think about, the books on my desk, the projects i make for myself, and the photos i take on the way home.",
    ],
    facts: [
      ["based in", "boston, ma"],
      ["ethnicity", "cambodian-american"],
      ["day job", "software engineer"],
      ["off-screen", "books, guitar, film"],
    ],
  },
  now: [
    { label: "reading", value: "the brothers karamazov", detail: "dostoevsky" },
    {
      label: "building",
      value: "syllabi-sync",
      detail: "a tool for students drowning in pdfs",
    },
    { label: "learning", value: "rust + systems", detail: "cs455 + curiosity" },
    {
      label: "listening",
      value: "mostly jazz right now",
      detail: "and a lot of frank ocean",
    },
  ],
  projects: [
    {
      year: "2025",
      title: "syllabi-sync",
      kind: "web app",
      stack: ["next", "postgres", "openai"],
      description:
        "turns a pile of course syllabi into one calendar, with assignments and exams pre-extracted.",
      link: "https://github.com/nclan1/syllabi-sync",
    },
    {
      year: "2024",
      title: "state-line news",
      kind: "web app",
      stack: ["react", "node", "lccn api"],
      description:
        "a directory for news publications across u.s. states. helps researchers find local primary sources.",
      link: "https://github.com/nclan1/stateline-news",
    },
    {
      year: "2024",
      title: "mindful-distractions",
      kind: "chrome ext",
      stack: ["js", "chrome api"],
      description:
        "a tiny visual companion that keeps you honest about your distractions during focus sessions.",
      link: "https://github.com/nclan1/mindful-distractions",
    },
    {
      year: "2024",
      title: "quest-for-quotes",
      kind: "web app",
      stack: ["react", "firebase"],
      description:
        "a place to share the lines that wrecked you from books you've read.",
      link: "https://github.com/nclan1/quest-for-quotes",
    },
    {
      year: "2023",
      title: "guitar tabs player",
      kind: "desktop",
      stack: ["python", "tk"],
      description:
        "reads guitar tabs and plays them so you can practice along.",
      link: "https://github.com/nclan1/Guitar-Tabs-Player",
    },
    {
      year: "2023",
      title: "this site",
      kind: "portfolio",
      stack: ["html", "css", "a lot of care"],
      description: "the page you're reading. iteration n+1.",
      link: "#",
    },
  ],
  hobbies: [
    {
      key: "literature",
      lead: "partake in literature",
      body: "reading is how i slow down. lately leaning russian — dostoevsky, tolstoy. always a notebook nearby for lines that hit.",
      bits: ["café nero regular", "40+ books / yr", "currently: karamazov"],
    },
    {
      key: "strings",
      lead: "dabble in strings",
      body: "guitar since high school. fingerstyle, jazz chords, the occasional cover. keeps the other half of my brain alive.",
      bits: ["acoustic + electric", "jazz / neo-soul", "open mic survivor"],
    },
    {
      key: "photography",
      lead: "see through a lens",
      body: "street, friends, light at golden hour. the discipline of looking — same muscle as design, different output.",
      bits: ["fuji x100v", "mostly 35mm", "film when i feel patient"],
    },
  ],
};
