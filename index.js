var covidData
window.onload = function zusammenfassung() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.covid19api.com/summary",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
        },
        "processData": false,
    }
    $.ajax(settings).done(function (response) {
        covidData = response;
        var array = response.Countries;
        for (let i = 0; i < Object.keys(array).length; i++) {
            const element = array[i];

            document.getElementById("select").innerHTML += `
    <option value="${i}">${element.Country} - ${element.CountryCode}</option>
    `
        }
    })
}

document.getElementById("select").addEventListener("change", loadData)
function loadData() {
    var land = covidData.Countries[document.getElementById("select").value]
    document.getElementById("landFaelle").innerText = land.TotalConfirmed.toLocaleString('de-DE')
    document.getElementById("landGenesen").innerText = land.TotalRecovered.toLocaleString('de-DE')
    document.getElementById("landtod").innerText = land.TotalDeaths.toLocaleString('de-DE')

    document.getElementById('nameland').innerHTML = land.Country;
    document.getElementById("landBild").src = `https://flagcdn.com/${land.CountryCode.toLowerCase()}.svg`

}


var summary = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.covid19api.com/summary",
    "method": "GET",
    "headers": {}
}

$.ajax(summary).done(function (json) {

    document.getElementById('fälle').innerHTML = json.Countries[63].TotalConfirmed.toLocaleString('de-DE');
    document.getElementById('genesen').innerHTML = json.Countries[63].TotalRecovered.toLocaleString('de-DE');
    document.getElementById('todesfälle').innerHTML = json.Countries[63].TotalDeaths.toLocaleString('de-DE');

    document.getElementById('faelleplus').innerHTML = json.Countries[63].NewConfirmed.toLocaleString('de-DE')+"+";
    document.getElementById('genesenplus').innerHTML = json.Countries[63].NewRecovered.toLocaleString('de-DE')+"+";
    document.getElementById('todesfälleplus').innerHTML = json.Countries[63].NewDeaths.toLocaleString('de-DE')+"+";

    var dateZAHLEN = new Date(json.Date);
    document.getElementById('dateeeee').innerHTML = "Letzte Aktualisierung: "+dateZAHLEN.toLocaleString('de-DE');


});


var summaryparttwo = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.corona-zahlen.org/germany",
    "method": "GET",
    "headers": {}
}

$.ajax(summaryparttwo).done(function (json) {

    document.getElementById('inzidenz').innerHTML = "7-Tage Inzidenz: "+json.weekIncidence.toLocaleString('de-DE');

    var dateInzidenzzzz = new Date(json.meta.lastUpdate);
    document.getElementById('dateInzidenz').innerHTML = "Letzte Aktualisierung: "+dateInzidenzzzz.toLocaleString('de-DE');

});



var impfung = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.corona-zahlen.org/vaccinations",
    "method": "GET",
    "headers": {}
}

$.ajax(impfung).done(function (json) {

    document.getElementById('verabreicht').innerHTML = json.data.administeredVaccinations.toLocaleString('de-DE');
    document.getElementById('zweiteimpfung').innerHTML = json.data.secondVaccination.vaccinated.toLocaleString('de-DE');
    document.getElementById('ersteimpfung').innerHTML = json.data.vaccinated.toLocaleString('de-DE');

    document.getElementById('verabreichtNEU').innerHTML = json.data.latestDailyVaccinations.vaccinated.toLocaleString('de-DE')+"+";
    document.getElementById('zweiteimpfungNEU').innerHTML = json.data.latestDailyVaccinations.secondVaccination.toLocaleString('de-DE')+"+";
    document.getElementById('ersteimpfungNEU').innerHTML = json.data.latestDailyVaccinations.firstVaccination.toLocaleString('de-DE')+"+";

    document.getElementById('impfquote').innerHTML = "Impfquote: "+json.data.quote.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});

});




var ages = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.corona-zahlen.org/germany/age-groups",
    "method": "GET",
    "headers": {}
}

$.ajax(ages).done(function (json) {

    document.getElementById('04M').innerHTML = json.data["A00-A04"].casesMale.toLocaleString('de-DE');
    document.getElementById('514M').innerHTML = json.data["A05-A14"].casesMale.toLocaleString('de-DE');
    document.getElementById('1534M').innerHTML = json.data["A15-A34"].casesMale.toLocaleString('de-DE');
    document.getElementById('3559M').innerHTML = json.data["A35-A59"].casesMale.toLocaleString('de-DE');
    document.getElementById('6079M').innerHTML = json.data["A60-A79"].casesMale.toLocaleString('de-DE');
    document.getElementById('80M').innerHTML = json.data["A80+"].casesMale.toLocaleString('de-DE');

    document.getElementById('04W').innerHTML = json.data["A00-A04"].casesFemale.toLocaleString('de-DE');
    document.getElementById('514W').innerHTML = json.data["A05-A14"].casesFemale.toLocaleString('de-DE');
    document.getElementById('1534W').innerHTML = json.data["A15-A34"].casesFemale.toLocaleString('de-DE');
    document.getElementById('3559W').innerHTML = json.data["A35-A59"].casesFemale.toLocaleString('de-DE');
    document.getElementById('6079W').innerHTML = json.data["A60-A79"].casesFemale.toLocaleString('de-DE');
    document.getElementById('80W').innerHTML = json.data["A80+"].casesFemale.toLocaleString('de-DE');

});


var genaueinzidenz = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.corona-zahlen.org/germany/history/incidence/7",
    "method": "GET",
    "headers": {}
}

$.ajax(genaueinzidenz).done(function (json) {
    
    let Data1 = json.data[0].weekIncidence.toLocaleString('de-DE');
    let Data1Date = json.data[0].date;

    let Data2 = json.data[1].weekIncidence.toLocaleString('de-DE');
    let Data2Date = json.data[1].date;

    let Data3 = json.data[2].weekIncidence.toLocaleString('de-DE');
    let Data3Date = json.data[2].date;

    let Data4 = json.data[3].weekIncidence.toLocaleString('de-DE');
    let Data4Date = json.data[3].date;

    let Data5 = json.data[4].weekIncidence.toLocaleString('de-DE');
    let Data5Date = json.data[4].date;

    let Data6 = json.data[5].weekIncidence.toLocaleString('de-DE');
    let Data6Date = json.data[5].date;

    let Data7 = json.data[6].weekIncidence.toLocaleString('de-DE');
    let Data7Date = json.data[6].date;


    var options = {
        chart: {
          type: 'line',
          fontFamily: 'Poppins, sans-serif',
          height: 300,
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: undefined,
              },
              png: {
                filename: undefined,
              }
            },
            autoSelected: 'zoom' 
          },
        },
        tooltip: {
            enabled: false,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            theme: false,
        },
        series: [{
          name: 'INZIDENZ',
          data: [Data1,Data2,Data3,Data4,Data5,Data6,Data7]
        }],
        dataLabels: {
            enabled: true,
        },
        toolbar: {
            show: false,
          },
        xaxis: {
          categories: [Data1Date,Data2Date,Data3Date,Data4Date,Data5Date,Data6Date,Data7Date],
          labels: {
            show: false,
        },
        },
        stroke: {
            curve: 'smooth'
          },
      }
      
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      
      chart.render();


});
