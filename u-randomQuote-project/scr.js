const quotes = [
    {
        text: "It's dangerous to go alone! Take this.",
        author: "The Legend of Zelda"
    },
    {
        text: "War. War never changes.",
        author: "Fallout"
    },
    {
        text: "Stay awhile and listen.",
        author: "Deckard Cain, Diablo"
    },
    {
        text: "What is better? To be born good or to overcome your evil nature through great effort?",
        author: "Paarthurnax, Skyrim"
    },
    {
        text: "The right man in the wrong place can make all the difference in the world.",
        author: "G-Man, Half-Life 2"
    },
    {
        text: "We all make choices in life, but in the end our choices make us.",
        author: "Andrew Ryan, BioShock"
    },
    {
        text: "Hope is what makes us strong. It is why we are here. It is what we fight with when all else is lost.",
        author: "Pandora, God of War III"
    },
    {
        text: "The cake is a lie.",
        author: "Portal"
    },
    {
        text: "I used to be an adventurer like you, then I took an arrow in the knee.",
        author: "Guard, Skyrim"
    },
    {
        text: "No matter how dark the night, morning always comes, and our journey begins anew.",
        author: "Lulu, Final Fantasy X"
    },
    {
        text: "Bring me a bucket, and I'll show you a bucket!",
        author: "Psycho, Borderlands 2"
    },
    {
        text: "I’ve covered wars, you know.",
        author: "Frank West, Dead Rising"
    },
    {
        text: "Even in dark times, we cannot relinquish the things that make us human.",
        author: "Khan, Metro 2033"
    },
    {
        text: "Endure and survive.",
        author: "Ellie, The Last of Us"
    },
    {
        text: "Stand in the ashes of a trillion dead souls and ask the ghosts if honor matters. The silence is your answer.",
        author: "Javik, Mass Effect 3"
    },
    {
        text: "You were almost a Jill sandwich!",
        author: "Barry Burton, Resident Evil"
    },
    {
        text: "Get over here!",
        author: "Scorpion, Mortal Kombat"
    },
    {
        text: "Finish him!",
        author: "Announcer, Mortal Kombat"
    },
    {
        text: "Snake? Snaaaake!",
        author: "Colonel Campbell, Metal Gear Solid"
    },
    {
        text: "A man chooses, a slave obeys.",
        author: "Andrew Ryan, BioShock"
    },
    {
        text: "I am the vengeance. I am the night. I am Batman.",
        author: "Batman: Arkham Series"
    },
    {
        text: "My name is Commander Shepard, and this is my favorite store on the Citadel.",
        author: "Commander Shepard, Mass Effect"
    },
    {
        text: "Nothing is true, everything is permitted.",
        author: "Assassin's Creed"
    },
    {
        text: "Requiescat in pace.",
        author: "Ezio Auditore, Assassin's Creed"
    },
    {
        text: "I used to feel bad for the player, but that ended with the last level.",
        author: "GLaDOS, Portal"
    }
];

const text = document.getElementById('quote')
const author = document.getElementById('pemilik')
const newquote = document.getElementById('tekan')

function generate() {
    const random = Math.floor(Math.random() * quotes.length)
    const randomquote = quotes[random]

    text.textContent = `"${randomquote.text}"`
    author.textContent = `- ${randomquote.author}`
}

newquote.addEventListener('click', generate)

generate()