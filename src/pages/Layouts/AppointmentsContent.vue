<template>
  <div class="">
    <div
      class="d-flex head-sec justify-content-between px-lg-4 px-md-3 px-3 py-lg-3 py-md-2 py-2 align-items-center border-left-line">
      <div>
        <h2 class="h2-heading mb-0">OP/Appointments</h2>
      </div>
      <div
        class="d-flex h5-heading choose-doctor justify-content-center align-items-center gap-md-3 gap-1">
        Choose Doctor
        <div class="dropdown">
          <button
            class="dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <img
              :src="yeardrpdown"
              alt="FAQ"
              class="img-fluid choose-options" />
          </button>
          <ul
            class="dropdown-menu mt-3 doctors-menu"
            aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Doctor 1</a></li>
            <li><a class="dropdown-item" href="#">Doctor 2</a></li>
            <li><a class="dropdown-item" href="#">Doctor 3</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="patients-appointments px-0">
      <div
        class="px-lg-4 px-md-3 px-3 d-flex flex-lg-row flex-column op-date-time py-3 gap-lg-1 gap-4 justify-content-between align-items-lg-center">
        <div class="d-flex gap-lg-3 gap-md-2 appointments-sec1">
          <div class="d-flex gap-2 align-items-center appointment-content">
            <div class="patients-appointment-img">
              <img :src="appointmentsicon" class="appoint-icon img-fluid" />
            </div>

            <div class="h2-heading bold-heading ad-heading">
              18
              <span class="h5-heading total-count"
                >total appointments for Dr. Praveen</span
              >
            </div>
          </div>
          <div class="cal-class d-flex">
            <CalenderDateDay />
          </div>
        </div>
        <div class="d-flex gap-lg-4 gap-md-2 appointments-sec2">
          <div class="d-flex gap-md-3 toggle-align">
            <div class="d-flex toggle-container">
              <div
                @click="showDay"
                :class="[
                  'toggle-item h6-heading toggle-border px-md-4 px-3 py-2 d-flex align-items-center justify-content-center',
                  { active: currentView === 'Day' },
                ]">
                Day
              </div>
              <div
                @click="showHistory"
                :class="[
                  'toggle-item h6-heading toggle-border px-md-4 px-3 py-2 d-flex align-items-center justify-content-center',
                  { active: currentView === 'History' },
                ]">
                History
              </div>
            </div>
            <!-- <div v-if="currentView === 'Day'">
      
          <p>This is the Day data.</p>
        </div>
        <div v-if="currentView === 'History'">

          <p>This is the History data.</p>
        </div> -->
          </div>
          <div class="d-flex gap-3 align-items-center book-appointment">
            <div class="filter-icon d-md-flex d-none">
              <img :src="filtericon" class="img-fluid" />
            </div>
            <!-- Button trigger modal -->
            <button
              class="d-flex add-btn-border justify-content-evenly align-items-center gap-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">
              <div class="add-icon-img d-flex align-items-center">
                <img :src="addicon" class="img-fluid" />
              </div>
              <div class="h6-heading add-btn-heading">New OP/Appointments</div>
            </button>
            <div class="filter-icon d-flex d-md-none">
              <img :src="filtericon" class="img-fluid" />
            </div>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content px-2 py-2">
                  <div class="modal-header">
                    <div
                      class="d-flex gap-md-3 gap-2 align-items-center modal-header-content">
                      <div
                        class="modal-title fs-5 h4-heading"
                        id="exampleModalLabel">
                        OP/Appointment ID
                      </div>
                      <div class="h5-heading new-op-id">#2607240912</div>
                    </div>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div class="modal-body d-flex flex-column gap-2 pb-5">
                    <div class="h6-heading modal-body-header">
                      Patient phone number
                    </div>
                    <div
                      class="search-ph-num h5-heading py-1 px-2 d-flex align-items-center gap-3">
                      <span>
                        <img :src="phoneicon" class="img-fluid" />
                      </span>
                      Enter Patient phone number
                    </div>
                  </div>
                  <div class="modal-footer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="centered-align">
        <TableView />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import yeardrpdown from "@/assets/img/year-drpdown.png";
import appointmentsicon from "@/assets/img/appointments-icon.png";
import filtericon from "@/assets/img/filter-icon.png";
import addicon from "@/assets/img/add-icon.png";
import leftarrow from "@/assets/img/left-arrow.png";
import rightarrow from "@/assets/img/right-arrow.png";
import CalenderDateDay from "@/components/Sections/CalendarView.vue";
import { searchQuery } from "@/composables/useSearchQuery";
import phoneicon from "@/assets/img/phone-icon.png";
import TableView from "@/components/Sections/TableView.vue";

export default {
  name: "DashboardContent",
  components: {
    CalenderDateDay,
    TableView,
  },
  props: {
    patient: Object,
  },
  data() {
    return {
      yeardrpdown,
      appointmentsicon,
      filtericon,
      addicon,
      leftarrow,
      rightarrow,
      phoneicon,
      currentView: "Day",
      searchQuery,
    };
  },

  methods: {
    showDay() {
      this.currentView = "Day";
    },
    showHistory() {
      this.currentView = "History";
    },
  },
};
</script>

<style>
.choose-doctor {
  color: #a8a8bd;
  border: 1px solid #c5c5d3;
  padding: 6px 12px;
  border-radius: 5px;
}

.patients-appointments {
  border: 1px solid #eeeeee;
}
.op-date-time {
  border-bottom: 1px solid #eeeeee;
}
.appoint-icon {
  min-width: 18px;
}
.ad-heading {
  white-space: nowrap;
}

.toggle-container {
  border: 1px solid #f1f1f4;
  border-radius: 5px;
  overflow: hidden;
  background-color: #f1f1f4;
}

.toggle-item {
  cursor: pointer;
  background-color: #f1f1f4;
  color: #c2c2c2;
  flex: 1;
  border: 1px solid #f1f1f4;
  transition: background-color 0.3s;
}

.toggle-item.active {
  background-color: #ffffff;
  color: #1c1c21;
  border-radius: 5px;
  min-width: 60px;
}
.toggle-border,
.date-year-btn,
.day-btn {
  font-weight: 700;
}
.add-btn-border {
  padding: 9px 14px;
  background-color: #006aff;
  border-radius: 5px;
}
.add-btn-heading {
  color: #ffffff;
  font-weight: 700;
}
.day-cal {
  border: 1px solid #006aff;
  border-radius: 5px;
}
.date-year-btn {
  color: #1c1c21;
}

.border-left-line {
  border-left: 1px solid #f1f1f4;
}
.h6-heading.add-btn-heading {
  cursor: pointer;
}
.modal-content {
  border-radius: 30px !important;
}
.modal-header,
.modal-footer {
  border-top: none !important;
  border-bottom: none !important;
}
.new-op-id {
  font-weight: 600;
  color: #16161d;
}
.modal-body-header {
  font-weight: 700;
}
.search-ph-num {
  border: 1px solid #c5c5d3;
  color: #a8a8bd;
  border-radius: 5px;
}
.modal-dialog {
  max-width: 630px !important;
}
.modal-backdrop.fade {
  background-color: #0000004d;
}

@media (max-width: 575px) {
  .choose-doctor {
    max-width: 50%;
    padding: 0.5% 2%;
  }
  .left-arrow img,
  .right-arrow img {
    min-width: 10%;
  }

  .date-year-btn {
    line-height: 16px;
    max-width: 80%;
  }

  .appointments-sec2 {
    flex-direction: column;
  }
  .appointments-sec1 {
    gap: 10%;
  }
  .toggle-container {
    min-width: 100%;
  }

  .ad-heading {
    white-space: normal;
    width: 62%;
    line-height: 16px;
  }
  .book-appointment {
    justify-content: space-between;
  }
  .add-btn-border {
    padding-left: 25%;
    padding-right: 25%;
  }
  .toggle-align {
    margin-bottom: 5%;
  }
}
@media (min-width: 358px) and (max-width: 575px) {
  .date-year-btn {
    max-width: 50%;
  }
  /* .cal-class {
    width: 230px;
  } */
  .ad-heading {
    width: 70%;
  }
}
@media (min-width: 431px) and (max-width: 575px) {
  .date-year-btn {
    max-width: 70%;
  }
  .ad-heading {
    width: 80%;
  }
  .appointments-sec1 {
    gap: 5%;
  }
}
@media (max-width: 405px) {
  .patients-appointment-img {
    display: none;
  }
  .appointments-sec1 {
    gap: 4%;
  }
  .add-btn-border {
    padding-left: 20%;
    padding-right: 20%;
  }
  .modal-header-content {
    flex-direction: column;
  }
}

@media (max-width: 767px) {
  .doctors-menu {
    min-width: 70px !important;
  }
}
@media (min-width: 576px) {
  .choose-options {
    min-width: 14px;
    min-height: 7px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .appointments-sec1 {
    justify-content: space-between;
  }
  .appointments-sec2 {
    justify-content: space-between;
  }
  .date-year-btn,
  .ad-heading {
    width: 100%;
  }
  .toggle-container {
    min-width: 275px;
  }
  .add-btn-border {
    padding: 10px 27px;
  }
  .ad-heading {
    white-space: normal;
  }
  .choose-doctor {
    padding: 2px 8px;
  }
}

@media (min-width: 768px) and (max-width: 829px) {
  .cal-class,
  .book-appointment {
    max-width: 270px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .choose-doctor {
    padding: 2px 6px;
  }
  .ad-heading {
    line-height: 20px;
  }
  .appointments-sec2,
  .appointments-sec1 {
    justify-content: space-between;
  }

  .add-btn-border {
    padding: 9px 40px;
  }
  .toggle-container {
    min-width: 205px;
  }
  .ad-heading {
    white-space: normal;
    width: 65%;
  }
}
@media (min-width: 830px) and (max-width: 991px) {
  .date-display {
    margin-left: 0%;
  }
  .ad-heading {
    white-space: nowrap;
    width: 100%;
  }
  .add-btn-border {
    padding: 9px 44px;
  }
  .toggle-container {
    min-width: 275px;
  }
  .date-year-btn {
    width: 100%;
  }
}

@media (min-width: 992px) and (max-width: 1142px) {
  .ad-heading {
    line-height: 15px;
    white-space: normal;
    max-width: 67%;
  }
  .add-icon-img img {
    max-width: 18px;
  }
  .filter-icon img {
    max-width: 20px;
  }
}

@media (min-width: 1920px) {
  .filter-icon img {
    min-width: 30px;
  }
  .add-icon-img img {
    min-width: 20px;
  }
  .add-btn-border {
    padding: 10px 13px;
  }
  .appoint-icon {
    min-width: 25px;
  }
  .doctors-menu {
    left: -120px !important;
  }
  .day-btn {
    line-height: 30px;
  }
}
</style>
