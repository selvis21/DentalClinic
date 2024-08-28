<template>
  <div class="table px-md-4 px-2 table-wrapper">
    <table class="table-details">
      <thead>
        <tr class="d-flex table-data align-items-center py-3">
          <th class="col-md-1 col-1 h4-heading id-width">OP ID</th>
          <th class="col-md-2 col-2 h4-heading name-width">Patient Name</th>
          <th class="col-md-1 col-1 h4-heading gender-width">Gender (Age)</th>
          <th class="col-md-1 col-1 h4-heading time-width">Time</th>
          <th class="col-md-2 col-2 h4-heading area-width">Area</th>
          <th class="col-md-3 col-3 h4-heading visit-reason-width">
            Reason for visit?
          </th>
          <th class="col-md-2 col-2 h4-heading patient-status">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="patient in filteredPatients"
          :key="patient.opid"
          class="d-flex table-datas py-3 align-items-center">
          <td class="col-1 h5-heading datas id-width">
            {{ patient.opid }}
          </td>
          <td class="col-2 h5-heading datas name-data name-width">
            {{ patient.patientname }}
          </td>
          <td
            class="col-1 h5-heading datas d-flex gap-2 align-items-center gender-width">
            <div class="gender-icon">
              <img :src="getGenderIcon(patient.gender)" alt="Gender Icon" />
            </div>
            <div>{{ patient.gender }} ({{ patient.age }})</div>
          </td>
          <td class="col-1 h5-heading datas time-width">{{ patient.time }}</td>
          <td class="col-2 h5-heading datas area-width">
            {{ capitalizeArea(patient.area) }}
          </td>
          <td class="col-3 h6-heading datas visit-reason-width reason-heading">
            <div class="reason d-flex gap-2 flex-wrap">
              <div
                v-for="(reason, index) in splitVisitReasons(
                  patient.visitsreason
                )"
                :key="index"
                class="visits-reason">
                {{ capitalizeFirstLetter(reason.trim()) }}
              </div>
            </div>
          </td>

          <td
            :class="[
              'col-2',
              'h4-heading',
              'datas patient-status status-heading d-flex justify-content-center align-items-center',
              getStatusClass(patient.status),
            ]">
            <!-- {{ patient.status }} -->
            {{ capitalizeStatus(patient.status) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import filtericon from "@/assets/img/filter-icon.png";
import addicon from "@/assets/img/add-icon.png";
import leftarrow from "@/assets/img/left-arrow.png";
import rightarrow from "@/assets/img/right-arrow.png";
import maleicon from "@/assets/img/male-icon.png";
import femaleicon from "@/assets/img/female-icon.png";
import CalenderDateDay from "@/components/Sections/CalendarView.vue";
import { searchQuery } from "@/composables/useSearchQuery";
import phoneicon from "@/assets/img/phone-icon.png";

export default {
  data() {
    return {
      filtericon,
      addicon,
      leftarrow,
      rightarrow,
      maleicon,
      phoneicon,
      femaleicon,
      currentView: "Day",
      searchQuery,
      patients: [
        {
          opid: "#2607240912",
          patientname: "Parameshwaran",
          gender: "Male",
          age: 54,
          time: "09:31",
          area: "Aladipatti",
          visitsreason: "Tooth pain, Gum Problem,For Filling",
          status: "Completed",
        },
        {
          opid: "#2607240913",
          patientname: "Malathi",
          gender: "Female",
          age: 38,
          time: "10:18",
          area: "Sambavarvadakarai",
          visitsreason: "Gum Problem",
          status: "Waiting",
        },
        {
          opid: "#2607240913",
          patientname: "Vaijayanthimala",
          gender: "Female",
          age: 49,
          time: "11:15",
          area: "Sambavarvadakarai",
          visitsreason: "For Filling, Gum Problem",
          status: "Waiting",
        },
      ],
    };
  },
  computed: {
    filteredPatients() {
      if (this.searchQuery) {
        return this.patients.filter((patient) =>
          // Add your filtering logic here, for example:
          patient.patientname
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        );
      }
      return this.patients;
    },
  },

  methods: {
    getGenderIcon(gender) {
      return gender === "Male" ? maleicon : femaleicon;
    },
    capitalizeArea(area) {
      return area.charAt(0).toUpperCase() + area.slice(1);
    },
    capitalizeStatus(status) {
      return status.charAt(0).toUpperCase() + status.slice(1);
    },

    getStatusClass(status) {
      // console.log("Status received:", status);
      status = status.toLowerCase();
      return status === "completed" ? "bg-green" : "bg-orange";
    },
    splitVisitReasons(visitsreason) {
      return visitsreason.split(",").filter(Boolean);
    },
    capitalizeFirstLetter(str) {
      return str.replace(/\b\w/g, (char) => char.toUpperCase());
    },
    async fetchPatients() {
      try {
        const response = await axios.get("http://localhost:8000/api/index");
        this.patients = response.data;
        // console.log("Fetched patients data:", this.patients);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    },
  },
  mounted() {
    // this.fetchPatients();
  },
};
</script>

<style>
.table-data {
  border-bottom: 1px solid #c5c5d3;
}
.table-datas {
  border-bottom: 1px solid #c5c5d3;
}
.table-details {
  min-width: 100%;
}

.datas {
  color: #16161d;
}
.name-data {
  font-weight: 600;
}

.table-details {
  width: 100%;
}

.table-datas {
  border-bottom: 1px solid #ddd;
}

.visits-reason {
  background-color: #ffffff;
  border-radius: 10.5px;
  border: 1px solid #d8d8d8;
  /* min-width: 35%; */
  text-align: center;
  padding: 2px 11px;
}
.patient-status {
  max-width: 11%;
  /* height: 34px; */
  border-radius: 30px;
}
.bg-green {
  background-color: #d9f2dd;
  color: #359742;
  padding: 8px 10px;
}

.bg-orange {
  background-color: #fff5cc;
  color: #cca300;
  padding: 8px 10px;
}
.gender-width {
  min-width: 15%;
}

.id-width {
  min-width: 13%;
}
.name-width {
  max-width: 14%;
}
.area-width {
  max-width: 16%;
}

.visit-reason-width {
  max-width: 22%;
}
.status-heading {
  font-weight: 500;
  text-align: center;
}
.reason-heading {
  font-weight: 600;
  color: #16161d;
}

@media (min-width: 567px) {
  .table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-details {
    width: 100%;
    min-width: 930px;
  }
}
@media (min-width: 568px) and (max-width: 767px) {
  .id-width {
    min-width: 11%;
  }
  .name-width {
    max-width: 13%;
  }
  .gender-width {
    min-width: 14%;
  }
  .time-width {
    max-width: 6%;
  }
  .area-width {
    max-width: 14%;
  }

  .visit-reason-width {
    min-width: 31%;
  }
  .patient-status {
    max-width: 12%;
    text-align: center;
  }
}

@media (max-width: 567px) {
  .table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-details {
    width: 100%;
    min-width: 900px;
  }
  .id-width {
    min-width: 10%;
  }
  .name-width {
    max-width: 12%;
  }
  .gender-width {
    min-width: 13%;
  }
  .time-width {
    max-width: 6%;
  }
  .area-width {
    max-width: 14%;
  }

  .visit-reason-width {
    min-width: 33%;
  }
  .patient-status {
    max-width: 12%;
    text-align: center;
  }
}
@media (max-width: 399px) {
  .table-details {
    width: 100%;
    min-width: 880px;
  }
  .visit-reason-width {
    min-width: 31%;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table-details {
    width: 100%;
    min-width: 1000px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visit-reason-width {
    max-width: 24%;
  }
}
@media (min-width: 1920px) {
  .visits-reason {
    padding: 7px 12px;
    border-radius: 20.5px;
  }
  .patient-status {
    max-width: 10%;
  }
  .visit-reason-width {
    max-width: 21%;
  }
  .bg-green {
    padding: 12px 10px;
  }
  .bg-orange {
    padding: 12px 10px;
  }
  .name-width {
    max-width: 15%;
  }
  .gender-icon img {
    min-width: 40px;
    min-height: 36px;
  }
  .time-width {
    max-width: 7%;
  }
  .area-width {
    max-width: 17%;
  }
}
</style>
