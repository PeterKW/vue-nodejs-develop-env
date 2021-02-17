<template>
    <div class="display-board">
        <h4>Surveys Created</h4>
        <div class="number">
        {{numberOfSurveys}}
        </div>
        <div class="btn">
            <button @click='getAllSurveys()' type="button" class="btn btn-warning">Get all Surveys</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        props: ['numberOfSurveys'],
        methods: {
            getAllSurveys() {
                this.$emit('getAllSurveys')
            }
        }
    }
</script>