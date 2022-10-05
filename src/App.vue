<template>
  <NavBar />

  <RouterView
    @update-todo-toast="updateTodoToast"
    @new-todo-toast="newTodoToast"
    @update-load-fail-toast="updateLoadFailToast"
    @err-subject-toast="errSubjectToast"
    @update-todo-fail-toast="updateTodoFailToast"
    @new-todo-fail-toast="newTodoFailToast"
    @list-load-fail-toast="listLoadFailToast"
    @delete-todo-toast="deleteTodoToast"
    @delete-todo-fail="deleteTodoFailToast"
  />
  <Transition name="fade">
    <ToastBox v-if="showToast" :message="toastMessage" :color="toastType" />
  </Transition>
</template>
<script>
import ToastBox from "@/components/ToastBox.vue";
import { useToast } from "@/composables/toast";
import NavBar from "@/components/NavBar.vue";

export default {
  components: { ToastBox, NavBar },

  setup() {
    // 안내창 관련
    const { showToast, toastMessage, toastType, triggerToast } = useToast();

    const updateTodoToast = () => {
      triggerToast("내용이 업데이트 되었습니다.");
    };
    const newTodoToast = () => {
      triggerToast("새글이 등록되었습니다.");
    };
    const updateLoadFailToast = () => {
      triggerToast("내용을 가지고 오는데 실패하였습니다.", "danger");
    };
    const errSubjectToast = () => {
      triggerToast("제목을 입력하세요", "danger");
    };
    const updateTodoFailToast = () => {
      triggerToast("업데이트에 실패하였습니다.", "danger");
    };
    const newTodoFailToast = () => {
      triggerToast("새글등록에 실패하였습니다.", "danger");
    };
    const listLoadFailToast = () => {
      triggerToast("목록 호출에 실패하였습니다.", "danger");
    };
    const deleteTodoToast = () => {
      triggerToast("목록을 삭제하였습니다.");
    };
    const deleteTodoFailToast = () => {
      triggerToast("목록을 삭제에 실패하였습니다.", "danger");
    };

    return {
      updateTodoToast,
      newTodoToast,
      updateLoadFailToast,
      errSubjectToast,
      updateTodoFailToast,
      newTodoFailToast,
      listLoadFailToast,
      deleteTodoToast,
      deleteTodoFailToast,

      showToast,
      toastMessage,
      toastType,
      triggerToast,
    };
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
