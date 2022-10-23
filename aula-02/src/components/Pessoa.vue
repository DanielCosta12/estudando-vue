<template>
  <div>
    <h1>Meu nome é {{ name }}</h1>
    <p>Atualmente estou estudando:{{currentLanguage}}</p>
    <p>Pretendo estudar: 
      <ul>
       <li v-for="language in languages" v-bind:key="language">
        {{language}}
        
       </li> 
    </ul>
  </p>
  </div>
</template>
<script>
export default {
  name: "Pessoa",

  data() {
    return {
      name: "Daniel",
      currentLanguage:"Vue",
      languages: [
        "Bootstrap",
        "Tailwind",
        "NextJS",
        "React",
        "ShellScript",
        "C"
      ],
    };
  },
};
</script>
