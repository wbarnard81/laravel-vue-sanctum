<template>
    <div class="">
        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper blue darken-3">
                    <a href="#!" class="brand-logo right">Logo</a>
                    <ul class="left hide-on-med-and-down">
                        <li><router-link to="/">Go to Home</router-link></li>
                        <li class="active">
                            <router-link to="/test">Go to Test</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {};
    },
    methods: {}
};
</script>
