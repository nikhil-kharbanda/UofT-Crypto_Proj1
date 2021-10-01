let clearButton = document.querySelector('#clearBtn')

  $( function() {
    let bitcoin = [
        "btc",
        "eth",
        "ltc",
        "bch",
        "bnb",
        "eos",
        "xrp",
        "xlm",
        "link",
        "dot",
        "yfi",
        "usd",
        "aed",
        "ars",
        "aud",
        "bdt",
        "bhd",
        "bmd",
        "brl",
        "cad",
        "chf",
        "clp",
        "cny",
        "czk",
        "dkk",
        "eur",
        "gbp",
        "hkd",
        "huf",
        "idr",
        "ils",
        "inr",
        "jpy",
        "krw",
        "kwd",
        "lkr",
        "mmk",
        "mxn",
        "myr",
        "ngn",
        "nok",
        "nzd",
        "php",
        "pkr",
        "pln",
        "rub",
        "sar",
        "sek",
        "sgd",
        "thb",
        "try",
        "twd",
        "uah",
        "vef",
        "vnd",
        "zar",
        "xdr",
        "xag",
        "xau",
        "bits",
        "sats"
    ];
    $( "#tags" ).autocomplete({
      source: bitcoin
    });
} );
// demo chart
let chart = document.getElementById("cyptochart");
let lineCrypto = new Chart(chart,{
  type: "line",
  data:{
      label:["January","February","March","April","May","June","July"],
      datasets: [{
        label: 'My First Dataset',
        fill: false,
        tension: 0.1,
        backgroundColor: "red",
        borderColor: 'red',
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJointStyle: "miter",
        pointBorderColor: "purple",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "orange",
        pointHoverBorderColor: "green",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,        
        data: ["65", "59", "80", 81, 56, 55, 40],
      }
    ]
} });


function clearEntries() {
    document.getElementById('tags').value = ''
}

clearButton.addEventListener('click', clearEntries)