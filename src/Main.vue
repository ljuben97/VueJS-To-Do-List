<template>
  <div class="bg">
    <Notepad>

    </Notepad>
  </div>
</template>

<script>
    import Notepad from "./Notepad.vue";

    export default {
        name: "Main",

        components: {
          Notepad
        }
    }
</script>

<style scoped>

  .bg {
    /* The image used */

    min-height:100%;
    background:linear-gradient(0deg,rgba(255,0,20,0.3),rgba(255,0,150,0.3)),url("../Images/Backgroud.png");
    background-size:cover;

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
