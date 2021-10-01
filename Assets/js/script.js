

let clearButton = document.querySelector("#clearBtn");
let cyrptoInput = document.getElementById("tagsCrypto");
let stockInput = document.getElementById("tagsStocks");
let cryptoIDEl = document.getElementById("cryptoID");
let cryptoValInput = document.getElementById("cryptoVal");
let cyptoPriceEl = document.getElementById("cyptoPrice");

let stockBtn = document.getElementById("stocksearch-btn");
let cyrptoBtn  = document.getElementById("crytosearch-btn");


let searchHistory = JSON.parse(localStorage.getItem("search")) || [];


const StockAPIKey = "GuBNTizmz67aMH4WgWT8t8Ozs9UX8s7U4Y2HI7n9";

let cryptoID = "";
let cryptoSymbol = "";
let cryptoNameVal = "";

let bitcoinSymbol = [
  "btc",
  "eth",
  "ltc",
  "bnb",
  "xlm",
  "link",
  "dot",
  "yfi",
  "usd",
  "bdt",
  "usdt",
  "doge",
  "uni",
];

let stockList = [
  "AAPL",
  "MSFT",
  "GOOGL",
  "AMZN",
  "FB",
  "TSLA",
  "NVDA",
  "TSM",
  "WMT",
  "NFLX",
  "PYPL",
  "NKE",
  "VZ",
  "COST",
  "MCD",
  "AMD",
  "SBUX",
  "AMD",
  "RY",
  "SONY",
  "BHP",
  "KO",
  "ADBE",
];

$(function () {
  bitcoinSymbol;
  stockList;

  $("#tagsCrypto").autocomplete({
    source: bitcoinSymbol,
  });

  $("#tagsStocks").autocomplete({
    source: stockList,
  });

});

let coinsList = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
  },

  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
  },

  {
    id: "litecoin",
    symbol: "ltc",
    name: "Litecoin",
  },

  {
    id: "binancecoin",
    symbol: "bnb",
    name: "Binance Coin",
  },

  {
    id: "stellar",
    symbol: "xlm",
    name: "Stellar",
  },

  {
    id: "chainlink",
    symbol: "link",
    name: "Chainlink",
  },

  {
    id: "polkadot",
    symbol: "dot",
    name: "Polkadot",
  },

  {
    id: "yearn-finance",
    symbol: "yfi",
    name: "yearn.finance",
  },

  {
    id: "uniswap-state-dollar",
    symbol: "usd",
    name: "unified Stable Dollar",
  },

  {
    id: "blackdragon-token",
    symbol: "bdt",
    name: "BlackDragon Token",
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
  },
  {
    id: "uniswap",
    symbol: "uni",
    name: "Uniswap",
  },
];

function clearEntries() {
  document.getElementById("tagsCrypto").value = "";
}

var btnPressed = "";
$(document).ready(function () {
  $(".cryptoBtn").on("click", function () {
    btnPressed = this.id;
    console.log(this);
    CryptoPrevValues(cryptoID);
  });
});

function crypto(cryptoName) {
  symbolToId(cryptoName);

  let cryptoURL =
    "https://api.coingecko.com/api/v3/simple/price?ids=" +
    cryptoID +
    "&vs_currencies=cad&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true";

  console.log("Crypto ID in link: " + cryptoID);

  fetch(cryptoURL)
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (response) {
      // console.log(response);

      switch (cryptoID) {
        case "bitcoin": //call the foo(response.bitcoin)
          CryptoCad(response.bitcoin);
          CryptoCadMarketCap(response.bitcoin);
          CryptoCad24HrVol(response.bitcoin);
          CryptoCad24HrChange(response.bitcoin);
          CryptoCadLastUpdated(response.bitcoin);
          break;

        case "ethereum": //call the foo(response.bitcoin)
          CryptoCad(response.ethereum);
          CryptoCadMarketCap(response.ethereum);
          CryptoCad24HrVol(response.ethereum);
          CryptoCad24HrChange(response.ethereum);
          CryptoCadLastUpdated(response.ethereum);
          break;

        case "litecoin": //call the foo(response.bitcoin)
          CryptoCad(response.litecoin);
          CryptoCadMarketCap(response.litecoin);
          CryptoCad24HrVol(response.litecoin);
          CryptoCad24HrChange(response.litecoin);
          CryptoCadLastUpdated(response.litecoin);
          break;

        case "binancecoin": //call the foo(response.bitcoin)
          CryptoCad(response.binancecoin);
          CryptoCadMarketCap(response.binancecoin);
          CryptoCad24HrVol(response.binancecoin);
          CryptoCad24HrChange(response.binancecoin);
          CryptoCadLastUpdated(response.binancecoin);
          break;

        case "stellar": //call the foo(response.bitcoin)
          CryptoCad(response.stellar);
          CryptoCadMarketCap(response.stellar);
          CryptoCad24HrVol(response.stellar);
          CryptoCad24HrChange(response.stellar);
          CryptoCadLastUpdated(response.stellar);
          break;

        case "chainlink": //call the foo(response.bitcoin)
          CryptoCad(response.chainlink);
          CryptoCadMarketCap(response.chainlink);
          CryptoCad24HrVol(response.chainlink);
          CryptoCad24HrChange(response.chainlink);
          CryptoCadLastUpdated(response.chainlink);
          break;

        case "polkadot": //call the foo(response.bitcoin)
          CryptoCad(response.polkadot);
          CryptoCadMarketCap(response.polkadot);
          CryptoCad24HrVol(response.bitcopolkadotin);
          CryptoCad24HrChange(response.polkadot);
          CryptoCadLastUpdated(response.polkadot);
          break;

        case "yearn-finance": //call the foo(response.bitcoin)
          CryptoCad(response.yearn - finance);
          CryptoCadMarketCap(response.yearn - finance);
          CryptoCad24HrVol(response.yearn - finance);
          CryptoCad24HrChange(response.yearn - finance);
          CryptoCadLastUpdated(response.yearn - finance);
          break;

        case "uniswap-state-dollar": //call the foo(response.bitcoin)
          CryptoCad(response.uniswap - state - dollar);
          CryptoCadMarketCap(response.uniswap - state - dollar);
          CryptoCad24HrVol(response.uniswap - state - dollar);
          CryptoCad24HrChange(response.uniswap - state - dollar);
          CryptoCadLastUpdated(response.uniswap - state - dollar);
          break;

        case "blackdragon-token": //call the foo(response.bitcoin)
          CryptoCad(response.blackdragon - token);
          CryptoCadMarketCap(response.blackdragon - token);
          CryptoCad24HrVol(response.blackdragon - token);
          CryptoCad24HrChange(response.blackdragon - token);
          CryptoCadLastUpdated(response.blackdragon - token);
          break;

        case "tether": //call the foo(response.bitcoin)
          CryptoCad(response.tether);
          CryptoCadMarketCap(response.tether);
          CryptoCad24HrVol(response.tether);
          CryptoCad24HrChange(response.tether);
          CryptoCadLastUpdated(response.tether);
          break;

        case "dogecoin": //call the foo(response.bitcoin)
          CryptoCad(response.dogecoin);
          CryptoCadMarketCap(response.dogecoin);
          CryptoCad24HrVol(response.dogecoin);
          CryptoCad24HrChange(response.dogecoin);
          CryptoCadLastUpdated(response.dogecoin);
          break;

        case "uniswap": //call the foo(response.bitcoin)
          CryptoCad(response.uniswap);
          CryptoCadMarketCap(response.uniswap);
          CryptoCad24HrVol(response.uniswap);
          CryptoCad24HrChange(response.uniswap);
          CryptoCadLastUpdated(response.uniswap);
          break;

        default:
          throw Error("Invalid");
      }
    });
}

clearButton.addEventListener("click", clearEntries);

function symbolToId(cryptoName) {
  for (i = 0; i < coinsList.length; i++) {
    if (cryptoName === coinsList[i].symbol) {
      cryptoSymbol = coinsList[i].symbol;
      cryptoID = coinsList[i].id;
      cryptoNameVal = coinsList[i].name;
      break;
    }
  }
  console.log("cryptoSymbol: " + cryptoSymbol);
  console.log("cryptoID: " + cryptoID);
  console.log("cryptoNameVal: " + cryptoNameVal);
}

function CryptoCad(params) {
  var price = params.cad;
  console.log(price);
}

function CryptoCadMarketCap(params) {
  var marketCap = params.cad_market_cap;
  console.log(marketCap);
}

function CryptoCad24HrVol(params) {
  var dayVol = params.cad_24h_vol;
  console.log(dayVol);
}

function CryptoCad24HrChange(params) {
  var dayChange = params.cad_24h_change;
  console.log(dayChange);
}

function CryptoCadLastUpdated(params) {
  var lastUpdated = params.last_updated_at;
  console.log(lastUpdated);
}

function CryptoPrevValues(params) {
  var stringURL = "";

  if (btnPressed === "crypto1day") {
    // console.log("This is where u want me in 1 day " + params);
    stringURL = "days=1";
  }

  if (btnPressed === "crypto14day") {
    console.log("This is where u want me in 14 days " + params);
    stringURL = "days=14";
  }

  if (btnPressed === "crypto1mth") {
    console.log("This is where u want me in 1 month " + params);
    stringURL = "days=30";
  }

  if (btnPressed === "cryptoMax") {
    console.log("This is where u want me in max " + params);
    stringURL = "days=max";
  }
  console.log(stringURL);

  prevDataURL =
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&" +
    stringURL +
    "&interval=hour";

    fetch(prevDataURL)
    .then(function (response){
      return response.json();
    })
    
}

function stocks(stockName){

  stockURL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=CAD&symbols=" + stockName;

  var options = {
    method: 'GET',
    url: 'https://rest.yahoofinanceapi.com/v11/finance/quoteSummary/' + stockName,
    params: {modules: 'defaultKeyStatistics,assetProfile'},
    headers: {
      'x-api-key': StockAPIKey
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

}

cyrptoBtn.addEventListener("click", function () {
  let cryptoIDInput = tagsCrypto.value;
  console.log(cryptoIDInput);
  crypto(cryptoIDInput);
});

stockBtn.addEventListener("click", function(){
  let stockIDInput = tagsStocks.value;
  console.log(stockIDInput);
  stocks(stockIDInput);
})