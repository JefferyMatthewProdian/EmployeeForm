const form = document.getElementById("EmployeeForm")
form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (name == ""){
        alert ("Please enter a valid name !")
        return
    }
    if (age =="" || age<=0){
        alert ("Please enter a valid age")
        return
    }
    if (!gender){
        alert ("Choose a gender ")
        return
    }

    console.log("The name of the person in ",name);
    console.log("his age is ",age);
    console.log("and thir gender is ",gender.value);
});