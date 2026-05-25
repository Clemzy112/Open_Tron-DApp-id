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

const themeToggle =
document.getElementById("themeToggle");

const appTheme =
document.querySelector(".appTheme");

/* DEFAULT THEME */

appTheme.classList.add("dark");

themeToggle.addEventListener(
"click",
function(e){

/* TOGGLE THEMES */

if(appTheme.classList.contains("dark")){

appTheme.classList.remove("dark");
appTheme.classList.add("light");

}else{

appTheme.classList.remove("light");
appTheme.classList.add("dark");

}

/* RIPPLE EFFECT */

const ripple =
document.createElement("span");

ripple.classList.add("ripple");

const rect =
this.getBoundingClientRect();

const size =
Math.max(rect.width, rect.height);

ripple.style.width =
size + "px";

ripple.style.height =
size + "px";

ripple.style.left =
e.clientX - rect.left - size/2 + "px";

ripple.style.top =
e.clientY - rect.top - size/2 + "px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});
