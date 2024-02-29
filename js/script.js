console.log("JS is working");

var positions = ["Brand Manager",
                "Business Intelligence Supervisor",
                "Design Engineer",
                "Controls Engineer",
                "Business Process Consultant",
                "District Sales Manager",
                "Electrical Design Engineer",
                "Financial Analyst",
                "Marketing Research Specialist",
                "Operations Analyst",
                "Staff Accountant",
                "Technical Specialist",
                "Vehicle Test Technician",
                "Video Production Specialist",
                "Wholesale Relationship Manager"]

$(document).ready(function(){
    console.log("jQuery is working");
    $('.before_today').datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '-120:+0',
        maxDate: 0,
        dateFormat: 'm-dd-yy'
    });
    $('.after_today').datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: 0,
        dateFormat: 'm-dd-yy'
    });
    $('input.end_of_study').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'm-dd-yy'
    });
    $('#today').datepicker({
        dateFormat: 'm-dd-yy',
        minDate: -1,
        maxDate: +1
    });
    $('.submit').button();

    $('#previous_job1').hide();                                   // previous employment 1
    $('#previous_job1 input').removeClass('required');
    $('#job1 > p').click(function() {
        $('#job1 div').toggle();
        $('#previous_job2 input').toggleClass('required');
        $(this).toggleClass('current');
    });
    $('#previous_job2').hide()                                  // previous employment 2
    $('#previous_job2 input').removeClass('required');
    $('#job2 > p').click(function() {
        $('#job2 div').toggle();
        $('#previous_job2 input').toggleClass('required');
        $(this).toggleClass('current');
    });
    $('#college').hide()                                  // college
    $('#college input').removeClass('required');
    $('#education2 > p').click(function() {
        $('#education2 div').toggle();
        $('#college input').toggleClass('required');
        $(this).toggleClass('current');
    });
    $('#other_college').hide()                                  // other educational institution
    $('#other_college input').removeClass('required');
    $('#education3 > p').click(function() {
        $('#education3 div').toggle();
        $('#other_college input').toggleClass('required');
        $(this).toggleClass('current');
    });
    $('#nmn').click(function() {
       $('#middle_i').toggle();
    });
    $('.click_this_to_hide').click(function() {
        $('.hide_at_first').hide();
    });
    $('.click_this_to_show').click(function() {
        $('.hide_at_first').show();
    });
    $('.hide_at_first').hide();

    $('.click_this_to_hide_2').click(function() {
        $('.hide_at_first_2').hide();
    });
    $('.click_this_to_show_2').click(function() {
        $('.hide_at_first_2').show();
    });
    $('.hide_at_first_2').hide();

    $('.click_this_to_hide_3').click(function() {
        $('.hide_at_first_3').hide();
    });
    $('.click_this_to_show_3').click(function() {
        $('.hide_at_first_3').show();
    });
    $('.hide_at_first_3').hide();

    // to count the year salary when entering hour salary
    var hour_qty = 2080;
    var hour_salary = $('#salary').val();
    hour_salary = parseInt(hour_salary);
    var year_salary = hour_qty * hour_salary;
    year_salary = year_salary.toFixed(2);
    // $('#year_salary').val(year_salary);
    $('#salary').blur(function() {
       var fieldValue = $(this).val();
       if (isNaN(fieldValue)) {
           alert('Please supply a number.');
       }
    });

    $("#position").autocomplete({
        source: positions
    });
    $("input.phone_number").inputmask('999-999-9999');
    $("#ssn").inputmask('999-99-9999');

    $('#salary').blur(function() {
        var fieldValue = $(this).val();
        if (isNaN(fieldValue)) {
            alert('Please supply a number.');
        } else {
            var hour_qty = 2080;
            var hour_salary = $('#salary').val();
            if (hour_salary <= 100 && hour_salary > 0) {
                var year_salary = hour_qty * hour_salary;
                year_salary = "Year Salary ≈  $" + year_salary;
                // $('#year_salary').val(year_salary);
                $('#year_salary').html(year_salary);
            } else if (hour_salary < 0) {
                var message = "We would love to hire you so that you can work for free or even pay us. <span class='bigger'>&#128521;</span>"
                $('#year_salary').html(message);
            } else {
                var message = "You have chosen too much salary, please do not make us bankrupt. <span class='bigger'>&#128552;</span>"
                $('#year_salary').html(message);
            }
        }
    });




});


