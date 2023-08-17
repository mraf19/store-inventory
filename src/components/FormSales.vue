<template>
  <h2 class="mb-10 text-4xl text-gray-900 font-bold">Submit Data</h2>
  <form class="space-y-6 w-2/3">
    <div>
      <label
        for="tanggal_transaksi"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Tanggal Transaksi</label
      >
      <input
        type="date"
        name="tanggal_transaksi"
        id="tanggal_transaksi"
        v-model="formValue.tanggal_transaksi"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div>
      <label
        for="customer"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Pelanggan</label
      >
      <select
        id="customer"
        v-model="formValue.customer"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
      >
        <option selected>Pilih Pelanggan</option>
        <option
          v-for="customer in customers"
          :key="customer._id"
          :value="customer._id"
        >
          {{ customer.nama }}
        </option>
      </select>
    </div>
    <div>
      <label
        for="items"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Items</label
      >
      <select
        id="items"
        v-model="formValue.items"
        multiple
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
      >
        <option v-for="item in items" :key="item._id" :value="item._id">
          {{ item.nama_item }}
        </option>
      </select>
    </div>
    <button
      type="button"
      @click="onSubmit"
      class="w-full text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Submit
    </button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "FormSales",
  created() {
    this.getItems();
    this.getCustomers();
  },
  data() {
    return {
      items: [],
      customers: [],
      formValue: {
        tanggal_transaksi: "",
        customer: "",
        items: [],
      },
    };
  },
  methods: {
    getItems() {
      axios
        .get("http://localhost:3000/api/item")
        .then((res) => {
          this.items = res.data.data;
        })
        .catch((err) => console.log(err));
    },
    getCustomers() {
      axios
        .get("http://localhost:3000/api/customer")
        .then((res) => {
          this.customers = res.data.data;
        })
        .catch((err) => console.log(err));
    },
    onSubmit() {
      const rootUrl = "http://localhost:3000/api";

      const form = new FormData();

      form.append("tanggal_transaksi", this.formValue.tanggal_transaksi);
      form.append("customer", this.formValue.customer);
      form.append("items", this.formValue.items);
      console.log(form);
      axios
        .post(`${rootUrl}/sales`, this.formValue)
        .then((res) => {
          this.$router.push("/sales");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
