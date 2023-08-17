<template>
  <h2 class="mb-10 text-4xl text-gray-900 font-bold">Submit Data</h2>
  <form class="space-y-6 w-2/3" action="#">
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
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
      >
        <option selected>Pilih Pelanggan</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
    <div>
      <label
        for="item"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Pelanggan</label
      >
      <select
        id="item"
        multiple
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
      >
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
    <button
      type="submit"
      class="w-full text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: "FormSales",
};
</script>

<style scoped></style>
