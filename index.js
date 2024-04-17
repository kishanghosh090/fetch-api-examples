// https://cat-fact.herokuapp.com/facts our api

let loading = document.querySelector("#loading");

function myFun() {
     loading.style.display = "none";
}










const URL = "https://cat-fact.herokuapp.com/facts";//api url
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
//promise chaining in java script
function getFacts() {
    fetch(URL).then((rseponse) => {
     return rseponse.json();
    }).then((data) => {
        console.log(data);
        factPara.innerText = data[1].text
    });
}
btn.addEventListener("click", getFacts);
