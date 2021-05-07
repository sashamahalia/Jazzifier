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
  background-color: #691048;
  display: flex;
  justify-content: space-between;

}

.navlink {
  padding: .75em;
  /* background-color: cyan; */
  font-size: 1.5em;
}  
</style>