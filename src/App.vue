
<script lang="ts" setup>
 import { useQuery } from '@tanstack/vue-query';

  const fetchData = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   return response.json()
 }

 const { data } = useQuery(['todo'], fetchData)



// const useUpload = ({ queryKey }: { queryKey: Ref<{ sortModel: number }> }) => {
//
//   return useQuery(
//     // Query key for Vue Query - make sure it's reactive
//     ['add-upc-scanner', queryKey.value],
//     async () => {
//       const { data, error } = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
//         method: 'POST',
//         body: JSON.stringify(queryKey.value)
//       });
//
//       if (error) {
//         throw new Error(error.message);
//       }
//
//       return data;
//     },
//     {
//       enabled: true
//     }
//   );
// };

// const getQueryKey = computed(() => ({
//   sortModel: sortModel.value
// }));
// const { data: myData } = useUpload({ queryKey: getQueryKey });

 </script>

<template>
  <div class="text-right">
    {{ data }}
  </div>
</template>
