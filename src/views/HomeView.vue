
<script>
import AppBanner from '../components/AppBanner.vue'
import { state } from '../state.js'
export default {
    name: 'HomeView',
    components: {
        AppBanner
    },

    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <AppBanner title="Home Page" />
    <div class="container vh_100 mt-5">
        <p class="lead fs-3">Hi, this application is call "Boolfolio" and it's a personal portfolio with all my projects
            and information about me. Here you can see <router-link class="nav-link d-inline-block"
                :to="{ name: 'blog' }">projects</router-link> from front-end to back-end, using different technologies
            and different
            approach to realizing some of them.
        </p>
    </div>
</template>


<style lang="scss" scoped>
.container {
    a {
        text-decoration: none;
        color: #212529;
        transition: 0.2s;

        &:hover {
            cursor: pointer;
            color: #41B883;
        }
    }
}
</style>