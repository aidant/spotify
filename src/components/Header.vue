<template>
  <nav>
    <ul>
      <li>
        <a :href="login">Login</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getSpotifyAuthenticationUrl } from '../utilities/spotify-authorization'

@Component
export default class Header extends Vue {
  login = getSpotifyAuthenticationUrl()
}

</script>

<style scoped>
  ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    text-decoration: underline;
  }
</style>
