// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

let validation = (type, value) => {
    switch (type) {
        case "email":
            return validateEmail(value);
            break;
        case "website":
            console.log(value, "--", validateWebpage(value));
            return validateWebpage(value);
            break;
        case "mobile":
            return validateMobileNumber(value);
            break;
        default:
            return true;
    }
}

let validateEmail = (email) => {
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegExp.test(email);
}
let validateWebpage = (website) => {
    const websiteRegExp = /^(ftp|http|https):\/\/(www).[\w\-~]+\.[a-z]+$/;
    return websiteRegExp.test(website);
}
let validateMobileNumber = (mobile) => {
    const mobileRegExp = /^\d{10}$/;
    return mobileRegExp.test(mobile);
}

let feedbackHandler = () => {
    $('#name').on('input change', () => {
        $('#nameRequired').hide()
        if ($('#name').val() == '') $('#nameRequired').show()
    });
    $('#email').on('input change', () => {
        $('#emailRequired').hide()
        let email = $('#email').val();
        validateEmail(email) ? $('#emailHelp').hide() : $('#emailHelp').show();
        if ($('#email').val() == '') $('#emailRequired').show()
    });
    $('#mobile').on('input change', () => {
        $('#mobileRequired').hide()
        let mobileNum = $('#mobile').val();
        validateMobileNumber(mobileNum.toString()) ? $('#mobileHelp').hide() : $('#mobileHelp').show();
        if ($('#mobile').val() == '') $('#mobileRequired').show()
    });
    $('#website').on('input change', () => {
        let website = $('#website').val();
        validateWebpage(website) ? $('#websiteHelp').hide() : $('#websiteHelp').show();
    });
    $('#address').on('input change', () => {
        $('#addressRequired').hide()
        if ($('#address').val() == '') $('#addressRequired').show()
    });
};

let formSubmission = () => {
    $('#submit-button').click(() => {

        hideInvalidFeedbacks();

        var check = true;
        $('#employee-form input').each(function () {
            if (this.value == '' && $(this).prop('required')) {
                $('#' + $(this).attr('id') + 'Required').show();
                check = false;
            } else {
                if (!validation($(this).attr('id'), this.value) && this.value != '') {
                    console.log(this.value);
                    $('#' + $(this).attr('id') + 'Help').show();
                    check = false;
                }
            }
        })
        if ($('#address').val() == '') {
            $('#addressRequired').show();
            check = false;
        }
        return check;
    })
};

let hideInvalidFeedbacks = () => {
    $('.invalid').hide()
};

$(document).ready(() => {
    hideInvalidFeedbacks();

    feedbackHandler();

    formSubmission();
});
