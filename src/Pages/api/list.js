import { symbolsList } from 'Utils/constants/api';

function list(req, res) {
	res.status(200).json(symbolsList);
}

export default list;