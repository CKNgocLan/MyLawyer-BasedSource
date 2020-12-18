const sendBtn = document.querySelector("#sendBtn");
const rowAlert = document.querySelector(".warningAppend");
const divAlert = document.createElement("div");

const resetPassword = async (e) => {
    e.preventDefault();

    // Create Object with information from the form
    const userObj = {
        email: emailInput.value,
    }
    
    const response = await fetch("/auth/reset-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    });
    
    const data = await response.json();
    if(data.message){
        const message = data.message;
        divAlert.setAttribute("class", "alert alert-danger");
        divAlert.setAttribute("role", "alert");
        divAlert.textContent = message;
        rowAlert.prepend(divAlert);
    }
    else {
        divAlert.setAttribute("class", "alert alert-success");
        divAlert.textContent = "Your password has been reset.";
        rowAlert.prepend(divAlert);
    }
};

sendBtn.addEventListener("click", resetPassword);