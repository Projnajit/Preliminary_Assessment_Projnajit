import { writable } from "svelte/store";

const countryDataStore = writable({
  countries: [],
  fetchCountryData: async function () {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    this.countries = data;
    // console.log(data)
  },
});

export default countryDataStore;
