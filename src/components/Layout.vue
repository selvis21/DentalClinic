<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 col-md-3 py-md-4 d-md-flex d-none sidebar-content">
        <div class="dashboard">
          <Sidebar />
        </div>
      </div>
      <div class="col-lg-10 col-md-9 col-12 px-0 topbar-main-content">
        <div class="main-content">
          <TopBar />
          <!-- Dynamically load the content based on the route -->
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import TopBar from "../components/Topbar.vue";

export default {
  components: {
    Sidebar,
    TopBar,
  },
};
</script>

<style scoped>
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sidebar-content {
  position: relative;
}

@media (min-width: 3000px) {
  .sidebar-content {
    max-width: 10%;
    padding: 0% 1%;
  }
  .topbar-main-content {
    min-width: 90%;
  }

  .patient-status {
    max-width: 6%;
  }
}
</style>
