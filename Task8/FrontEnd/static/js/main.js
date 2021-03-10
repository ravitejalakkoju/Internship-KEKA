$(document).ready(() => {
    let validateEmail = (email) => {
        const emailRegExp = /[a-z]+.[0-9]+_[a-z]+@[a-z]+\.[a-z]+\.[a-z]+/;
        return emailRegExp.test(email);
    }
    $('#warning').hide();
    $('#email').on('keydown change',() => {
        email = $('#email').val();
        validateEmail(email) ? $('#emailHelp').html('') : $('#emailHelp').html('Enter in correct pattern [eg., xyz.123_abc@hyd.co.in]');
    });
    $('#name').on('keydown change',() => {
        $('#nameHelp').html('');
    });

    $('#roleSelect').on('change',() => {
        role = $('#roleSelect').val();
        if(role !== '') $('#roleHelp').html('');
    });
    $('#resumeFile').change(() => {
        $('#filename').html($('#resumeFile').val());
    });
    $('#state').change(() => {
        let state = $('#state').val();
        (state !== '') ? $('#promo').val(state+'-PROMO') : $('#promo').val('');
    });
    $('#submitCareerForm').click(() => {
        let email = $('#email').val();
        let name = $('#name').val();
        let role = $('#roleSelect').val();

        if(name.length < 1) $('#nameHelp').html('Name is required *');
        if(email.length < 1) $('#emailHelp').html('Email is required *');
        if(role.length < 1) $('#roleHelp').html('Desired Role is required *');

        window.scrollTo({top: 0, behavior: 'smooth'});      
        if(!validateEmail(email) || $('#name').val().length<1 || email.length<1 || $('#roleSelect').val() === '' || $('#resumeFile').val().length < 1){
            $('#warning').show();
            return false;
        } else alert('Submitted Successfully');
    });

    $('#organization').on('input change',() => {
        $('#orgHelp').html('');
    });
    $('input[name="gender"]').click(() =>{
        let honour = $('input[name="gender"]:checked').val();
        alert(`Hello ${honour}`);
    });
    $('input[name="contactBy"]').click(() => {
        let contactBy = $('input[name="contactBy"]:checked').val();
        if(contactBy === 'email') { 
            $('#mobile').removeClass("required"); $('#mobileHelp').html('');
        } else $('#mobile').addClass('required');
    });
    let mobileHelp = () => {
        let mobileNo = $('#mobile').val();
        let mobileRegExp = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
        if(mobileRegExp.test(mobileNo)) $('#mobileHelp').html('');
        else $('#mobileHelp').html(`Invalid Number *`);
    };
    $('#mobile').on('input change', mobileHelp);
    $('#submitContactForm').click(() => {
        let email = $('#email').val();
        let name = $('#name').val();
        let organization = $('#organization').val();
        let contactChoice = $('input[name="contactBy"]:checked').val();
        let mobileFlag = false;

        if(name.length < 1) $('#nameHelp').html('Name is required *');
        if(email.length < 1) $('#emailHelp').html('Email is required *');
        if(organization.length < 1) $('#orgHelp').html('Name of Organization is required *');
        if(contactChoice !== 'email'){
            if($('#mobile').val().length < 1) {
                $('#mobileHelp').html('Mobile Number is required *'); mobileFlag = true;
            } else mobileHelp();
        }

        window.scrollTo({top: 0, behavior: 'smooth'});      
        if(!validateEmail(email) || name.length<1 || email.length<1 || organization.length < 1 || mobileFlag){
            $('#warning').show();
            return false;
        } else alert('Submitted Successfully');
    });
});