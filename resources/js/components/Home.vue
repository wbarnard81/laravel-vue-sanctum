<template>
    <div class="">
        <h1>{{ form.status }}</h1>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s6">
                    <input
                        v-model="form.email"
                        id="email"
                        type="text"
                        class="validate"
                    />
                    <label for="email">Username:</label>
                </div>
                <div class="input-field col s6">
                    <input
                        v-model="form.password"
                        id="password"
                        type="password"
                        class="validate"
                    />
                    <label for="password">Password:</label>
                </div>
            </div>
        </form>
        <a class="waves-effect waves-light btn" href @click.prevent="login"
            >Login</a
        >
        <a class="waves-effect waves-light btn" href @click.prevent="logout"
            >Log Out</a
        >
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
                status: "Not Logged In"
            },
            errors: {}
        };
    },
    methods: {
        login() {
            axios.get("/sanctum/csrf-cookie").then(response => {
                console.log("csrf");
            });
            axios
                .post("/login", this.form)
                .then(res => {
                    this.form.status = "Logged In";
                })
                .catch(error => console.log(error));
        },
        logout() {
            axios.post("/logout").then(response => {
                this.form.status = "Logged Out";
            });
        }
    }
};
</script>
