<template>
  <main class="dashboard-content d-flex flex-column py-5 gap-4">
    <div
      class="d-flex flex-md-row flex-column gap-md-4 gap-3 px-md-5 px-5 chart-size">
      <div class="col-md-4 col-12 patients-record px-3 py-3">
        <div class="h3-heading py-md-2 mb-3">
          <img :src="personsicon" class="px-2 img-fluid" alt="" />Patients
        </div>
        <div class="d-flex gap-3 justify-content-between px-2">
          <div class="patients-no h1-heading">
            235847<br />
            <span class="h4-heading percent">34.3%</span>
          </div>
          <div class="patients-graph">
            <img class="img-fluid" :src="chart1" alt="" />
          </div>
        </div>
      </div>
      <div class="col-md-4 col-12 doctors-record px-3 py-3">
        <div class="h3-heading py-md-2 mb-3">
          <img :src="personsicon" class="px-2 img-fluid" alt="" />Doctors
        </div>
        <div class="d-flex gap-3 justify-content-between px-2">
          <div class="doctors-no h1-heading">
            4<br />
            <span class="h4-heading percent">34.3%</span>
          </div>
          <div class="doctors-graph">
            <img class="img-fluid" :src="chart2" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex graphs-content px-md-5 px-2 graph-size">
      <div
        class="col-md-8 col-12 patients-year-graph px-md-3 px-3 py-4 py-md-3 d-flex flex-column gap-2">
        <div class="d-flex justify-content-between align-items-center">
          <div class="h2-heading bold-heading">Patients</div>
          <div
            class="year-btn d-flex align-items-center justify-content-center gap-3 px-md-3 py-md-1 px-2">
            <h5 class="h5-heading year-select mb-0">Current Year</h5>
            <div class="dropdown year-menu">
              <button
                class="dropdown-toggle px-0"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <img class="img-fluid" :src="yeardrpdown" alt="FAQ" />
              </button>
              <ul
                class="dropdown-menu mt-2 year-drpdown"
                aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">2024</a></li>
                <li><a class="dropdown-item" href="#">2023</a></li>
                <li><a class="dropdown-item" href="#">2022</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img class="img-fluid" :src="yeargraph" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import personsicon from "@/assets/img/persons-record-icon.png";
import doctorview from "@/assets/img/doctors-overview.png";
import patientsgraph from "@/assets/img/patients-graph.png";
import yeardrpdown from "@/assets/img/year-drpdown.png";
import chart1 from "@/assets/img/Chart-1.png";
import chart2 from "@/assets/img/Chart-2.png";
import yeargraph from "@/assets/img/year-graph.png";
export default {
  name: "DashboardContent",
  data() {
    return {
      personsicon,
      doctorview,
      patientsgraph,
      yeardrpdown,
      chart1,
      chart2,
      yeargraph,
    };
  },
};
</script>

<style>
.chart-size {
  max-width: 90%;
}
.graph-size {
  max-width: 90%;
}
.patients-year-graph {
  min-width: 69%;
}
.patients-record,
.patients-year-graph,
.doctors-record {
  background-color: #ffffff;
  border-radius: 16px;
}

.bold-heading {
  font-weight: 700;
}
.year-btn {
  border-radius: 12px;
  border: 1px solid #c5c5d3;
  color: #8b8ba7;
}
.patients-graph,
.doctors-graph {
  position: relative;
  bottom: 15px;
}
.dashboard-content {
  background: #f1f1f4;
}
.year-select {
  color: #8b8ba7;
}
.percent {
  color: #42bd53;
}
.graphs-content {
  padding-right: 8%;
}
.year-menu ul {
  left: -480% !important;
  min-width: 90px;
}

@media (max-width: 768px) {
  .patients-graph img,
  .doctors-graph img {
    width: 65px;
  }
  .year-btn {
    width: auto;
    height: 40px;
  }
  .chart-size {
    max-width: 100%;
  }
  .graph-size {
    max-width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
}

@media (min-width: 1400px) and (max-width: 1499px) {
}
@media (min-width: 1500px) and (max-width: 1699px) {
}
@media (min-width: 1700px) {
}

@media (min-width: 1920px) {
  .chart-size {
    max-width: 75%;
  }
  .graph-size {
    max-width: 75%;
  }
}

@media (min-width: 2500px) {
  .chart-size {
    max-width: 40%;
  }
  .graph-size {
    max-width: 40%;
  }
}
</style>
