<script>
	export let type = "";

	let left;

	if (type == "Log in") {
		left = ["205px", "250px"]
	} else {
		left = ["230px", "275px"]
	}

</script>

<div class="prose">
	<h1>{type} to</h1>
	<img class="absolute1 h-10" src="/images/supabase.svg" alt="supabase" style:--logo={left[0]} />
	<h1 class="title absolute2" style:--title={left[1]}>database</h1>
</div>

<style>
	.absolute1 {
		position: absolute;
		top: 20px;
		left: var(--logo);
	}
	.absolute2 {
		position: absolute;
		top: 50px;
		left: var(--title);
	}
</style>