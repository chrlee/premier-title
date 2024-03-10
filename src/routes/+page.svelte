<script>
	import Icon from "@iconify/svelte";
  import { openQualia } from "$lib";
</script>
<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to Premier Title.</h2>
		<!-- Animated Logo -->
		<figure>
			<svg
				class="fill-token -scale-x-[100%]"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 186 256"
			>
      <path d="M92.718,57.02L76.428,71.9V59.37h-14.01v25.41l-24.06,21.91l8.53,9.14l8.3-7.62V160h24.23v-32h27v32h24.25v-52.26l8.43,7.62 l8.32-9.37L92.718,57.02z M133.238,1.616H2v252h181.835V52.708L133.238,1.616z M17.812,17.427h109.002l0.692,0.494v41.012h40.518 v0.198v178.673H17.812V17.427z M147.418,194h-109v-12h109V194z M147.418,216h-109v-12h109V216z"></path>
		</figure>
		<!-- / -->
		<div class="flex relative justify-center space-x-2">
      <section class="img-bg" />
			<button
				class="btn btn-xl variant-filled-primary"
        on:click={openQualia}
			>
				<div class="flex align-items-center">
          <p>Get an Instant Quote</p>
          <Icon icon="basil:caret-right-outline" inline style="font-size: 1.5em;"/>
        </div>
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
    @apply w-32 h-10 md:w-40 md:h-12;
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
