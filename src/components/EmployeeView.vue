<template>
  <div class="hello">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <img src="../assets/logo.png" class="d-inline-block align-top fit-image">
      </b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Employees</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
    <b-container class="bv-row">
      <b-row>
        <b-col>
          <hr />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="2">
          <label for="employeeId">Employee id:</label>
        </b-col>
        <b-col sm="5">
          <b-form-input id="employeeId" type="number" v-model="employeeId"></b-form-input>
          <b-form-text id="input-live-help">Leave field blank to list all employees or enter an id.</b-form-text>
        </b-col>
        <b-col sm="5">
          <b-button variant="primary" v-on:click="consumeApi">Find employee</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <hr />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table hover :items="items" :fields="fields" show-empty>
              <template #cell(employee_salary)="data">
                <b>$ {{ Number(data.value | 0).toLocaleString() }}</b>
              </template>
              <template #cell(anualSalary)="data">
                <b>$ {{ Number(data.value | 0).toLocaleString() }}</b>
              </template>
            </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BNavbar, BContainer, BTable } from 'bootstrap-vue';
import axios from 'axios';
export default {
  name: 'EmployeeView',
  components: {
    BNavbar,
    BContainer,
    BTable
  },
  data() {
    return {
      employeeId: '',
      items: [],
      fields: ["id", "employee_name", "employee_age", "employee_salary", "anualSalary"],
      loading: false
    }
  },
  mounted() {
    this.loading = true
    this.consumeApi()
  },
  methods: {
    consumeApi: function() {
      var url = 'employees'
      if(this.employeeId !== '') {
        url = "employee".concat("/", this.employeeId);
      }
      axios.get(url).then(
        response => { 
          this.makeToast("Consuming API success", "Retrieving info from API was success", "success")
          if(response.data.length === 0)
            this.items = [];
          else
            this.items = response.data
        }
      ).catch(
        () => { 
          this.makeToast("Error consuming API", "External employee API throw an 409 error, please try again", "danger")
          this.items = []
        }
      );
      this.loading = false
    },
    makeToast: function(title, message, variant) {
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fit-image {
  width: 400px;
  height: 40px;
}
</style>
