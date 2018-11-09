<template>
    <div>
        <button @click="deleteUser">Delete</button>
    </div>
</template>


<script>
export default {
  name: 'Deleteusers',
  props: ['userIndex'],
  
  methods: {
      deleteUser: function(){
    
      this.$emit("deletetoglobal", this.userIndex)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
