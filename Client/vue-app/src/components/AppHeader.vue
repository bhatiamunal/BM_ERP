<template>


    <div class="AppHeader">
      <!-- Sidebar -->
      <div class="w3-sidebar w3-light-grey w3-bar-block" id="sidebar" v-if="isSidebarVisible" >
        <button class="w3-button  w3-xlarge w3-left" @click="navClick">close  <i class="fa-solid fa-xmark"></i></button> 
        <!-- <h3 class="w3-bar-item">Menu</h3> -->
        <ul>
          <li v-for="sideBarData in sideBar" :key="sideBarData.text">
            <a  class="w3-bar-item w3-button"  @click.prevent="sideMenuClickEvent(sideBarData)">{{ sideBarData.label }}</a>
          </li>
        </ul> 
      
      </div>

    <!-- Page Content -->


      <nav class="navbar navbar-expand-sm navbar-dark bg-dark" >
      <div class="container-fluid">
        <a class="navbar-brand" > <i class="fa-solid fa-bars"  @click="navClick" ></i> {{ title }}</a>
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto" >
            <li class="nav-item" v-for="link in links.navbar" :key="link.text">
              <a class="nav-link"  @click.prevent="navigateTo(link.id)" >{{ link.label }} </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    </div>
     

  </template>
  
  <script>
  import axios from 'axios';
  import globalState from '../globalState';
  export default {
    name: 'AppHeader',
    data() {
      return {
        title: 'My Vue App',
        isSidebarVisible: false,  
        links: [],
        sideBar: []
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      navClick(){
        this.isSidebarVisible = !this.isSidebarVisible; 
      },
      async fetchData() {
        try {
          const response = await axios.get('http://localhost:5500/api/readConfig');
          this.links = response.data.header
          globalState.state.data = response.data.header.navbar
          this.navigateTo(globalState.state.data[0].id)
        } catch (error) {
          this.error = 'Failed to fetch data: ' + error.message;
        }
      },
      async navigateTo(id){
        let selectedObj = globalState.state.data.find(item => item.id == id)
        globalState.state.data["selected"]=  selectedObj
        globalState.state.pageDetails["title"] =selectedObj.label
        console.log(globalState.state.pageDetails)
        if(selectedObj &&  Object.prototype.hasOwnProperty.call(selectedObj, 'submenu')){
          this.sideBar =selectedObj.submenu
        }
        else {
          this.sideBar = []
        }
       
      },
      async sideMenuClickEvent(data){
        
          let tableColumns =[];
          data.columns.forEach(element => {
            tableColumns.push({
              title: element.label, field: element.id
            })
          });
          globalState.state.tabulatorFormatter.setColumns(tableColumns);
          globalState.state.tabulatorFormatter.setData([]);
            const url = 'http://localhost:5500/api/view';
            let params =   {"fileName":data.id}
            const response = await axios.post(url, params);
            
            if(Object.keys(response.data).length!=0){
              globalState.state.tabulatorFormatter.setData(response.data);
            }
           
        
        
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
  }
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  nav li {
    display: inline;
    margin: 0 15px;
  }
  </style>
  