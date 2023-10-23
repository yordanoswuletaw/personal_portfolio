<script setup>
const theme = useTheme()
</script>
<template>
    <svg class="min-w-full" viewBox="0 0 1440 270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M699 148L1440 0V270H0V174C77 302 513 188 699 148Z" :fill="theme ? '#1A1C22' : '#F5F5F5'"
                :fill-opacity="theme ? '0.4' : '0.4'" />
        <path d="M695 160L1440 20V270H0V174C77 302 509 200 695 160Z" :fill="theme ? '#1A1C22' : '#F5F5F5'"
                :fill-opacity="theme ? '0.5' : '0.5'" />     
        <path d="M709 174L1440 42V270H0V174C77 302 523 214 709 174Z" :fill="theme ? '#1A1C22' : '#F5F5F5'"
                :fill-opacity="theme ? '0.7' : '0.6'" />   
    </svg>
</template>