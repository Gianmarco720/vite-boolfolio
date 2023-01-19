<script>
import axios from 'axios'

export default {
    components: {
        name: 'AppMain'
    },
    data() {
        return {
            projects: null,
            base_api_url: 'http://localhost:8000',
            loading: true,
            error: null
        }
    },
    methods: {
        getProjects(url) {
            // Ajax call to get all projects
            axios
                .get(url)
                .then(response => {
                    //console.log(response.data.results);
                    console.log(response.data.results);
                    this.projects = response.data.results;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error.message);
                    this.error = error.message;
                    this.loading = false;
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
            <h1>Posts</h1>
            <div class="row row-cols-1 row-cols-sm-3">
                <div class="col" v-for="project in projects.data">
                    <div class="card">
                        <img class="card-image" src="" alt="">
                        <div class="card-body">
                            <h4>{{ project.title }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '../styles/general.scss';
</style>
