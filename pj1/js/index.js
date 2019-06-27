var oLi = document.getElementsByTagName("li");
var pre = document.getElementsByClassName("pre")[0];
var next = document.getElementsByClassName("next")[0];

var number = 0;
pre.index = -1;
next.index = +1;
pre.onclick = change;
next.onclick = change;

var timer = null;
timer = setInterval(change2,2000);

function change(){
    number += this.index;
    if(number===-1){
        number = oLi.length-1
    }
    if(number===oLi.length){
        number = 0;
    }
    for(var i = 0; i < oLi.length; i++){
        oLi[i].className = "gallery";
        if(i===number){
            oLi[i].className="gallery_active"
        }
    }
}



function change2(){
    number += 1;
    if(number===-1){
        number = oLi.length-1
    }
    if(number===oLi.length){
        number = 0;
    }
    for(var i = 0; i < oLi.length; i++){
        oLi[i].className = "gallery";
        if(i===number){
            oLi[i].className="gallery_active"
        }
    }
}