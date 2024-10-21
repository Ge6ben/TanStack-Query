// const { data, error, isLoading, isError } = useGetDoctors({ queryKey: imageUrl });
import { useQuery } from '@tanstack/vue-query'
import { Ref } from 'vue'

export const useGetData = ({ queryKey }: { queryKey: Ref<string> }) => {
  return useQuery(
    // The queryKey is used to identify and cache the query
    ['get-data', queryKey.value],
    async () => {
      // Query data from Supabase
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

      return response.json()
    }
    // {
    //   enabled: !!queryKey.value
    //   // The query is disabled if queryKey is not provided or empty
    //   // enabled: !!queryKey.value, // Make sure the queryKey is valid before running the query
    //   // staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    //   // retry: 2 // Retry failed queries 2 times
    // }
  )
}
