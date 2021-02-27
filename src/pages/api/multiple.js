import { financialStatementList as data } from 'utils/constants/api';

function multiple(req, res) {
	const query = req.query.q.split(',');
	const filteredList = data.financialStatementList.filter(item => query.includes(item.symbol));

	res.status(200).json({ financialStatementList: filteredList });
}

export default multiple;