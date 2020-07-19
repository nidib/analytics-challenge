const stocks = [
  {
    symbol: 'SPY',
    name: 'SPDR S&P 500',
    price: 319.665,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'CMCSA',
    name: 'Comcast Corporation Class A Common Stock',
    price: 41.825,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'KMI',
    name: 'Kinder Morgan Inc.',
    price: 14.96,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'INTC',
    name: 'Intel Corporation',
    price: 58.915,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'MU',
    name: 'Micron Technology Inc.',
    price: 49.955,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'GDX',
    name: 'VanEck Vectors Gold Miners',
    price: 37.985,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'GE',
    name: 'General Electric Company',
    price: 7.0548,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'BAC',
    name: 'Bank of America Corporation',
    price: 23.725,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'EEM',
    name: 'iShares MSCI Emerging Index Fund',
    price: 42.44,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'XLF',
    name: 'SPDR Select Sector Fund - Financial',
    price: 24.0,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 385.11,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 203.48,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'SIRI',
    name: 'Sirius XM Holdings Inc.',
    price: 5.905,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'HPQ',
    name: 'HP Inc.',
    price: 17.745,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'CX',
    name: 'Cemex S.A.B. de C.V. Sponsored ADR',
    price: 2.88,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'EFA',
    name: 'iShares MSCI EAFE',
    price: 63.0525,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'CZR',
    name: 'Caesars Entertainment Corporation',
    price: 12.325,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'QQQ',
    name: 'PowerShares QQQ Trust Series 1',
    price: 258.33,
    exchange: 'NASDAQ Global Market',
  }, {
    symbol: 'F',
    name: 'Ford Motor Company',
    price: 6.8571,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'AMD',
    name: 'Advanced Micro Devices Inc.',
    price: 54.795,
    exchange: 'NASDAQ Capital Market',
  }, {
    symbol: 'SNAP',
    name: 'Snap Inc. Class A',
    price: 23.87,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'FB',
    name: 'Facebook Inc.',
    price: 240.18,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'WFC',
    name: 'Wells Fargo & Company',
    price: 25.265,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'AIG',
    name: 'American International Group Inc.',
    price: 32.4969,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'T',
    name: 'AT&T Inc.',
    price: 30.196,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'C',
    name: 'Citigroup Inc.',
    price: 51.11,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'VALE',
    name: 'VALE S.A. American Depositary Shares Each Representing one',
    price: 11.285,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'MS',
    name: 'Morgan Stanley',
    price: 52.12,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'AKS',
    name: 'AK Steel Holding Corporation',
    price: 1.55,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'JPM',
    name: 'JP Morgan Chase & Co.',
    price: 99.226,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'ORCL',
    name: 'Oracle Corporation',
    price: 55.635,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'NKE',
    name: 'Nike Inc.',
    price: 97.2,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'VWO',
    name: 'Vanguard FTSE Emerging Markets',
    price: 42.245,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'PG',
    name: 'Procter & Gamble Company (The)',
    price: 124.36,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'FXI',
    name: 'iShares China Large-Cap',
    price: 42.405,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'IWM',
    name: 'iShares Russell 2000',
    price: 145.33,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'GSM',
    name: 'Ferroglobe PLC',
    price: 0.5093,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'HK',
    name: 'Halcon Resources Corporation',
    price: 0.19,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'BBD',
    name: 'Banco Bradesco Sa American Depositary Shares',
    price: 4.13,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'PFE',
    name: 'Pfizer Inc.',
    price: 35.41,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'JD',
    name: 'JD.com Inc.',
    price: 61.745,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'NOK',
    name: 'Nokia Corporation Sponsored American Depositary Shares',
    price: 4.255,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'TWTR',
    name: 'Twitter Inc.',
    price: 35.178,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'AMLP',
    name: 'Alerian MLP',
    price: 23.7201,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'AVGO',
    name: 'Broadcom Limited',
    price: 310.935,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'AMAT',
    name: 'Applied Materials Inc.',
    price: 62.15,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'WFT',
    name: 'Weatherford International plc (Ireland)',
    price: 0.36,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'UVXY',
    name: 'ProShares Trust Ultra VIX Short Term Futures',
    price: 29.86,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'DWDP',
    name: 'DowDuPont Inc.',
    price: 30.51,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'VXX',
    name: 'iPath S&P 500 VIX Short Term Futures TM ETN',
    price: 32.01,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'VEA',
    name: 'Vanguard FTSE Developed Markets',
    price: 40.12,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'ZNGA',
    name: 'Zynga Inc.',
    price: 9.4101,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'XOM',
    name: 'Exxon Mobil Corporation',
    price: 43.8898,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'QCOM',
    name: 'QUALCOMM Incorporated',
    price: 91.19,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'TVIX',
    name: 'VelocityShares Daily 2x VIX Short Term ETN',
    price: 112.36,
    exchange: 'NASDAQ Global Market',
  }, {
    symbol: 'VIPS',
    name: 'Vipshop Holdings Limited American Depositary Shares each representing two',
    price: 21.16,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'GLD',
    name: 'SPDR Gold Trust',
    price: 168.885,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'CSCO',
    name: 'Cisco Systems Inc.',
    price: 45.3577,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'AXP',
    name: 'American Express Company',
    price: 95.84,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'BMY',
    name: 'Bristol-Myers Squibb Company',
    price: 59.175,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'V',
    name: 'Visa Inc.',
    price: 193.22,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'USO',
    name: 'United States Oil Fund',
    price: 29.04,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'GRPN',
    name: 'Groupon Inc.',
    price: 17.3978,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'WP',
    name: 'Worldpay Inc. Class A',
    price: 124.37,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'OIH',
    name: 'VanEck Vectors Oil Services',
    price: 122.61,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'GERN',
    name: 'Geron Corporation',
    price: 2.05,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'KEY',
    name: 'KeyCorp',
    price: 11.845,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'RF',
    name: 'Regions Financial Corporation',
    price: 10.675,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'KR',
    name: 'Kroger Company (The)',
    price: 33.67,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'HAL',
    name: 'Halliburton Company',
    price: 13.02,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'BABA',
    name: 'Alibaba Group Holding Limited',
    price: 243.31,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'MRO',
    name: 'Marathon Oil Corporation',
    price: 5.705,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'CLNS',
    name: 'Colony NorthStar Inc.',
    price: 6.41,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'GILD',
    name: 'Gilead Sciences Inc.',
    price: 76.26,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'IEMG',
    name: 'iShares Core MSCI Emerging Markets',
    price: 50.61,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'GM',
    name: 'General Motors Company',
    price: 26.77,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'FCX',
    name: 'Freeport-McMoRan Inc.',
    price: 13.38,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'CRM',
    name: 'Salesforce.com Inc',
    price: 185.39,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'ATVI',
    name: 'Activision Blizzard Inc',
    price: 79.04,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'SQ',
    name: 'Square Inc. Class A',
    price: 120.0,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'P',
    name: 'Pandora Media Inc.',
    price: 8.4,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'XLK',
    name: 'SPDR Select Sector Fund - Technology',
    price: 106.17,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'TWX',
    name: 'Time Warner Inc.',
    price: 98.91,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'NUE',
    name: 'Nucor Corporation',
    price: 41.62,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'XOP',
    name: 'SPDR S&P Oil & Gas Explor & Product',
    price: 51.3,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'SWN',
    name: 'Southwestern Energy Company',
    price: 2.635,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'LOW',
    name: "Lowe's Companies Inc.",
    price: 142.01,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'RAD',
    name: 'Rite Aid Corporation',
    price: 16.19,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'VEON',
    name: 'VEON Ltd.',
    price: 1.815,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'HYG',
    name: 'iShares iBoxx $ High Yield Corporate Bond',
    price: 83.135,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'APC',
    name: 'Anadarko Petroleum Corporation',
    price: 69.92,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'JNK',
    name: 'SPDR Bloomberg Barclays High Yield Bond',
    price: 103.18,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'EWJ',
    name: 'iShares MSCI Japan Index Fund',
    price: 56.01,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'XLU',
    name: 'SPDR Select Sector Fund - Utilities',
    price: 58.7399,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'ESV',
    name: 'Ensco plc Class A',
    price: 7.38,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'SLB',
    name: 'Schlumberger N.V.',
    price: 18.62,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'FLEX',
    name: 'Flex Ltd.',
    price: 10.8322,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'FOXA',
    name: 'Twenty-First Century Fox Inc.',
    price: 25.91,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'ABBV',
    name: 'AbbVie Inc.',
    price: 99.3249,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'GIS',
    name: 'General Mills Inc.',
    price: 64.65,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'VZ',
    name: 'Verizon Communications Inc.',
    price: 55.44,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'XRX',
    name: 'Xerox Corporation',
    price: 17.245,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'CVLT',
    name: 'Commvault Systems Inc.',
    price: 38.09,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'IEFA',
    name: 'iShares Core MSCI EAFE',
    price: 59.22,
    exchange: 'BATS Exchange',
  }, {
    symbol: 'X',
    name: 'United States Steel Corporation',
    price: 8.015,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'MAT',
    name: 'Mattel Inc.',
    price: 10.74,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'CTL',
    name: 'CenturyLink Inc.',
    price: 9.88,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'MIK',
    name: 'The Michaels Companies Inc.',
    price: 6.76,
    exchange: 'Nasdaq Global Select',
  }, {
    symbol: 'DVN',
    name: 'Devon Energy Corporation',
    price: 10.625,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'BKLN',
    name: 'PowerShares Exchange-Traded Fund Trust',
    price: 21.56,
    exchange: 'NYSE Arca',
  }, {
    symbol: 'IBN',
    name: 'ICICI Bank Limited',
    price: 9.245,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'MPC',
    name: 'Marathon Petroleum Corporation',
    price: 37.0,
    exchange: 'New York Stock Exchange',
  }, {
    symbol: 'EZU',
    name: 'iShares MSCI Eurozone',
    price: 38.325,
    exchange: 'BATS Exchange',
  }, {
    symbol: 'PM',
    name: 'Philip Morris International Inc',
    price: 74.875,
    exchange: 'New York Stock Exchange',
  },
];

export default stocks;
