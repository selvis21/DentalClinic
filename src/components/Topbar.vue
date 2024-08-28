<template>
  <nav class="navbar navbar-expand-md navbar-light topbar">
    <div class="container-fluid">
      <a class="navbar-brand d-md-none d-flex" href="/">
        <img
          src="@/assets/img/clinic-logo.png"
          alt="Clinic Logo"
          class="img-fluid" />
      </a>
      <div class="navbar-brand col-lg-5 col-md-5 search-text d-md-flex d-none">
        <form>
          <div class="search d-flex gap-2 align-items-center">
            <span class="search-icon material-symbols-outlined">search</span>
            <input
              class="search-input px-2"
              type="search"
              placeholder="Search for patient"
              v-model="searchQuery" />
          </div>
        </form>
      </div>
      <button
        class="navbar-toggler d-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end align-items-center"
        id="navbarSupportedContent">
        <ul
          class="navbar-nav mb-lg-2 mb-lg-0 gap-lg-3 gap-md-2 d-flex align-items-center">
          <li class="nav-item">
            <a class="nav-links text-decoration-none">
              <img :src="faq" alt="FAQ" class="img-fluid" />
            </a>
          </li>
          <li class="nav-item">
            <router-link to="/settings" class="nav-links text-decoration-none">
              <img :src="settings" alt="Settings" class="img-fluid" />
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/notification"
              class="nav-links text-decoration-none">
              <img :src="notification" alt="Notification" class="img-fluid" />
            </router-link>
          </li>
          <li class="nav-item d-flex gap-2">
            <img :src="dp" class="rounded-circle img-fluid" alt="Profile" />
          </li>
          <li class="d-flex flex-column h4-heading administrator">
            Administrator
            <span class="admin-mail h6-heading">admin@mail.com</span>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <img :src="drpdown" alt="Dropdown" class="img-fluid" />
            </a>
            <ul
              class="dropdown-menu topbar-menu"
              aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Log out</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <button
        class="btn-default d-flex d-md-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="offcanvas offcanvas-end d-flex d-md-none"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <Sidebar />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import faq from "@/assets/img/faq.png";
import settings from "@/assets/img/settings-icon.png";
import notification from "@/assets/img/notification.png";
import drpdown from "@/assets/img/dropdown-arrow.png";
import dp from "@/assets/img/dp.jpg";
import { searchQuery } from "@/composables/useSearchQuery";
import Sidebar from "../components/Sidebar.vue";
import { Dropdown } from "bootstrap";

export default {
  name: "TopBar",
  components: {
    Sidebar,
  },
  data() {
    return {
      faq,
      settings,
      notification,
      drpdown,
      dp,
      searchQuery,
    };
  },
  mounted() {
    const dropdownElement = document.getElementById("navbarDropdown");
    new Dropdown(dropdownElement);
  },
};
</script>

<style>
.admin-mail {
  color: #6e6e91;
}
.rounded-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #f1f1f4;
}
.dropdown-toggle::after {
  display: none !important;
}
.search {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 12px;
  background-color: #f1f1f4;
  height: 48px;
}
.search-input {
  border: none;
  background-color: #f1f1f4;
  font-size: 14px;
  color: #8b8ba7;
  outline: none;
}
.topbar {
  border-left: 1px solid #f1f1f4;
  border-bottom: 1px solid #f1f1f4;
}
.navbar-toggler {
  border: none !important;
}
.offcanvas {
  max-width: 60% !important;
}
.topbar-menu {
  left: -385% !important;
}
.administrator {
  color: #16161d;
  font-weight: 700;
}

@media (max-width: 399px) {
  .navbar-brand img {
    max-width: 80%;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .navbar-brand {
    min-width: 50%;
  }
  .search {
    padding: 0px 6px;
  }

  .search-input {
    max-width: 170px;
  }
  .topbar-menu {
    left: -130px !important;
  }
}

@media (min-width: 1920px) {
  .nav-links img {
    min-width: 36px;
  }
  .search-input {
    font-size: 20px;
  }
  .search-icon {
    min-width: 30px;
    min-height: 30px;
  }
}
</style>
