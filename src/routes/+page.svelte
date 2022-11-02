<script>
	import supabase from "$lib/db";

	let email = "";
	let password ="";

	async function signUp() {
		const { user, error } = await supabase.auth.signUp({
			email: email,
			password: password,
		});
		console.log(user, error);
	};
</script>

<input type="email" bind:value={email}> <br>
<input type="password" bind:value={password}> <br>

<button on:click={signUp}>Sign Up</button>