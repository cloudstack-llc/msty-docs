<template>
  <div class="mt-5">
    <NuxtLink :to="src" :target="target">
      <UiCard
        class="transition-all relative h-full"
        :class="[src && 'hover:bg-muted']"
      >
        <div class="p-4">
          <NuxtImg :src="src" :alt="alt" class="rounded-lg size-full" />
        </div>
      </UiCard>
    </NuxtLink>
    <p class="text-center my-4 text-sm text-muted-foreground">
      {{ alt }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string;
  target?: string;
  alt?: string;
}
withDefaults(defineProps<Props>(), {
  target: "_blank",
});
</script>
