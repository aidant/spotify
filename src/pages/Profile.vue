<template>

</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getProfile } from '../utilities/spotify'

@Component
export default class Profile extends Vue {
  mounted () {
    getProfile().then(console.log, console.error)
  }
}
</script>
