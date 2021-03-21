<template>
  <div class="home" id="home">
    <v-parallax dark height="700" src="@/assets/書籍MV.png">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-4">Meg's Portfolio</h1>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped>
h1 {
  color: gray;
}
</style>