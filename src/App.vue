<template>
  <div>
    <NavBar />
    <RouterView />
    <Transition name="fade">
      <ToastBox />
    </Transition>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import ToastBox from "@/components/ToastBox.vue";
import { useStore } from "vuex";
export default {
  components: {
    ToastBox,
    NavBar,
  },
  setup() {
    const store = useStore();
    const getCookie = () => {
      let x, y;
      let val = document.cookie.split(";");
      for (let i = 0; i < val.length; i++) {
        x = val[i].substr(0, val[i].indexOf("="));
        y = val[i].substr(val[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, ""); // 앞과 뒤의 공백 제거하기
        if (x == "loginState") {
          let temp = unescape(y);
          if (temp == "success") {
            store.dispatch("kakao/loginStateSuccess");
          }
          // return unescape(y); // unescape로 디코딩 후 값 리턴
        }
      }
    };
    getCookie();
    return {};
  },
};
</script>
<style scoped>
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
  transition: transform 0.5s;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
