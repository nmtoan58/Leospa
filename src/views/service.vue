<template>
    <div>
        <procerdure-vue></procerdure-vue>
        <appointment-vue></appointment-vue>
    </div>
</template>
<script>
import ProcerdureVue from '../components/Procerdure.vue'
import AppointmentVue from '../components/Appointment.vue'
export default {
    components: {
        ProcerdureVue,
        AppointmentVue
    }
}
</script>
<style>
    
</style>