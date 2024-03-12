<script lang="ts">
	import '../app.postcss';
  import Drawer from '$lib/components/Drawer.svelte';
  import NavBar from '$lib/components/NavBar.svelte';
	import {
    AppShell, initializeStores,
  } from '@skeletonlabs/skeleton';

  initializeStores();

  const year = new Date().getFullYear();

</script>

<Drawer />
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
    <NavBar />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
  <!-- Page Footer -->
  <svelte:fragment slot="pageFooter">
    <div class="text-center m-4">
      <p> ★ Serving DC, Maryland, and Virginia since 2006. </p>
      <p> © {year} All rights reserved. </p>
    </div>
  </svelte:fragment>
</AppShell>
