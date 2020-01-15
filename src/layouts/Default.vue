<template>
  <div class="layout antialiased text-gray-800 bg-gray 100">
    <header class="header">
      <strong>
        <g-link to="/">Brand Logo</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot />
    <footer>This is the footer</footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: Lato, Roboto, -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: #f7fafc;
}

.layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
