<template>
	<div class="loaderChatBox">
		<svg xmlns="http://www.w3.org/2000/svg">
			<path fill="#E3E3E3" d="M11.147 17.981v23.897a3.993 3.993 0 0 0 3.981 3.982H43.01l7.965 7.967V17.981a3.994 3.994 0 0 0-3.981-3.983H15.129a3.994 3.994 0 0 0-3.982 3.983z"/>
			<circle class="bolinha1" cx="21.651" cy="28.867" r="3.409"/>
			<circle class="bolinha2" cx="31.062" cy="28.867" r="3.41"/>
			<path class="bolinha3" d="M43.88 28.867a3.408 3.408 0 1 1-3.406-3.409 3.407 3.407 0 0 1 3.406 3.409z"/>
		</svg>
	</div>
</template>

<style>
svg {
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  margin: auto;
  width:65px;
  height: 65px;

}
.bolinha1, .bolinha2, .bolinha3{
 fill: white;
}
@keyframes pulando {
 0%{
    transform: translateY(2%);
    opacity: 0.9;
  }
  50%{
    transform: translateY(1%);
    opacity: 0.95;
  }
  75%{
    transform: translateY(-1%);
    opacity: 0.95;
  }
  100%{
    transform: translateY(-3%);
    opacity: 1;
  }

}
.bolinha1{
   animation: pulando 0.6s 0.45s infinite;
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.bolinha2{

  animation: pulando 0.6s 0.55s infinite;
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.bolinha3{
    animation: pulando 0.6s 0.66s infinite;
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>

<script>
export default {
		name: 'loaderChatBox',
		data () {
				}
			}
</script>