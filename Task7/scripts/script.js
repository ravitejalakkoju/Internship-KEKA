console.log("working");

function displayHome(){
    document.getElementById('home').classList.add('active');
    if(document.getElementById('careers').classList.contains('active') || document.getElementById('contact').classList.contains('active')){
        document.getElementById('careers').classList.remove('active')
        document.getElementById('contact').classList.remove('active')
    }
    document.getElementById('v-content').innerHTML = '<div class="home" id="home-content">\
    <div class="border mt-4 p-3 pt-1 col-xl-8 m-auto ms-xl-5">\
        <span class="roboto fw-normal">NEWS</span>\
        <ul class="dashed open-sans small ms-3">\
            <li class="small">Technovert is Microsoft partner in Information Security Solutions</li>\
            <li class="small">We deliver one of the largest book information stores in the world</li>\
            <li class="small">Our team delivered the First Windows 8 Metro Style application for Windows Phone group at Microsoft</li>\
            <li class="small">Technovert partners with the strategic technology CTO group</li>\
        </ul>\
    </div>\
    <div class="mt-3 m-auto ms-xl-5 small col-10">\
        <h3>Welcome!</h3>\
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices a arcu quis luctus. Donec et libero iaculis turpis finibus consequat et sed ipsum. Mauris maximus quam vitae nulla fringilla bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sollicitudin mauris, sed pretium diam. Vivamus sodales pulvinar lacinia. Etiam et orci vitae diam auctor pellentesque consequat ut dui. Suspendisse sagittis leo nec erat sodales venenatis. Aliquam sit amet velit accumsan, pellentesque purus commodo, volutpat massa. Proin justo sem, efficitur ac pretium vitae, lobortis et tellus. Proin placerat varius lectus, ac sagittis lorem varius quis. Sed placerat odio magna, nec pellentesque mi iaculis sit amet. Maecenas sed tincidunt turpis. Etiam feugiat nibh vitae nulla accumsan, nec porta lorem bibendum.</p>\
        <p>In tellus arcu, rutrum sit amet est vitae, consequat hendrerit lectus. Ut molestie felis lacus, id fermentum nisi molestie ac. Duis leo ex, finibus at suscipit varius, porta vel neque. Nulla facilisi. Etiam eu dui ut tortor bibendum sagittis sit amet a lorem. Nunc lacinia odio posuere maximus pretium. Cras at elementum libero, posuere malesuada eros. Mauris fermentum risus ex. Vivamus viverra vehicula elit, eget mattis augue congue vitae. Nullam faucibus efficitur purus a vestibulum. Proin suscipit varius tincidunt.</p>\
        <p>Quisque quis malesuada quam. Aliquam laoreet feugiat est. Maecenas consectetur mauris tellus, vitae pulvinar quam facilisis in. Sed efficitur felis eu turpis volutpat, a fringilla nisi congue. Etiam vitae ante in nulla commodo convallis. Nam sagittis ligula erat, sed aliquam turpis vulputate et. Duis pretium risus eget nibh volutpat, non sagittis dui ullamcorper. Nunc rhoncus eleifend arcu, id ultricies lorem viverra nec. Donec velit risus, scelerisque id pretium sollicitudin, volutpat id nisl. In scelerisque sem a cursus tempus. Fusce at diam nisi.</p>\
    </div>\
    </div>';
}

function displayCareers(){
    document.getElementById('careers').classList.add('active');
    if(document.getElementById('home').classList.contains('active') || document.getElementById('contact').classList.contains('active')){
        document.getElementById('contact').classList.remove('active')
        document.getElementById('home').classList.remove('active')
    }
    document.getElementById('v-content').innerHTML = 
    '<div class="careers p-3 ps-xl-5" id=/"career-content"> \
    <h3 class="century-gothic fs-4">Careers at Technovert</h3> \
    <p class="small col-xl-10"> \
        We are looking for smart people who love fiddling with code and pour their heart into it.If you are one, we would like to talk to you.Please fill the form below and we will get back to you. \
    </p> \
    <form class="p-3"> \
        <div class="mb-3 row"> \
            <label class="col-sm-3 col-xl-2 col-form-label fw-bold">Name</label> \
            <div class="col-sm-8 col-xl-4"> \
                <input type="text" class="form-control shadow-none rounded-0  p-1"> \
            </div> \
        </div> \
        <div class="mb-3 row"> \
            <label class="col-sm-3 col-xl-2 col-form-label fw-bold">Email</label> \
            <div class="col-sm-8 col-xl-4"> \
                <input type="email" class="form-control shadow-none rounded-0  p-1" placeholder="xyz.123_abc@hyd-office.co.in  "> \
            </div> \
        </div> \
        <div class="mb-3 row"> \
            <label class="col-sm-3 col-xl-2 col-form-label fw-bold">Desired Role</label> \
            <div class="col-sm-8 col-xl-4"> \
                <input type="text" class="form-control shadow-none rounded-0  p-1"> \
            </div> \
        </div> \
        <div class="mb-3 row"> \
            <label class="col-sm-3 col-xl-2 col-form-label fw-bold">Upload Resume</label> \
            <div class="col-sm-8 col-xl-4"> \
                <input type="file" class="shadow-none rounded-0 p-1"> \
            </div> \
        </div> \
        <div class="mb-3 row"> \
            <label class="col-sm-3 col-xl-2 col-form-label fw-bold"></label> \
            <div class="col-sm-8 col-xl-4"> \
                <button class="fw-bold ps-2 pe-5 border-1">Submit</button> \
            </div> \
        </div> \
    </form> \
</div>';
}


function displayContact(){
    document.getElementById('contact').classList.add('active');
    if(document.getElementById('careers').classList.contains('active') || document.getElementById('home').classList.contains('active')){
        document.getElementById('careers').classList.remove('active')
        document.getElementById('home').classList.remove('active')
    }
    document.getElementById('v-content').innerHTML = 
    '<div class="contact" id="contact-us">'+
    '<div id="warning"></div>'+
    '<form class="p-3" method="post" name="contactForm" onsubmit="return validate()" id="contact-form">\
        <div class="row">\
            <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My Name :</label>\
            <div class="col-sm-8 col-xl-4">\
                <input type="text" name="your-name" class="form-control shadow-none rounded-0 p-0">\
            </div>\
            <div id="nameHelp" class="form-text col-12 col-xl-4 mt-0 mb-2 mb-md-0 text-danger"></div>\
        </div>\
        <div class="row">\
            <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My Email Address :</label>\
            <div class="col-sm-8 col-xl-4">\
                <input type="email" name="your-email" class="form-control shadow-none rounded-0 p-0" placeholder="xyz.123_abc@hyd-office.co.in">\
            </div>\
            <div id="emailHelp" class="form-text col-12 col-xl-4 mt-0 mb-2 mb-md-0 text-danger"></div>\
        </div>\
        <div  class="row">\
            <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">Gender :</label>\
            <div class="col-sm-8 col-xl-4">\
                <div class="form-check form-check-inline">\
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" onclick="hellosir()">\
                    <label class="form-check-label" for="inlineRadio1">Male</label>\
                </div>\
                <div class="form-check form-check-inline">\
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" onclick="hellolady()">\
                    <label class="form-check-label" for="inlineRadio2">Female</label>\
                </div>\
            </div>\
            <div id="genderHelp" class="form-text col-12 col-xl-4 mt-0 mb-2 mb-md-0 text-primary"></div>\
        </div>\
        <div class="row">\
            <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My Telephone Number :</label>\
            <div class="col-sm-8 col-xl-4">\
                <input type="number" class="form-control shadow-none rounded-0 p-0">\
            </div>\
        </div>\
        <div class="row">\
            <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My Organization Name :</label>\
            <div class="col-sm-8 col-xl-4">\
                <input type="text" name="your-org" class="form-control shadow-none rounded-0 p-0">\
            </div>\
            <div id="orgHelp" class="form-text col-12 col-xl-4 mt-0 mb-2 mb-md-0 text-danger"></div>\
        </div>\
        <div class="row">\
            <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My City :</label>\
            <div class="col-sm-8 col-xl-4">\
                <input type="text" class="form-control shadow-none rounded-0 p-0">\
            </div>\
        </div>\
        <div class="row">\
            <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My State or Province</label>\
            <div class="col-sm-8 col-xl-4">\
                <select class="form-control shadow-none rounded-0 p-0" id="state" name="state" onchange="promoChange()">\
                    <option value="Andhra Pradesh">Andhra Pradesh</option>\
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>\
                    <option value="Assam">Assam</option>\
                    <option value="Bihar">Bihar</option>\
                    <option value="Chhattisgarh">Chhattisgarh</option>\
                    <option value="Goa">Goa</option>\
                    <option value="Gujarat">Gujarat</option>\
                    <option value="Haryana">Haryana</option>\
                    <option value="Himachal Pradesh">Himachal Pradesh</option>\
                    <option value="Jharkhand">Jharkhand</option>\
                    <option value="Karnataka">Karnataka</option>\
                    <option value="Kerala">Kerala</option>\
                    <option value="Madhya Pradesh">Madhya Pradesh</option>\
                    <option value="Maharastra">Maharashtra</option>\
                    <option value="Manipur">Manipur</option>\
                    <option value="Meghalaya">Meghalaya</option>\
                    <option value="Mizoram">Mizoram</option>\
                    <option value="Nagaland">Nagaland</option>\
                    <option value="Odisha">Odisha</option>\
                    <option value="Punjab">Punjab</option>\
                    <option value="Rajasthan">Rajasthan</option>\
                    <option value="Sikkim">Sikkim</option>\
                    <option value="Tamil Nadu">Tamil Nadu</option>\
                    <option value="Telangana">Telangana</option>\
                    <option value="Tripura">Tripura</option>\
                    <option value="Uttarakhand">Uttarakhand</option>\
                    <option value="Uttar Pradesh">Uttar Pradesh</option>\
                    <option value="West Bengal">West Bengal</option>\
                </select>\
            </div>\
        </div>\
        <div class="row">\
            <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold mb-auto mt-auto">Please Contact Me By :</label>\
            <div class="col-sm-8 col-xl-4">\
                <div class="form-check">\
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">\
                    <label class="form-check-label" for="flexRadioDefault1">\
                        Email\
                    </label>\
                </div>\
                <div class="form-check">\
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>\
                    <label class="form-check-label" for="flexRadioDefault2">\
                        Phone\
                    </label>\
                </div>\
                <div class="form-check">\
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>\
                    <label class="form-check-label" for="flexRadioDefault3">\
                        Both\
                    </label>\
                </div>\
            </div>\
        </div>\
        <div class="row">\
            <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">Promotion Code :</label>\
            <div class="col-sm-8 col-xl-4">\
                <input type="text" class="form-control shadow-none rounded-0 p-0" id="promo">\
            </div>\
        </div>\
        <div class="row">\
            <label class="col-12 col-form-label fw-bold">Optional Information</label>\
            <div class="col-12 mb-2 fst-italic">\
                This information is optional but it help us to serve better\
            </div>\
        </div>\
        <div class="row">\
            <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My Website Address is :</label>\
            <div class="col-sm-8 col-xl-4">\
                <input type="text" class="form-control shadow-none rounded-0 p-0">\
            </div>\
        </div>\
        <div class="row">\
            <label class="col-12 col-form-label fw-bold">Tell Us More About Your Organization :</label>\
            <div class="col-12 col-md-8">\
                <textarea  class="form-control shadow-none rounded-0 p-0"></textarea>\
            </div>\
        </div>\
        <div class="row">\
            <label class="col-12 col-form-label fw-bold">What I\'d really like to know :</label>\
            <div class="col-12 col-md-8">\
                <textarea class="form-control shadow-none rounded-0 p-0"></textarea>\
            </div>\
        </div>\
        <div class="mt-2 row">\
            <div class="col-sm-8 col-xl-4">\
                <button class="fw-bold ps-3 pe-3 border-1" type="submit" value="submit">Send Message</button>\
                <button class="fw-bold ps-3 pe-3 border-1" type="reset" onclick="clearForm()">Clear Form</button>\
            </div>\
        </div>\
    </form>\
    </div>';
}

// function display

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
    }
    if (email.length<1) {
        document.getElementById('emailHelp').innerHTML = "Email is required *";
    }
    if (org.length<1) {
        document.getElementById('orgHelp').innerHTML = "Organization is required *";      
    }
    if(!validateEmail(email)){
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
    document.getElementById('genderHelp').innerHTML = "";
    document.getElementById('warning').innerHTML = "";
    document.getElementById('emailHelp').innerHTML = "";
    document.getElementById('orgHelp').innerHTML = "";
    document.getElementById('nameHelp').innerHTML = "";
    document.getElementById("contact-form").reset();
}

function hellosir(){
    document.getElementById('genderHelp').innerHTML = 'Hello Sir'; 
}

function hellolady(){
    document.getElementById('genderHelp').innerHTML = 'Hello Lady'; 
}

if(document.getElementById('promo'))
document.getElementById('promo').value = document.getElementById('state').value + '-PROMO'; 

function promoChange(){
    document.getElementById('promo').value = document.getElementById('state').value + '-PROMO'; 
}