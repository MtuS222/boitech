function validateForm() {
    var login = document.forms["login-form"]["flogin"].value;
    console.log('aaa');
    var senha = document.forms["login-form"]["fsenha"].value;
    console.log(login);
    console.log(senha);
    if ((login == null || login == "") || (senha == null || senha == "")) {
        document.getElementsByClassName("errorMessage")[0].style.visibility = "visible";
        document.getElementsByClassName("errorMessage")[0].innerHTML = "Preencha os campos";
        return false;
    } else {
        if (login != 'admin' || senha != 'admin') {
            document.getElementsByClassName("errorMessage")[0].style.visibility = "visible";
            document.getElementsByClassName("errorMessage")[0].innerHTML = "Preenche direito carai";
            return false;
        } else if (login == 'admin' && senha == 'admin') {
            return true;
        }
        return false;
    }
}