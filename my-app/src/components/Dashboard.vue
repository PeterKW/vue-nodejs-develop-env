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
        <Pictures v-if="pictures.length > 0" :pictures="pictures" />  
        <Sounds :sounds="sounds" />  
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import CreateForm from './CreateForm.vue'
import DisplayBoard from './DisplayBoard.vue'
import Forms from './Forms.vue'
import Pictures from './Pictures.vue'
import Sounds from './Sounds.vue'
import { getAllForms, createForm } from '../services/FormService'
import { getAllPictures } from '../services/PicturesService'
import { getAllSounds } from '../services/SoundsService'

export default {
  name: 'Dashboard',
  components: {
    Header,
    CreateForm,
    DisplayBoard,
    Forms,
    Pictures,
    Sounds
  },
  data() {
      return {
          forms: [],
          numberOfForms: 0,
          pictures: [],
          sounds: []
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
    },
    getAllPictures() {
      getAllPictures().then(response => {
        console.log(response)
        this.pictures = response
      });
    },
    getAllSounds() {
      getAllSounds().then(response => {
        console.log(response)
        this.sounds = response
      });
    }
  },
  mounted () {
    this.getAllForms();
    this.getAllPictures();
    this.getAllSounds();
  }
}
</script>