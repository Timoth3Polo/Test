document.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded");
    const sendBtn = document.getElementById("send");
    sendBtn.addEventListener("click", fetchApi)
})

function fetchApi() {

    const nameInputContent = document.getElementById("name-input").value;
    if (nameInputContent.trim() === "") return;

    fetch(`https://swapi.dev/api/people/?search=${nameInputContent}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            const resultContainer = document.getElementById("api-response");
            response.results.forEach(result => {
                const element = document.createElement("p");
                element.textContent = `${result.name} \n ${result.mass} \n ${result.skin_color}`
                element.addEventListener("click", removeElement)
                resultContainer.appendChild(element)
            });
        })
}
function removeElement() {
    this.remove();
}