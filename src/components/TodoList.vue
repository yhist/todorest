<template>
  <div>
    <div v-for="(item, index) in todos" v-bind:key="index" class="card mt-2">
      <div class="card-body p-2 d-flex">
        <div class="form-check flex-grow-1 align-items-center">
          <input
            type="checkbox"
            class="form-check-input"
            :checked="item.complete"
            @change="toggleTodo(index)"
          />

          <label
            @click="moveToPage(item.id)"
            style="cursor: pointer"
            class="form-check-label"
            v-bind:class="{ todostyle: item.complete }"
            >{{ item.subject }}
          </label>
        </div>
        <div>
          <button class="btn btn-danger btn-sm" @click="openModal(item.id)">
            Delete
          </button>
        </div>
      </div>
    </div>

    <teleport to="#modal">
      <ModalView
        v-show="showModal"
        @close-modal="closeModal"
        @delete="onDelete"
      >
        <template v-slot:title>할일 목록</template>
        <template v-slot:body>삭제 하시겠습니까?</template>
      </ModalView>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ModalView from "@/components/ModalView.vue";

export default {
  components: {
    ModalView,
  },
  props: ["todos"],
  emits: ["delete-todo", "toggle-todo"],
  setup(props, { emit }) {
    const deleteTodo = (index) => {
      emit("delete-todo", index);
    };
    const toggleTodo = (index) => {
      emit("toggle-todo", index);
    };

    const router = useRouter();
    const moveToPage = (id) => {
      // router를 이용해서 id를 전송해준다.
      // router.push(`/todos/${id}`);

      router.push({
        name: "Todo",
        params: { id },
      });
    };

    // 모달기능
    const showModal = ref(false);
    const deleteId = ref(null);

    const openModal = (id) => {
      deleteId.value = id;
      showModal.value = true;
      console.log(id);
    };

    const closeModal = () => {
      showModal.value = false;
    };

    const onDelete = () => {
      deleteTodo(deleteId.value);
      showModal.value = false;
    };

    return {
      deleteTodo,
      toggleTodo,
      moveToPage,
      showModal,
      openModal,
      closeModal,
      onDelete,
    };
  },
};
</script>

<style></style>
