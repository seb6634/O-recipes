import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Content from 'src/components/Content';
import Card from 'src/components/Card';

describe('<Content />', () => {
  const recipes = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];
  describe('structure', () => {
    const wrapper = shallow(<Content text="Lorem ipsum" />);

    it('should have 1 section inside', () => {
      expect(wrapper.find('section')).to.have.lengthOf(1);
    });
  });

  describe('data component', () => {
    const wrapper = mount(<Content recipes={recipes} text="Lorem ipsum" />);

    it('should render 5 cards if 5 recipes given', () => {
      expect(wrapper.find(Card)).to.have.lengthOf(5);
    });

    it('should render 5 article if 5 recipes given', () => {
      expect(wrapper.find('article')).to.have.lengthOf(5);
    });
  });

  describe('data component', () => {
    const wrapper = mount(<Content recipes={recipes} text="Lorem ipsum" />);

    it('should render 5 cards if 5 recipes given', () => {
      expect(wrapper.find(Card)).to.have.lengthOf(5);
    });

    it('should render 5 article if 5 recipes given', () => {
      expect(wrapper.find('article')).to.have.lengthOf(5);
    });
  });


});
