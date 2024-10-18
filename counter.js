let number = 0;
document.getElementById("myH1").textContent = `${number}`;
document.getElementById("myDecrease").onclick = function(){
    number = number - 1;
    document.getElementById("myH1").textContent = `${number}`;
}

document.getElementById("myZero").onclick = function(){
    number = 0;
    document.getElementById("myH1").textContent = `${number}`;
}

document.getElementById("myIncrease").onclick = function(){
    number = number + 1;
    document.getElementById("myH1").textContent = `${number}`;
}
