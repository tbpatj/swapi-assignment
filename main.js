// const { default: axios } = require("axios"

// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

let myButton = document.querySelector("button");

async function newBttnClick(){
    let response1 = await axios.get("https://swapi.dev/api/planets/?search=Alderaan");
    console.log(response1.data.results);
    let residentData = response1.data.results[0].residents;
    console.log(residentData);
    for(let i = 0; i < residentData.length; i ++){
        let residentResponse = await axios.get(residentData[i]);
        console.log(residentResponse.data.name);


        let tag = document.createElement("h2");
        tag.textContent = residentResponse.data.name;
        document.querySelector("body").appendChild(tag);
    }
}



myButton.addEventListener("click",newBttnClick);