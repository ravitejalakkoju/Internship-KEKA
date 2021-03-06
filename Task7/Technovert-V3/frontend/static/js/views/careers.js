import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Careers");
    }

    async getHTML(){
        return `
        <div class="careers p-3 ps-xl-5" id="career-content">
            <h3 class="century-gothic fs-4">Careers at Technovert</h3>
            <p class="small col-xl-10">
                We are looking for smart people who love fiddling with code and pour their heart into it.If you are one, we would like to talk to you.Please fill the form below and we will get back to you.
            </p>
            <div id="warning"></div>
            <form name="careersForm" class="p-3">
                <div class="mb-3 row">
                    <label class="col-sm-3 col-xl-2 col-form-label fw-bold">Name</label>
                    <div class="col-sm-8 col-xl-4">
                        <input type="text"  name="your-name" class="form-control shadow-none rounded-0 p-1 required" required>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-3 col-xl-2 col-form-label fw-bold">Email</label>
                    <div class="col-sm-8 col-xl-4">
                        <input id="emailInput" type="email" name="your-email" class="form-control shadow-none rounded-0 p-1 required" pattern="[a-z]+\.[0-9]+_[a-z]+@[a-z]+\.[a-z]+" placeholder="xyz.123_abc@hyd-office.co.in" required>
                    </div>
                    <div id="emailHelp" class="form-text col-12 col-xl-4 text-danger"></div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-3 col-xl-2 col-form-label fw-bold">Desired Role</label>
                    <div class="col-sm-8 col-xl-4">
                        <!-- <input type="select" list="datalistOptions"  name="your-role" class="form-control shadow-none rounded-0 p-1 required" required> -->
                        <select id="datalistOptions" class="form-control shadow-none rounded-0 p-1 required" name="your-role" required>
                            <option value="">Select Role</option>
                            <option value="UI Developer">UI Developer</option>
                            <option value="Front End Developer">Front End Developer</option>
                            <option value="Full Stack Developer">Full Stack Developer</option>
                            <option value="Quality Analyst">Quality Analyst</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-3 col-xl-2 col-form-label fw-bold">Upload Resume</label>
                    <div class="col-sm-6 col-xl-4">
                        <span class="form-control shadow-none rounded-0 p-1 text-secondary required" id="filename">No file chosen</span>
                    </div>
                    <input type="file" name="your-resume" accept=".pdf" class="shadow-none rounded-0 p-1 mb-1 col-sm-3 col-xl-2" style="color: transparent;" id="resumeUpload" required>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-3 col-xl-2 col-form-label fw-bold"></label>
                    <div class="col-sm-8 col-xl-4">
                        <button class="fw-bold ps-2 pe-5 border-1" type="submit" value="submit" id="formSubmit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        `;
    }
    
}