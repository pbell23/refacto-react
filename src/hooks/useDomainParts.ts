import { extractDomainParts } from '../lib/domainFilter';
import { useMemo } from 'react';

const useDomainParts = (domains: string[]) => {
    const domainParts = useMemo(() => extractDomainParts(domains), [domains]);
    return domainParts
};

export default useDomainParts;