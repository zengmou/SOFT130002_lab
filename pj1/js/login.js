var nickName = document.getElementById("nickname");
var nickNameTest = /(?=.[A-Za-z])([A-Za-z0-9]{6,})/;
var nickName_d = document.getElementById("nickname_description");

nickName.oninput = function(){
    if (nickName.value==="coco27"){
        nickName.style.border = "1px solid #000";
        nickName_d.innerHTML = ""
    }else if(nickName.value === ""){
        nickName.style.border = "1px solid red";
        nickName_d.innerHTML = "用户名不能为空";
    }else{
        nickName_d.innerHTML = "用户名不存在";
        nickName_d.style.color = "red";
        nickName.style.border = "1px solid red";

    }
}
var password = document.getElementById("password");
var password_test1= /(?=.[A-Za-z])/;
var password_test2= /(?=.[0-9])/;
var password_test3 = /^([A-Za-z0-9_-]{8,})$/;
var password_d = document.getElementById("password_description");


password.oninput = function(){
    if (password.value==="coco0527"){
        password.style.border = "1px solid #000";
        password_d.innerHTML = ""
    }else if(password.value === ""){
        password.style.border = "1px solid red";
        password_d.innerHTML = "密码不能为空";
    }else{
        password_d.innerHTML = "密码错误";
        password_d.style.color = "red";
        password.style.border = "1px solid red";
    }console.log(password.value);

}
function loging(){
    if(password.value==="coco0527"&&nickName.value==="coco27"){
        alert("登录成功")
    }else{
        alert("登录失败")
    }
    
}