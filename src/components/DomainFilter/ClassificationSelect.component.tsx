interface Props {
    classifications: string[];
}

const ClassificationSelect = ({ classifications }: Props) => (
    <select name="classifications" multiple>
        {classifications.map(classification => (
            <option value={classification} key={classification}>{classification}</option>
        ))}
    </select>
);

export default ClassificationSelect;