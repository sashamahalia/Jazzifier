<template>
  <nav><span class="navlink">Jazzifier</span> <span class="navlink">Info</span></nav>
</template>

<script>
export default {
  name: 'NavComponent',
  props: [
    
  ]
}
</script>

<style >
nav {
  width: 100%;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  /* 
  font-family: "Oswald", sans-serif;
  */
  background-color: purple;
  display: flex;
  justify-content: space-between;

}

.navlink {
  padding: 1em;
}  
</style>