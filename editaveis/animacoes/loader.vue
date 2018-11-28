<template>
	<div class="loader">
		<svg xmlns="http://www.w3.org/2000/svg" width="170" height="170">
  <path id="temp" fill="none" class="balao" stroke="#777" stroke-width="6" stroke-miterlimit="10" d="M139.233 39.767v66.359c0 6.079-4.979 11.058-11.059 11.058H50.756l-22.119 22.119V39.767c0-6.08 4.974-11.06 11.059-11.06h88.479c6.08.001 11.058 4.98 11.058 11.06z"/></svg>
	</div>
</template>

<style>
.svg {
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  margin:auto;
}
.balao {
  stroke-dasharray: 415;
  animation: contorno 3s ease-in-out 2s infinite;
  transition-delay: 1s;
  }
@keyframes contorno {
  0%{
    stroke-dashoffset: -415;
    fill-opacity: 0;
    stroke-opacity: 100%;
	}
  50%{
    stroke-dashoffset: 0;
    fill-opacity: 1;
    stroke-opacity: 100%;
  }

  100% {
    stroke-dashoffset: 415;
    fill-opacity: 0;
  }
}

</style>
<script>
  export default {
    name: 'loader',
    data () {
        }
      }
</script>