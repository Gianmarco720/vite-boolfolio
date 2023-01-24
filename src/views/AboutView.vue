<script>
import AppBanner from '../components/AppBanner.vue';
export default {
    name: 'AboutView',
    components: { AppBanner }
}
</script>

<template>
    <AppBanner title="About Me" />
    <div class="container vh_100 mt-5">
        <p class="lead fs-3">
            Hi everyone, my name is Gianmarco i'm an italian junior full-stack web developer. I studied with Boolean
            Carreers some of the most used technologies such as:
            <a href="https://www.w3schools.com/html/">Html</a>,
            <a href="https://www.w3schools.com/css/">Css</a>,
            <a href="https://getbootstrap.com/">Bootstrap</a>,
            <a href="https://www.w3schools.com/js/">JavaScript</a> and <a href="https://vuejs.org/">Vue</a> for
            front-end
            developing;
            <a href="https://www.php.net/">php</a> and <a href="https://laravel.com/">Laravel</a> for back-end
            developing.
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