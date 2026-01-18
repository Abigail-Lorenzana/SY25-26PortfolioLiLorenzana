function confirmSubmit() {
    return confirm("Do you want to submit the form?");
}

function confirmReset() {
    return confirm("Do you want to reset all the fields?");
}

function checkEmpty(id) {
    var x = document.getElementById(id).value;

    if (x == "") {
        document.getElementById(id).style.border = "2px solid red";
        alert("Please fill out this field.");
    }else {
        document.getElementById(id).style.border = "1px solid black";
    }
}