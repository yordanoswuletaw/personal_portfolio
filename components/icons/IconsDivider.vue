<script setup>
  const theme = useTheme()
</script>
<template>
        <svg width="15" height="348" viewBox="0 0 15 348" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 3.5L6.49997 140.975L7.49997 239.475L8.49997 337.975" stroke-linecap="round"
                        :stroke="theme ? '#F5F5F5' : '#1A1C22'"
                        :fill-opacity="theme ? '0.7' : '0.5'" />
                <circle cx="6.5" cy="95.5" r="6.5" :fill="theme ? '#F5F5F5' : '#1A1C22'" />
                <circle cx="6.5" cy="6.5" r="6.5" :fill="theme ? '#F5F5F5' : '#1A1C22'" />
                <circle cx="6.5" cy="188.5" r="6.5" :fill="theme ? '#F5F5F5' : '#1A1C22'" />
                <circle cx="8.5" cy="265.5" r="6.5" :fill="theme ? '#F5F5F5' : '#1A1C22'" />
                <circle cx="8.5" cy="341.5" r="6.5" :fill="theme ? '#F5F5F5' : '#1A1C22'" />
        </svg>
</template>