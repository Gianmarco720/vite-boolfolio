<script>
//import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
    components: {

    },
    data() {
        return {
            projects: null,
            base_api_url: 'http://localhost:8000'
        }
    },
    methods: {
        getProjects(url) {
            // Ajax call to get all projects
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results);
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    },
    mounted() {
        this.getProjects(this.base_api_url + '/api/projects');
    }
}
</script>

<template>
    <section class="vue-home">
        <div class="container">
            <div class="row">
                <h1>Posts</h1>
                <!-- <div class="col-12 d-flex flex-column justify-content-center align-items-center vh-100">

                </div> -->
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
