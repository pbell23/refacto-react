import React from 'react';
import { mount } from 'enzyme';
import useDomainParts from './useDomainParts';

interface TestComponentProps {
  domains: string[];
}

const TestComponent = ({ domains }: TestComponentProps) => {
  const { countries, classifications, subClassifications } = useDomainParts(domains);
  return (
    <div>
      <div id="countries">{countries.join(',')}</div>
      <div id="classifications">{classifications.join(',')}</div>
      <div id="subClassifications">{subClassifications.join(',')}</div>
    </div>
  );
}

describe('useDistinctDomainParts', () => {
  it('returns domain parts', () => {
    const domains = ['US_OK-WOK', 'FR_NK-WOL', 'FR_OK-NPP'];
    const wrapper = mount(<TestComponent domains={domains} />);
    expect(wrapper.find('#countries').text()).toEqual('US,FR');
    expect(wrapper.find('#classifications').text()).toEqual('OK,NK');
    expect(wrapper.find('#subClassifications').text()).toEqual('WOK,WOL,NPP');
  });
});