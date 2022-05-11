const formSignUp = document.querySelector(".form_signup")
const errMsgSignUp = formSignUp.querySelector(".errMsg_signup")
const name_user = formSignUp.querySelector(".input_name")
const phone = formSignUp.querySelector(".input_phone")
const accountSignUp = formSignUp.querySelector(".input_account")
const passwordSignUp = formSignUp.querySelector(".input_pass")

formSignUp.addEventListener("submit", async (e) => {
    console.log("name: ", name_user)
    console.log("phone: ", phone)
    console.log("account: ", accountSignUp)
    console.log("password: ", passwordSignUp)
    e.preventDefault();
    errMsgSignUp.textContent = "";
    try {
        const res = await fetch('/user/create-user', {
            method: 'POST',
            body: JSON.stringify({ Name: name_user.value, Phone: phone.value, account: accountSignUp.value, password: passwordSignUp.value }),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json();
        if (data.errCode == 1) {
            errMsgSignUp.textContent = `${data.errMsg}`
        }
        else {
            location.assign("/login")
        }
    } catch (e) {
        console.log(e);
    }
})