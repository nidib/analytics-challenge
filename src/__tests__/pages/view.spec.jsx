import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Index from 'pages/view';
import View from 'pages/_View/View';

describe('view page tests', () => {
	it('should render with no errors', () => {
		const wrapper = mount(<Index />);

		expect(wrapper.find(View)).to.have.length(1);
	});
});