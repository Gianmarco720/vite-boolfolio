<script>
import AppBanner from '../components/AppBanner.vue';
import axios from 'axios';
import { state } from '../state.js'

export default {
    name: 'ContactsView',
    components: {
        AppBanner
    },
    data() {
        return {
            state,
            name: '',
            email: '',
            message: '',
            success: false,
            loading: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            this.errors = {};

            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            axios.post(`${this.state.api_base_url}/api/contacts`, data).then((response) => {

                this.success = response.data.success;
                console.log(response);

                if (this.success) {
                    this.name = '',
                        this.email = '',
                        this.message = ''
                } else {
                    this.errors = response.data.errors;
                }

                this.loading = false;
            })
        }
    }
}
</script>

<template>
    <AppBanner title="Contact Me" />
    <div class="container vh_100 mt-5">

        <p class="lead">
            If you want to ask me something fill the form to send me a message.
        </p>

        <div v-if="success" class="alert alert-success" role="alert">
            <strong>Message sent!</strong>
        </div>


        <form @submit.prevent="sendForm()">

            <!-- Name input -->
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" name="name" id="name" v-model="name" class="form-control" placeholder="John Doe"
                    aria-describedby="nameHelper">

                <!-- Name error -->
                <p v-for="(error, index) in errors.name">{{ error }}</p>
                <small id="nameHelper" class="text-muted">Add your full name</small>
            </div>

            <!-- Email input -->
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" id="email" v-model="email" class="form-control"
                    placeholder="john.doe@example.com" aria-describedby="emailHelper">

                <!-- Email error -->
                <p v-for="(error, index) in errors.email">{{ error }}</p>
                <small id="emailHelper" class="text-muted">Add your email address</small>
            </div>

            <!-- Message area -->
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" name="message" id="message" v-model="message" rows="5"></textarea>

                <!-- Message error -->
                <p v-for="(error, index) in errors.message">{{ error }}</p>
            </div>

            <button type="submit" class="btn btn-primary" :disabled="loading">
                {{ loading? 'Sending...': 'Contact Me' }}
            </button>
        </form>
    </div>
</template>


<style lang="scss" scoped>

</style>