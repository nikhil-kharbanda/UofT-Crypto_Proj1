/*Button variable elements*/
let clearButton = document.querySelector("#clearBtn");
let stockBtn = document.getElementById("stocksearch-btn");
let cyrptoBtn = document.getElementById("crytosearch-btn");

/*Input variable elemments*/
let stockInput = document.getElementById("tagsStocks");
let cyrptoInput = document.getElementById("tagsCrypto");

/*Crypto output label elements*/
let cryptoIDEl = document.getElementById("cryptoID");
let cryptoValInput = document.getElementById("cryptoVal");
let cyptoPriceEl = document.getElementById("cyptoPrice");

/*Stock Price label elements*/
let CrypNameEl = document.querySelector(".nameDis");
let CrypPriceEl = document.querySelector(".priceDis");
let CrypCapEl = document.querySelector(".capDis");
let CrypVolEl = document.querySelector(".volumeDis");
let CrypChangeEl = document.querySelector(".changeDis");
let CrypUpdateEl = document.querySelector(".updateDis");
let stockPriceEl = document.querySelector(".stockPrice");
let stockChangeEl = document.querySelector(".stockChange");
let stockVolEl = document.querySelector(".stockVol");

/*Reults box. Controls hide/show display*/
let infoBoxSection = document.getElementById("infoBox");

/*Initalize 3 variables for crypto. Used in crpyto functions*/
let cryptoID = "";
let cryptoSymbol = "";
let cryptoNameVal = "";

/*Allowed crytpo symbols list*/
let currptoCurrSymbol = [
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

/*Crypto Currency symbols with ID's to match*/
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

/*Allowed Stocks list*/
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
  "SBUX",
  "AMD",
  "RY",
  "SONY",
  "BHP",
  "KO",
  "ADBE",
];

/*On start, textbox will have a dropdown for when the user types a char in. User than autocomplete the textbox with allowed stock*/
$(function () {
  currptoCurrSymbol;
  stockList;

  $("#tagsCrypto").autocomplete({
    source: currptoCurrSymbol,
  });

  $("#tagsStocks").autocomplete({
    source: stockList,
  });
});

/*For the crpto stuff*/
function crypto(cryptoName) {
  /*Have to convert the symbol to an ID format*/
  symbolToId(cryptoName);

  /*Get the URL of the crypto*/
  let cryptoURL =
    "https://api.coingecko.com/api/v3/simple/price?ids=" +
    cryptoID +
    "&vs_currencies=cad&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true";

  console.log("Crypto ID in link: " + cryptoID);

  /*Get the responses for the requested crypto*/
  fetch(cryptoURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);

      /*Created switch case statements for all different allowed crypto currencies.*/
      switch (cryptoID) {
        case "bitcoin":
          /*For the case of bitcoin, gather all info from response. Repeat for rest*/
          CryptoCad(response.bitcoin);
          CryptoCadMarketCap(response.bitcoin);
          CryptoCad24HrVol(response.bitcoin);
          CryptoCad24HrChange(response.bitcoin);
          CryptoCadLastUpdated(response.bitcoin);
          break;

        case "ethereum":
          CryptoCad(response.ethereum);
          CryptoCadMarketCap(response.ethereum);
          CryptoCad24HrVol(response.ethereum);
          CryptoCad24HrChange(response.ethereum);
          CryptoCadLastUpdated(response.ethereum);
          break;

        case "litecoin":
          CryptoCad(response.litecoin);
          CryptoCadMarketCap(response.litecoin);
          CryptoCad24HrVol(response.litecoin);
          CryptoCad24HrChange(response.litecoin);
          CryptoCadLastUpdated(response.litecoin);
          break;

        case "binancecoin":
          CryptoCad(response.binancecoin);
          CryptoCadMarketCap(response.binancecoin);
          CryptoCad24HrVol(response.binancecoin);
          CryptoCad24HrChange(response.binancecoin);
          CryptoCadLastUpdated(response.binancecoin);
          break;

        case "stellar":
          CryptoCad(response.stellar);
          CryptoCadMarketCap(response.stellar);
          CryptoCad24HrVol(response.stellar);
          CryptoCad24HrChange(response.stellar);
          CryptoCadLastUpdated(response.stellar);
          break;

        case "chainlink":
          CryptoCad(response.chainlink);
          CryptoCadMarketCap(response.chainlink);
          CryptoCad24HrVol(response.chainlink);
          CryptoCad24HrChange(response.chainlink);
          CryptoCadLastUpdated(response.chainlink);
          break;

        case "polkadot":
          CryptoCad(response.polkadot);
          CryptoCadMarketCap(response.polkadot);
          CryptoCad24HrVol(response.polkadot);
          CryptoCad24HrChange(response.polkadot);
          CryptoCadLastUpdated(response.polkadot);
          break;

        case "tether":
          CryptoCad(response.tether);
          CryptoCadMarketCap(response.tether);
          CryptoCad24HrVol(response.tether);
          CryptoCad24HrChange(response.tether);
          CryptoCadLastUpdated(response.tether);
          break;

        case "dogecoin":
          CryptoCad(response.dogecoin);
          CryptoCadMarketCap(response.dogecoin);
          CryptoCad24HrVol(response.dogecoin);
          CryptoCad24HrChange(response.dogecoin);
          CryptoCadLastUpdated(response.dogecoin);
          break;

        case "uniswap":
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

/*Converts the symbol to a valid ID*/
function symbolToId(cryptoName) {
  for (i = 0; i < coinsList.length; i++) {
    if (cryptoName === coinsList[i].symbol) {
      cryptoSymbol = coinsList[i].symbol;
      cryptoID = coinsList[i].id;
      cryptoNameVal = coinsList[i].name;
      CrypNameEl.textContent =
        "Name: " + cryptoName + " (" + cryptoSymbol + ")";
      break;
    }
  }
  console.log("cryptoSymbol: " + cryptoSymbol);
  console.log("cryptoID: " + cryptoID);
  console.log("cryptoNameVal: " + cryptoNameVal);
}

/*Display the price of the crypto current in CAD. Takes in the response.crypto as a param*/
function CryptoCad(params) {
  var price = params.cad;
  CrypPriceEl.textContent = "Price: " + price;
  console.log(price);
}

/*Display the MarketCap of the crypto current in CAD. Takes in the response.crypto as a param*/
function CryptoCadMarketCap(params) {
  var marketCap = params.cad_market_cap;
  CrypCapEl.textContent = "Market Cap: " + marketCap;
  console.log(marketCap);
}

/*Display the 24Hr Volume of the crypto current in CAD. Takes in the response.crypto as a param*/
function CryptoCad24HrVol(params) {
  var dayVol = params.cad_24h_vol;
  CrypVolEl.textContent = "24Hr Volume: " + dayVol;
  console.log(dayVol);
}

/*Display the 24Hr change of the crypto current in CAD. Takes in the response.crypto as a param*/
function CryptoCad24HrChange(params) {
  var dayChange = params.cad_24h_change;
  CrypChangeEl.textContent = "24Hr Change: " + dayChange;
  console.log(dayChange);
}

/*Display when it was last updated. Takes in the response.crypto as a param*/
function CryptoCadLastUpdated(params) {
  var lastUpdated = params.last_updated_at;
  CrypUpdateEl.textContent = "Last Updated: " + lastUpdated;
  console.log(lastUpdated);
}

/*For the stocks*/
function stocks(stockName) {
  /*Create URL for requested stock*/
  var stockURL = "https://realstonks.p.rapidapi.com/" + stockName;

  /*Got this from the rapidapi website.*/
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
      /*Parse the data*/
      var priceParsed = JSON.parse(data);

      /*Display the gathered info*/
      var price = priceParsed.price;
      var changePercentage = priceParsed.change_percentage;
      var changetotalVol = priceParsed.total_vol;
      stockPriceEl.textContent = "Price: " + price;
      stockChangeEl.textContent = "Change Percentage: " + changePercentage + "%";
      stockVolEl.textContent = "Change Total Volume: " + changetotalVol;

      console.log(price);
      console.log(changePercentage);
      console.log(changetotalVol);
    })
    .catch((err) => {
      console.error(err);
    });
}

/*Clears labels*/
function clearLabels() {
  CrypNameEl.textContent = "";
  CrypPriceEl.textContent = "";
  CrypCapEl.textContent = "";
  CrypVolEl.textContent = "";
  CrypChangeEl.textContent = "";
  CrypUpdateEl.textContent = "";
  stockPriceEl.textContent = "";
  stockChangeEl.textContent = "";
  stockVolEl.textContent = "";
}

/*Clears the textbox*/
function clearEntries() {
  document.getElementById("tagsCrypto").value = "";
  document.getElementById("tagsStocks").value = "";
  infoBoxSection.style.display = "none";

  if (document.getElementById("tagsCrypto").value === "") {
    CrypNameEl.textContent = "";
    CrypPriceEl.textContent = "";
    CrypCapEl.textContent = "";
    CrypVolEl.textContent = "";
    CrypChangeEl.textContent = "";
    CrypUpdateEl.textContent = "";
    stockPriceEl.textContent = "";
    stockChangeEl.textContent = "";
    stockVolEl.textContent = "";
    console.log("clear");
  } else {
    console.log("not");
  }
}

/*When the crypto search button is pressed*/
cyrptoBtn.addEventListener("click", function () {
  clearLabels();
  infoBoxSection.style.display = "inline-block";
  let cryptoIDInput = tagsCrypto.value;
  console.log(cryptoIDInput);
  crypto(cryptoIDInput);
});

/*When the stocks search button is pressed*/
stockBtn.addEventListener("click", function () {
  clearLabels();
  infoBoxSection.style.display = "inline-block";
  let stockIDInput = tagsStocks.value;
  console.log(stockIDInput);
  stocks(stockIDInput);
});

/*When the clear button is pressed*/
clearButton.addEventListener("click", clearEntries);
