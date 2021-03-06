import home from './views/home.js';
import careers from './views/careers.js';
import contactus from './views/contactus.js';

let tab;

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: '/', pathName: "home", view: home},
        { path: '/careers', pathName: "careers", view: careers},
        { path: '/contactus', pathName: "contactus", view: contactus}
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view();

    tab = match;

    document.getElementById('tab-content').innerHTML = await view.getHTML();
    if(document.getElementById('formSubmit')) {
        document.getElementById('formSubmit').addEventListener('click', (match.route.pathName === 'careers') ? validateCareerForm : validateContactForm);
        document.getElementById('emailInput').addEventListener('input', emailIterativeValidation);
        if(match.route.pathName === 'careers') document.getElementById("resumeUpload").addEventListener('change', updateResume);
            else {
            document.getElementById('state').addEventListener('change', () => {updatePromoCode();});
            document.getElementById('number').addEventListener('input', mobileIterativeValidation);
            document.getElementById('flexRadioDefault1').addEventListener('change', updateMobileHelp);
            document.getElementById('flexRadioDefault2').addEventListener('change', updateMobileHelp);
            document.getElementById('flexRadioDefault3').addEventListener('change', updateMobileHelp);
            document.getElementById('clearForm').addEventListener('click', clearForm);
        }
    }

    activeTab(match.route.pathName);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e =>{
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
});

navigateTo(location.pathname);

let currentActiveTab = 'home';

function activeTab(tabId){
    document.getElementById(currentActiveTab).classList.remove('active');
    document.getElementById(tabId).classList.add('active');
    currentActiveTab = tabId;
};


let validateEmail = (email) => {
    const emailRegExp = /[a-z]+.[0-9]+_[a-z]+@[a-z]+\.[a-z]+/;
    return emailRegExp.test(email);
}

let emailIterativeValidation = () => {
    var email = document.forms[tab.route.pathName + 'Form']["your-email"].value;
    if(!validateEmail(email) && email.length >= 1)
    return document.getElementById('emailHelp').innerHTML = "Enter in correct pattern [eg., xyz.123_abc@hyd.co.in]";
    else
    return document.getElementById('emailHelp').innerHTML = "";
}

let mobileIterativeValidation = () => {
    var mobile = document.forms[tab.route.pathName + 'Form']["your-mobile"].value;
    console.log(mobile);
    if(mobile.length < 10)
        document.getElementById('mobileHelp').innerHTML = `Incorrect Number (only ${mobile.length} digits given)`;
    else
        document.getElementById('mobileHelp').innerHTML = `Number in correct format`;
}

function updateResume(){
    var resume = document.forms["careersForm"]["your-resume"].value;
    document.getElementById('filename').innerHTML = resume;
}

function validateCareerForm(){
    var name = document.forms["careersForm"]["your-name"].value;
	var email = document.forms["careersForm"]["your-email"].value;
	var desiredRole = document.forms["careersForm"]["your-role"].value;
    var resume = document.forms["careersForm"]["your-resume"].value;

    if(!validateEmail(email) && email.length >= 1){
        document.getElementById('emailHelp').innerHTML = "Enter in correct pattern [eg., xyz.123_abc@hyd.co.in]";
    }

    window.scrollTo({top: 0, behavior: 'smooth'});      
    if(!validateEmail(email) || name.length<1 || email.length<1 || desiredRole.length === '' || resume.length < 1){
        document.getElementById("warning").innerHTML = "<h6 class='fw-bold text-danger m-2 ms-3'>Please fill all the fields below</h6>";
       	return false;
    } else alert('Submitted Successfully');
}


function updatePromoCode(){
    if(document.getElementById('state').value !== "")
    document.getElementById('promo').value = document.getElementById('state').value + '-PROMO'; 
    else 
    document.getElementById('promo').value = ''; 
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
    
    if(!validateEmail(email) && email.length >= 1){
        document.getElementById('emailHelp').innerHTML = "Enter in correct pattern [eg., xyz.123_abc@hyd.co.in]";
    }
    
    if (mobile.length >= 1) 
        document.getElementById('mobileHelp').innerHTML = `Incorrect Number (only ${mobile.length} digits given)`;

    window.scrollTo({top: 0, behavior: 'smooth'});      
    if(!validateEmail(email) || name.length<1 || email.length<1 || org.length < 1 || (mobile.length >= 1 && mobile.length < 10) || ((contactby === 'both' || contactby === 'phone') && mobile.length < 10)){
        document.getElementById("warning").innerHTML = "<h6 class='fw-bold text-danger m-2 ms-3'>Please fill all the required fields below</h6>";
       	return false;
    } else alert('Submitted Successfully');
}

function clearForm(){
    window.scrollTo({top: 0, behavior: 'smooth'});    
    document.getElementById('warning').innerHTML = "";
    document.getElementById('emailHelp').innerHTML = "";
    document.getElementById('orgHelp').innerHTML = "";
    document.getElementById('nameHelp').innerHTML = "";
    document.getElementById('mobileHelp').innerHTML = "";
    document.getElementById("contact-form").reset();
}