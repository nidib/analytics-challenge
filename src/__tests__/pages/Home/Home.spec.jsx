import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Home from 'Pages/Home/Home';
import Container from 'Components/Layout/Container/Container';
import Search from 'Components/Search/Search';
import Table from 'Components/Table/Table';

describe('Home tests', () => {
	let instance, wrapper, setStateStub;

	describe('render tests', () => {
		it('should render without errors', () => {
			wrapper = mount(<Home />);

			expect(wrapper).to.have.length(1);

			wrapper.unmount();
		});

		it('should render Container, Search and Table', () => {
			wrapper = mount(<Home />);

			expect(wrapper.find(Container)).to.have.length(1);
			expect(wrapper.find(Search)).to.have.length(1);
			expect(wrapper.find(Table)).to.have.length(1);

			wrapper.unmount();
		});
	});

	describe('handleChange tests', () => {
		it('should call set state with the correct parameters', () => {
			wrapper = mount(<Home />);
			instance = wrapper.instance();
			setStateStub = sinon.spy(instance, 'setState');

			instance.handleChange({ target: { value: 'XPTO' } });

			expect(setStateStub.calledOnce).to.be.true;
			expect(instance.state.searchFilter).to.be.equal('XPTO');

			wrapper.unmount();
			setStateStub.restore();
		});
	});

	describe('handleCheckbox tests', () => {
		it('should call set state with the correct selectedItems', () => {
			wrapper = mount(<Home />);
			instance = wrapper.instance();
			setStateStub = sinon.spy(instance, 'setState');

			instance.handleCheckbox({ target: { id: 'apple' } });
			instance.handleCheckbox({ target: { id: 'banana' } });
			instance.handleCheckbox({ target: { id: 'strawberry' } });
			instance.handleCheckbox({ target: { id: 'banana' } });

			expect(setStateStub.callCount).to.be.equal(4);
			expect(instance.state.selectedItems).to.deep.equal(['apple', 'strawberry']);

			wrapper.unmount();
			setStateStub.restore();
		});
	});
});