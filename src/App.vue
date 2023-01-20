<script>
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';

export default {
    components: {
        ProjectCard,
        AppHeader
    }
}
</script>

<template>

    <AppHeader />
    <ProjectCard />

</template>

<style lang="scss">
@use './styles/general.scss';
</style>
