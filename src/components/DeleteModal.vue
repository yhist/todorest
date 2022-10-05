<template>
  <ModalView>
    <template #title> Todo Delete </template>
    <template v-slot:body> 내용을 삭제하시겠습니까? </template>
    <template v-slot:footer>
      <button type="button" class="btn btn-secondary" @click="onClose">
        Close
      </button>
      <button type="button" class="btn btn-danger" @click="onDelete">
        Delete
      </button>
    </template>
  </ModalView>
</template>

<script>
import ModalView from "@/components/ModalView.vue";
export default {
  emits: ["close-modal", "delete"],
  components: {
    ModalView,
  },
  setup(props, { emit }) {
    const onClose = () => {
      emit("close-modal", {});
    };
    const onDelete = () => {
      emit("delete", {});
    };

    return {
      onClose,
      onDelete,
    };
  },
};
</script>

<style></style>
