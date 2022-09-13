


function highlightNav() {
    $(function(){
        $("a").each(function(){
            if ($(this).prop("href") == window.location.href){
                $(this).addClass("active"); $(this).parents("li").addClass("active");
            }
        });
    });
}



document.querySelector(".nav-drop").addEventListener("click", function() {
  document.querySelector(".nav-drop").classList.toggle("change");
});


async function getData() {
    let url = 'data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderDestLoad() {
    let data = await getData();

    let destDefault = data.destinations[0]

    document.querySelector(".planet-image").setAttribute("src", destDefault.images.png)
    document.querySelector(".planet-title").innerHTML = destDefault.name
    document.querySelector(".planet-desc").innerHTML = destDefault.description
    document.querySelector(".distance-value").innerHTML = destDefault.distance
    document.querySelector(".travel-value").innerHTML = destDefault.travel

}

async function renderCrewLoad() {
    let data = await getData();

    let crewDefault = data.crew[0]

    document.querySelector(".crew-image").setAttribute("src", crewDefault.images.png)
    document.querySelector(".crew-role").innerHTML = crewDefault.role
    document.querySelector(".crew-name").innerHTML = crewDefault.name
    document.querySelector(".crew-desc").innerHTML = crewDefault.bio

}

async function renderTechLoad() {
    let data = await getData();

    let techDefault = data.technology[0]

    document.querySelector(".tech-image").setAttribute("src", techDefault.images.portrait)
    document.querySelector(".tech-name").innerHTML = techDefault.name
    document.querySelector(".tech-desc").innerHTML = techDefault.description

}



async function renderDestData() {
    let data = await getData();

    let numberOfPlanets = document.querySelectorAll(".planet").length;


  for (let i = 0; i < numberOfPlanets; i++) {

    document.querySelectorAll(".planet")[i].addEventListener("click", function () {

    let planetItem = data.destinations[i]

        for (let i = 0; i < 4; i++) {
            document.querySelectorAll(".planet")[i].classList.remove("active");
        }

    document.querySelectorAll(".planet")[i].classList.add("active");
    document.querySelector(".planet-image").setAttribute("src", planetItem.images.png)
    document.querySelector(".planet-title").innerHTML = planetItem.name
    document.querySelector(".planet-desc").innerHTML = planetItem.description
    document.querySelector(".distance-value").innerHTML = planetItem.distance
    document.querySelector(".travel-value").innerHTML = planetItem.travel
});

}

}


async function renderCrewData() {
    let data = await getData();

    let numberOfCrew = document.querySelectorAll(".crew-button").length;


  for (let i = 0; i < numberOfCrew; i++) {

    document.querySelectorAll(".crew-button")[i].addEventListener("click", function () {

    let crewItem = data.crew[i]

        for (let i = 0; i < 4; i++) {
            document.querySelectorAll(".crew-button")[i].classList.remove("active");
        }

    document.querySelectorAll(".crew-button")[i].classList.add("active");
    document.querySelector(".crew-image").setAttribute("src", crewItem.images.png)
    document.querySelector(".crew-role").innerHTML = crewItem.role
    document.querySelector(".crew-name").innerHTML = crewItem.name
    document.querySelector(".crew-desc").innerHTML = crewItem.bio

});

}

}

async function renderTechData() {
    let data = await getData();

    let numberOfTech = document.querySelectorAll(".tech-button").length;


  for (let i = 0; i < numberOfTech; i++) {

    document.querySelectorAll(".tech-button")[i].addEventListener("click", function () {

    let techItem = data.technology[i]

        for (let i = 0; i < 3; i++) {
            document.querySelectorAll(".tech-button")[i].classList.remove("active-tech");
        }

    document.querySelectorAll(".tech-button")[i].classList.add("active-tech");
    document.querySelector(".tech-image").setAttribute("src", techItem.images.portrait)
    document.querySelector(".tech-name").innerHTML = techItem.name
    document.querySelector(".tech-desc").innerHTML = techItem.description

});

}

}


highlightNav();

if (document.querySelector("html").className == "destination") {
    renderDestLoad();
    renderDestData();
} else if (document.querySelector("html").className == "crew") {
    renderCrewLoad();
    renderCrewData();
} else if (document.querySelector("html").className == "technology") {
    renderTechLoad();
    renderTechData();
}
