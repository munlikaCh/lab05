<template>
  <p>Edit the event here</p>
  <button @click="edit"> Edit </button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStoreE'],
  methods: {
    edit(){
      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
      this.GStoreE.flashMessage = 'The data has been updated in ' + this.event.title
      setTimeout(() => {
        this.GStoreE.flashMessage = ''}
      ,3000)
    }
  }
}
</script>
