<script lang="ts">
  import { Drawer, getDrawerStore, TabGroup, TabAnchor } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";
  import { openQualia, linkData } from "$lib";

  const drawerStore = getDrawerStore();
</script>

<Drawer>
  <TabGroup 
    justify="justify-center"
    active="variant-filled-primary"
    hover="hover:variant-soft-primary"
    rounded=""
    border=""
    class="bg-surface-100-800-token w-full"
  >
    <TabAnchor on:click={() => {
      openQualia();
      drawerStore.close();
    }}>
      <span>Access Your Closings</span>
    </TabAnchor>
    {#each linkData as link}
      <TabAnchor
        href={link.href}
        selected={ $page.url.pathname === link.href }
        on:click={drawerStore.close}
      >
        <span>{link.title}</span>
      </TabAnchor>
    {/each}
  </TabGroup>
</Drawer>

<style>
  :global(.drawer>.tab-group>.tab-list) {
    flex-direction: column !important;
  }
</style>
