<script>

export default {
    name: 'HeaderNav'
}
</script>

<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" :to="{ name: 'home' }">BOOLFOLIO</router-link>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'home' }"><font-awesome-icon
                                icon="fa-solid fa-house" /> Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'about' }"><font-awesome-icon
                                icon="fa-solid fa-swatchbook" /> About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'blog' }"><font-awesome-icon
                                icon="fa-solid fa-bars-staggered" /> My Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'contacts' }"><font-awesome-icon
                                icon="fa-solid fa-envelope" /> Contact Me</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<style lang="scss" scoped>
.nav-link:hover {
    background-color: rgba(245, 245, 245, 0.091) !important;
}
</style>