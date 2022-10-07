<template>
  <div class="container">
    <h2>Todo 수정</h2>
    <TodoForm :editing="true" />
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";

export default {
  components: {
    TodoForm,
  },
  emits: [
    // "update-todo-toast",
    // "update-load-fail-toast",
    // "err-subject-toast",
    // "update-todo-fail-toast",
  ],
  setup() {
    // const updateTodo = () => {
    //   console.log("내용 업데이트");
    //   emit("update-todo-toast", {});
    // };

    // const updateLoadFail = () => {
    //   emit("update-load-fail-toast", {});
    // };

    // const errSubject = () => {
    //   emit("err-subject-toast", {});
    // };

    // const updateTodoFail = () => {
    //   emit("update-todo-fail-toast", {});
    // };
    return {
      // updateTodo,
      // updateLoadFail,
      // errSubject,
      // updateTodoFail,
    };
  },
};
</script>

<style></style>
