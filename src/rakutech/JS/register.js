let user = {

    userName : null,
    userEmail : null,
    userPassword : null

}

let signUp = document.querySelector(".sign__up");

let name = document.querySelector(".user__name");
let email = document.querySelector(".user__email");
let password = document.querySelector(".user__password");

signUp.addEventListener("click", () => {

    user.userName = name.value;
    user.userEmail = email.value;
    user.userPassword = password.value;

    alert(user.userName + " " + user.userEmail);

    // alert(name.value);

});

function loadDoc(){

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){

        if(xhttp.readyState == 4 && xhttp.status == 200){

            document.getElementById("demo").innerHTML = xhttp.responseText;
        }

    };

    xhttp.open("GET", "https://www.reddit.com/r/aww.json", true);
    xhttp.send();

}