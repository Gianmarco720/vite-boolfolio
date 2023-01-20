<script>
import axios from 'axios'

export default {
    components: {
        name: 'ProjectCard'
    },
    data() {
        return {
            projects: null,
            base_api_url: 'http://localhost:8000',
            loading: true,
            error: null,
            results: null,
            maxLength: 100
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
                    this.projects = response.data.results.data;
                    this.results = response.data.results;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                    this.error = error.message;
                    this.loading = false;
                })
        },
        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return '/img/placeholder.png'
        },
        /**
         * 
         * @param {string} text the post body
         */
        trimBody(text) {
            if (text !== null && text.length > this.maxLength) {
                return text.slice(0, this.maxLength) + '...'
            }
            return text
        },
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
            <div class="row row-cols-1 row-cols-sm-3 g-4">
                <div class="col" v-for="project in projects">
                    <!-- Project -->
                    <div class="card border-0 shadow-sm rounded-0 rounded-bottom">
                        <!-- Project's image or placeholder -->
                        <img class="card-image rounded-top" :src="getImagePath(project.cover_image)" alt="">
                        <!-- Project's text and info -->
                        <div class="card-body">
                            <h4>{{ project.title }}</h4>
                            <p class="card-text" v-if="project.body">{{ trimBody(project.body) }}</p>
                            <p class="card-text" v-else="">Sorry, this project has no description yet</p>
                            <a href="#">Read More></a>
                        </div>
                        <!-- Project's category or type -->
                        <div class="card-footer text-muted">
                            <div class="type">
                                <strong>Type: </strong>
                                <span v-if="project.type">{{ project.type.name }}</span>
                                <span v-else>Sorry, this project has no type yet</span>
                            </div>
                        </div>
                        <!-- Project's technology -->
                        <div class="technologies">
                            <ul class="list-group list-unstyled" v-if="project.technologies.length > 0">
                                <li v-for="technology in project.technologies"># {{ technology.name }}</li>
                            </ul>
                            <p v-else>Sorry there are no technologies in this project</p>
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
