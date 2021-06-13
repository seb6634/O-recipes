import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Recipe from 'src/components/Recipe';
import { Redirect } from 'react-router-dom';

describe('<Recipe />', () => {
  const recipe = { id: 1 };

  describe('structure', () => {
    it('should redirect if recipe does not exists', () => {
      const wrapper = shallow(<Recipe recipe={null} />);
      expect(wrapper.find(Redirect)).to.have.lengthOf(1);
    });
    it('should not redirect if recipe exists', () => {
      const wrapper = shallow(<Recipe recipe={recipe} />);
      expect(wrapper.find(Redirect)).to.have.lengthOf(0);
    });
  });
});
