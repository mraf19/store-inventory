<template>
  <h2 class="mb-10 text-4xl text-gray-900 font-bold">Submit Data</h2>
  <form class="space-y-6 w-2/3" @submit.prevent="onsubmit">
    <div>
      <label
        for="nama"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Nama</label
      >
      <input
        type="text"
        name="nama"
        id="nama"
        v-model="formValue.nama"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div>
      <label
        for="contact"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Kontak</label
      >
      <input
        type="text"
        name="contact"
        id="contact"
        v-model="formValue.contact"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div>
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Email</label
      >
      <input
        type="text"
        name="email"
        id="email"
        v-model="formValue.email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div>
      <label
        for="alamat"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >alamat</label
      >
      <input
        type="text"
        name="alamat"
        id="alamat"
        v-model="formValue.alamat"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div>
      <label
        for="diskon"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Diskon</label
      >
      <input
        type="number"
        name="diskon"
        id="diskon"
        v-model.number="formValue.diskon"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div>
      <label
        for="tipe_diskon"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Tipe Diskon</label
      >
      <select
        id="tipe_diskon"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
        v-model="formValue.tipe_diskon"
      >
        <option selected>Pilih Pelanggan</option>
        <option value="persentase">Persentase</option>
        <option value="fix_diskon">Fix Diskon</option>
      </select>
    </div>
    <div>
      <label
        for="ktp"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Ktp</label
      >
      <input
        type="file"
        name="ktp"
        id="ktp"
        :onchange="upload"
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
      @click="onEdit($route.params.id)"
    >
      Edit
    </button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "FormItem",
  mounted() {
    if (this.$route.params.id) {
      this.type = "Edit";
      const id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/api/customer/${id}`)
        .then((res) => {
          const data = res.data.data[0];

          this.formValue.nama = data.nama;
          this.formValue.alamat = data.alamat;
          this.formValue.contact = data.contact;
          this.formValue.diskon = data.diskon;
          this.formValue.email = data.email;
          this.formValue.tipe_diskon = data.tipe_diskon;
        })
        .catch((err) => console.log(err));
    }
  },
  data() {
    return {
      type: "Add",
      formValue: {
        nama: "",
        contact: "",
        email: "",
        alamat: "",
        diskon: 0,
        tipe_diskon: "",
        ktp: null,
      },
    };
  },
  methods: {
    upload(events) {
      this.formValue.ktp = events.target.files[0];
    },
    onsubmit() {
      const rootUrl = "http://localhost:3000/api";

      const form = new FormData();

      form.append("nama", this.formValue.nama);
      form.append("contact", this.formValue.contact);
      form.append("alamat", this.formValue.alamat);
      form.append("email", this.formValue.email);
      form.append("diskon", this.formValue.diskon);
      form.append("tip[e_diskon]", this.formValue.tipe_diskon);
      form.append("image", this.formValue.ktp);

      axios
        .post(`${rootUrl}/customer`, form)
        .then((res) => {
          this.$router.push("/customers");
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    onEdit(id) {
      const rootUrl = "http://localhost:3000/api";

      const form = new FormData();

      form.append("nama", this.formValue.nama);
      form.append("contact", this.formValue.contact);
      form.append("alamat", this.formValue.alamat);
      form.append("email", this.formValue.email);
      form.append("diskon", this.formValue.diskon);
      form.append("tip[e_diskon]", this.formValue.tipe_diskon);
      form.append("image", this.formValue.ktp);

      axios
        .put(`${rootUrl}/customer/${id}`, form)
        .then((res) => {
          this.$router.push("/customers");
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>

<style scoped></style>
