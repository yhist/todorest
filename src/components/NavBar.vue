<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <RouterLink class="navbar-brand" :to="{ name: 'Home' }"
        >My Todo
      </RouterLink>
      <RouterLink class="nav-link" :to="{ name: 'Todos' }">Todos</RouterLink>
      <RouterLink class="nav-link" :to="{ name: 'TodoCreate' }"
        >Todo Create</RouterLink
      >
      <RouterLink class="nav-link" :to="{ name: 'About' }">About</RouterLink>
      <RouterLink class="nav-link" :to="{ name: 'Profile' }"
        >Profile</RouterLink
      >
      <a
        class="nav-link disabled"
        href="https://github.com/yhist/todorest"
        target="_blank"
        >Github</a
      >
      <KakaoLogin />
    </div>
  </nav>
</template>

<script>
import KakaoLogin from "@/views/KakaoLogin.vue";
export default {
  components: { KakaoLogin },
  setup() {},
};
</script>

<style></style>
