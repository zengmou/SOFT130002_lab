function paying() {
    alert("支付成功")
}
function search() {
    var x = document.getElementById("search");
    if (x.value == ""){
        document.getElementById("search21").innerHTML = "*输入不能为空";
    }
    else {
        document.getElementById("search21").innerHTML="";
        window.location.href="search.html";
    }
}