const connectBtn =
document.getElementById("connectBtn");

const pendingBox =
document.getElementById("pendingBox");

connectBtn.addEventListener(
"click",
async ()=>{

if(!connected){
await connectWallet();
}else{
disconnectWallet();
}

}
);

async function onConnected(){

connectBtn.innerText = "Disconnect";

connectBtn.classList.remove("mainBtn");
connectBtn.classList.add("dangerBtn");

pendingBox.classList.remove("hidden");

await loadSHIBBalance();
await loadAssetBalances();
await loadTransactions();

}

function resetUI(){

connectBtn.innerText = "Connect DApp";

connectBtn.classList.remove("dangerBtn");
connectBtn.classList.add("mainBtn");

pendingBox.classList.add("hidden");

document.getElementById("shibBalance")
.innerText = "0 SHIB";

document.getElementById("shibUsd")
.innerText = "$0.00";

document.getElementById("assetList")
.innerHTML = "";

document.getElementById("txList")
.innerHTML = "";

}

window.addEventListener(
"focus",
()=>{

if(connected){
loadSHIBBalance();
loadAssetBalances();
loadTransactions();
}

}
);

const themeToggle = document.getElementById("themeToggle");
const sun = document.getElementById("iconSun");
const moon = document.getElementById("iconMoon");

function setTheme(mode){

if(mode === "light"){
document.body.classList.add("lightMode");
sun.style.display = "none";
moon.style.display = "block";
}else{
document.body.classList.remove("lightMode");
sun.style.display = "block";
moon.style.display = "none";
}

localStorage.setItem("theme", mode);
}

themeToggle.onclick = () => {
const isLight = document.body.classList.contains("lightMode");
setTheme(isLight ? "dark" : "light");
};

setTheme(localStorage.getItem("theme") || "dark");
themeToggle.addEventListener("click", function(e){

const ripple = document.createElement("span");

const rect = this.getBoundingClientRect();

const size = Math.max(rect.width, rect.height);

const x = e.clientX - rect.left - size / 2;
const y = e.clientY - rect.top - size / 2;

ripple.style.width = ripple.style.height = size + "px";
ripple.style.left = x + "px";
ripple.style.top = y + "px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{
ripple.remove();
},600);

});
