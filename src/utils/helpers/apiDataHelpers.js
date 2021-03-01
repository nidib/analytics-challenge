import { safeReverse } from 'utils/helpers/arrayHelpers';
import { stringToDate } from 'utils/helpers/dateHelpers';

export const getCategories = dataList => {
	const companiesDataLength = dataList.map(company => company.financials.length);
	const indexOfLongest = companiesDataLength.indexOf(Math.max(...companiesDataLength));
	const companyWithLongesDateRecord = dataList[indexOfLongest];
	const categories = companyWithLongesDateRecord.financials.map(year => String(stringToDate(year.date).getFullYear()));

	return safeReverse(categories);
};