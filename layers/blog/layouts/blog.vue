<script setup>
const loading = ref(true)
const { y } = useNinjaWindowScroll()


onMounted(async () => {
    loading.value = false
})
</script>

<template>
    <div class="group/landing" :class="y > 60 ? 'scrolled' : ''">
        <div class="dark:bg-muted-900 bg-white pt-16">
            <div class="max-w-7xl mx-auto p-4">
                <LandingNavbar />
                <div class="relative min-h-screen">
                    <slot />
                </div>
                <LandingFooter class="mt-12" />
            </div>
        </div>
    </div>
</template>

<style>



</style>
