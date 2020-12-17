const sendBtn = document.querySelector("#sendBtn");
const rowWarning = document.querySelector(".warningAppend");
const warningDiv = document.createElement("div");

const sendEmail = async (e) => {
    e.preventDefault();

    // Create Object with information from the form
    const userObj = {
        email: emailInput.value,
        password: passwordInput.value
    }

    // Request to server to log-in passing the User information (userObj)
    const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    })

    const data = await response.json();
    if(data.message){
        const message = data.message;
        divAlert.setAttribute("class", "alert alert-danger");
        divAlert.setAttribute("role", "alert");
        divAlert.textContent = message;
        rowAlert.prepend(divAlert);
    }
    else {
        warningDiv.setAttribute("class", "alert alert-success");
        warningDiv.textContent = "Your password has been reset!";
        rowWarning.prepend(warningDiv);
    }
}

sendBtn.addEventListener("click", sendEmail);