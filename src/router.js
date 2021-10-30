import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
// import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Markvgan from "@/pages/Markvgan.vue";
import CovertChannel from "@/pages/CovertChannel.vue";
import FewshotTraffic from "@/pages/FewshotTraffic.vue";
import MaliciousTraffic from "@/pages/MaliciousTraffic.vue";


const routes = [{
  path: "/",
  component: DashboardLayout,
  redirect: "dashboard",
  children:[
    {
      path: "dashboard",
      name: "系统首页",
      component: Dashboard
    },
    {
      path: "icons",
      name: "Icons",
      component: Icons
    },
    {
      path: "maps",
      name: "Maps",
      component: Maps
    },
    {
      path: "notifications",
      name: "Notifications",
      component: Notifications
    },
    {
      path: "user",
      name: "User Profile",
      component: UserProfile
    },
    {
      path: "table",
      name: "Table List",
      component: TableList
    },
    {
      path: "typography",
      name: "Typography",
      component: Typography
    },
    {
      path: "markvgan",
      name: "Markvgan",
      component: Markvgan
    },
    {
      path: "covertchannel",
      name: "CovertChannel",
      component: CovertChannel
    },
    {
      path: "fewshottraffic",
      name: "FewshotTraffic",
      component: FewshotTraffic
    },
    {
      path: "malicioustraffic",
      name: "MaliciousTraffic",
      component: MaliciousTraffic
    }
    ]
}];

export default routes;
