<script>
import axios from 'axios'

export default {
    components: {
        name: 'ProjectCard'
    },
    data() {
        return {
            projects: null,
            base_api_url: 'http://localhost:8000',
            loading: true,
            error: null,
            results: null,
            maxLength: 100
        }
    },
    methods: {
        getProjects(url) {
            // Ajax call to get all projects
            axios
                .get(url)
                .then(response => {
                    //console.log(response.data.results);
                    console.log(response.data.results);
                    this.projects = response.data.results.data;
                    this.results = response.data.results;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                    this.error = error.message;
                    this.loading = false;
                })
        },
        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return '/img/placeholder.png'
        },
        /**
         * 
         * @param {string} text the post body
         */
        trimBody(text) {
            if (text !== null && text.length > this.maxLength) {
                return text.slice(0, this.maxLength) + '...'
            }
            return text
        },
    },
    mounted() {
        this.getProjects(this.base_api_url + '/api/projects');
    }
}
</script>

<template>
    <section class="vue-home">
        <div class="container">
            <template v-if="projects && !loading">
                <h1>Posts</h1>
                <div class="row row-cols-1 row-cols-sm-3 g-4">
                    <div class="col" v-for="project in projects">
                        <!-- Project -->
                        <div class="card border-0 shadow-sm rounded-0 rounded-bottom">
                            <!-- Project's image or placeholder -->
                            <img class="card-image rounded-top" :src="getImagePath(project.cover_image)" alt="">
                            <!-- Project's text and info -->
                            <div class="card-body">
                                <h4>{{ project.title }}</h4>
                                <p class="card-text" v-if="project.body">{{ trimBody(project.body) }}</p>
                                <p class="card-text" v-else="">Sorry, this project has no description yet</p>
                                <a href="#">Read More></a>
                            </div>
                            <!-- Project's category or type -->
                            <div class="card-footer text-muted">
                                <div class="type">
                                    <strong>Type: </strong>
                                    <span v-if="project.type">{{ project.type.name }}</span>
                                    <span v-else>Sorry, this project has no type yet</span>
                                </div>
                            </div>
                            <!-- Project's technology -->
                            <div class="technologies">
                                <ul class="list-group list-unstyled" v-if="project.technologies.length > 0">
                                    <li v-for="technology in project.technologies"># {{ technology.name }}</li>
                                </ul>
                                <p v-else>Sorry there are no technologies in this project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else-if="loading">
                <div class="loading">
                    <div class="loader">
                        <div class="circles">
                            <span class="one"></span>
                            <span class="two"></span>
                            <span class="three"></span>
                        </div>
                        <div class="pacman">
                            <span class="top"></span>
                            <span class="bottom"></span>
                            <span class="left"></span>
                            <div class="eye"></div>
                        </div>
                    </div>
                </div>
            </template>
            <div v-else>
                <p> No posts here </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '../styles/general.scss';

body {
    margin: 0;
    background: #1C163A
}

.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 60px;
    width: 160px;
    margin: 0;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
}

.circles {
    position: absolute;
    left: -5px;
    top: 0;
    height: 60px;
    width: 180px
}

.circles span {
    position: absolute;
    top: 25px;
    height: 12px;
    width: 12px;
    border-radius: 12px;
    background-color: #EFEFEF
}

.circles span.one {
    right: 80px
}

.circles span.two {
    right: 40px
}

.circles span.three {
    right: 0px
}

.circles {
    -webkit-animation: animcircles 0.5s infinite linear;
    animation: animcircles 0.5s infinite linear
}

@-webkit-keyframes animcircles {
    0% {
        -webkit-transform: translate(0px, 0px);
        transform: translate(0px, 0px)
    }

    100% {
        -webkit-transform: translate(-40px, 0px);
        transform: translate(-40px, 0px)
    }
}

@keyframes animcircles {
    0% {
        -webkit-transform: translate(0px, 0px);
        transform: translate(0px, 0px)
    }

    100% {
        -webkit-transform: translate(-40px, 0px);
        transform: translate(-40px, 0px)
    }
}

.pacman {
    position: absolute;
    left: 0;
    top: 0;
    height: 60px;
    width: 60px
}

.pacman .eye {
    position: absolute;
    top: 10px;
    left: 30px;
    height: 7px;
    width: 7px;
    border-radius: 7px;
    background-color: #1C163A
}

.pacman span {
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    width: 60px
}

.pacman span::before {
    content: "";
    position: absolute;
    left: 0;
    height: 30px;
    width: 60px;
    background-color: #FFFB16
}

.pacman .top::before {
    top: 0;
    border-radius: 60px 60px 0px 0px
}

.pacman .bottom::before {
    bottom: 0;
    border-radius: 0px 0px 60px 60px
}

.pacman .left::before {
    bottom: 0;
    height: 60px;
    width: 30px;
    border-radius: 60px 0px 0px 60px
}

.pacman .top {
    -webkit-animation: animtop 0.5s infinite;
    animation: animtop 0.5s infinite
}

@-webkit-keyframes animtop {

    0%,
    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    50% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg)
    }
}

@keyframes animtop {

    0%,
    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    50% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg)
    }
}

.pacman .bottom {
    -webkit-animation: animbottom 0.5s infinite;
    animation: animbottom 0.5s infinite
}

@-webkit-keyframes animbottom {

    0%,
    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    50% {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg)
    }
}

@keyframes animbottom {

    0%,
    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    50% {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg)
    }
}
</style>
