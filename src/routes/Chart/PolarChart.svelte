<script>
    import { onMount } from "svelte";
    import { get } from "svelte/store";
    import countryDataStore from "./store/countryDataStore";
    import Chart from "chart.js"; 
      
    onMount(async () => {
      await $countryDataStore.fetchCountryData(); 
      const ctx = document.getElementById("polarChart").getContext("2d");
      
      const { countries } = get(countryDataStore); 
      
      console.log(countries);
      
      const mostPopulatedcountryDataStore = countries
        .sort((a, b) => b.population - a.population)
        .slice(0, 10);
      
      const labels = mostPopulatedcountryDataStore.map(
        (country) => country.name.common
      );
      const data = mostPopulatedcountryDataStore.map(
        (country) => country.population
      );
      
      new Chart(ctx, {
        type: "polarArea",
        data: {
          labels,
          datasets: [
            {
              data,
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4CAF50",
                "#E91E63",
                "#2196F3",
                "#FF9800",
                "#9C27B0",
                "#FF5722",
                "#607D8B",
              ],
            },
          ],
        },
      });
    });
  </script>
    

 <canvas id="polarChart" style="width: 100%; height: 300px;"></canvas>


    
  <style>
    /* Add your styling here */
  </style>
  

