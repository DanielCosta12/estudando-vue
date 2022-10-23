<template>
  <div>
    <ul>
      <li v-for="language in languages" v-bind:key="language">
        {{ language }}
      </li>
    </ul>
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
      ],
    };
  },
};
</script>
