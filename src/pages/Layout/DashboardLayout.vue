<template>
  <div class="wrapper">
    <!-- <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}"> -->

    <side-bar :background-color="backgroundColor" style="width:220px;">
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <sidebar-link to="/dashboard">
        <template v-if="!isRTL">
          <p style="font-size: 24px">系统首页</p>
        </template>
        <template v-else>
          <p>لوحة القيادة</p>
        </template>
      </sidebar-link>
      <hr align="center" width="180" color="white" SIZE="0.5" />

      <div style="padding: 0 25px">
        <p style="font-size: 24px">XXXXXX</p>
      </div>
      <sidebar-link style="padding: 0 20px" to="/fewshottraffic">
        <i class="tim-icons icon-zoom-split"></i>
        <p>稀疏行为</p>
      </sidebar-link>
      <sidebar-link style="padding: 0 20px" to="/malicioustraffic">
        <i class="tim-icons icon-sound-wave"></i>
        <p>未知行为</p>
      </sidebar-link>
      <sidebar-link style="padding: 0 20px" to="/markvgan">
        <i class="tim-icons icon-atom"></i>
        <p>变形行为</p>
      </sidebar-link>
      <hr align="center" width="180" color="white" SIZE="0.5" />

      <div style="padding: 0 20px">
        <p style="font-size: 24px">XXXXXX</p>
      </div>

      <sidebar-link style="padding: 0 20px" to="/covertchannel">
        <i class="tim-icons icon-light-3"></i>
        <p>隐蔽信道</p>
      </sidebar-link>
      <sidebar-link style="padding: 0 20px" to="/escapeattack">
        <i class="tim-icons icon-atom"></i>
        <p>逃逸攻击</p>
      </sidebar-link>
      <sidebar-link style="padding: 0 20px" to="/dummy">
        <i class="tim-icons icon-delivery-fast"></i>
        <p>伪装攻击</p>
      </sidebar-link>
      <hr align="center" width="180" color="white" SIZE="0.5" />

      <sidebar-link to="/icons">
          <p style="font-size: 24px">系统管理</p>
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

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    SideBar,
    SidebarLink,
    SidebarShare,
  },
  data() {
    return {
      backgroundColor: "blue",
    };
  },
  computed: {
    isRTL() {
      return this.$rtl.isRTL;
    },
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>

<style scoped>
.wrapper p {
  font-size: 14px;
}
</style>
