<template>
  <div class="container">
    <h2>Todo View</h2>
    <div v-if="loading">Loading...</div>
    <form v-if="!loading" @submit.prevent="onSave">
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label>Todo Subject</label>
            <input type="text" class="form-control" v-model="todo.subject" />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label>Status</label>
            <div>
              <button
                class="btn"
                :class="todo.complete ? 'btn-success' : 'btn-danger'"
                @click="toggleTodoState"
                type="button"
              >
                {{ todo.complete ? "완료" : "진행중" }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <button class="btn btn-primary" type="submit" :disabled="todoState">
        Save
      </button>
      <button class="btn btn-outline-dark ml-2" @click="moveList">
        Cancel
      </button>
    </form>
    <ToastBox v-if="showToast" :message="toastMessage" :color="toastType" />
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import axios from "axios";
import _ from "lodash";
import ToastBox from "@/components/ToastBox.vue";

export default {
  components: {
    ToastBox,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    // 데이터 로딩 화면창 상태
    const loading = ref(true);
    const todo = ref(null);

    // 원본 데이터 보과 및 비교용(Todo 객체)
    const originalTodo = ref(null);

    // 전달받은 id를 이용해서 db에서 자료를 가져온다.
    const getTodo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/todos/${route.params.id}`
        );
        todo.value = { ...response.data };
        originalTodo.value = { ...response.data };
        loading.value = false;
      } catch (err) {
        triggerToast(
          "서버에러가 발생하였습니다. 잠시 후 다시 시도 해 주세요.",
          "danger"
        );
      }
    };

    getTodo();

    const toggleTodoState = () => {
      todo.value.complete = !todo.value.complete;
    };

    const moveList = () => {
      router.push({
        name: "Todos",
      });
    };

    const onSave = async () => {
      try {
        const res = await axios.put(
          `http://localhost:3000/todos/${todo.value.id}`,
          {
            subject: todo.value.subject,
            complete: todo.value.complete,
          }
        );
        originalTodo.value = { ...res.data };
        triggerToast("업데이트가 성공하였습니다.");
      } catch (err) {
        triggerToast(
          "서버에러가 발생하였습니다. 잠시 뒤 다시 저장해주세요.",
          "danger"
        );
      }
    };

    const todoState = computed(() => {
      return _.isEqual(todo.value, originalTodo.value);
    });

    // 안내창 관련
    const toastMessage = ref("");
    const toastType = ref("");
    const showToast = ref(false);
    const triggerToast = (message, color = "success") => {
      toastMessage.value = message;
      toastType.value = color;
      showToast.value = true;
      setTimeout(() => {
        toastMessage.value = "";
        toastType.value = "";
        showToast.value = false;
      }, 3000);
    };

    return {
      todo,
      loading,
      toggleTodoState,
      moveList,
      onSave,
      todoState,
      toastMessage,
      showToast,
      toastType,
    };
  },
};
</script>

<style></style>
