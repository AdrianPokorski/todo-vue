<template>
<div id="app">
	<img alt="Vue logo" src="./assets/logo.png">
	<Newusers @usertoglobal="checkUser"></Newusers>
	
	<div class="personList">
		<ul class="users-list">
			<li v-for="(users, index) in allUsers" :key="index">
				{{ users.name }} {{ users.surname }}
				<Deleteusers @deletetoglobal="deleteUser" :user-index="index" />
			</li>
		</ul>
	</div>
</div>
</template>

<script>
import Newusers from './components/Newusers.vue'
import Deleteusers from './components/Deleteusers.vue'

export default {
	name: 'app', 
  components: {
	Newusers,
	Deleteusers
  },
  data() {
    return{
			allUsers: [],
		
    }
	},
  methods:{
    checkUser: function(value){
      this.allUsers = value;
		},
		deleteUser: function(ddd){
			this.allUsers.splice(ddd, 1);
		},
  },
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.users-list{
	list-style: none;
	border: 1px solid black;
	padding: 10px;
	margin-top: 50px;
	display: flex;
	flex-direction: column;

	li{
		padding: 10px;
		border: 1px solid blue;
		background: blue;
		color: #fff;
		margin: 10px 0;
		display: inline-block;
	}
}



</style>
