<template>
  <div class="container">
    <div class="row">
        <div class="col-md-11 mrgnbtm">
        <h2>Create Survey</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputTestSound1">Test Sound</label>
                        <input type="text" class="form-control" v-model="testSound" name="testsound" id="testsound" placeholder="Test Sound" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputPictureSoxel">Picture Soxel</label>
                        <input type="text" class="form-control" v-model="pictureSoxel" name="picturesoxel" id="picturesoxel" placeholder="Picture Soxel" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6"> <!-- "form-group col-md-12" -->
                        <label htmlFor="exampleInputPictureChoices">Picture Choices</label>
                        <input type="text" class="form-control" v-model="pictureChoices" name="pictureChoices" id="pictureChoices" aria-describedby="pictureChoices" placeholder="Picture Choices" />
                    </div>
                    <div class="form-group col-md-6"> <!-- "form-group col-md-12" -->
                        <label htmlFor="exampleInputSelected">Selected</label>
                        <input type="text" value="test" v-model="selected" class="form-control" name="selected" id="selected" aria-describedby="selected" disabled/>
                    </div>
                </div>
                <button type="button" @click='createSurvey()' class="btn btn-danger">Create</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CreateSurvey',
  data() {
    return {
      testSound: '',
      pictureSoxel: '',
      pictureChoices: ''
    }
  },
  methods: {
      createSurvey() {
          console.log("Got to create")
          console.log(this.testSound)
          const payload = {
              testSound: this.testSound,
              pictureSoxel: this.pictureSoxel,
              pictureChoices: this.pictureChoices
          }
          this.$emit('createSurvey', payload)
          this.clearSurvey();
      },
      clearSurvey() {
          this.testSound = "";
          this.pictureSoxel = "";
          this.pictureChoices = "";
      }
  }
}
</script>