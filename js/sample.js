console.log("JS is working");

$(document).ready(function() {
    console.log("jQuery is working");
    // -------------------------------- JQUERY VALIDATION --------------------------------
    $("#confirm").dialog({
        title: "Submit application?",
        autoOpen: false,
        buttons: [
            {
                text: "I agree",
                icon: "ui-icon-check",
                click: function () {
                    $(this).dialog("close");
                }
            },
            {
                text: "Cancel",
                icon: "ui-icon-cancel",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });

    $('#email').keyup(function () {
        var email = $(this).val();
        if (checkEmail(email)) {
            $('#email+label').text("Enter a valid Email as: abcd@gmail.com").css('color', 'darkred');
        } else {
            $('#email+label').text("");
        }
    });

    $("#testForm0").validate({
        rules: {
            required: true,
            email: true,
            phone: true,
            first_name: true,
            last_name: true,
            dob: true,
            gender: true,
            address: true,
            address_city: true,
            address_state: true,
            address_zip: true,
            date: true,
            position: true,
            salary: true,
            ssn: true,
            citizen: true,
            work: true
        },
        messages: {
            email: {required: 'Enter a valid email as: abcd@gmail.com.'},
            phone: {required: 'Enter a valid Phone Number as: 555-555-5555'},
            gender: {required: 'Please choose you gender.'},
            citizen: {required: 'Please answer the question.'},
            work: {required: 'Please answer the question.'}
        },
        // https://stackoverflow.com/questions/43992589/how-to-show-validation-message-after-radio-buttons
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.insertAfter(element.parent());
            } else { // This is the default behavior of the script for all fields
                error.insertAfter(element);
            }
        }
        //

    });
    $("#testForm1").validate({
        rules: {
            required: true,
            worked: true,
            felony_explain: true,
            work_date_start: true,
            pr_supervisor1: true,
            pr_supervisor2: true,
            responsibilities: true,
            responsibilities2: true,
            reason: true,
            reason2: true,
            company_phone: true,
            company_phone2: true
        },
        messages: {
            worked: {required: 'Please answer the question.'},
            felony_explain: {required: 'Please answer the question'},
            pr_supervisor1: {required: 'Please answer the question.'},
            pr_supervisor2: {required: 'Please answer the question.'},
            responsibilities: {required: 'Please answer the question.'},
            responsibilities2: {required: 'Please answer the question.'},
            reason: {required: 'Please answer the question.'},
            reason2: {required: 'Please answer the question.'},
            company_phone: {required: 'Enter a valid Phone Number as: 555-555-5555'},
            company_phone2: {required: 'Enter a valid Phone Number as: 555-555-5555'},
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.insertAfter(element.parent());
            } else { // This is the default behavior of the script for all fields
                error.insertAfter(element);
            }
        }
    });
    $("#testForm2").validate({
        rules: {
            required: true,
            graduate: true,
            graduate_college: true,
            graduate_other: true
        },
        messages: {
            graduate: {required: 'Please answer the question.'},
            graduate_college: {required: 'Please answer the question.'},
            graduate_other: {required: 'Please answer the question.'}
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.insertAfter(element.parent());
            } else { // This is the default behavior of the script for all fields
                error.insertAfter(element);
            }
        }
    });
    $("#testForm3").validate({
        rules: {
            required: true,
            military: true,
        },
        messages: {
            military: {
                required: 'Please answer the question.'
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.insertAfter(element.parent());
            } else { // This is the default behavior of the script for all fields
                error.insertAfter(element);
            }
        }
    });
    $("#testForm4").validate({
        rules: {
            required: true,
            signature: true,
            today: true
        },
        message: {
            signature: {
                required: "Please type your first and last name."
            },
        }
    });

    $("#tabs").tabs({

        disabled: [1, 2, 3, 4],
        active: 0,
        heightStyle: "content"

    });

    $("#tab0submit").button();
    $("#tab0submit").click(function () {

        if ($("#testForm0").valid()) {
            $("#tabs").tabs({
                disabled: [0, 2, 3, 4],
                active: 1
            });
        }
    });

    $("#tab1submit").button();
    $("#tab1submit").click(function () {

        if ($("#testForm1").valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 3, 4],
                active: 2
            });
        }
    });

    $("#tab2submit").button();
    $("#tab2submit").click(function () {

        if ($("#testForm2").valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 2, 4],
                active: 3
            });
        }
    });

    $("#tab3submit").button();
    $("#tab3submit").click(function () {

        if ($("#testForm3").valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 2, 3],
                active: 4
            });
        }
    });
    $("#tab4submit").button();
    $("#tab4submit").click(function () {

        if ($("#testForm4").valid()) {

            // bring up a jqueryui confirm dialog
            $("#confirm").dialog("open");
        }

    });
});

// these function don't work, so I used inputmask
/*
function checkSSN(soc) {
	ssnRegExp = new RegExp('\d{3}-\d{2}-\d{4}');
	return ssnRegExp.test(soc);
}

function checkPhoneNumber(num) {
	phoneNum = new RegExp('^[1-9]\d{2}-\d{3}-\d{4}');
	return phoneNum.test(num);
}*/

function checkEmail(email) {
    emailRegExp = new RegExp('\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}\b');
    return emailRegExp.test(email);
}
