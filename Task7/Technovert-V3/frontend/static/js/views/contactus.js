import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Contact-us");
    }

    async getHTML(){
        return `
        <div class="contact" id="contact-us">
            <div id="warning"></div>
            <form class="p-3" method="post" name="contactForm" id="contactusForm">
                <div class="row">
                    <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My Name :</label>
                    <div class="col-sm-8 col-xl-4">
                        <input type="text" name="your-name" class="form-control shadow-none rounded-0 p-0 required" required>
                    </div>
                    <div id="nameHelp" class="form-text col-12 col-xl-4 mt-0 mb-2 mb-md-0 text-danger"></div>
                </div>
                <div class="row">
                    <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My Email Address :</label>
                    <div class="col-sm-8 col-xl-4">
                        <input type="email" id="emailInput" name="your-email" class="form-control shadow-none rounded-0 p-0 required" placeholder="xyz.123_abc@hyd-office.co.in" pattern="[a-z]+\.[0-9]+_[a-z]+@[a-z]+\.[a-z]+" required>
                    </div>
                    <div id="emailHelp" class="form-text col-12 col-xl-4 mt-0 mb-2 mb-md-0 text-danger"></div>
                </div>
                <div  class="row">
                    <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">Gender :</label>
                    <div class="col-sm-8 col-xl-4">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male" name="gender" value="male" onclick="window.alert('Hello Sir')">
                            <label class="form-check-label" for="male">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female" name="gender" value="female" onclick="window.alert('Hello Lady')">
                            <label class="form-check-label" for="female">Female</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My Telephone Number :</label>
                    <div class="col-sm-8 col-xl-4">
                        <input type="number" id="number" name="your-mobile" class="form-control shadow-none rounded-0 p-0 required">
                    </div>
                    <div id="mobileHelp" class="form-text col-12 col-xl-4 mt-0 mb-2 mb-md-0 text-danger"></div>
                </div>
                <div class="row">
                    <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My Organization Name :</label>
                    <div class="col-sm-8 col-xl-4">
                        <input type="text" name="your-org" class="form-control shadow-none rounded-0 p-0 required" required>
                    </div>
                    <div id="orgHelp" class="form-text col-12 col-xl-4 mt-0 mb-2 mb-md-0 text-danger"></div>
                </div>
                <div class="row">
                    <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My City :</label>
                    <div class="col-sm-8 col-xl-4">
                        <input type="text" class="form-control shadow-none rounded-0 p-0">
                    </div>
                </div>
                <div class="row">
                    <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My State or Province</label>
                    <div class="col-sm-8 col-xl-4">
                        <select class="form-control shadow-none rounded-0 p-0" id="state" name="state">
                            <option value="" selected>Select State or Province</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharastra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="West Bengal">West Bengal</option>
                            
                        </select>
                    </div>
                </div>
                <div class="row">
                    <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold mb-auto mt-auto">Please Contact Me By :</label>
                    <div class="col-sm-8 col-xl-4">
                        <div class="form-check">
                            <input class="form-check-input contact-radio" type="radio" name="contactby" id="flexRadioDefault1" value="email">
                            <label class="form-check-label" for="flexRadioDefault1">
                                Email
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input contact-radio" type="radio" name="contactby" id="flexRadioDefault2" value="phone">
                            <label class="form-check-label" for="flexRadioDefault2">
                                Phone
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input contact-radio" type="radio" name="contactby" id="flexRadioDefault3" value="both"" checked>
                            <label class="form-check-label" for="flexRadioDefault3">
                                Both
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">Promotion Code :</label>
                    <div class="col-sm-8 col-xl-4">
                        <input type="text" class="form-control shadow-none rounded-0 p-0" id="promo" value="">
                    </div>
                </div>
                <div class="row">
                    <label class="col-12 col-form-label fw-bold">Optional Information</label>
                    <div class="col-12 mb-2 fst-italic">
                        This information is optional but it help us to serve better
                    </div>
                </div>
                <div class="row">
                    <label class="col-12 col-sm-5 col-md-4 col-form-label fw-bold">My Website Address is :</label>
                    <div class="col-sm-8 col-xl-4">
                        <input type="text" class="form-control shadow-none rounded-0 p-0">
                    </div>
                </div>
                <div class="row">
                    <label class="col-12 col-form-label fw-bold">Tell Us More About Your Organization :</label>
                    <div class="col-12 col-md-8">
                        <textarea  class="form-control shadow-none rounded-0 p-0"></textarea>
                    </div>
                </div>
                <div class="row">
                    <label class="col-12 col-form-label fw-bold">What I'd really like to know :</label>
                    <div class="col-12 col-md-8">
                        <textarea class="form-control shadow-none rounded-0 p-0"></textarea>
                    </div>
                </div>
                <div class="mt-2 row">
                    <div class="col-sm-8 col-xl-4">
                        <button class="fw-bold ps-3 pe-3 border-1" type="submit" value="submit" id="formSubmit">Send Message</button>
                        <button class="fw-bold ps-3 pe-3 border-1" type="reset"  id="clearForm">Clear Form</button>
                    </div>
                </div>
            </form>
        </div>
        `;
    }
}