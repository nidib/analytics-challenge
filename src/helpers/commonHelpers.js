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

/*
compileContentWithFields() {
		let companyData = {};
		let compiledContent = [];
		const { data } = this.props;
		const content = data.content;
		const relevantFields = data.fields.filter(field => field.columnName);
		const getCompanyData = company => {
			relevantFields.forEach((field, fieldValue) => {
				const key = field.id;
				const value = content[company][fieldValue]

				companyData = {
					...companyData,
					[key]: value
				}
			});

			return companyData;
		}

		for (let i = 0; i < content.length; i++) {
			const company = i;
			const currentCompanyData = getCompanyData(company);

			compiledContent.push(currentCompanyData);
		}

		return compiledContent;
	}
*/