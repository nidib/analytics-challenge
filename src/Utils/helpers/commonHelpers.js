import { clone, cloneDeep } from 'lodash';

export const _dynamicSort = (property, reverse) => {
	let sortOrder = reverse ? -1 : 1;

	return (a, b) => {
		let result = 0;

		if (a[property] < b[property]) {
			result = -1;
		} else if (a[property] > b[property]) {
			result = 1;
		}

		return result * sortOrder;
	};
};

export const safeSortBy = (list, property, reverse = false) => {
	const newList = cloneDeep(list);

	return newList.sort(_dynamicSort(property, reverse));
};

export const toggleAddToArray = (list, item) => {
	const newList = cloneDeep(list);

	if (newList.includes(item)) {
		newList.splice(newList.indexOf(item), 1);
	} else {
		newList.push(item);
	}

	return newList;
};

export const getURLParamValue = (location, query) => {
	return new URLSearchParams(location.search).get(query);
};