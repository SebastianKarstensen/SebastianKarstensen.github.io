const PortfolioCategory = {
    PROGRAMMING : {
        key: "PROGRAMMING"
    },
    GAMES : {
        key: "GAMES"
    },
    VIDEOS : {
        key: "VIDEOS"
    },
    OTHER : {
        key: "OTHER"
    }
}

let portfolio = [
    {
        "id": "thesis-runderful",
        "title" : "Runderful",
        "description": "For my thesis, I mixed skills in game design and pervasive computing to investigate the possibility of using recommender systems for personalising a custom-made running application: Runderful.",
        "images": 3,
        "skills": [
            "C#",
            "Bootstrap",
            ".NET"
        ],
        "category": PortfolioCategory.PROGRAMMING,
        "additionalInfo": {
            "message": "If you are interested in reading more about the project, feel free to take a look at the thesis.",
            "link": "./projects/thesis-runderful/personalized-gamification-using-recommender-systems.pdf"
        }
    },
    {
        "id": "skittles-sorter",
        "title" : "Skittles Sorter",
        "description": "After learning about 3D-printers, laser cutters, and Arduino microcontrollers, we finished the course \"How to Make Almost Anything\" by creating a Skittles sorting machine.",
        "images": 4,
        "skills": [
            "C",
            "Arduino"
        ],
        "category": PortfolioCategory.PROGRAMMING,
        "additionalInfo": {
            "message": "The final product is explained in this video on Youtube.",
            "link": "https://www.youtube.com/watch?v=XbSvCaCEf0U"
        }
    },
    {
        "id": "portfolio",
        "title" : "Portfolio Website",
        "description": "This website was originally an exam project in a web development course, but has been redesigned several times since. I use it as a portfolio to display personal projects and skills, as well as providing contact information for those wanting to get in touch. Current version has been build using JSON-data and JavaScript template literals.",
        "images": 5,
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MDBootstrap"
        ],
        "category": PortfolioCategory.PROGRAMMING
    },
    {
        "id": "wod-assistant",
        "title" : "WOD Assistant",
        "description": "After spending a lot of my time doing Crossfit, I came up with the idea of making a \"WOD Assistant\". I made a simple webpage, which allows the user to choose from a list of AMRAPs, and displays the exercises of the workout.",
        "images": 1,
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "category": PortfolioCategory.PROGRAMMING,
        "additionalInfo": {
            "message": "You can try out the WOD Assistant on my website (to advance in the workout, click \"Spacebar\" or the middle of the screen once you have completed the current exercise).",
            "link": "./projects/wod-assistant/index.html"
        }
    },
    {
        "id": "autobook",
        "title" : "Autobook",
        "description": "Autobook is an Android application for scheduling text messages and social media updates, which was developed as part of a course at Syracuse University. It turned out to be quite a fun project to work on, as it allowed us to go through the entire implementation process, from mockups to finished product. We worked on all parts of the system, both backend and frontend, and also managed to gett some experience regarding the integration of Facebook & Twitter authentication.",
        "images": 3,
        "skills": [
            "Java",
            "Android"
        ],
        "category": PortfolioCategory.PROGRAMMING
    },
    {
        "id": "controller-writing",
        "title" : "Controller Writing",
        "description": "Using a game controller for navigating the classic QWERTY-keyboard layout feels clunky and ineffective. Therefore, I investigated alternatives to writing text with an Xbox controller.",
        "images": 3,
        "skills": [
            "C#",
            "Unity"
        ],
        "category": PortfolioCategory.PROGRAMMING,
        "additionalInfo": {
            "message": "You can check out a video on the project on Youtube.",
            "link": "https://www.youtube.com/watch?v=Mo758hzSTnw"
        }
    },
    {
        "id": "gateway-website",
        "title" : "Gateway Website",
        "description": "Gateway (now known as \"Connect\") is a student organization with the goal of bringing various entertaining events to the students of the IT-University. Their previous website was outdated and difficult to maintain, so I build a new one. The website was made with fullPage.js and using Google Sheets as the back end.",
        "images": 6,
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery"
        ],
        "category": PortfolioCategory.PROGRAMMING
    },
    {
        "id": "gateway-bingo",
        "title" : "Online Bingo Tracker",
        "description": "We were hosting a bingo event at the university, and needed a way of digitally representing the drawn numbers, thus making it easier for the audience to keep track.",
        "images": 1,
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "category": PortfolioCategory.PROGRAMMING,
        "additionalInfo": {
            "message": "If you are playing a game of bingo, you can track the numbers by using the tool.",
            "link": "./projects/bingo/index.html"
        }
    },
    {
        "id": "sophia-the-plant",
        "title" : "Sophia the Plant",
        "description": "For a project regarding 'smart agriculture', we were tasked with combining IT and flora. By using the PyCom microcomputer and a range of sensors, we built a Messenger chatbot, which generates responses based on its current environment.",
        "images": 2,
        "skills": [
            "Python"
        ],
        "category": PortfolioCategory.PROGRAMMING
    },
    {
        "id": "party-starter",
        "title" : "Party Starter",
        "description": "The Party Starter application is there to spice things up at a party. Filled with drinking games, cocktail recipes, and mini-games, this Android app has everything needed to give you that extra boost, when you’re out partying with friends or strangers!",
        "images": 7,
        "skills": [
            "Java",
            "Android"
        ],
        "category": PortfolioCategory.PROGRAMMING
    },
    {
        "id": "spy-game",
        "title": "Spy Game",
        "description": "Coming Soon",
        "images": 1,
        "skills": [
            "C++", 
            "Unreal Engine"
        ],
        "category": PortfolioCategory.GAMES
    },
    {
        "id": "at-sea",
        "title": "At Sea",
        "description": "I concluded my BSc of Science by writing this group project on procedural content generation. Throughout the project, we wanted to uncover an area of PCG that has yet to be further explored: the weather.",
        "images": 3,
        "skills": [
            "C#", 
            "Unity"
        ],
        "category": PortfolioCategory.GAMES,
        "additionalInfo": {
            "message": "The university used our project for one of their promotional videos (in Danish), which is available on Youtube.",
            "link": "https://www.youtube.com/watch?v=eT54BcSikPQ"
        }
    },
    {
        "id": "juice-boost",
        "title" : "Juice Boost",
        "description": "In an attempt to supply players with a fun and competitive experience, this \"fruity\" racing game for up to 5 players was developed as part of a course on game design. In the end, we ended up with a simple, but quite entertaining game. The intended player experience shines clearly when observing 4 players intensely competing for crossing the finish line, and the fifth player is able to impact the game as they see fit, creating an enjoyable role as facilitator. Working on the project showed just how important of a tool prototyping can be. Many times, we built a new game simply for testing and evaluating a specific mechanic, before introducing it to the game. It also proved valuable in making design decisions, as we often were convinced that a feature was important/irrelevant until getting hands-on with a prototype. Before deciding on a racing game, several other ideas were investigated, also using prototypes.",
        "images": 3,
        "skills": [
            "C#", 
            "Unity"
        ],
        "category": PortfolioCategory.GAMES
    },
    {
        "id": "android-presentation",
        "title": "Android Presentation",
        "description": "Introduction to building Android apps, focusing on the UI and the different elements of an application.",
        "images": 1,
        "skills": [
            "Android"
        ],
        "category": PortfolioCategory.VIDEOS,
        "additionalInfo": {
            "link": "https://www.youtube.com/watch?v=QW_cfgtMQkU"
        }
    },
    {
        "id": "writing-with-controller",
        "title": "Writing with an Xbox One Controller",
        "description": "Investigating the possibilities of utilizing the Xbox One controller for text input.",
        "images": 1,
        "skills": [
            "C#",
            "Unity"
        ],
        "category": PortfolioCategory.VIDEOS,
        "additionalInfo": {
            "link": "https://www.youtube.com/watch?v=Mo758hzSTnw"
        }
    },
    {
        "id": "monitor",
        "title": "Monitor",
        "description": "Weekly news show for the IT University, produced by Modem, the student radio.",
        "images": 1,
        "skills": [],
        "category": PortfolioCategory.VIDEOS,
        "additionalInfo": {
            "link": "https://www.youtube.com/watch?v=6WuxrEuywsk"
        }
    },
    {
        "id": "sights-of-como-tempo-voltiano",
        "title": "Sights of Como: Tempo Voltiano",
        "description": "Museum in Como that is dedicated to Alessandro Volta, the inventor of the electrical battery.",
        "images": 1,
        "skills": [],
        "category": PortfolioCategory.VIDEOS,
        "additionalInfo": {
            "link": "https://www.youtube.com/watch?v=LMB0sXzmmnk"
        }
    },
    {
        "id": "sights-of-como-il-duomo",
        "title": "Sights of Como: Il Duomo",
        "description": "Cathedral of the city of Como, commonly described as the last Gothic cathedral built in Italy.",
        "images": 1,
        "skills": [],
        "category": PortfolioCategory.VIDEOS,
        "additionalInfo": {
            "link": "https://www.youtube.com/watch?v=oeJXbLxyOKM"
        }
    },
    {
        "id": "the-witness-montage",
        "title": "The Beautiful Island of \"The Witness\"",
        "description": "Tracking montage of the lovely environments this game has to offer.",
        "images": 1,
        "skills": [],
        "category": PortfolioCategory.VIDEOS,
        "additionalInfo": {
            "link": "https://www.youtube.com/watch?v=yjSXHOnA9jE"
        }
    },
    {
        "id": "virtual-photography",
        "title" : "Virtual Photography",
        "description": "I love capturing images of the journeys that video games let's me go on.",
        "images": 3,
        "skills": [],
        "category": PortfolioCategory.OTHER,
        "additionalInfo": {
            "message": "You can see some of the images in the online gallery.",
            "link": "./projects/virtual-photography/index.html"
        }
    },
    {
        "id": "spotify-covers",
        "title": "Spotify Playlist Covers",
        "description": "To easier distinguish between my Spotify playlists, I created custom cover art for each of them (above you see a few examples). Not only do they aid me in finding the tunes I'm looking for, they also remind me of great times, as they are all created from pictures I've taken throughout my life.",
        "images": 3,
        "skills": [],
        "category": PortfolioCategory.OTHER
    }
]

let portfolioData = new Map();
portfolio.forEach(portfolioItem => {
    portfolioData.set(portfolioItem.id, portfolioItem);
});