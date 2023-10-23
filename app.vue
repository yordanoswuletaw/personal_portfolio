<script setup>
import { useDataStore  } from '~/stores/data';
import maininfo from '~/graphql/queries/maininfo.query.gql'
import experiences from '~/graphql/queries/experiences.query.gql'
import projects from '~/graphql/queries/projects.query.gql'
import skills from '~/graphql/queries/skills.query.gql'
import { useQuery } from "@vue/apollo-composable";

useHead({
  title: 'J0RdN w',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Personal Portfolio' }
  ],
  link: [
    { rel: 'icon', href: '/avatar.svg' }
  ]
})

const theme = useTheme()
const dataStore = useDataStore()

const { loading:maininfoLoading, error:maininfoError, onResult } = useQuery(maininfo)
onResult(({data}) => {
  dataStore.setMainInfo(data.maininfo[0])
  dataStore.setEndorsement(data.maininfo[0].endorsement)
})

const { loading:expLoading, error:expError, onResult:onExpResult } = useQuery(experiences)
onExpResult(({data}) => {
  dataStore.setExperiences(data.experience)
})

const { loading:projLoading, error:projError , onResult:onProjResult} = useQuery(projects)
onProjResult(({data})=>{
  dataStore.setProjects(data.project)
})

const { loading:skLoading, error:skError, onResult:onSkResult } = useQuery(skills)
onSkResult(({data})=>{
  dataStore.setSkills(data.skill)
})

</script>
<template>

  <div :class="{ dark: theme }" class="min-w-full min-h-full bg-gradient-to-r from-primary via-blue-500 to-secondary bg-cover overflow-x-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>

</template>
