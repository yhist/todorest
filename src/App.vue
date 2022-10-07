<template>
  <NavBar />

  <RouterView />

  <Transition name="fade">
    <ToastBox />
  </Transition>
</template>
<script>
import ToastBox from "@/components/ToastBox.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: { ToastBox, NavBar },

  setup() {
    return {};
  },
};
</script>
<style>
#app {
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
  transition: transform 0.4s, opacity 0.4s;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
