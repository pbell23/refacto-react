import ClassificationSelect from './ClassificationSelect.component';
import CountrySelect from './CountrySelect.component';
import React from 'react';
import SubclassificationSelect from './SubclassificationSelect.component';
import useDistinctDomainParts from '../../hooks/useDomainParts';

interface Props {
  domains: string[]
}

const DomainFilter: React.FC<Props> = ({ domains }) => {
  const { countries, classifications, subClassifications } = useDistinctDomainParts(domains);

  return (<>
    <CountrySelect countries={countries} />
    <ClassificationSelect classifications={classifications} />
    <SubclassificationSelect subClassifications={subClassifications} />
  </>)
}

export default DomainFilter
