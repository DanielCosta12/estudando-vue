<template>
  <form action="">
    <InputNumber />
    <InputText />
    <InputSubmit />
  </form>
</template>
<script>
import InputNumber from "./form/InputNumber.vue";
import InputText from "./form/InputText.vue";
import InputSubmit from "./form/InputSubmit.vue";
export default {
  name: "Form",
  components: {
    InputText,
    InputSubmit,
    InputNumber,
  },
};
</script>
