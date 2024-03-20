interface IDomainParts {
    countries: string[],
    classifications: string[],
    subClassifications: string[]
}

export const extractDomainParts = (domains: string[]): IDomainParts => {
    const countries: string[] = []
    let classifications: string[] = []
    const subClassifications: string[] = []

    for (let i = 0; i < domains.length; i++) {
        if (countries.indexOf(domains[i].substring(0, 2)) <= 0) {
            countries.push(domains[i].substring(0, 2))
        }
        classifications.push(domains[i].substring(3, 5));
        let flag = false;
        for (let j = 0; j < subClassifications.length; j++) {
            if (subClassifications[j] === domains[i].substring(6)) {
                flag = true
                break;
            }
        }
        if (!flag) {
            subClassifications.push(domains[i].substring(6));
        }
    }

    classifications = classifications.filter((e, i, l) => l.indexOf(e) === i)

    return { countries, classifications, subClassifications }
}