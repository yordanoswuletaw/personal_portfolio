import { ApolloClient, InMemoryCache } from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: config.public.apiEndpoint,
    headers: {
       authorization: `Bearer ${config.public.accessToken}`,
    }
  });
  
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})