<script>
    import { onMount } from "svelte";
    import PolarChart from "./PolarChart.svelte";
    import countryDataStore from "./store/countryDataStore";
    // import TailwindCss from "../../TailwindCSS.svelte";
  
    onMount(async () => {
      await $countryDataStore.fetchCountryData();
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      countryDataStore.update(store => {
        store.countries = data;
        return store;
      });
    });
</script>




<main class="container">
    <div class="table-container">
      <h1>Chart Page</h1>
      <table class="country-table">
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>CIOC</th>
            <th class="status-header">UN Member Status</th>
            <th>Currencies</th>
            <th>Languages</th>
          </tr>
        </thead>
        <tbody>
          {#each $countryDataStore.countries as country}
          <tr>
            <td>
              {#if country.flags && country.flags.svg}
              <img
                class="flag"
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
              />
              {/if}
            </td>
            <td>{country.name.common}</td>
            <td>{country.population}</td>
            <td>{country.cioc || "-"}</td>
            <td>
              {#if country.unMember}
              <div class="status-box yes">Yes</div>
              {:else}
              <div class="status-box no">No</div>
              {/if}
            </td>
            <td>
              {#if country.currencies}
              {Object.keys(country.currencies).join(", ")}
              {/if}
            </td>
            <td>
              {#if country.languages}
              {Object.values(country.languages).join(", ")}
              {/if}
            </td>
          </tr>
          {/each}
        </tbody>
      </table>
    </div>
  
    <div class="chart-container">
      <PolarChart />
    </div>
</main>
  





<style>

    .status-header {
        text-align: center;
    }

    .status-box {
        color: white;
        width: 32px;
        height: 16px;
        text-align: center;
        font-weight: bold;
        border-radius: 5px;
        margin: 0 auto;
        padding: 5px;
    }

    .yes {
        background-color:#45c496;
    }

    .no {
        background-color:#d91b42;
        color: white;
    }



    .table-container {
        flex: 1;
        padding-right: 20px;
    }

    .chart-container {
        flex: 1;
    }

    .country-table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ccc;
        border-radius: 10px;
    }

    .country-table th,
    .country-table td {
        padding: 10px;
        text-align: left;
        border: 1px solid #ccc;
        border-radius: 20px;
        
        font-family: Arial, Helvetica, sans-serif;
    }

    .flag {
        width: 30px;
        height: auto;
    }



    .container {
        display: grid;
        grid-template-columns: 6fr 3fr;
        gap: 20px;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    }

    .chart-container {
        background-color: #fff; 
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); 
        height: 3%;
        margin-top: 18%;
    }

    table{
      border-radius: 10px;
    }


</style>








