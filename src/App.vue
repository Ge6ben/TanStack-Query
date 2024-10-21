<script lang="ts" setup>
  import { useGetData } from '@/fetchDataCompose'
  import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
  const imageUrl = ref('')
  const queryKey = computed(() => imageUrl.value)
  const { data } = useGetData({ queryKey })

 </script>

<template>
  <div class="text-right">
    {{ data }}
    <VueQueryDevtools />

  </div>
</template>
