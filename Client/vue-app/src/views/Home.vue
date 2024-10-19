<template>
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page.</p>
      <div ref="tabulator"></div>
    </div>
  </template>

  
  <script>
import { TabulatorFull as Tabulator } from "tabulator-tables";
  import "tabulator-tables/dist/css/tabulator.min.css";
  export default {
    name: 'homeView',
    data() {
    return {
      tableData: [
        { id: 1, name: "John Doe", age: 29, gender: "Male" },
        { id: 2, name: "Jane Smith", age: 34, gender: "Female" },
        { id: 3, name: "Jack White", age: 42, gender: "Male" },
      ],
    };
  },
  mounted() {
    this.createTable();
  },
  methods: {
    createTable() {
      new Tabulator(this.$refs.tabulator, {
        data: this.tableData,
        layout: "fitColumns",
        columns: [
          { title: "ID", field: "id", width: 100 },
          { title: "Name", field: "name", editor: "input" },
          { title: "Age", field: "age", sorter: "number", editor: "number" },
          {
            title: "Gender",
            field: "gender",
            editor: "select",
            editorParams: { values: ["Male", "Female"] },
          },
        ],
      });
    },
  }
  }
  
  </script>
  