export default {
  data() {
    return {
      showAlert: false,
    };
  },

  methods: {
    onUpdate() {
      alert("Update Item");
    },
    onDelete() {
      this.showAlert = true;
    },
  },
};
