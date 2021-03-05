function validateEmail(email) {
    const emailRegExp = /[a-z]+.[0-9]+_[a-z]+@[a-z]+\.[a-z]+/;
    return emailRegExp.test(email);
}

function updateResume(){
    var resume = document.forms["careerForm"]["your-resume"].value;
    document.getElementById('filename').innerHTML = resume;
}

function validateCareerForm(){
    var name = document.forms["careerForm"]["your-name"].value;
	var email = document.forms["careerForm"]["your-email"].value;
	var desiredRole = document.forms["careerForm"]["your-role"].value;
    var resume = document.forms["careerForm"]["your-resume"].value;

    if(!validateEmail(email) && email.length >= 1){
        document.getElementById('emailHelp').innerHTML = "Enter in correct pattern [eg., xyz.123_abc@hyd.co.in]";
    }

    window.scrollTo({top: 0, behavior: 'smooth'});      
    if(!validateEmail(email) || name.length<1 || email.length<1 || desiredRole.length === '' || resume.length < 1){
        document.getElementById("warning").innerHTML = "<h6 class='fw-bold text-danger m-2 ms-3'>Please fill all the fields below</h6>";
       	return false;
    } else alert('Submitted Successfully');
}
