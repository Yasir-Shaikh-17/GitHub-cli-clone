const container = document.querySelector("#boxContainer")
const linksContainer = document.querySelector("#linksContainer")

const boxes = [
    {
        heading: "Your entire GitHub workflow",
        para: "Work with issues, pull requests, checks, releases and more.",
        link: "View all GitHub CLI commands →"
    },
    {
        heading: "Script and customize",
        para: "Call the GitHub API to script almost any action, and set a custom alias for any command.",
        link: "Learn about aliases and API →"
    },
    {
        heading: "Enterprise-ready",
        para: "Connect to GitHub Enterprise Server in addition to GitHub.com.",
        link: "Get set up with Enterprise →"
    },
    {
        heading: "We <3 community",
        para: "GitHub CLI is open source and ready for your contributions.",
        link: "Contribute to CLI →"
    },
]

boxes.map((e) => {

    const div = document.createElement("div")
    div.className = "w-1/4 flex flex-col gap-1"
    div.innerHTML = `
                
                    <h2 class="text-[2vw] font-[mona] font-extrabold leading-8 w-full">${e.heading}</h2>
                    <p class="text-[#6E7781] w-full">${e.para}</p>
                    <a href="#" class="font-[mona] text-[#0969DA] text-xs w-full">${e.link}</a>
                
                        `

    container.appendChild(div)

})

const links = [
    {
        heading: "Product",
        links: [
            "Features",
            "Security",
            "Enterprise",
            "Customer stories",
            "Pricing",
            "Resources",
        ]
    },
    {
        heading: "Platform",
        links: [
            "Developer API",
            "Partners",
            "GitHub Desktop",
            "GitHub Mobile",
        ]
    },
    {
        heading: "Support",
        links: [
            "Help",
            "Community Forum",
            "Expert Services",
            "Status",
            "Contact GitHub",
        ]
    },
    {
        heading: "Company",
        links: [
            "About",
            "Blog",
            "Careers",
            "Press",
            "Shop",
        ]
    },
]

links.map((e)=>{
    const ul = document.createElement("ul")
    ul.className = "w-1/4 flex flex-col gap-2"

    const div = document.createElement("div")
    div.className = "font-mono text-[#1F2328] text-xl cursor-default"
    div.innerHTML = `${e.heading}`

    ul.appendChild(div)

    e.links.forEach((e)=>{
        const li = document.createElement("li")
        li.className = "font-[mona] text-[#6E7781] text-sm"
        li.innerHTML = `<a href="#" class="hover:underline">${e}</a>`
        ul.appendChild(li)
    })

    linksContainer.appendChild(ul)

})