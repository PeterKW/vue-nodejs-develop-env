<template>
    <div class="container">
        <h2>Surveys</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Survey Id</th>
                <th>TestSound</th>
                <th>PictureSoxel</th>
                <th>PictureChoices</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in surveys" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.testSound }}</td>
                  <td>{{ item.pictureSoxel }}</td>
                  <td>{{ item.pictureChoices }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'Surveys',
        props: ['surveys']
     }
</script>