<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';

  const year = new Date().getFullYear();
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
        <Icon icon="material-symbols:menu" class="inline md:hidden" style="font-size: 24px;" inline />	
        <a href="/">
          <strong class="text-xl uppercase hidden md:block hover:text-primary-400">Premier Title & Settlement Co.</strong>
        </a>
			</svelte:fragment>
      <strong class="text-xl uppercase inline md:hidden">Premier Title & Settlement Co.</strong>
			<svelte:fragment slot="trail">
        <TabGroup 
          justify="justify-center"
          active="variant-filled-primary"
          hover="hover:variant-soft-primary"
          flex="flex-1 lg:flex-none"
          rounded=""
          border=""
          class="bg-surface-100-800-token w-full hidden md:flex"
        >
          <TabAnchor href="/">
            <span>Access Your Closings</span>
          </TabAnchor>
          <TabAnchor href="/services" selected={ $page.url.pathname === '/services' }>
            <span>Services</span>
          </TabAnchor>
          <TabAnchor href="/">
            <span>Specialties</span>
          </TabAnchor>
          <TabAnchor href="/">
            <span>eNotary</span>
          </TabAnchor>
          <TabAnchor href="/">
            <span>About</span>
          </TabAnchor>
          <TabAnchor href="/">
            <span>Contact</span>
          </TabAnchor>
        </TabGroup>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
  <!-- Left Sidebar Slot -->
	<svelte:fragment slot="sidebarLeft">
		<p>Sidebar Working!</p>
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
