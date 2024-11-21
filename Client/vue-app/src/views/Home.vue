<template>



<!-- <div class="tabs">
  <input class="input" name="tabs" type="radio" id="tab-1" checked="checked"/>
  <label class="label" for="tab-1">Main</label>
  <div class="panel">
    <h1>Arlina Design</h1>
    <p>Arlina Design (specifically, the sweet orange) is the fruit of the citrus species Citrus  sinensis in the family Rutaceae</p>
    <p>The fruit of the Citrus × sinensis is considered a sweet orange, whereas the fruit of the Citrus aurantium is considered a bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.</p>
  </div>
  <input class="input" name="tabs" type="radio" id="tab-2"/>
  <label class="label" for="tab-2">Idntheme</label>
  <div class="panel">
    <h1>Idntheme</h1>
    <p>Idntheme (Citrus tangerina) is an orange-colored citrus fruit that is closely related to, or possibly a type of, mandarin orange (Citrus reticulata).</p>
    <p>The name was first used for fruit coming from Tangier, Morocco, described as a mandarin variety. Under the Tanaka classification system, Citrus tangerina is considered a separate species.</p>
  </div>
  <input class="input" name="tabs" type="radio" id="tab-3"/>
  <label class="label" for="tab-3">Tekno Match</label>
  <div class="panel">
    <h1>Tekno Match</h1>
    <p>Tekno Match (Citrus ×clementina) is a hybrid between a mandarin orange and a sweet orange, so named in 1902. The exterior is a deep orange colour with a smooth, glossy appearance. Clementines can be separated into 7 to 14 segments. Similarly to tangerines, they tend to be easy to peel.</p>
  </div>
</div> -->
<!-- 
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2017</h5>
      <div class="fakeimg" style="height:200px;">Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <div class="fakeimg" style="height:200px;">Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>

</div> -->
<div class="container">
  <h1>{{ title }}</h1>
  
  <div class="row">
    <div class="col-8"></div>
    <div class="col-4">  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Create
  </button></div>
  <div class="col-12 mt-2">
    <div ref="tabulator"></div>
  </div>
   
  </div>
</div>

    <!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        Modal body..
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
  </template>


  
  <script>
  import { TabulatorFull as Tabulator } from "tabulator-tables";
  import "tabulator-tables/dist/css/tabulator.min.css";
  import globalState from '../globalState';
  export default {
    name: 'homeView',
    
    data() {
    return {
      //title:"s1"
    };
  },
  mounted() {
    this.createTable();
  },
  methods: {
    createTable() {
      //this.title = globalState.state.pageDetails["title"]
      globalState.state.tabulatorFormatter = new Tabulator(this.$refs.tabulator, {
        data: [],
        layout: "fitColumns",
        columns: [],
      });
    },
  },
    
  computed: {
    title() {
      return globalState.state.pageDetails["title"];
    },
  },
  }
  
  </script>
  <style>


/* .tabs {
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  background: #e5e5e5;
  box-shadow: 0 48px 80px -32px rgba(0,0,0,0.3);
}
.input {
  position: absolute;
  opacity: 0;
}
.label {
  width: 100%;
  padding: 20px 30px;
  background: #e5e5e5;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  color: #7f7f7f;
  transition: background 0.1s, color 0.1s;
}
.label:hover {
  background: #d8d8d8;
}
.label:active {
  background: #ccc;
}
.input:focus + .label {
  z-index: 1;
}
.input:checked + .label {
  background: #fff;
  color: #000;
}
@media (min-width: 600px) {
  .label {
    width: auto;
  }
}
.panel {
  display: none;
  padding: 20px 30px 30px;
  background: #fff;
}
@media (min-width: 600px) {
  .panel {
    order: 99;
  }
}
.input:checked + .label + .panel {
  display: block;
} */

</style>