import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Index from 'Pages/view';
import View from 'Pages/_View/View';

describe('view page tests', () => {
	it('should render with no errors', () => {
		const wrapper = mount(<Index />);

		expect(wrapper.find(View)).to.have.length(1);
	});
});