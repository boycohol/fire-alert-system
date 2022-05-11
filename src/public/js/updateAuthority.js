const formAuthority = document.querySelector(".auth_update");
const accountAuthority = formAuthority.querySelector(".input_account");
const adminAuth = formAuthority.querySelector("#exampleRadios1");
const userAuth = formAuthority.querySelector("#exampleRadios2")
const errMsgAuth = formAuthority.querySelector(".auth-msg")
const successMsgAuth = formAuthority.querySelector(".auth-success")
formAuthority.addEventListener("submit", async (e) => {
    e.preventDefault();
    errMsgAuth.textContent = "";
    successMsgAuth.textContent = "";
    let authResult = "";
    if (adminAuth.checked) {
        authResult = "Admin"
    } else if (userAuth.checked) {
        authResult = "User"
    }
    try {
        const res = await fetch('/user/update-auth', {
            method: 'POST',
            body: JSON.stringify({ account: accountAuthority.value, exampleRadios: authResult }),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json();
        if (data.code) {
            errMsgAuth.textContent = data.Msg
        } else {
            successMsgAuth.textContent = data.Msg
        }
    } catch (e) {
        console.log(e);
    }
})