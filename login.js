var information = [
    {login: "Neriman", password: "12345"},
    {login: "Salmanli", password: "54321"},
]

document.querySelector("button").addEventListener("click", yoxla);

function yoxla(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }
    else {
        for (var i = 0; i < information.length; i++) {
            if (username === information[i].login && password === information[i].password) {
                
                window.location.href = "calc.html";
                return;
            }
        }
        alert("Invalid username or password.");
    }
}