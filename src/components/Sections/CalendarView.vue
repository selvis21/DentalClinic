<template>
  <div class="d-flex gap-lg-3 gap-md-2 gap-2 align-items-center calendar">
    <div class="date-display d-flex align-items-center gap-lg-3 gap-md-2">
      <div class="d-flex">
        <span class="px-md-2 px-1 py-1 day-cal h6-heading day-btn">{{
          label
        }}</span>
      </div>
      <div class="d-flex align-items-center display-cal">
        <button @click="prevDate" class="left-arrow">
          <img :src="leftarrow" class="img-fluid" />
        </button>
        <button @click="nextDate" class="right-arrow">
          <img :src="rightarrow" class="img-fluid" />
        </button>
        <span class="px-md-2 h4-heading date-year-btn">{{
          formattedDate
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import leftarrow from "@/assets/img/left-arrow.png";
import rightarrow from "@/assets/img/right-arrow.png";

export default {
  data() {
    return {
      leftarrow,
      rightarrow,
      currentDate: new Date(),
    };
  },
  computed: {
    label() {
      return this.getLabel(this.currentDate);
    },
    formattedDate() {
      const options = {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      //   return this.currentDate.toLocaleDateString(undefined, options);
      const weekday = this.currentDate.toLocaleDateString(undefined, {
        weekday: "short",
      });
      const day = this.currentDate.toLocaleDateString(undefined, {
        day: "numeric",
      });
      const month = this.currentDate.toLocaleDateString(undefined, {
        month: "long",
      });
      const year = this.currentDate.toLocaleDateString(undefined, {
        year: "numeric",
      });

      return `${weekday}, ${day} ${month} ${year}`;
    },
  },
  methods: {
    prevDate() {
      this.currentDate.setDate(this.currentDate.getDate() - 1);
      this.currentDate = new Date(this.currentDate); // refresh the date object to trigger reactivity
    },
    nextDate() {
      this.currentDate.setDate(this.currentDate.getDate() + 1);
      this.currentDate = new Date(this.currentDate); // refresh the date object to trigger reactivity
    },
    getLabel(date) {
      const today = new Date();
      const tomorrow = new Date();
      const yesterday = new Date();
      tomorrow.setDate(today.getDate() + 1);
      yesterday.setDate(today.getDate() - 1);

      if (date.toDateString() === today.toDateString()) {
        return "Today";
      } else if (date.toDateString() === tomorrow.toDateString()) {
        return "Tomorrow";
      } else if (date.toDateString() === yesterday.toDateString()) {
        return "Yesterday";
      }
      return "";
    },
  },
};
</script>

<style>
.calendar {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  margin: 0 10px;
  padding: 5px 8px;
  background-color: transparent;
  border: none;
}

@media (min-width: 1920px) {
  .left-arrow img,
  .right-arrow img {
    min-width: 10px;
  }
}
</style>
