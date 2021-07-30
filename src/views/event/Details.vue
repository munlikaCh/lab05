<template>
  <div id="flashMessage" v-if="GStoreE.flashMessage">
    {{ GStoreE.flashMessage }}
  </div>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStoreE']
}
</script>
