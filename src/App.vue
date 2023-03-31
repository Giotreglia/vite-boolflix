<script>
import axios from 'axios';
import { store } from './store';
import MyHeader from './components/MyHeader.vue';

export default {
  components: {
    MyHeader
  },

  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <MyHeader />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
