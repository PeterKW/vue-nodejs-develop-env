<template>
    <div class="container">
        <h2>Pictures</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Picture Path</th>
                <th>Picture</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in pictures" :key="item.id">
                  <td>{{ item }}</td>
                  <td><img :src="item" style="width:20%" :alt=item ></td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'Pictures',
        props: ['pictures']
     }

    /*function updatePictureChoice(Picture){
         let el = document.getElementById("pictureChoices");
         el.value = Picture;    
         el.dispatchEvent(new Event('pictureChoices'));
     }*/
</script>