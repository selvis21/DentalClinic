<template>
  <div class="chart-div">
    <!-- Render the ChartLibrary component with the provided data and options -->
    <ChartLibrary :chartData="chartData" :chartOptions="chartOptions" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ChartLibrary from "@/components/Sections/ChartLibrary.vue"; // Adjust the path as needed

export default defineComponent({
  components: {
    ChartLibrary,
  },
  data() {
    return {
      // Example chart data
      chartData: {
        labels: ["January", "February", "March", "April"], // X-axis labels
        datasets: [
          {
            label: "Number of Visits",
            backgroundColor: "#42A5F5", // Color for the bars
            data: [10, 20, 15, 25], // Data points
          },
        ],
      },
      // Example chart options
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true, // Show or hide the legend
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                // Custom label for tooltips
                return `${context.dataset.label}: ${context.raw}`;
              },
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Months", // X-axis label
            },
          },
          y: {
            title: {
              display: true,
              text: "Number of Visits", // Y-axis label
            },
            beginAtZero: true, // Start Y-axis at zero
          },
        },
      },
    };
  },
});
</script>
<style>
.chart-div div {
  min-height: 120px;
}
</style>
