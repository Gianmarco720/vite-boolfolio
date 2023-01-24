<script>
import axios from 'axios'
import { state } from '../state.js'

export default {
    name: 'SingleProjectView',
    data() {
        return {
            project: null,
            loading: true,
            state
        }
    },
    mounted() {
        //console.log(this.$route.params.slug);
        const url = this.state.api_base_url + '/api/projects/' + this.$route.params.slug
        console.log(url, 'mounted');
        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    console.log(response);
                    this.project = response.data.results
                    this.loading = false
                } else {
                    this.$router.push({ name: 'not-found' })
                }
            }).catch(error => {
                console.log(error)
            })
    }
}
</script>

<template>
    <div class="single-project" v-if="project">
        <div class="container vh_100 mt-5">

            <!-- Single project's image -->
            <div class="single-project-logo">
                <img class="single_image" :src="state.api_base_url + '/storage/' + project.cover_image"
                    :alt="project.title">
            </div>

            <!-- Project's info -->
            <div class="single-project-info pt-3">
                <h2>{{ project.title }}</h2>
                <div class="content">
                    <p>{{ project.body }}</p>
                </div>
            </div>
            <router-link class="btn btn-primary rounded-pill" :to="{ name: 'blog' }"><font-awesome-icon
                    icon="fa-solid fa-chevron-left" /></router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>