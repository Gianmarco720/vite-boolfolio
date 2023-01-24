<script>
import AppBanner from '../components/AppBanner.vue';
export default {
    name: 'NotFoundView',
    components: { AppBanner }
}
</script>

<template>
    <AppBanner title="404" />
    <div class="container vh_100">
        <p class="lead">Page not found!</p>
        <router-link to="/">Go to Homepage</router-link>

    </div>

</template>


<style lang="scss" scoped>

</style>