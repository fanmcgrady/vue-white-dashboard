<template>
    <component :is="tag" v-bind="$attrs" class="nav-item" tag="li">  
    <a class="nav-link" style="padding:5px 8px">
        <slot>
          <i></i>
          <p>{{ link.name }}</p>
        </slot>
      </a>
    </component :is="tag">
</template>
<script>
export default {
  name: "sidebar-link",
  inject: {
    autoClose: {
      default: true,
    },
  },
  props: {
    link: {
      type: [String, Object],
      default: () => {
        return {
          name: "",
          path: "",
          icon: "",
        };
      },
    },
    tag: {
      type: String,
      default: "router-link",
    },
  },
  methods: {
    isActive() {
      return this.$el.classList.contains("active");
    },
  },
};
</script>
<style>
</style>
