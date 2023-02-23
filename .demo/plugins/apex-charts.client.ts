import VueApexCharts from 'vue3-apexcharts'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('VueApexCharts', VueApexCharts)
})
