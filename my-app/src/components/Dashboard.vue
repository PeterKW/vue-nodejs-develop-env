<template>
  <div class="hello">
    <Header />
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-8">
                <CreateForm @createForm="formCreate($event)" />
            </div>
            <div class="col-md-4">
                <DisplayBoard :numberOfForms="numberOfForms" @getAllForms="getAllForms()" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Forms v-if="forms.length > 0" :forms="forms" />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import CreateForm from './CreateForm.vue'
import DisplayBoard from './DisplayBoard.vue'
import Forms from './Forms.vue'
import { getAllForms, createForm } from '../services/FormService'

export default {
  name: 'Dashboard',
  components: {
    Header,
    CreateForm,
    DisplayBoard,
    Forms
  },
  data() {
      return {
          forms: [],
          numberOfForms: 0
      }
  },
  methods: {
    getAllForms() {
      getAllForms().then(response => {
        console.log(response)
        this.forms = response
        this.numberOfForms = this.forms.length
      })
    },
    formCreate(data) {
      console.log('data:::', data)
      createForm(data).then(response => {
        console.log(response);
        this.getAllForms();
      });
    }
  },
  mounted () {
    this.getAllForms();
  }
}
</script>