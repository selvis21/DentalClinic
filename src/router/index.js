import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import DashboardContent from "../pages/Layouts/DashboardContent.vue";
import AppointmentContent from "../pages/Layouts/AppointmentsContent.vue";
import PatientsContent from "../pages/Layouts/PatientsContent.vue";
import StaffsContent from "../pages/Layouts/StaffsContent.vue";
import SettingsContent from "../pages/Layouts/SettingsContent.vue";
import LogoutContent from "../pages/Layouts/LogoutContent.vue";
import NotificationContent from "../pages/Layouts/LogoutContent.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "", // Default route
        component: DashboardContent,
      },
      {
        path: "appointments",
        component: AppointmentContent,
      },
      {
        path: "patients",
        component: PatientsContent,
      },
      {
        path: "staffs",
        component: StaffsContent,
      },
      {
        path: "settings",
        component: SettingsContent,
      },
      {
        path: "logout",
        component: LogoutContent,
      },
      {
        path: "notification",
        component: NotificationContent,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
