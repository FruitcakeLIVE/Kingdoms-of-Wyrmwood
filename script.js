document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if(menuToggle && navLinks){
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }


    /* =========================
       DID YOU KNOW FACTS
    ========================= */
    const facts = [
        "Ancient Dragons once ruled every corner of Wyrmwood.",
        "No adventurer has fully mapped the depths of Snowcloak.",
        "Port Keyvan was once one of the richest harbour cities in the realm.",
        "The broken halls of Shaldorn Keep are said to echo with old battles.",
        "Some travellers claim the mountains whisper during the night.",
        "Hidden treasures are still being discovered across Wyrmwood.",
        "Legends speak of creatures older than the kingdoms themselves.",
		"ItzKaceyyyyLIVE likes jumping off cliffs!(In game, in game)"
		
    ];

    const factBox = document.getElementById("fact-box");

    if(factBox){
        factBox.textContent = facts[Math.floor(Math.random() * facts.length)];
    }


    /* =========================
       MUSIC BUTTON
    ========================= */
    const musicButton = document.getElementById("music-toggle");
    const bgMusic = document.getElementById("bg-music");

    if(musicButton && bgMusic){
        bgMusic.volume = 0.25;

        musicButton.addEventListener("click", () => {
            if(bgMusic.paused){
                bgMusic.play();
                musicButton.textContent = "⏸";
                musicButton.classList.add("music-playing");
            }else{
                bgMusic.pause();
                musicButton.textContent = "🎵";
                musicButton.classList.remove("music-playing");
            }
        });
    }


    /* =========================
       DUNGEON IMAGE DATA
    ========================= */
    const dungeonImages = {

        snowcloak: [
            "snowcloak1.png",
            "snowcloak2.png",
            "snowcloak3.png",
            "snowcloak4.png",
            "snowcloak5.png",
            "snowcloak6.png",
            "snowcloak7.png",
            "snowcloak8.png",
            "snowcloak9.png",
            "snowcloak10.png",
            "snowcloak11.png",
            "snowcloak12.png",
            "snowcloak13.png",
            "snowcloak14.png",
            "snowcloak15.png",
            "snowcloak16.png",
            "snowcloak17.png",
            "snowcloak18.png",
            "snowcloak19.png",
            "snowcloak20.png"
        ],

        shaldorn: [
            "https://i.ibb.co/YB36pQs3/Screenshot-2026-06-15-183600.png",
            "https://i.ibb.co/BVrDNPJn/Screenshot-2026-06-15-183441.png",
            "https://i.ibb.co/MDMs1s7S/Screenshot-2026-06-15-183640.png",
            "https://i.ibb.co/B5tNbbTs/Screenshot-2026-06-15-183725.png",
            "https://i.ibb.co/XxzVkwX6/Screenshot-2026-06-15-183805.png",
            "https://i.ibb.co/jv5kxpMv/Screenshot-2026-06-15-183947.png",
            "https://i.ibb.co/Tqb65kFg/Screenshot-2026-06-15-184023.png",
            "https://i.ibb.co/99Q2Dp8y/Screenshot-2026-06-15-185410.png",
            "https://i.ibb.co/nNRK0Xyj/Screenshot-2026-06-15-185543.png",
            "https://i.ibb.co/m5vDMPCY/Screenshot-2026-06-15-190634.png",
            "https://i.ibb.co/SwBkDm14/Screenshot-2026-06-15-190908.png",
            "https://i.ibb.co/jkMn7ChH/Screenshot-2026-06-15-191257.png",
            "https://i.ibb.co/JRd8xtJ6/Screenshot-2026-06-15-191358.png",
            "https://i.ibb.co/HLK8G2yz/Screenshot-2026-06-15-191440.png",
            "https://i.ibb.co/pBzwy2ch/Screenshot-2026-06-15-193459.png",
            "https://i.ibb.co/nqZ61h27/Screenshot-2026-06-15-191532.png",
            "https://i.ibb.co/4RRnNsNk/Screenshot-2026-06-15-193935.png",
            "https://i.ibb.co/BHrkMZvD/Screenshot-2026-06-15-194624.png"
        ],

        portkeyvan: [
            "https://i.ibb.co/35fWmSZf/Screenshot-2026-06-15-194826.png",
            "https://i.ibb.co/ZRLmr68M/Screenshot-2026-06-15-200822.png",
            "https://i.ibb.co/WWkMK1SC/Screenshot-2026-06-15-194852.png",
            "https://i.ibb.co/VpYrmXdt/Screenshot-2026-06-15-195150.png",
            "https://i.ibb.co/ycLwJwNT/Screenshot-2026-06-15-195216.png",
            "https://i.ibb.co/cSZwTKpB/Screenshot-2026-06-15-195238.png",
            "https://i.ibb.co/1tsvx4Nh/Screenshot-2026-06-15-195305.png",
            "https://i.ibb.co/mrMk6FL5/Screenshot-2026-06-15-195336.png",
            "https://i.ibb.co/j9BXc4K4/Screenshot-2026-06-15-195458.png",
            "https://i.ibb.co/G4Y1LynH/Screenshot-2026-06-15-195533.png",
            "https://i.ibb.co/PGQvdgVz/Screenshot-2026-06-15-195905.png",
            "https://i.ibb.co/0pkNhZkq/Screenshot-2026-06-15-200349.png",
            "https://i.ibb.co/Ljzktx3/Screenshot-2026-06-15-200437.png",
            "https://i.ibb.co/gZzsYq36/Screenshot-2026-06-15-200524.png",
            "https://i.ibb.co/chXgBqGQ/Screenshot-2026-06-15-200550.png",
            "https://i.ibb.co/Q3KPBqqq/Screenshot-2026-06-15-200644.png",
            "https://i.ibb.co/y1qfLpH/Screenshot-2026-06-15-200725.png"
        ]

    };


    /* =========================
       DUNGEON STATE
    ========================= */
    const dungeonState = {
        snowcloak: 0,
        shaldorn: 0,
        portkeyvan: 0
    };


    /* =========================
       SHOW DUNGEON
    ========================= */
    window.showDungeon = function(id){

        document.querySelectorAll(".dungeon-page")
            .forEach(page => page.classList.remove("active"));

        const selectedDungeon = document.getElementById(id);

        if(selectedDungeon){
            selectedDungeon.classList.add("active");
            updateDungeonImage(id);
        }
    };


    /* =========================
       UPDATE DUNGEON IMAGE
    ========================= */
    function updateDungeonImage(dungeon){

        const img = document.getElementById(`${dungeon}-image`);
        const counter = document.getElementById(`${dungeon}-counter`);
        const images = dungeonImages[dungeon];

        if(!img || !counter || !images){
            return;
        }

        const index = dungeonState[dungeon];

        img.src = images[index];
        counter.textContent = `${index + 1} / ${images.length}`;
    }


    /* =========================
       NEXT IMAGE
    ========================= */
    window.nextImage = function(dungeon){

        const images = dungeonImages[dungeon];

        if(!images){
            return;
        }

        dungeonState[dungeon] =
            (dungeonState[dungeon] + 1) % images.length;

        updateDungeonImage(dungeon);
    };


    /* =========================
       PREVIOUS IMAGE
    ========================= */
    window.previousImage = function(dungeon){

        const images = dungeonImages[dungeon];

        if(!images){
            return;
        }

        dungeonState[dungeon] =
            (dungeonState[dungeon] - 1 + images.length) % images.length;

        updateDungeonImage(dungeon);
    };


    /* =========================
       GALLERY NOTES
    ========================= */
    const galleryNotes = [
        "Strange lights were seen dancing above the ruins as night fell over Wyrmwood.",
        "A distant roar echoed across the mountains during the last expedition.",
        "Fresh tracks were found near the old paths, but no creature was seen.",
        "The air around the ruins grows colder after sunset.",
        "Some explorers claim the land itself watches those who wander too far."
    ];

    const galleryNote = document.getElementById("gallery-note");

    if(galleryNote){
        galleryNote.textContent =
            galleryNotes[Math.floor(Math.random() * galleryNotes.length)];
    }


    /* =========================
       WYRMWOOD WEATHER
    ========================= */
    const archiveWeather = [
        "🌙 Moonlit skies settle over the kingdom.",
        "🌫️ A strange mist rolls across the ancient paths.",
        "🔥 Golden embers drift through the evening air.",
        "❄️ Cold winds rise from the northern peaks.",
        "⚡ Magical storms flicker beyond the horizon."
    ];

    const wyrmwoodWeather = document.getElementById("wyrmwood-weather");

    if(wyrmwoodWeather){
        wyrmwoodWeather.textContent =
            archiveWeather[Math.floor(Math.random() * archiveWeather.length)];
    }


/* =========================
   GALLERY LIGHTBOX
========================= */
window.openLightbox = function(item){

    const img = item.querySelector("img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");

    if(img && lightbox && lightboxImage){
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightbox.classList.add("active");
    }
};

window.closeLightbox = function(){

    const lightbox = document.getElementById("lightbox");

    if(lightbox){
        lightbox.classList.remove("active");
    }
};

const lightboxImage = document.getElementById("lightbox-image");

if(lightboxImage){
    lightboxImage.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}

	/* =========================
		INIT
	==========================*/
	updateDungeonImage("snowcloak");

	});