<template>
  <div class="hello">
    <Header />
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-8">
                <CreateSurvey @createSurvey="surveyCreate($event)" />
            </div>
            <div class="col-md-4">
                <DisplayBoard :numberOfSurveys="numberOfSurveys" @getAllSurveys="getAllSurveys()" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Surveys v-if="surveys.length > 0" :surveys="surveys" />
        <Pictures v-if="pictures.length > 0" :pictures="pictures" />  
        <Sounds v-if="sounds.length > 0" :sounds="sounds" />  
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import CreateSurvey from './CreateSurvey.vue'
import DisplayBoard from './DisplayBoard.vue'
import Surveys from './Surveys.vue'
import Pictures from './Pictures.vue'
import Sounds from './Sounds.vue'
import { getAllSurveys, createSurvey } from '../services/SurveysService'
import { getAllPictures } from '../services/PicturesService'
import { getAllSounds } from '../services/SoundsService'

export default {
  name: 'Dashboard',
  components: {
    Header,
    CreateSurvey,
    DisplayBoard,
    Surveys,
    Pictures,
    Sounds
  },
  data() {
      return {
          surveys: [],
          numberOfSurveys: 0,
          pictures: [],
          sounds: []
      }
  },
  methods: {
    getAllSurveys() {
      getAllSurveys().then(response => {
        console.log(response)
        if (this.numberOfSurveys == this.surveys.length){
          this.surveys = {};
          this.numberOfSurveys = response.length
        }else{
          this.surveys = response
          this.numberOfSurveys = this.surveys.length
        }
      })
    },
    surveyCreate(data) {
      console.log('surveyCreate data:::', data)
      createSurvey(data).then(response => {
        console.log(response);
        this.getAllSurveys();
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
    this.getAllSurveys();
    this.getAllPictures();
    this.getAllSounds();
  }
}
</script>