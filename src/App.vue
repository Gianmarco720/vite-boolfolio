<script>
import AppFooter from './components/layouts/AppFooter.vue';
import AppHeader from './components/layouts/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';

export default {
    components: {
        ProjectCard,
        AppHeader,
        AppFooter
    }
}
</script>

<template>

    <AppHeader />
    <router-view />
    <AppFooter />

</template>

<style lang="scss">
@use './styles/general.scss';
</style>
