$(document).ready(function () {
    $("#register").click(function () {
        var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
        var phoneRegex = /^[0-9]{8,10}$/;
        var RegisterAs = $("#RegisterAs").val();
        var Email = $("#Email").val();
        var Password = $("#Password").val();
        var ConfirmPassword = $("#ConfirmPassword").val();
        var FullName = $("#FullName").val();
        var DisplayName = $("#DisplayName").val();
        var MobileNumber = $("#MobileNumber").val();
        var Gender = $("#Gender").val();
        var Captcha = $("#Captcha").val();
      
        if ($("#RegisterAs").val() == "") {
            $("#registerAs").html("Please select an option");
            return false;
        }
        else if ($("#Email").val() == "") {
            $("#email").html("Please enter valid email ID(example: *****@*****.com");
            return false;
        }
        else if (!emailRegex.test(Email)) {
            $("#Email").focus();
            $("#email").html("enter the valid email");
            return false;
        }
        else if ($("#Password").val() == "") {
            $("#Password").focus();
            $("#password").html("Please fill this field");
            return false;
        }
        else if (!phoneRegex.test(Password) && $("#Password").val().length < 8) {
            $("#Password").focus();
            $("#password").html("Only numbers Allowed it should be more than 8");
            return false;
        }
        else if ($("#ConfirmPassword").val() == "") {
            $("#ConfirmPassword").focus();
            $("#confirmPassword").html("Please fill this field");
            return false;
        }
        else if ($("#FullName").val() == "") {
            $("#FullName").focus();
            $("#fullName").html("Please fill this field");
            return false;
        }
        else if ($("#DisplayName").val() == "") {
            $("#DisplayName").focus();
            $("#displayName").html("Please fill this field");
            return false;
        }
        else if ($("#MobileNumber").val() == "") {
            $("#MobileNumber").focus();
            $("#mobileNumber").html("Please fill this field");
            return false;
        }
        else if (!phoneRegex.test(MobileNumber) && $("#MobileNumber").val().length < 8) {
            $("#MobileNumber").focus();
            $("#mobileNumber").html("Only numbers Allowed it should be more than 8");
            return false;
        }
        else if ($("#Gender").val() == "") {
            $("#Gender").focus();
            $("#gender").html("Please select an option");
            return false;
        }
        else if ($("#Captcha").val() == "") {
            $("#Captcha").focus();
            $("#captcha").html("Please enter valid captcha(example: #DEMO#)");
            return false;
        }
        else if (!jQuery("#checkbox").is(":checked")) {
            document.getElementById('textBox').innerHTML = "Please click terms & conditions";
            return false;
        }
        else if ($(RegisterAs != '' && Email != '' && Password != '' && ConfirmPassword != '' && FullName != '' && DisplayName != '' && MobileNumber != '' && Gender != '' && Captcha != ''))
        {
            alert('Registered Successfully');
        }
        });
});