// 示例：简单的登录表单验证
function validateLoginForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === "" || password === "") {
        alert("用户名和密码不能为空！");
        return false;
    }
    return true;
}
