interface Props {
    countries: string[];
}

const CountrySelect = ({ countries }: Props) => (
    <select name="countries" multiple>
        {countries.map(country => (
            <option value={country} key={country}>{country}</option>
        ))}
    </select>
);

export default CountrySelect;