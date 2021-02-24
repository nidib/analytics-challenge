import { companyFinancials } from 'Utils/constants/api';

function single(req, res) {
	res.status(200).json(companyFinancials);
}

export default single;