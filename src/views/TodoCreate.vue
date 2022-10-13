<template>
  <div class="container">
    <h1>TodoCreate</h1>
    <TodoForm />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import TodoForm from "@/components/TodoForm.vue";
import { computed } from "vue";

export default {
  components: { TodoForm },
  // emits: ["new-todo-toast", "new-todo-fail-toast", "err-subject-toast"],
  setup() {
    // const newTodo = () => {
    //   emit("new-todo-toast", {});
    // };
    // const newTodoFail = () => {
    //   emit("new-todo-fail-toast", {});
    // };
    // const errSubject = () => {
    //   emit("err-subject-toast", {});
    // };

    const store = useStore();
    const router = useRouter();
    const loginState = computed(() => store.getters["kakao/getLoginState"]);
    if (!loginState.value) {
      alert("로그인을 하세요");
      router.push({ name: "Home" });
    }
    return {
      // newTodo,
      // newTodoFail,
      // errSubject,
    };
  },
};
</script>

<style></style>
