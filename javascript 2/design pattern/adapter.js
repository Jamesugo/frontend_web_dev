class StockMarketExchange {
  getStockMarketData() {
    return `<note>
        <to>Data</to>
        <from>1</from>
        <heading>Facebook</heading>
        <body>0.3</body>
        </note>`;
  }

  xml() {
    return this.getStockMarketData();
  }
}

class chartData {
  constructor(StockMarketExchange) {
    this.StockMarketExchange = StockMarketExchange;
  }

  getData() {
    this.StockMarketExchange.json();
  }
}

class adapter {
  constructor(StockMarketExchange) {
    this.StockMarketExchange = StockMarketExchange;
  }

  xmlTOJSON() {}

  json() {
    return this.xmlTOJSON(this.StockMarketExchange.xml());
  }
}

const stockeMarket = StockMarketExchange();
const stockMarketAdapter = new adapter(stockeMarket);
const chartData = new chartData(stockeMarketAdapter);
