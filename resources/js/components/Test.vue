<template>
  <div class="container">
    <h1>Test</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    axios.get("api/user").then(res => console.log(res));
  }
};
</script>
