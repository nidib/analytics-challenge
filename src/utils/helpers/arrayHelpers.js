import { cloneDeep } from 'lodash';
import { _dynamicSort as dynamicSort } from 'utils/helpers/commonHelpers';

export const safeReverse = list => {
	const newList = cloneDeep(list);

	return newList.reverse();
};

export const safeSortBy = (list, property, reverse = false) => {
	const newList = cloneDeep(list);

	return newList.sort(dynamicSort(property, reverse));
};

export const safeSplice = (list, from, howMany) => {
	const newList = cloneDeep(list);

	newList.splice(from, howMany);

	return newList;
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