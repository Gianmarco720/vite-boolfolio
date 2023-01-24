<script>
import AppBanner from '../components/AppBanner.vue';
export default {
    name: 'ContactsView',
    components: { AppBanner }
}
</script>

<template>
    <AppBanner title="Contact Me" />
    <div class="container vh_100 mt-5">

        <p class="lead">
            If there are any troubles, errors or bugs please, contact me. Fill the form to send a message.
        </p>

        <form action="">
            <div class="mb-3">
                <label for="fullName" class="form-label">Full Name</label>
                <input type="text" name="fullName" id="fullName" class="form-control" placeholder="John Doe"
                    aria-describedby="fullNameHelper">
                <small id="fullNameHelper" class="text-muted">Add your full name</small>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="john.doe@example.com"
                    aria-describedby="emailHelper">
                <small id="emailHelper" class="text-muted">Add your email address</small>
            </div>

            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" name="message" id="message" rows="5"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Contact Me</button>
        </form>
    </div>
</template>


<style lang="scss" scoped>

</style>