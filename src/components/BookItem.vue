<template>
  <div class="book-item-panel" @click="jumpDetailAction">
    <img class="book-img" :src="itemImg" />
    <div class="info-panel">
      <p class="title">{{ props.book.title }}</p>
      <p>{{ props.book.desc }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Book } from '#/store'
import itemImg from '@/assets/images/shijing.jpg'
import { useRouter } from 'vue-router'

const props = defineProps<{ book: Book }>()
const router = useRouter()

const jumpDetailAction = () => {
  router.push({
    name: 'Detail',
    params: {
      fileName: props.book.fileName
    }
  })
}

</script>

<style lang="scss" scoped>
  .book-item-panel {
    height: 540px;
    width: 45vw;
    margin: 10px;
    cursor: pointer;

    .book-img {
      max-height: 80%;
      max-width: 40vw;
    }
  }
</style>