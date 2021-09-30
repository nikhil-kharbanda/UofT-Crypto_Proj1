let clearButton = document.querySelector('#clearBtn');
let cyrptoInput = document.getElementById("tags");


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

function clearEntries() {
    document.getElementById('tags').value = ''
}

clearButton.addEventListener('click', clearEntries)

function crypto(cryptoID){
  var statusPingUrl = "https://api.coingecko.com/api/v3/ping";

  fetch(statusPingUrl)
  .then(function (response) {
    console.log(response.status);
    return response.json();
  })
  .then(function (response){

  })
}

crypto("btc");