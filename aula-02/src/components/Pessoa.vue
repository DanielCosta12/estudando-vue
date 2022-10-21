<template>
  <div>
    <h1>Meu nome é {{ name }}</h1>
    <p>Atualmente estou estudando:{{ languages[0] }}</p>
    <p>Pretendo estudar:{{ languages.slice(1) }}</p>
  </div>
</template>
<script>
export default {
  name: "Pessoa",

  data() {
    return {
      name: "Daniel",
      languages: [
        "Vue",
        "Bootstrap",
        "Tailwind",
        "NextJS",
        "React",
        "ShellScript",
        "C",
      ],
    };
  },
};
</script>
