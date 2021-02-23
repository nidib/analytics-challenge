const obj = {
	symbolsList: [{
		symbol: 'SPY', name: 'SPDR S&P 500', price: 388.81, exchange: 'NYSE Arca'
	}, {
		symbol: 'CMCSA', name: 'Comcast Corp', price: 52.585, exchange: 'Nasdaq Global Select'
	}, {
		symbol: 'KMI', name: 'Kinder Morgan Inc', price: 14.86, exchange: 'New York Stock Exchange'
	}, {
		symbol: 'INTC', name: 'Intel Corp', price: 61.24, exchange: 'Nasdaq Global Select'
	}, {
		symbol: 'MU', name: 'Micron Technology Inc', price: 87.54, exchange: 'Nasdaq Global Select'
	}, {
		symbol: 'GDX', name: 'VanEck Vectors Gold Miners', price: 33.06, exchange: 'NYSE Arca'
	}, {
		symbol: 'GE', name: 'General Electric Co', price: 11.575, exchange: 'New York Stock Exchange'
	}, {
		symbol: 'BAC', name: 'Bank of America Corp', price: 34.075, exchange: 'New York Stock Exchange'
	}, {
		symbol: 'EEM', name: 'iShares MSCI Emerging Index Fund', price: 56.75, exchange: 'NYSE Arca'
	}, {
		symbol: 'XLF', name: 'SPDR Select Sector Fund - Financial', price: 31.795, exchange: 'NYSE Arca'
	}, {
		symbol: 'AAPL', name: 'Apple Inc', price: 128.415, exchange: 'Nasdaq Global Select'
	}, {
		symbol: 'MSFT', name: 'Microsoft Corp', price: 241.21, exchange: 'Nasdaq Global Select'
	}, {
		symbol: 'SIRI', name: 'Sirius XM Holdings Inc', price: 5.99, exchange: 'Nasdaq Global Select'
	}, {
		symbol: 'HPQ', name: 'HP Inc', price: 26.2, exchange: 'New York Stock Exchange'
	}, {
		symbol: 'CX', name: 'Cemex S.A.B. de C.V. Sponsored ADR', price: 6.07, exchange: 'New York Stock Exchange'
	}, {
		symbol: 'EFA', name: 'iShares MSCI EAFE', price: 75.73, exchange: 'NYSE Arca'
	}]
};

function list(req, res) {
	res.status(200).json(obj);
}

export default list;