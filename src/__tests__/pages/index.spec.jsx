import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Index from 'pages/index';
import Home from 'pages/_Home/Home';

describe('index page tests', () => {
	it('should render with no errors', () => {
		const wrapper = mount(<Index />);

		expect(wrapper.find(Home)).to.have.length(1);
	});
});