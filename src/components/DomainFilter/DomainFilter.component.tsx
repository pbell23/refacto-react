import React, { useEffect, useState } from 'react';

import ClassificationSelect from './ClassificationSelect.component';
import CountrySelect from './CountrySelect.component';
import SubclassificationSelect from './SubclassificationSelect.component';
import { extractDomainParts } from '../../lib/domainFilter';

interface IDomainParts {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

interface Props {
  domains: string[]
}

const initialDomainParts: IDomainParts = {
  countries: [],
  classifications: [],
  subClassifications: []
}

const DomainFilter: React.FC<Props> = ({ domains }) => {
  const [domainParts, setDomainParts] = useState(initialDomainParts);
  const { countries, classifications, subClassifications } = domainParts;

  useEffect(() => {
    const updatedDomainParts = extractDomainParts(domains);
    setDomainParts({ ...updatedDomainParts, classifications: updatedDomainParts.classifications.filter((e, i, l) => l.indexOf(e) === i), })
  }, [domains])

  return (<>
    <CountrySelect countries={countries} />
    <ClassificationSelect classifications={classifications} />
    <SubclassificationSelect subClassifications={subClassifications} />
  </>)
}

export default DomainFilter
