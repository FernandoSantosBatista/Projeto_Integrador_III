<template>
  <nav class="navbar fixed-top navbar-expand justify-content-center">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="/"> Home </a>
      </li>
      <li>
        <a href="/doar"> doar</a>
      </li>
      <li>
        <a href="/sobre"> entenda </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=El+Messiri:wght@700&family=Roboto+Slab:wght@600&display=swap");
.navbar {
  background-color: #fff;
  font-size: 22px;
  font-weight: bold;
}
nav a {
  text-decoration: none;
  color: #ff8800;
  padding: 10px;
  display: inline-block;
}
a {
  text-decoration: none;
  color: #ff8800;
}
nav a:hover {
  text-decoration: none;
  color: #f84904;
}
</style>
