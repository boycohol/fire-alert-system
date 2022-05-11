
//Form Login
const formLogin = document.querySelector(".form_login")
const account = formLogin.querySelector(".input_user")
const password = formLogin.querySelector(".input_pass")
const errorMsg = formLogin.querySelector(".errMsg_login")
const user_manager = document.querySelector(".user_manager")
const btnLogin = user_manager.querySelector(".button_login")

formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorMsg.textContent = "";
    try {
        const res = await fetch('/user/confirm-user', {
            method: 'POST',
            body: JSON.stringify({ account: account.value, password: password.value }),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json();
        if (data.errCode == 1 || data.errCode == 2 || data.errCode == 3) {
            errorMsg.textContent = `${data.errMsg}`
        }
        else {
            location.assign("/statistic")
        }
    } catch (err) {
        console.log(err)
    }
})