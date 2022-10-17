<template>
  <!-- template = o que quero exibir na minha aplicação -->
  <div>
    <button v-on:click="show">Click here!</button>
    <div id="showAll"></div>
  </div>
</template>
<script>
export default {
  name: "Main",
  data() {
    return {
      people: {
        name: "Daniel",
        age: 22,
        from: "Brazil",
        state: "Rio de Janeiro",
      },
    };
  },
  methods: {
    show: function () {
      const showAll = document.querySelector("#showAll");
      showAll.innerText = `Meu nome é ${this.people.name}, 
      tenho ${this.people.age} anos.
      Sou do ${this.people.from} e moro no estado do ${this.people.state}
      `;
    },
  },
};
</script>
