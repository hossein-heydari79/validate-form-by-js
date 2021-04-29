let error = document.getElementById("error");
document.getElementById("myForm").addEventListener('submit', (e) => {
    e.preventDefault();
    let x = new FormData(document.getElementById("myForm"));

    let split_name = x.get("name").split("");
    let split_pass = x.get("password").split("");
    let lower = 0;
    let upper = 0;
    let counter_split_name = 0;
    let counter_split_pass = 0;
    let counter_aaski = 0;

    for (let i of split_name) {
        if (i == " ") {
            counter_split_name++;
        }

        if ((i.codePointAt() >= 65 && i.codePointAt() <= 90) || (i.codePointAt() >= 97 && i.codePointAt() <= 122)) {
            counter_aaski += 0;
        } else {
            counter_aaski++;
        }
    }

    for (let i of split_pass) {
        if (i.codePointAt() >= 48 && i.codePointAt() <= 57) {
            counter_split_pass++;
        }

        if (i.codePointAt() >= 97 && i.codePointAt() <= 122) {
            lower++;
        }

        if (i.codePointAt() >= 65 && i.codePointAt() <= 90) {
            upper++;
        }
    }

    if (counter_split_name != 0) {
        counter_aaski = counter_aaski - 1;
    }


    if (counter_aaski != 0) {
        error.innerHTML = "The name must not have a number";
    } else if (x.get("name").length < 3) {
        error.innerHTML = "The name must be more than 3 characters";
    } else if (counter_split_name != 1) {
        error.innerHTML = "There should be a space between the first and last name";
    } else if (!(x.get("age") >= 1 && x.get("age") <= 99) || (x.get("age") < 15)) {
        error.innerHTML = "Your age is not suitable for entry";
    } else if (x.get("password").length < 5) {
        error.innerHTML = "The password must be more than 5 characters";
    } else if (counter_split_pass == 0) {
        error.innerHTML = "The password must have a number";
    } else if (lower == 0) {
        error.innerHTML = "Password must be lowercase";
    } else if (upper == 0) {
        error.innerHTML = "The password must be in uppercase";
    } else {
        error.innerHTML = "";
    }

    if (error.innerHTML == "") {
        alert("SEND!");
        return true;
    } else {
        return false;
    }

});