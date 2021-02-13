<template>
    <div class="display-board">
        <h4>Forms Created</h4>
        <div class="number">
        {{numberOfForms}}
        </div>
        <div class="btn">
            <button @click='getAllForms()' type="button" class="btn btn-warning">Get all Forms</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        props: ['numberOfForms'],
        methods: {
            getAllForms() {
                this.$emit('getAllForms')
            }
        }
    }
</script>