<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <label class="mr-4" for="name">Imię</label>
          <input class="mr-4" type="text" name="name">
          <label class="mr-4" for="surname">Nazwisko</label>
          <input class="mr-4" type="text" name="surname">
        </div>
      </div>
    </div>
    
  </div>
</template>


<script>
export default {
  name: 'Newusers',
  props: {
    msg: String
  }
}
</script>


<style lang="scss" scoped>

</style>
