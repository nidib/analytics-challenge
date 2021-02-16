export const dynamicSort = property => {
	let sortOrder = 1;

	if (property[0] === '-') {
		sortOrder = -1;
		property = property.substr(1);
	}

	return function(a, b) {
		const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
		return result * sortOrder;
	};
};

export const toggleAddToArray = (list, item) => {
	let newList = [...list];

	if (newList.includes(item))
		newList.splice(newList.indexOf(item), 1);
	else
		newList.push(item);

	return newList;
};