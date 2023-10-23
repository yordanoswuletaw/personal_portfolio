import { defineStore, skipHydrate  } from 'pinia'

export const useDataStore = defineStore({
  id: 'data',
  state: () => {
    return {
      endorsement: ref(0),
      mainInfo: ref({}),
      experiences: ref([]),
      projects: ref([]),
      skills: ref([])
    }
  },
  actions: {
    setMainInfo(payload){
      this.mainInfo = payload
    },
    setExperiences(payload){
      this.experiences = payload
    },
    setProjects(payload){
      this.projects = payload
    },
    setSkills(payload){
      this.skills = payload
    },
    setEndorsement(payload){
      this.endorsement = payload
    }
  },
  getters: {
    
  },
})