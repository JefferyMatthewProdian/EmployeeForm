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

    User_object = {name:name,age:age,gender:gender.value,password:password.value};

    console.log(User_object.password);

    console.log("The name of the person in ",name);

    console.log("his age is ",age);

    console.log("and thir gender is ",gender.value);

});



const strength_text = document.getElementById("strength-text");

const style_box = document.getElementById("strength-fill");

const password = document.getElementById("password");

password.addEventListener("input",function(event){

    const password_value = password.value;

    let strength = 0;

    if(/[A-Z]/.test(password_value)){

        strength++;

    }

    if(password_value.length>7){

        strength++;

    }

    if(/[a-z]/.test(password_value)){

        strength++;

    }

    if(/[0-9]/.test(password_value)){

        strength++;

    }

    if(/[^A-Za-z0-9]/.test(password_value)){

        strength++;

    }

    if(strength<=1){

        style_box.style.width="0%";

        style_box.style.background="white";

        strength_text.textContent="enter a good password";

    }

    else if(strength==2){

        style_box.style.width="25%";

        style_box.style.background="red";

        strength_text.textContent="weak password";

    }

    else if(strength==3){

        style_box.style.width="50%";

        style_box.style.background="orange";

        strength_text.textContent="medium password";

    }

    else if(strength==4){

        style_box.style.width="75%";

        style_box.style.background="green";

        strength_text.textContent="strong password";

    }

    else{

        style_box.style.width="100%";

        style_box.style.background="green";

        strength_text.textContent="very strong password";

    }

});