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

    var options = {
        series: [{
        data: [land.TotalConfirmed, land.TotalRecovered, land.TotalDeaths]
      }],
        chart: {
        type: 'bar',
        height: 300
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
          style: {
            colors: ['#fff']
          }
        }
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        colors: ['#1f2937']
      },
      xaxis: {
        categories: ['Fälle', 'Genesen', 'Todesfälle'],
      }
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();


      document.getElementById("landBild").src = `https://flagcdn.com/${land.CountryCode.toLowerCase()}.svg`

}


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.covid19api.com/summary",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (json) {

    document.getElementById('fälle').innerHTML = json.Global.TotalConfirmed.toLocaleString('de-DE');
    document.getElementById('genesen').innerHTML = json.Global.TotalRecovered.toLocaleString('de-DE');
    document.getElementById('todesfälle').innerHTML = json.Global.TotalDeaths.toLocaleString('de-DE');


});