import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Container from 'Components/Layout/Container/Container';

describe('Container tests', () => {
	describe('render tests', () => {
		it('should render the Container component with its children', () => {
			const wrapper = mount(
				<Container>
					<p>Title</p>
					<p>Text</p>
				</Container>
			);

			expect(wrapper).to.have.length(1);
			expect(wrapper.find('p')).to.have.length(2);

			wrapper.unmount();
		});
	});
});