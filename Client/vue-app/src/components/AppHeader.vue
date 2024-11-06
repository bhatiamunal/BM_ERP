<template>
    <div class="AppHeader">

      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" >{{ title }}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
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
        links: [
          { text: 'Home', path: '/' },
          { text: 'About', path: '/about' },
          { text: 'Contact', path: '/contact' }
        ]
      };
    },
    mounted() {
      console.log("globalState.state.counter")
      console.log(globalState.state.counter)
    this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('http://localhost:5500/api/readConfig');
          this.links = response.data.header
          globalState.state.data = response.data.header.navbar
          console.log(globalState.state.data)
        } catch (error) {
          this.error = 'Failed to fetch data: ' + error.message;
        }
      },
      navigateTo(id){
        console.log(id)
        console.log(globalState.state.data)
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
  