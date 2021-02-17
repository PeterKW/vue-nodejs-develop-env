<template>
    <div class="container">
        <h2>Surveys</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Survey Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in surveys" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.firstName }}</td>
                  <td>{{ item.lastName }}</td>
                  <td>{{ item.email }}</td>
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