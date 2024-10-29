

export default async function CountryData() {
    const res = await fetch('https://countriesnow.space/api/v0.1/countries');
    const result = await res.json();
    return result?.data
}