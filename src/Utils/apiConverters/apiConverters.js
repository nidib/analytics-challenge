export const financialStatementToList = data => {
	let dataList;

	if (data.financialStatementList) {
		dataList = data.financialStatementList;
	} else if (data.financials && data.symbol) {
		dataList = [data];
	}

	return dataList;
};