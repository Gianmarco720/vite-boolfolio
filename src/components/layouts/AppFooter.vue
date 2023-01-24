<script>
import { state } from '../../state.js'

export default {
    name: "AppFooter",

    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <footer>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container">
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" :href="state.gitHub_url"><font-awesome-icon
                                    icon="fa-brands fa-square-github" /> My GitHub</a>
                        </li>
                    </ul>
                </div>
                <span class="text-white fw-light">© 2023 Copyright - </span>
                <router-link class="text-decoration-none my_name" :to="{ name: 'about' }">Gianmarco
                    Orabona</router-link>
            </div>
        </nav>
    </footer>
</template>

<style lang="scss" scoped>
footer {


    .my_name {
        color: white;
        transition: 0.2s;

        &:hover {
            color: #41B883;
            transition: 0.2s;
        }
    }

    .footer_info {
        font-size: 14px;
    }

}
</style>