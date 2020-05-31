<template>
  <main>
    <h1>
      noise
    </h1>
    <router-link :to="{ path: '/login', query: { redirect: '/profile' } }">
      Login with Spotify
    </router-link>
  </main>
</template>

<style scoped>
  main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:  translate(-50%, -50%);
  }

  h1 {
    font-size: 4rem;
    text-align: center;
  }

  a {
    color: #1DB954;
    text-decoration: none;
    font-weight: bold;
    padding: 5px 10px;
    border: #1DB954 solid 0.25rem;
  }
</style>
