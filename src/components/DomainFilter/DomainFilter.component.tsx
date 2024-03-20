import React, { useEffect, useState } from 'react';

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
    <select name="countries" multiple>
      {countries.map(country => (
        <option value={country} key={country}>{country}</option>
      ))}
    </select>
    <select name="classifications" multiple>
      {classifications.map(classification => (
        <option value={classification} key={classification}>{classification}</option>
      ))}
    </select>
    <select name="subClassifications" multiple>
      {subClassifications.map(subClassification => (
        <option value={subClassification} key={subClassification}>{subClassification}</option>
      ))}
    </select>
  </>)
}

export default DomainFilter
