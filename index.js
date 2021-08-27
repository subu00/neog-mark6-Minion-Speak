const button = document.querySelector("#btn");
const textAreaInput = document.querySelector("#textarea-input");
const textAreaOutput = document.querySelector("#textarea-output")
let serverURL = "https://api.funtranslations.com/translate/minion.json"; 

function translateUrl(input) {
    return serverURL + '?text=' +input;
}

function handleError(error) {
    console.log("Error has occured", error)
    alert("Please try agian. It seems the server is down 😭😭😭")
}


function handleTranslateClick() {
    console.log("Button was clicked")
    let input  = textAreaInput.value;

    fetch(translateUrl(input))
        .then(response => response.json())
        .then(json => {
            let translatedOutput = json.contents.translated;
            textAreaOutput.innerText = translatedOutput;
        }).catch(handleError)

}





button.addEventListener('click', handleTranslateClick)
