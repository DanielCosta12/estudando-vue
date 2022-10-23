<template>
  <div>
    <h1>Meu nome é {{ name }}</h1>
    <p>Atualmente estou estudando:{{ currentLanguage }}</p>
    <p>Pretendo estudar:</p>
    <Info />
    <Form />
  </div>
</template>
<script>
import Info from "./Info.vue";
import Form from "./Form.vue";

export default {
  name: "Pessoa",
  components: {
    Info,
    Form,
  },

  data() {
    return {
      name: "Daniel",
      currentLanguage: "Vue",
    };
  },
};
</script>
