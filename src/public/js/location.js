const location_ = document.querySelector("#location")
const locationTable = document.querySelector("#admin-table")

location_.addEventListener("change", async (e) => {
    e.preventDefault()
    let tbody = locationTable.querySelector("tbody")
    let tr = tbody.querySelectorAll("tr")
    tr.forEach((element) => {
        element.style.display = ""
        let data_location = element.children[2].outerText;
        console.log(data_location)
        if (data_location != location_.value) {
            element.style.display = "none"
        }
    })
})