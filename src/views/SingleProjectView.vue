<script>
import axios from 'axios'
import { state } from '../state.js'
import AppBanner from '../components/AppBanner.vue'
export default {
    name: 'SingleProjectView',
    components: { AppBanner },
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
    <AppBanner :title="$route.params.slug" />
    <div class="single-project" v-if="project">
        <div class="container">
            <img class="img-fluid w-100" :src="state.api_base_url + '/storage/' + project.cover_image"
                :alt="project.title">
            <h2>
                {{ project.title }}
            </h2>
            <div class="content">
                {{ project.body }}
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>