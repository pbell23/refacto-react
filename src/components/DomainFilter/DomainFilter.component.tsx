import React from 'react';
import { extractDomainParts } from '../../lib/domainFilter';
import { threadId } from 'worker_threads';

interface State {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

interface Props {
  domains: string[]
}

class DomainFilter extends React.Component<Props, State> {
  componentDidMount() {
    const { domains } = this.props

    const s: any = {};

    const domainParts = extractDomainParts(domains)

    this.setState({
      ...domainParts,
      classifications: domainParts.classifications.filter((e, i, l) => l.indexOf(e) === i),
    })
    this.forceUpdate()
  }

  render() {
    const { countries, classifications, subClassifications } = this.state || {
      countries: [],
      classifications: [],
      subClassifications: []
    };

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
}

export default DomainFilter
