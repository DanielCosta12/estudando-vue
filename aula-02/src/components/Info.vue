<template>
  <div>
    <ul>
      <li v-for="language in languages" v-bind:key="language">
        {{ language }}
      </li>
    </ul>
    <p v-if="trabalhando">Estou trabalhando</p>
    <p v-else>Estou buscando emprego!</p>
    <p>
      <a v-show="mostraremail" v-bind:href="mailto"
        >Me envie um email:{{ email }}</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      languages: [
        "Bootstrap",
        "Tailwind",
        "NextJS",
        "React",
        "ShellScript",
        "C",
        "Ruby",
        "Rust",
      ],
      trabalhando: true,
      mailto: "mailto:danieldossantosdacosta@gmail.com",
      email: "danieldossantosdacosta@gmail.com",
      mostraremail: true,
    };
  },
};
</script>
