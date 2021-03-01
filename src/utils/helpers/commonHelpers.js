export const _dynamicSort = (property, reverse) => {
	const sortOrder = reverse ? -1 : 1;

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

export const getURLParamValue = (location, query) => {
	return new URLSearchParams(location.search).get(query);
};

export function hash(...rest) {
	const nowHash = Date.now().toString(36);
	const args = Array.from(rest);
	const finalHash = [nowHash, ...args].join('-');

	return finalHash;
}

export const emptyFunction = () => {};