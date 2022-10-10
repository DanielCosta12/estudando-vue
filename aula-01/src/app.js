const MyNameApp = {
  data() {
    return {
      name: "Daniel",
      age: 22,
      input_name: "",
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.name = this.input_name;
      if (this.input_name != "") {
        p = document.querySelector("#p");
        p.hidden = false;
        return true;
      } else {
        p = document.querySelector("#p");
        p.hidden = true;
        alert("Please enter your name");
      }
    },
  },
};

Vue.createApp(MyNameApp).mount("#app");
