<template>
  <h2 class="mb-10 text-4xl text-gray-900 font-bold">{{ type }} Data</h2>
  <form class="space-y-6 w-2/3">
    <div>
      <label
        for="nama_item"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Nama Item</label
      >
      <input
        type="text"
        name="nama_item"
        id="nama_item"
        v-model="formValue.nama_item"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div>
      <label
        for="unit"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Unit</label
      >
      <input
        type="text"
        name="unit"
        id="unit"
        v-model="formValue.unit"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div>
      <label
        for="stok"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Stok</label
      >
      <input
        type="number"
        name="stok"
        id="stok"
        v-model.number="formValue.stok"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div>
      <label
        for="harga_satuan"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Harga Satuan</label
      >
      <input
        type="number"
        name="harga_satuan"
        id="harga_satuan"
        v-model.number="formValue.harga_satuan"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div>
      <label
        for="barang"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Barang</label
      >
      <input
        type="file"
        name="barang"
        id="barang"
        @change="upload"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      />
    </div>
    <button
      v-if="type === 'Add'"
      type="button"
      class="w-full text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      @click="onsubmit"
    >
      Submit
    </button>
    <button
      v-if="type === 'Edit'"
      type="button"
      class="w-full text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      @click="onEdit"
    >
      Edit
    </button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Form",
  mounted() {
    if (this.$route.params.id) {
      this.type = "Edit";
      const id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/api/item/${id}`)
        .then((res) => {
          const data = res.data.data[0];

          this.formValue.nama_item = data.nama_item;
          this.formValue.harga_satuan = data.harga_satuan;
          this.formValue.stok = data.stok;
          this.formValue.unit = data.unit;
        })
        .catch((err) => console.log(err));
    }
  },
  data() {
    return {
      type: "Add",
      formValue: {
        nama_item: "",
        unit: "",
        stok: 0,
        harga_satuan: 0,
        barang: null,
      },
    };
  },
  methods: {
    upload(events) {
      this.formValue.barang = events.target.files[0];
    },
    onsubmit() {
      const rootUrl = "http://localhost:3000/api";
      const form = new FormData();

      form.append("nama_item", this.formValue.nama_item);
      form.append("unit", this.formValue.unit);
      form.append("stok", this.formValue.stok);
      form.append("harga_satuan", this.formValue.harga_satuan);
      form.append("image", this.formValue.barang);

      axios
        .post(`${rootUrl}/item`, form)
        .then((res) => {
          this.$router.push("/items");
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    onEdit(id) {
      const rootUrl = "http://localhost:3000/api";

      const form = new FormData();

      form.append("nama_item", this.formValue.nama_item);
      form.append("unit", this.formValue.unit);
      form.append("stok", this.formValue.stok);
      form.append("harga_satuan", this.formValue.harga_satuan);
      form.append("image", this.formValue.barang);

      axios
        .put(`${rootUrl}/item/${id}`, form)
        .then((res) => {
          this.$router.push("/items");
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>

<style scoped></style>
