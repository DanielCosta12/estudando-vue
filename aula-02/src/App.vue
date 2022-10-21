<template>
  <div>
    <Main />
    <LifeCycle />
    <Pessoa />
  </div>
</template>
<script>
import Main from "./components/Main.vue";
import Pessoa from "./components/Pessoa.vue";
export default {
  name: "app",
  components: {
    Main,
    Pessoa,
  },
};
</script>
