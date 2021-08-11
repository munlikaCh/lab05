<template> 
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
  <div id="flashMessage2" v-if="GStore.flashMessage2">
    {{ GStore.flashMessage2 }}
  </div>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore']
}
</script>

<style>
@keyframes redfade{
  from{
    background: red;
  }
  to{
    background: transparent;
  }
}
#flashMessage2{
  animation-name: redfade;
  animation-duration: 3s;
}
</style>