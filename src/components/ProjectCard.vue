<script>

import axios from 'axios'
import { state } from '../state.js'
import PacmanLoader from './PacmanLoader.vue'

export default {
    name: 'ProjectCard',
    components: {
        PacmanLoader
    },
    data() {
        return {
            state,
            projects: null,
            loading: true,
            error: null,
            results: null,
            maxLength: 100
        }
    },
    methods: {
        getProjects(url) {
            // Ajax call to get all projects in BlogView
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
                return this.state.api_base_url + '/storage/' + path
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
        this.getProjects(this.state.api_base_url + '/api/projects');
    }
}
</script>

<template>
    <section class="vue-home">
        <div class="container pb-5 mt-5">
            <template v-if="projects && !loading">
                <div class="row row-cols-4 g-3">
                    <div class="col project_card" v-for="project in projects">
                        <!-- Project -->
                        <div class="my_card border-0 shadow-sm rounded-0 rounded-bottom">
                            <!-- Project's image or placeholder -->
                            <img class="card_image rounded-top" :src="getImagePath(project.cover_image)" alt="">
                            <!-- Project's text and info -->
                            <div class="card-body">
                                <h4>{{ project.title }}</h4>
                                <p class="card-text" v-if="project.body">{{ trimBody(project.body) }}</p>
                                <p class="card-text" v-else="">Sorry, this project has no description yet</p>
                                <router-link class="btn btn-primary rounded-pill"
                                    :to="{ name: 'single-project', params: { slug: project.slug } }">Read
                                    more
                                </router-link>
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
                                <ul class="list-unstyled d-flex" v-if="project.technologies.length > 0">
                                    <li class="pe-3" v-for="technology in project.technologies">{{ technology.name }}
                                    </li>
                                </ul>
                                <p v-else>Sorry there are no technologies in this project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else-if="loading">
                <PacmanLoader />
            </template>
            <div v-else>
                <p> No posts here </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.vue-home {
    overflow-y: auto;

    .my_card {
        height: 100%;

        .card_image {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1/1;
        }
    }
}
</style>