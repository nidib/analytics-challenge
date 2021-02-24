import { financialStatementList } from 'utils/constants/api';

function multiple(req, res) {
	res.status(200).json(financialStatementList);
}

export default multiple;