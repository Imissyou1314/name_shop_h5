<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAllBook } from 'api/book'
import BookItem from '@/components/BookItem.vue'
import { Field, CellGroup } from 'vant'
import useBookStore  from '@/store/modules/book'

const bookList = ref()
const nameTag = ref('')
const book = useBookStore()

// mounted
onMounted(() => {
  console.log('加载页面数据')
  loadPageData()
})

const loadPageData = () => {
  console.log('加载页面数据')
  getAllBook().then(res => {
    if (res.code === 200) {
      bookList.value = res.data
      console.log('请求回调')
    }
    console.log(res)
  })
}

const saveNameTag = () => {
  if (nameTag.value) {
    book.setNameTag(nameTag.value)
  }
}
</script>
<template>
  <div class="home-wrapper">
    <van-nav-bar title="名阁"/>
    <van-cell-group inset style="margin: 10px;">
      <van-field v-model="nameTag" label="姓:" placeholder="请输入性什么" autosize input-align="right" @blur="saveNameTag"/>
    </van-cell-group>
    <div class="container">
      <book-item v-for="(book, index) in bookList" :key="index" :book="book"></book-item>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-wrapper {
  height: 100%;
  width: 100%;
  background-color: #c8c9cc;
  color: #333;


  .container {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>