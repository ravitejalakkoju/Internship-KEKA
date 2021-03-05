function validateEmail(email) {
    const emailRegExp = /[a-z]+.[0-9]+_[a-z]+@[a-z]+\.[a-z]+/;
    return emailRegExp.test(email);
}

function emailIterativeValidation(formName){
    var email = document.forms[formName]["your-email"].value;
    if(!validateEmail(email))
    document.getElementById('emailHelp').innerHTML = "Enter in correct pattern [eg., xyz.123_abc@hyd.co.in]";
    else
    document.getElementById('emailHelp').innerHTML = "";
}

function mobileIterativeValidation(formName){
    var mobile = document.forms[formName]["your-mobile"].value;
    console.log(mobile);
    if(mobile.length < 10)
        document.getElementById('mobileHelp').innerHTML = `Incorrect Number (only ${mobile.length} digits given)`;
    else
        document.getElementById('mobileHelp').innerHTML = `Number in correct format`;
}

function iterativeValidation(formName, type){
    switch (type) {
        case 'email':
            emailIterativeValidation(formName);break;
        case 'mobile':
            mobileIterativeValidation(formName);break;
        default:
            break;
    }
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




