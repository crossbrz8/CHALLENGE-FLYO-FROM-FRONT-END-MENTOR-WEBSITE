const inputElement = document.querySelector("[data-input-text]");
const buttonElement = document.querySelector("[data-button]");


function isEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

inputElement.addEventListener("change",() => {
    if(isEmail(inputElement.value)){
        const pElement = document.createElement("p");
        pElement.style.color = "green";
        pElement.innerText = "This is a valid e-mail";
        const emailContainer = document.querySelector(".email-container");
        emailContainer.appendChild(pElement); 
        setTimeout(() => {
            pElement.innerText = "";
        }
        , 3000);
    }
            
    else {
        const pElement = document.createElement("p");
        pElement.style.color = "green";
        pElement.innerText = "This is not a valid e-mail";
        const emailContainer = document.querySelector(".email-container");
        emailContainer.appendChild(pElement);
        // make it so that innerText dissapear from the html after a certain amount of time
        setTimeout(() => {
            pElement.innerText = "";
        }
        , 3000);

    }
}
);
