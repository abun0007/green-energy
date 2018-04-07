const topics = {
    solar: {
        title: "SOLAR ENERGY",
        image: "img/solar.png",
        bodyText: "Solar intertie photovoltaic (PV) systems are not particularly complex. First there are panels, which collect the sunlight and turn it into electricity. The DC signals are fed into an inverter, which converts the DC into grid-compatible AC power (which is what you use in your home). Various switch boxes are included for safety reasons, and the whole thing is connected via wires and conduit."
    },
    water: {
        title: "THE POWER OF WATER",
        image: "img/water.png",
        bodyText: "Hydroelectric power installations harness the energy contained in flowing water to produce electricity. Hydroelectric power is considered a renewable energy source because the water isn’t consumed during the process and because water is part of a constantly regenerating natural cycle. It also doesn’t produce greenhouse gases. Hydro electric power stations work when flowing water runs through a turbine, which spins the rotor of an electricity generator and creates a magnetic field that induces an electric current."
    },
    wind: {
        title: "WIND TURBINES",
        image: "img/wind.png",
        bodyText: "In 2006, wind-driven electricity powered almost 3 million households in the United States, and this renewable and plentiful green energy source has enormous potential for more. Large-scale wind farms generally group tall, free-standing turbines in a windy area, positioned so that their blades catch the wind and turn, thus generating energy. Oddly enough, wind is a form of solar energy: When the sun heats the earth’s surface, air warms and rises, creating different degrees of air pressure, which creates wind."
    }
};


// try to access a property of topics-object first with dot, and then with bracket syntax

const buttons = document.querySelectorAll(".buttons button");
const article = document.querySelector("article");

// Load your images on page-load
function preloader() {
    const imagesList = [
       "./img/solar.png",
       "./img/water.png",
       "./img/wind.png"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);


function loadContent(ev) {
    let clickedBtn = ev.target;
    let key = clickedBtn.getAttribute("data-content");

    article.innerHTML = `<h3>${topics[key].title}</h3><img src="${topics[key].image}"><p>${topics[key].bodyText}</p>`;

    //    let h3 = document.createElement("h3");
    //    h3.textContent = topics[key].title;
    //    article.appendChild(h3);

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", loadContent);
}
