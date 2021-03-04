function validateEmail(email) {
    const emailRegExp = /[a-z]+.[0-9]+_[a-z]+@[a-z]+\.[a-z]+/;
    return emailRegExp.test(email);
}

function emailIterativeValidation(){
    var email = document.forms["contactForm"]["your-email"].value;
    if(!validateEmail(email))
    document.getElementById('emailHelp').innerHTML = "Enter in correct pattern [eg., xyz.123_abc@hyd.co.in]";
    else
    document.getElementById('emailHelp').innerHTML = "";
}

function mobileIterativeValidation(){
    var mobile = document.forms["contactForm"]["your-mobile"].value;
    console.log(mobile);
    if(mobile.length < 10)
        document.getElementById('mobileHelp').innerHTML = `Incorrect Number (only ${mobile.length} digits given)`;
    else
        document.getElementById('mobileHelp').innerHTML = `Number in correct format`;
}

function iterativeValidation(type){
    switch (type) {
        case 'email':
            emailIterativeValidation();break;
        case 'mobile':
            mobileIterativeValidation();break;
        default:
            break;
    }
}


function validateContactForm(){
    var name = document.forms["contactForm"]["your-name"].value;
	var email = document.forms["contactForm"]["your-email"].value;
	var org = document.forms["contactForm"]["your-org"].value;
    var mobile = document.forms["contactForm"]["your-mobile"].value;
    var contactby = document.forms["contactForm"]["contactby"].value;

	if (name.length<1) 
        document.getElementById('nameHelp').innerHTML = "Name is required *";
    else 
        document.getElementById('nameHelp').innerHTML = "";

    if (email.length<1) 
        document.getElementById('emailHelp').innerHTML = "Email is required *";
    else 
        document.getElementById('emailHelp').innerHTML = "";

    if (org.length<1) 
        document.getElementById('orgHelp').innerHTML = "Organization is required *";      
    else 
        document.getElementById('orgHelp').innerHTML = "";

    if(contactby === 'both' || contactby === 'phone')
        document.getElementById('mobileHelp').innerHTML = `Number is required *`;
    else document.getElementById('mobileHelp').innerHTML = '';
    
    if (mobile.length >= 1) 
        document.getElementById('mobileHelp').innerHTML = `Incorrect Number (only ${mobile.length} digits given)`;

    window.scrollTo({top: 0, behavior: 'smooth'});      
    if(!validateEmail(email) || name.length<1 || email.length<1 || org.length < 1 || (mobile.length >= 1 && mobile.length < 10) || ((contactby === 'both' || contactby === 'phone') && mobile.length < 10)){
        document.getElementById("warning").innerHTML = "<h6 class='fw-bold text-danger m-2 ms-3'>Please fill all the required fields below</h6>";
       	return false;
    } else alert('Submitted Successfully');
}

function updateMobileHelp(){
    var contactby = document.forms["contactForm"]["contactby"].value;
    if(contactby === 'both' || contactby === 'phone')
        document.getElementById('number').classList.add('required');
    else { 
        document.getElementById('number').classList.remove('required'); 
        document.getElementById('mobileHelp').innerHTML = '';
    }
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

    console.log(resume);
	  
    window.scrollTo({top: 0, behavior: 'smooth'});      
    if(!validateEmail(email) || name.length<1 || email.length<1 || desiredRole.length < 1){
        document.getElementById("warning").innerHTML = "<h6 class='fw-bold text-danger m-2 ms-3'>Please fill all the fields below</h6>";
       	return false;
    } else alert('Submitted Successfully');
}

function clearForm(){
    window.scrollTo({top: 0, behavior: 'smooth'});    
    document.getElementById('warning').innerHTML = "";
    document.getElementById('emailHelp').innerHTML = "";
    document.getElementById('orgHelp').innerHTML = "";
    document.getElementById('nameHelp').innerHTML = "";
    document.getElementById("contact-form").reset();
}

function greetAlert(honour){
    window.alert(`Hello ${honour}`);
}

function updatePromoCode(){
    if(document.getElementById('state').value !== "")
    document.getElementById('promo').value = document.getElementById('state').value + '-PROMO'; 
    else 
    document.getElementById('promo').value = ''; 
}

