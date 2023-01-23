<script>

export default {
    name: "AppFooter",
}
</script>

<template>
    <footer>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container">
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/Gianmarco720"><font-awesome-icon
                                    icon="fa-brands fa-square-github" /> My GitHub</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control rounded-0" type="email" placeholder="john.doe@example.com">
                        <button class="btn btn-danger rounded-0 w-50" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </nav>
        <div class="text-center bg-dark pt-2 pb-2">
            <span class="text-white">© 2023 Copyright - </span>
            <router-link class="text-decoration-none my_name" :to="{ name: 'about' }">Gianmarco Orabona</router-link>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.my_name {
    color: white;
    transition: 0.2s;

    &:hover {
        color: #41B883;
        transition: 0.2s;
    }
}
</style>