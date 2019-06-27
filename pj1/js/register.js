var back = document.getElementById("back_button");
var ree = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;

var email = document.getElementById("email");
var email_remind = document.getElementById("email_reminder");
var reemail_remind = document.getElementById("reemail_reminder");

email.oninput = function () {
    if (ree.test(email.value)) {
        email.style.border = "1px solid #000";
    } else if (email.value === "") {
        email.style.border = "1px solid red";
        email_remind.innerHTML = "您必须输入此项";
        email_remind.style.color = "red";
    } else {
        email_remind.innerHTML = "您输入的格式有误";
        email_remind.style.color = "red";
        email.style.border = "1px solid red";


    }
}



var nickName = document.getElementById("nickname");
var nickNameTest = /^[A-Za-z0-9_-]{6,}$/;
var nickNameTest2 = /(?=.[A-Za-z])/
var nickNameTest3 = /(?=.[0-9])/
var nickName_remind = document.getElementById("nickname_reminder");

nickName.oninput = function () {
    if (nickNameTest.test(nickName.value)&&nickNameTest2.test(nickName.value)&&nickNameTest3.test(nickName.value)) {
        nickName.style.border = "1px solid #000";
        nickName_remind.innerHTML = ""
    } else if (nickName.value === "") {
        nickName.style.border = "1px solid red";
        nickName_remind.innerHTML = "您必须输入此项";
    } else {
        nickName_remind.innerHTML = "用户名必须含有一个非数字,至少6位";
        nickName_remind.style.color = "red";
        nickName.style.border = "1px solid red";

    }
}

var password = document.getElementById("password");
var repassword = document.getElementById("repassword");
var password_test1 = /(?=.[A-Za-z])/;
var password_test2 = /(?=.[0-9])/;
var password_test3 = /^([A-Za-z0-9_-]{8,})$/;
var password_remind = document.getElementById("password_reminder");
var repassword_remind = document.getElementById("repassword_reminder");

password.oninput = function () {
    if (password_test1.test(password.value) && password_test2.test(password.value) && password_test3.test(password.value)) {
        password.style.border = "1px solid #000";
        password_remind.innerHTML = ""
    } else if (password.value === "") {
        password.style.border = "1px solid red";
        password_remind.innerHTML = "您必须输入此项";
    } else {
        password_remind.innerHTML = "密码必须包含大小写字母和数字的组合，不含特殊符号，且长度在8位以上";
        password_remind.style.color = "red";
        password.style.border = "1px solid red";
    } console.log(password.value);

}
repassword.oninput = function () {
    if (repassword.value === password.value) {
        repassword.style.border = "1px solid #000";
        repassword_remind.innerHTML = ""
    } else if (repassword.value === "") {
        repassword.style.border = "1px solid red";
        repassword_remind.innerHTML = "您必须输入此项";
    } else {
        repassword_remind.innerHTML = "您输入的密码不一致";
        repassword_remind.style.color = "red";
        repassword.style.border = "1px solid red";

    }
}

function registering(){
    if(nickNameTest.test(nickName.value)&&nickNameTest2.test(nickName.value)&&nickNameTest3.test(nickName.value)&&ree.test(email.value)&&password_test1.test(password.value) && password_test2.test(password.value) && password_test3.test(password.value)&&repassword.value === password.value){
        alert("注册成功")
    }else{
        alert("注册失败")
    }
    
}
































