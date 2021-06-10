<template>
  <nav><a href='/' class="navlink"><h1>Jazzifier</h1></a> <a href='/about' class="navlink">Info</a></nav>
</template>

<script>
export default {
  name: 'NavComponent',
  props: [
    
  ]
}
</script>

<style lang="scss" >
nav {
  z-index: 3;
  width: 100%;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  font-family: 'Julee', cursive;
  background-color: $darker-purple;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

h1 {
  font-weight: normal;
  font-size: 1.2em;
}

.navlink {
  padding-left: 1em;
  padding-right: 1em;
  /* background-color: cyan; */
  color: white;
  text-decoration: none;
  font-size: 1.2em;
}  
</style>