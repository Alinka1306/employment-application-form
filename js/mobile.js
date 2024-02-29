console.log("JS is working");
$(document).ready(function(){
    console.log("jQuery is working");
    $('div.card').mouseover(function() {
        $(this).css({'background-color': 'white',
                            'box-shadow': '0 0 20px 15px #CBC3E3'});
    });
    $('div.card').mouseout(function() {
        $(this).css({'background-color': '#CBC3E3',
                            'box-shadow': 'none'});
    });
    $('p.title a').mouseover(function() {
        $(this).css({'color': 'white',
                            'font-weight': 'bold',
                            'background-color': '#64408c',
                            'border-radius': '30px',
                            'padding': '10px'});
    });
    $('p.title a').mouseout(function() {
        $(this).css({'color': '#64408c',
                            'font-weight': 'bold',
                            'background-color': '#CBC3E3',
                            'border-radius': '30px',
                            'padding': '10px'});
    });
    $('.header_mobile').click(function() {
        "https://www.yamaha.com/en/"
    });
});