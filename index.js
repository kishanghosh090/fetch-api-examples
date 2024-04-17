// https://cat-fact.herokuapp.com/facts our api

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector(".factPara");
const btn = document.querySelector(".btn")


// const getfacts = async () => {
//     console.log("getting data...");
//     let rseponse = await fetch(URL);
//     console.log(rseponse);
//      let catFact = await rseponse.json(); 
//      factPara.innerText = catFact[1].text
// };
// getfacts();

function getFacts() {
    fetch(URL).then((rseponse) => {
     return rseponse.json();
    }).then((data) => {
        console.log(data);
        factPara.innerText = data[1].text
    });
}
btn.addEventListener("click", getFacts)