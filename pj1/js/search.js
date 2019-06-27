var search = document.getElementById("search");
var searchp = document.getElementById("searchp");

searchp.onclick = function(){
    if(search.value===""){
        alert("输入不能为空");
    }else{
        window.location.href = "search.html";
    }
}
