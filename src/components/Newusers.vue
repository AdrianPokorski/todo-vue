<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <label class="mr-4" for="name">Imię</label>
          <input class="mr-4" type="text" name="name" v-model="nameValue">
          <label class="mr-4" for="surname">Nazwisko</label>
          <input class="mr-4" type="text" name="surname" v-model="surnameValue">
        </div>
        <div class="col-12">
          <button type="submit" v-on:click="addPerson" class="add-new-person mt-4">Add to list</button>
        </div>
      </div>
    </div>
    
  </div>
</template>


<script>
export default {
  name: 'Newusers',
  data() {
    return {
      nameValue:'',
      surnameValue:'',
      users: [],
    };
  },
  methods:{
    addPerson: function(){
      this.users.push( {name: this.nameValue, surname: this.surnameValue } );

      this.$emit("usertoglobal", this.users)
    }
  },

}
</script>


<style lang="scss" scoped>
  input{
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
  }
</style>
