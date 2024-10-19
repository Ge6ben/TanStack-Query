<script lang="ts" setup>
  import { useQuery } from '@tanstack/vue-query'
  import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return response.json()
  }

  const { data } = useQuery(['todo'], fetchData)

 </script>

<template>
  <div class="text-right">
    {{ data }}
    <VueQueryDevtools />

  </div>
</template>
