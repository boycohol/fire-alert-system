const formAddLocation = document.querySelector(".addLocation")
const msgAddLocation = formAddLocation.querySelector(".msg-addlocation")
const addDevice = formAddLocation.querySelector("#location")
const addLocation = formAddLocation.querySelector(".input_location")

formAddLocation.addEventListener("submit", async (e) => {
    e.preventDefault();
    msgAddLocation.textContent = "";
    try {
        const res = await fetch('/user/update-devices', {
            method: 'POST',
            body: JSON.stringify({ devices: addDevice.value, location: addLocation.value }),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json();
        msgAddLocation.textContent = data.Msg;
    } catch (err) {
        console.log(err)
    }
}
)