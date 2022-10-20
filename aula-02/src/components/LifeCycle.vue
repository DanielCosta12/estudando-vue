<template>
  <h1>Meu nome é :{{ name }}</h1>
</template>
<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      name: "Ainda não sei",
    };
  },
  created() {
    setTimeout(() => {
      this.name = "Daniel Costa!";
    }, 2000);
  },
  mounted() {
    setTimeout(() => {
      this.name = "Vue";
    }, 3000);
  },
};
</script>
