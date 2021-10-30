<template>
  <div class="wrapper">
    <!-- <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}"> -->

    <side-bar :background-color="backgroundColor">
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <sidebar-link to="/dashboard">
        <i class="tim-icons icon-chart-pie-36"></i>
        <template v-if="!isRTL">
          <p>系统首页</p>
        </template>
        <template v-else>
          <p>لوحة القيادة</p>
        </template>
      </sidebar-link>
      <sidebar-link to="/markvgan">
        <i class="tim-icons icon-atom"></i>
          <p>加密流量检测</p>
      </sidebar-link>
      <sidebar-link to="/covertchannel">
        <i class="tim-icons icon-light-3"></i>
        <p>隐蔽信道检测</p>
      </sidebar-link>
      <sidebar-link to="/fewshottraffic">
        <i class="tim-icons icon-components"></i>
        <p>异常行为检测</p>
      </sidebar-link>
      <sidebar-link to="/malicioustraffic">
        <i class="tim-icons icon-sound-wave"></i>
        <p>异常行为检测</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <i class="tim-icons icon-atom"></i>
        <template v-if="!isRTL">
          <p>系统管理</p>
        </template>
        <template v-else>
          <p>الرموز</p>
        </template>
      </sidebar-link>
<!--      <sidebar-link to="/maps">-->
<!--        <i class="tim-icons icon-pin"></i>-->
<!--        <template v-if="!isRTL">-->
<!--          <p>Maps</p>-->
<!--        </template>-->
<!--        <template v-else>-->
<!--          <p>خرائط</p>-->
<!--        </template>-->
<!--      </sidebar-link>-->
<!--      <sidebar-link to="/notifications">-->
<!--        <i class="tim-icons icon-bell-55"></i>-->
<!--        <template v-if="!isRTL">-->
<!--          <p>Notifications</p>-->
<!--        </template>-->
<!--        <template v-else>-->
<!--          <p>إخطارات</p>-->
<!--        </template>-->
<!--      </sidebar-link>-->
<!--      <sidebar-link to="/user">-->
<!--        <i class="tim-icons icon-single-02"></i>-->
<!--        <template v-if="!isRTL">-->
<!--          <p>User Profile</p>-->
<!--        </template>-->
<!--        <template v-else>-->
<!--          <p>ملف تعريفي للمستخدم</p>-->
<!--        </template>-->
<!--      </sidebar-link>-->
<!--      <sidebar-link to="/table">-->
<!--        <i class="tim-icons icon-puzzle-10"></i>-->
<!--        <template v-if="!isRTL">-->
<!--          <p>Table List</p>-->
<!--        </template>-->
<!--        <template v-else>-->
<!--          <p>قائمة الجدول</p>-->
<!--        </template>-->
<!--      </sidebar-link>-->
<!--      <sidebar-link to="/typography">-->
<!--        <i class="tim-icons icon-align-center"></i>-->
<!--        <template v-if="!isRTL">-->
<!--          <p>Typography</p>-->
<!--        </template>-->
<!--        <template v-else>-->
<!--          <p>طباعة</p>-->
<!--        </template>-->
<!--      </sidebar-link>-->
<!--      <sidebar-link to="/dashboard?enableRTL=true">-->
<!--        <i class="tim-icons icon-world"></i>-->
<!--        <template v-if="!isRTL">-->
<!--          <p>RTL Support</p>-->
<!--        </template>-->
<!--        <template v-else>-->
<!--          <p>دعم RTL</p>-->
<!--        </template>-->
<!--      </sidebar-link>-->
    </side-bar>
<!--    <sidebar-share :background-color.sync="backgroundColor"></sidebar-share>-->

    <div class="main-panel" :data="backgroundColor">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"></dashboard-content>

      <content-footer></content-footer>
    </div>

  </div>
</template>
<style lang="scss"></style>
<script>

import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./DashboardContent.vue";
import SidebarShare from "./SidebarSharePlugin.vue";
import MobileMenu from "./MobileMenu.vue";
import SideBar from "@/components/SidebarPlugin/SideBar.vue";
import SidebarLink from "@/components/SidebarPlugin/SidebarLink.vue";



export default{
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    SideBar,
    SidebarLink,
    SidebarShare
  },
  data() {
    return {
      backgroundColor: "blue"
    };
  },
  computed: {
    isRTL() {
      return this.$rtl.isRTL;
    }
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
