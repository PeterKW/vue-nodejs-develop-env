<template>
    <div class="container">
        <h2>Sounds</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Sound Path</th>
                <th>Sound</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in sounds" :key="item.id">
                  <td>{{ item }}</td>
                  <td><div id ="waveform"></div> </td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
 export default {
        name: 'Sounds',
        props: ['sounds']
     }
/*
    var WaveSurfer = require('wavesurfer.js');
    var address = "";
   

     var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple'
    });

    wavesurfer.on('ready', function () {
        wavesurfer.play();
    });

    wavesurfer.load({address});
*/
</script>