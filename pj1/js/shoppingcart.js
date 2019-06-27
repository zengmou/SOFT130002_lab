var item = document.getElementsByClassName("item");
var remo = document.getElementsByClassName("delete");
var item_del = document.getElementsByClassName("item_del");
var back = document.getElementsByClassName("back_button");
var del = document.getElementsByClassName("del_button");
var i;

for(i=0 ; i<3 ; i++){
remo[i].index=i;
back[i].index=i;
del[i].index=i;
back[i].onclick = b;
del[i].onclick = c;
remo[i].onclick = a;
}

function a(){ 
item[this.index].style.display = "none";
item_del[this.index].style.display = "flex";

}

function b(){
item[this.index].style.display = "flex";
item_del[this.index].style.display = "none";
}

function c(){
item_del[this.index].style.display = "none";
}