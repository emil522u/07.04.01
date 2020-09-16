window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM loaded');
    navSlide();
    hentData();
<<<<<<< HEAD

=======
>>>>>>> origin/master
});



const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //TOGGLE NAVIGATION
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


        //ANIMATION LINKS
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`;
            }
        });
        //BURGER ANIMATION
        burger.classList.toggle('toggle');
    });

}

<<<<<<< HEAD
=======

// FILTER

>>>>>>> origin/master
let filter = "alle";
let destinationer;
let container = document.querySelector("#container");
let temp = document.querySelector("template");

<<<<<<< HEAD
const link = "https://spreadsheets.google.com/feeds/list/1KumHIMr-aP9Ey9WOiRaoOIaJnTZE0NDR1AoZhw2W5W8/od6/public/values?alt=json"


=======
const link = "https://spreadsheets.google.com/feeds/list/1KumHIMr-aP9Ey9WOiRaoOIaJnTZE0NDR1AoZhw2W5W8/od6/public/values?alt=json";
>>>>>>> origin/master

async function hentData() {
    const respons = await fetch(link);
    destinationer = await respons.json();
    addEventListenersToButtons();
    vis(destinationer);
}

function vis(destinationer) {
    //løb igennem array "destinationer"
<<<<<<< HEAD
    container.innerHTML = ""
=======
    container.innerHTML = "";
>>>>>>> origin/master
    destinationer.feed.entry.forEach(dest => {
        if (filter == "alle" || filter == dest.gsx$kategori.$t.toLowerCase()) {
            console.log(dest);
            const klon = temp.cloneNode(true).content;
            klon.querySelector(".navn").textContent = dest.gsx$navn.$t;
            klon.querySelector("img").src = "billeder/" + dest.gsx$billede.$t + ".jpg";
            klon.querySelector(".kort").textContent = dest.gsx$kort.$t;
            klon.querySelector(".pris").textContent = "Pris: " + dest.gsx$pris.$t + ",-";

            klon.querySelector("article").addEventListener("click", () => visDetaljer(dest));

            container.appendChild(klon);

        }

    })

}

function visDetaljer(dest) {
    popup.style.display = "block";
    popup.querySelector(".navn").textContent = dest.gsx$navn.$t;
    popup.querySelector(".beskrivelse").textContent = dest.gsx$lang.$t;
    popup.querySelector("img").src = "billeder/" + dest.gsx$billede.$t + ".jpg";

}

<<<<<<< HEAD
document.querySelector("#luk").addEventListener("click", () => popup.style.display = "none");


=======
//document.querySelector("#luk").addEventListener("click", () => popup.style.display = "none");
//
//
>>>>>>> origin/master
function addEventListenersToButtons() {
    document.querySelectorAll(".filter").forEach((btn) => {
        btn.addEventListener("click", filterBTNs);
    });
};

function filterBTNs() {
    filter = this.dataset.køn;
    document.querySelector("h1").textContent = this.textContent;
    document.querySelectorAll(".filter").forEach((btn) => {


        btn.classList.remove("valgt");

    });

    this.classList.add("valgt");
    vis(destinationer);
}
