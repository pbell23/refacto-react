import ClassificationSelect from './ClassificationSelect.component';
import CountrySelect from './CountrySelect.component';
import DomainFilter from './DomainFilter.component';
import SubclassificationSelect from './SubclassificationSelect.component';
import { shallow } from 'enzyme';

describe('components', () => {
  describe('DomainFilter', () => {
    it('should allow the user to filter', () => {
      const wrapper = shallow(<DomainFilter domains={['do']} />);

      expect(wrapper.find(CountrySelect).length).toBe(1);
      expect(wrapper.find(ClassificationSelect).length).toBe(1);
      expect(wrapper.find(SubclassificationSelect).length).toBe(1);
    })
  })
})
