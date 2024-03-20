interface Props {
    subClassifications: string[];
}

const SubclassificationSelect = ({ subClassifications }: Props) => (
    <select name="subClassifications" multiple>
        {subClassifications.map(country => (
            <option value={country} key={country}>{country}</option>
        ))}
    </select>
);

export default SubclassificationSelect;