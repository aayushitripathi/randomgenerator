team=["Aayushi Tripathi","Juilee Bhombe","Nida Shaikh", "Ansari Kulsum","Pawan Sharma","Saima Sayed","Dheeraj Othalasseril","Shreya Kamble"]
const somerandom=[];
const addButton=document.getElementById("action");
let teamdiv = document.getElementById("team");
const generate=()=>{
    var randomItem = team[Math.floor(Math.random()*team.length)];
    somerandom.push(randomItem);
    let markUp = createDiv(randomItem);
    addDom(teamdiv,markUp);
    
}
addButton.addEventListener("click",generate);

const createDiv = (randomItem) => {
    const markUp = `<div class="card border-dark mb-3" style="max-width: 18rem;">
    <img src="/profile.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${randomItem}</p>
    </div>
  </div>`;
//   console.log(markUp);
    return markUp;
    // addDom(parent, markUp);
}

const addDom = (teamdiv, markUp) => {
    // console.log(typeof markUp);
    teamdiv.innerHTML += markUp;
    // parent.appendChild(markUp);
}