console.log("file loaded");

var input=$(".form-control");
var srhbtn=$(".btn");
var output=$("#output");
var cityname=input.val();
srhbtn.on('click',function(){
    console.log("clicked");
    
var apiUrl='http://api.openweathermap.org/data/2.5/weather?q='+cityname+'&units=metric&appid=f8687cf28c78e651500c99fd94acb344';
console.log(srhbtn);
    
    $.ajax({url:apiUrl, success: function(result){
            console.log(result.main.temp);
        output.html(result.main.temp+ "&#8451;");
           }});

});