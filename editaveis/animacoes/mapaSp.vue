<template>
	<div class="mapaSp">	
	<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
  <path class="sao-paulo-externo" fill="none" stroke="#000" stroke-width="8.329" stroke-miterlimit="10" d="M174.071 81.447l-23.316-23.32H84.963l8.75 52.469h21.235l14.574 54.96-41.641 30.814 8.743 9.997 26.234-14.987 10.829 10.826-29.567 23.73v61.632l16.032 16.027-15.412 15.411v18.109l13.641 13.642v48.821H99.537v34.98l31.857 31.853h58.921l29.148-16.859V325.458l-19.152-31.645 12.909-12.909V248.42l32.059-17.066v-33.315l70.793 31.646h52.049v-79.532l17.698-17.694-13.115-20.617h-84.117l-28.732 21.237-7.91-25.4 20.404-66.21-10.41-6.246-42.476 46.012z"/>
  <path class="sao-paulo-interno-1" fill="none" stroke="#000" stroke-width="8.329" stroke-miterlimit="10" d="M174.071 81.447v239.017l-4.577 4.58H104.74"/>
  <path class="sao-paulo-interno-2" fill="none" stroke="#000" stroke-width="8.329" stroke-miterlimit="10" d="M219.463 81.233v46.429l-6.038 6.04h-92.349M129.522 165.556h238.597M104.742 255.504h34.668l6.298 6.298v204.609M118.378 399.578h101.085"/>
  <circle class="bola bola-1" opacity=".5" fill="#FFC0C5" :cx="valorCx" :cy="valorCy" r="40"/>
  <circle class="bola bola-2" opacity=".5" fill="#FF9198" :cx="valorCx" :cy="valorCy" r="31.889"/>
  <circle class="bola bola-3" opacity=".5" fill="#FF6E77" :cx="valorCx" :cy="valorCy" r="25.152"/>
  <circle class="bola bola-4" opacity=".5" fill="#FF525D" :cx="valorCx" :cy="valorCy" r="20.365"/>
  <circle class="bola bola-5" opacity=".5" fill="#FF3E49" :cx="valorCx" :cy="valorCy" r="16.13"/>
  <circle class="bola bola-6" opacity=".5" fill="#FF2D3B" :cx="valorCx" :cy="valorCy" r="13.02"/>
</svg>

</div>
	
</template>
<style>
		.sao-paulo-externo {
  stroke-dasharray: 1640;
  animation: draw-sao-paulo-externo 2s;
  animation-fill-mode: forwards;
}

@keyframes draw-sao-paulo-externo{
  from{
    stroke-dashoffset: -1640;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.sao-paulo-interno-1 {
  stroke-dasharray: 310;
  animation: draw-sao-paulo-interno-1 2s linear alternate;     
//  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes draw-sao-paulo-interno-1{
  from{
    stroke-dashoffset: -310;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.sao-paulo-interno-2 {
  stroke-dasharray: 375;
  animation: draw-sao-paulo-interno-1 2s linear alternate;     
  animation-fill-mode: forwards;
}

@keyframes draw-sao-paulo-interno-2 {
  from{
    stroke-dashoffset: -375;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.bola {
  animation: bola-pulsando 6s ease-in-out infinite;
  opacity: 0;
}
.bola.bola-1{
  animation-delay: .5s
}
.bola.bola-2{
  animation-delay: 1s
}
.bola.bola-3{
  animation-delay: 1.5s
}
.bola.bola-4{
  animation-delay: 2s
}
.bola.bola-5{
  animation-delay: 2.5s
}
.bola.bola-6{
  animation-delay: 3s
}

@keyframes bola-pulsando{ 
  10%{
    opacity: 0
  }
  50%{
    opacity: 0.5
  }
  100%{
    opacity: 0
  }
}
</style>
<script>
	export default {
		name: 'mapaSpSvg',
		data () {
			return {
				valorCx: 200,
				valorCy: 150
			}
		}
	}
</script>