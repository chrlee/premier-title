<script lang="ts">
  import { Avatar } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';
</script>

<div class="page-container">
  <h2>Contact</h2>
  <section class="card p-4 flex">
    <Avatar src="images/avatar.png" width="w-24" initials="ML" />
    <ul class="list mt-auto mb-auto pl-4">
      <li><strong class="text-2xl">Maryann Lee</strong></li>
      <li><Icon icon="mdi:email" class="mr-2" inline />maryann@premiertitleus.com</li>
      <li><Icon icon="mdi:phone" class="mr-2" inline />703-658-7007</li>
    </ul>
  </section>
</div>
