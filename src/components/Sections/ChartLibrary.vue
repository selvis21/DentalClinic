<template>
  <div>
    <!-- Pass the correct prop names to the Bar chart component -->
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  components: {
    Bar,
  },
  props: {
    chartData: {
      type: Object,
      default: () => ({
        labels: [],
        datasets: [],
      }),
    },
    chartOptions: {
      type: Object,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
      }),
    },
  },
  mounted() {
    // Optional: Log chartData to ensure it's being passed correctly
    console.log("chartData:", this.chartData);
  },
};
</script>
