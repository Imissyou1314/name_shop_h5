<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getEntityWords } from 'api/book'
import { useRoute, useRouter } from 'vue-router'
import { Tag as VanTag } from 'vant'
import useBookStore from '@/store/modules/book'

let fileName = 'cifu'
let indexValue = 0
const bookStore = useBookStore()

let dataList = ref<String[]>([])
const route = useRoute()
const router = useRouter()

// mounted
onMounted(() => {
  console.log('加载页面数据')
  fileName = route.params?.fileName as string
  indexValue = Number(route.params?.indexValue as string)
  loadPageData()
})

const loadPageData = () => {
  console.log('加载页面数据', fileName, indexValue)
  getEntityWords(fileName, indexValue).then(res => {
    if (res.code === 200) {
      dataList.value = res.data?.words
      console.log('请求回调', res.data)
    }
    console.log(res)
  })
}

const goBack = () => {
  router.push({
    name: 'Detail',
    query: {
      indexValue
    }
  })
}

const saveNameCheck = (tagName: string) => {
  const name = `${bookStore.nameTag}${tagName}`
  console.log('xxxxx ====>', name)
  if (navigator.clipboard) {
    navigator.clipboard.writeText(name)
  }
}
</script>

<template>
  <div class="name-wrapper">
    <van-nav-bar
      title="名阁"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <div class="container">
      <van-tag
        class="tag-item"
        type="primary"
        size="large"
        v-for="(word, index) in dataList"
        :key="index"
        >{{ word }}</van-tag
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.name-wrapper {
  height: 100%;
  width: 100%;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
    flex-wrap: wrap;

    .tag-item {
      margin: 10px;
      height: 34px;
      padding: 0 10px;
    }
  }
}
</style>
