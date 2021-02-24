import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Index from 'Pages/index';
import Home from 'Pages/_Home/Home';

describe('index page tests', () => {
	it('should render with no errors', () => {
		const wrapper = mount(<Index />);

		expect(wrapper.find(Home)).to.have.length(1);
	});
});