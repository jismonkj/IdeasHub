// datepicker
$( function() {
    $( "#dob" ).datepicker({
        yearRange: "1990:2002",
        changeYear: true,
        changeMonth: true,
        dateFormat: "yy-mm-dd",
        defaultDate: new Date(1990, 10 - 1, 25)
    });
  } );

//form submit
$("#regForm").submit(function (e) {
    e.preventDefault();
    if (!hasEmptyInvalidFields()) {
        $foo = $("#password-confirm");
        if (jQuery.contains(document, $foo[0])) {
            if ($('#password').val() != $('#password-confirm').val()) {
                userAlert("Passwords doesn't match");
            } else {
                $("#regForm").unbind().submit();
            }
        } else {
            $("#regForm").unbind().submit();
        }
        // $("#regForm").unbind().submit();
    } else {
        userAlert("Invalid details");
    }
});

//validation
$("body").on("blur", ".validate", function () {
    $optional = false;
    $value = $(this).val();
    $type = $(this).attr("type");
    if ($(this).hasClass("optional")) {
        $optional = true;
    }

    //custom data type
    $class = "";
    if ($(this).attr('data-type')) {
        $class = $(this).data('type');
    }

    //custom error message
    $errmessage = "";
    if ($(this).attr('data-errmessage')) {
        $errmessage = $(this).data('errmessage');
    }

    if (!inputValidate($value, $type, $optional, $class, $errmessage)) {
        //input has invalid/empty data
        $(this).addClass("invalid-data");
    } else {
        $(this).removeClass("invalid-data");
    }
});

function inputValidate($value, $type, $optional, $class, $errmessage) {
    if ($value == "" && $optional) {
        return true;
    }
    if ($value == "" && !$optional) {
        return false;
    }
    //regex set for validation
    var pattern;
    $telPattern = /^([0-9]{10})?$/;
    $walletPriceRegEx = /(\d+\.\d{1,5})/;
    $textPattern = /[A-Za-z0-9]/;
    $namePattern = /[A-Za-z ]/i;
    $numberPatt = /[0-9]/;
    $pswdPattern = /^(?=.*\d[A-Z]).{6,12}/;
    $emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    // dd/mm/yyyy
    $datePattern = /^([0-2]{1}[0-9]{1}|[0-3]{1}[0-1]{1}|[0-9]{1})\/([0]{1}[0-9]{1}|[0-1]{1}[0-2]{1}|[0-9]{1})\/([1]{1}[9]{1}[4-9]{1}[0-9]{1}|[2]{1}[0]{1}[0-1]{1}[0-9]{1})/;

    //alert for user
    switch ($type) {
        case "number":
            pattern = $numberPatt;
            $message = "Only digits please";
            if ($class == "wallet-price") {
                pattern = $walletPriceRegEx;
                $message = "Invalid Amount";
            }
            break;
        case "tel":
            pattern = $telPattern;
            $message = "10 digits needed";
            break;
        case "text":
            pattern = $textPattern;
            $message = "Contain only letters and digits"
            if ($class == "name") {
                pattern = $namePattern;
                $message = "Name should contain letters only.";
            }
            break;
        case "password":
            pattern = $pswdPattern;
            $message = "min. 6 characters, atleast 1 digit and 1 capital letter for password";
            break;
        case "date":
            $value = formatDate($value);
            pattern = $datePattern;
            $message = "Invalid date";
            break;
        case "email":
            pattern = $emailPattern;
            $message = "Email is invalid";
            break;
    }

    //if custome message is set
    if($errmessage!=""){
        $message = $errmessage;
    }

    //validate data value with regex pattern
    if (!pattern.test($value)) {
        userAlert($message);
        return false;
    }
    //finally input is valid
    return true;
}

function hasEmptyInvalidFields() {
    $length = $(".validate").length;
    for (i = 0; i < $length; i++) {
        var selector = ".validate:eq(" + i + ")";
        if (
            ($(selector).val() == "" && !$(selector).hasClass("optional")) ||
            $(selector).hasClass("invalid-data")
        ) {
            // $(selector).focus();
            // $(selector).addClass("invalid-data");
            $position = $(selector).offset().top;
            $("body, html").animate({
                scrollTop: $position
            });
            return true;
        }
    }
    return false;
    // console.log($(".validate:eq(0)").val());
}

function formatDate($value) {
    var date = new Date($value);
    $date = date.getDate();
    $month = date.getMonth() + 1;
    if ($month < 10) {
        $month = "0" + $month;
    }
    $date += "/" + $month;
    $date += "/" + date.getFullYear();
    return $date;
}

//user alert
function userAlert($message) {
    $(".alert-data").html($message);
    $(".alert-box")
        .fadeIn()
        .delay(4000)
        .fadeOut();
}