<template>
  <p>Edit the event here</p>
  <button @click="edit"> Edit </button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    edit(){
      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
      this.GStore.flashMessage2 = 'The details in ' + this.event.title + ' already edited.'
      setTimeout(() => {
        this.GStore.flashMessage2 = ''}
      ,3000)
    }
  }
}
</script>
