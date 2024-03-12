<script lang="ts">
  import {
    AppBar, TabGroup, TabAnchor, getDrawerStore,
  } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';
  import { openQualia, linkData } from '$lib';

  const drawerStore = getDrawerStore();

  function drawerOpen(): void {
	  drawerStore.open({});
  }
</script>
<AppBar class="space-y-4 p-4 shadow-2xl">
  <svelte:fragment slot="lead">
    <button on:click={drawerOpen} class="m-1 mr-4 md:hidden">
      <Icon icon="material-symbols:menu" style="font-size: 24px;" inline />
    </button>
    <a href="/">
      <strong class="text-xl uppercase md:block hover:text-primary-400">Premier Title & Settlement Co.</strong>
    </a>
  </svelte:fragment>
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
      <TabAnchor on:click={openQualia}>
        <span>Access Your Closings</span>
      </TabAnchor>
      {#each linkData as link}
        <TabAnchor href={link.href} selected={ $page.url.pathname === link.href }>
          <span>{link.title}</span>
        </TabAnchor>
      {/each}
    </TabGroup>
  </svelte:fragment>
</AppBar>

