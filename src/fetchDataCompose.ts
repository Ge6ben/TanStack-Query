import { useQuery } from '@tanstack/vue-query'
import { Ref } from 'vue'

export const useGetData = ({ queryKey }: { queryKey: Ref<string> }) => {
  const fetchData = async () => {
    // Query data from Supabase
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    return data.json()
  }

  return useQuery({
    queryKey: ['get-data', queryKey.value], // Specify queryKey in an object
    queryFn: fetchData, // Use  it as query function
    // enabled: !!queryKey.value, // Other options as needed
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    retry: 2, // Retry failed queries 2 times
  })
}
