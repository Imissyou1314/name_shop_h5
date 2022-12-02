<template>
  <div class="book-item-panel">
    <img class="book-img" :src="bookImg" @click="jumpDetailAction"/>
    <div class="info-panel">
      <p class="title">{{ props.book.title }}</p>
      <p>{{ props.book.desc }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Book } from '#/store'
import { useRouter } from 'vue-router'

import shijingImg from '@/assets/images/shijing.jpg'
import chuciImg from '@/assets/images/chuci.jpeg'


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

const bookImg = computed(() => {
  switch (props.book.fileName) {
    case 'shijing':
      return shijingImg
    case 'chuci':
      return chuciImg
    default:
      return shijingImg
  }
})


</script>

<style lang="scss" scoped>
  .book-item-panel {
    height: 540px;
    width: 45vw;
    margin: 10px;
    cursor: pointer;

    .book-img {
      height: 80%;
      width: 40vw;
    }
  }
</style>