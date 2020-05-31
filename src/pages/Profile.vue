<template>
  <div>
    {{ username }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getProfile } from '../utilities/spotify'

@Component
export default class Profile extends Vue {
  username: string = null

  async mounted () {
    const profile = await getProfile()
    this.username = profile.display_name
  }
}
</script>
