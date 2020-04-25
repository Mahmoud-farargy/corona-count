$(function(){
    var coronaGlobal = "https://api.thevirustracker.com/free-api?global=stats";
    $.getJSON(coronaGlobal,{

    }).done(function(mainData){
        console.log(mainData)
        $(mainData).each(function(index, result){
            var totalCasesFormatted = (mainData.results[0].total_cases).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            var totalRecoveredFormatted = (mainData.results[0].total_recovered).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            var totalDeathsFormatted = (mainData.results[0].total_deaths).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            var totalDeathsTodayFormatted = (mainData.results[0].total_new_deaths_today).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            var totalAffectedCountriesFormatted = (mainData.results[0].total_affected_countries).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            $(".mainSummary").append($("<tr>").append($("<td>").append(totalCasesFormatted).css("color","rgb(221, 221, 73)")).append($("<td>").append(totalDeathsFormatted).css("color","rgb(124, 39, 39)")).append($("<td>").append(totalRecoveredFormatted).css("color","rgb(52, 158, 52)")
                ).append($("<td>").append(totalDeathsTodayFormatted).css("color","rgb(197, 62, 21)"))
                .append($("<td>").append(totalAffectedCountriesFormatted))
            );
        });

        $(mainData).each(function(index, result){
            var totalCasesFormatted = (mainData.results[0].total_cases).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            var totalRecoveredFormatted = (mainData.results[0].total_recovered).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            var totalDeathsFormatted = (mainData.results[0].total_deaths).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            var totalDeathsTodayFormatted = (mainData.results[0].total_new_deaths_today).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            var totalAffectedCountriesFormatted = (mainData.results[0].total_affected_countries).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            $(".mainSummary2").append($("<li class='list-group-item'>").html("Total Cases <br>").append(totalCasesFormatted).css("color","rgb(245, 176, 29)")).append($("<li class='list-group-item'>").html("Total Cases <br>").append(totalDeathsFormatted).css("color","rgb(124, 39, 39)")).append($("<li class='list-group-item'>").html("Total Recovered <br>").append(totalRecoveredFormatted).css("color","rgb(52, 158, 52)")
                ).append($("<li class='list-group-item'>").html("Total Deaths Today <br>").append(totalDeathsTodayFormatted).css("color","rgb(197, 62, 21)"))
                .append($("<li class='list-group-item'>").html("Total Affected Countries <br>").append(totalAffectedCountriesFormatted))
            ;
        });
    }).fail(function(){
        alert("Could not find API. Please refresh the page.");
    })
    var coronaCountries= "https://api.covid19api.com/summary"
   $.getJSON(coronaCountries,{
}).done( function(data){
       console.log(data);
    $(".lastUpdate").append(data.Date);
        $(data.Countries).each(function(index, country){
    $(".totalSummary").append($("<tr>")).append($("<td>").append(country.Country));
            var confirmedCases = (country.TotalConfirmed).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
    $(".totalSummary").append($("<td>").append(confirmedCases).css("font-size","21px").css("color","rgb(218, 136, 29)"));
    var deathsNumbersFormatted = (country.TotalDeaths).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
    $(".totalSummary").append($("<td scoped>").append(deathsNumbersFormatted).addClass("text-danger").css("font-size","21px"));
    var recoveredNumbersFormatted = (country.TotalRecovered).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
    $(".totalSummary").append($("<td>").append(recoveredNumbersFormatted).addClass("text-success").css("font-size","21px"));
    var newConfirmedNumbersFormatted= (country.NewConfirmed).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
    $(".totalSummary").append($("<td>").append(newConfirmedNumbersFormatted));
    });

        
   }).fail( function(){
        alert("Could not find the API, try again later.");
   });
});

// var formatter = new Intl.NumberFormat('en-US', {
//     style:"currency",
//     currency: 'USD'

// });
// console.log(formatter.format(20000));
// console.log((3000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') );

new Vue({
    el: "#app",
    data:{
        totalSummary: []
    }
    ,
    created(){
        // console.log(this.totalSummary);
        setTimeout( function(){
            location.reload()
        }, 300000)
    }
});