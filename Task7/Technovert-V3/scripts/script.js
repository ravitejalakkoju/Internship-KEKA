/* let currentActiveTab = 'home';

function activeTab(tabId){
    document.getElementById(currentActiveTab).classList.remove('active');
    document.getElementById(tabId).classList.add('active');
    currentActiveTab = tabId;
} */

function validateEmail(email) {
    const re = /[a-z]+.[0-9]+_[a-z]+@[a-z]+\.[a-z]+/;
    return re.test(email);
}

function validate(){
    var name = document.forms["contactForm"]["your-name"].value;
	var email = document.forms["contactForm"]["your-email"].value;
	var org = document.forms["contactForm"]["your-org"].value;
    console.log(name, email, org, validateEmail(email));
	if (name.length<1) {
        document.getElementById('nameHelp').innerHTML = "Name is required *"
    } else {
        document.getElementById('nameHelp').innerHTML = ""
    }
    if (email.length<1) {
        document.getElementById('emailHelp').innerHTML = "Email is required *";
    } else {
        document.getElementById('emailHelp').innerHTML = "";
    }
    if (org.length<1) {
        document.getElementById('orgHelp').innerHTML = "Organization is required *";      
    } else {
        document.getElementById('orgHelp').innerHTML = "";      
    }
    if(!validateEmail(email) && email.length >= 1){
        document.getElementById('emailHelp').innerHTML = "Enter in correct pattern [eg., xyz.123_abc@hyd.co.in]";
    }
    window.scrollTo({top: 0, behavior: 'smooth'});      
    if(!validateEmail(email) || name.length<1 || email.length<1 || org.length < 1){
        document.getElementById("warning").innerHTML = "<h6 class='fw-bold text-danger m-2 ms-3'>Please fill all the required fields below</h6>";
       	return false;
    }
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

function promoChange(){
    if(document.getElementById('state').value !== "" && document.getElementById('promo'))
    document.getElementById('promo').value = document.getElementById('state').value + '-PROMO'; 
    else 
    document.getElementById('promo').value = ''; 
}