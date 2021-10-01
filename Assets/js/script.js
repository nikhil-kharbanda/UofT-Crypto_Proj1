let clearButton = document.querySelector("#clearBtn");
let cyrptoInput = document.getElementById("tagsCrypto");
let stockInput = document.getElementById("tagsStocks");
let cryptoIDEl = document.getElementById("cryptoID");
let cryptoValInput = document.getElementById("cryptoVal");
let cyptoPriceEl = document.getElementById("cyptoPrice");
let stockBtn = document.getElementById("stocksearch-btn");
let cyrptoBtn = document.getElementById("crytosearch-btn");
let CrypNameEl = document.querySelector('.nameDis')
let CrypPriceEl = document.querySelector('.priceDis')
let CrypCapEl = document.querySelector('.capDis')
let CrypVolEl = document.querySelector('.volumeDis')
let CrypChangeEl = document.querySelector('.changeDis')
let CrypUpdateEl = document.querySelector('.updateDis')
let stockPriceEl = document.querySelector('.stockPrice')
let stockChangeEl = document.querySelector('.stockChange')
let stockVolEl = document.querySelector('.stockVol')

// let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

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

  if (document.getElementById("tagsCrypto").value === ""){
    CrypNameEl.textContent = "";
    CrypPriceEl.textContent = "";
    CrypCapEl.textContent = "";
    CrypVolEl.textContent = "";
    CrypChangeEl.textContent = "";
    CrypUpdateEl.textContent = "";
    stockPriceEl.textContent = "";
    stockChangeEl.textContent = "";
    stockVolEl.textContent = "";
    console.log('clear')
  } else {
    console.log('not')
  }
}

function crypto(cryptoName) {
  symbolToId(cryptoName);


  let cryptoURL =
    "https://api.coingecko.com/api/v3/simple/price?ids=" +
    cryptoID +
    "&vs_currencies=cad&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true";

  console.log("Crypto ID in link: " + cryptoID);

  fetch(cryptoURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);

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
      CrypNameEl.textContent = "Name: " + cryptoName + " (" + cryptoSymbol + ")"
      break;
    }
  }
  console.log("cryptoSymbol: " + cryptoSymbol);
  console.log("cryptoID: " + cryptoID);
  console.log("cryptoNameVal: " + cryptoNameVal);
}

function CryptoCad(params) {
  var price = params.cad;
  CrypPriceEl.textContent = "Price: " + price
  console.log(price);
}

function CryptoCadMarketCap(params) {
  var marketCap = params.cad_market_cap;
  CrypCapEl.textContent = "Market Cap: " + marketCap
  console.log(marketCap);
}

function CryptoCad24HrVol(params) {
  var dayVol = params.cad_24h_vol;
  CrypVolEl.textContent = "24Hr Volume: " + dayVol
  console.log(dayVol);
}

function CryptoCad24HrChange(params) {
  var dayChange = params.cad_24h_change;
  CrypChangeEl.textContent = "24Hr Change: " + dayChange
  console.log(dayChange);
}

function CryptoCadLastUpdated(params) {
  var lastUpdated = params.last_updated_at;
  CrypUpdateEl.textContent = "Last Updated: " + lastUpdated
  console.log(lastUpdated);
}

function stocks(stockName) {
  var stockURL = "https://realstonks.p.rapidapi.com/" + stockName; 

  fetch(stockURL, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "realstonks.p.rapidapi.com",
      "x-rapidapi-key": "91a8b7b9famsh4d5df90c14848c2p1df4c3jsnef587f1e29d5",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var priceParsed = JSON.parse(data);
      var price = priceParsed.price;
      var changePercentage = priceParsed.change_percentage;
      var changetotalVol = priceParsed.total_vol;
      stockPriceEl.textContent = "Price: " + price
      stockChangeEl.textContent = "Change Percentage: " + changePercentage + "%"
      stockVolEl.textContent = "Change Total Volume: " + changetotalVol
      console.log(price);
      console.log(changePercentage);
      console.log(changetotalVol);
    })
    .catch((err) => {
      console.error(err);
    });
}

cyrptoBtn.addEventListener("click", function () {
  let cryptoIDInput = tagsCrypto.value;
  console.log(cryptoIDInput);
  crypto(cryptoIDInput);
});

stockBtn.addEventListener("click", function () {
  let stockIDInput = tagsStocks.value;
  console.log(stockIDInput);
  stocks(stockIDInput);
});

