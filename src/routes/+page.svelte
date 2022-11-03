<script type="ts">
	import supabase from "../lib/db";
	import Lock from "../lib/lock-fill.svelte"
	import Icon from '@iconify/svelte';

	let pre_email = "";
	let post_email = "@duck.com"

	let email = "";
	let password ="";

	function updateMail() {
		email = `${pre_email}${post_email}`
	}

	async function signUp() {
		const { user, error } = await supabase.auth.signUp({
			email: email,
			password: password,
		});
		console.log(user, error);
	};
</script>



<h1 class="title">Add user to</h1>
<img class="h-10 absolute1" src="/images/supabase.svg" alt="supabase">
<h1 class="title absolute2">database</h1>

<br>

<div class="input-group mb-3 ">
	<input 
	type="email" 
	class="form-control" 
	placeholder="Your Email"
	aria-describedby="basic-addon2" 
	bind:value={pre_email}
	on:input={updateMail}
	>
	<span class="input-group-text" id="basic-addon2">@duck.com</span>
</div>

<div class="input-group mb-3">
	<span class="input-group-text" id="basic-addon2"><Lock/></span>
	<input 
	type="password" 
	class="form-control" 
	placeholder="Password"
	aria-describedby="basic-addon2" 
	bind:value={password}
>
</div>

<button class="btn btn-primary" on:click={signUp} >Sign Up</button>

<style>
	.input-group {
		width: 400px;
	}

	.absolute1 {
		position: absolute;
		top: 55px;
		left: 260px;
	}
	.absolute2 {
		position: absolute;
		top: 50px;
		left: 305px;
	}
</style>