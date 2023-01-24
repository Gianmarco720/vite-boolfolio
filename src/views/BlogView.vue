<script>

import AppBanner from '../components/AppBanner.vue';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'BlogView',
    components: { AppBanner, ProjectCard },
    data() {
        return {
            pageTitle: 'My Projects'
        }
    }
}
</script>

<template>
    <AppBanner :title="pageTitle" />
    <ProjectCard />

</template>


<style lang="scss" scoped>

</style>