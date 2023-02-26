<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAllEntity } from 'api/entity'
import { useRoute, useRouter } from 'vue-router'
import { EntityResList, Entity } from '#/store'
import {
  Col as VanCol,
  Row as VanRow,
  Sticky as VanSticky,
  Button as VanButton
} from 'vant'

let entityList = <EntityResList>{}
let fileName = 'cifu'
let indexNum = 0
let totalSize = ref(1)
const indexValue = ref(indexNum)
let activeEntity = ref<Entity>({
  content: '',
  author: '',
  dynasty: '',
  title: '',
  book: ''
})
const route = useRoute()
const router = useRouter()

// mounted
onMounted(() => {
  fileName = route.params?.fileName as string
  indexNum = Number(route.query?.indexValue)
  if (indexNum) {
    indexValue.value = indexNum
  }
  loadPageData(fileName)
})

const loadPageData = (fileName: string) => {
  getAllEntity(fileName).then(res => {
    if (res.code === 200) {
      entityList.list = res.data
      totalSize.value = res.data?.length || 0
      refreshEntity()
      console.log('请求回调', entityList)
    }
    console.log(res)
  })
}

const goBack = () => {
  router.go(-1)
}

const jumpNameFact = () => {
  router.push({
    name: 'NameKeys',
    params: {
      fileName: fileName,
      indexValue: indexValue.value
    }
  })
}

const jumpWordsAction = () => {
  router.push({
    name: 'Words',
    params: {
      fileName: fileName,
      indexValue: indexValue.value
    }
  })
}

const preAction = () => {
  if (indexValue.value === 0) {
    return
  } else {
    indexValue.value = indexValue.value - 1
    refreshEntity()
  }
}

const nextAction = () => {
  if (indexValue.value === totalSize.value - 1) {
    return
  } else {
    indexValue.value = indexValue.value + 1
    refreshEntity()
  }
}

const refreshEntity = () => {
  activeEntity.value = entityList?.list[indexValue.value]?.Entity
}
</script>

<template>
  <div class="detail-wrapper">
    <van-nav-bar
      title="名阁"
      left-text="返回"
      left-arrow
      @click-left="goBack"
      right-text="生成"
      @click-right="jumpNameFact"
    />
    <div class="container">
      <h1 class="title">{{ activeEntity?.title }}</h1>
      <p class="tag">{{ activeEntity?.dynasty }}.{{ activeEntity?.author }}</p>
      <pre class="content">{{ activeEntity?.content }}</pre>
    </div>
    <van-sticky :offset-bottom="50" position="bottom" style="height: 0">
      <van-row justify="center">
        <van-col :span="6">
          <van-button
            type="primary"
            :disabled="indexValue === 0"
            size="large"
            @click="preAction"
            >前一篇文章</van-button
          >
        </van-col>
        <van-col :span="4" :offset="2">
          <van-button
            type="primary"
            :disabled="indexValue === 0"
            size="large"
            @click="jumpWordsAction"
            >分解</van-button
          >
        </van-col>
        <van-col :span="6" :offset="2">
          <van-button
            type="primary"
            :disabled="indexValue === totalSize - 1"
            size="large"
            @click="nextAction"
            >后一篇文章</van-button
          >
        </van-col>
      </van-row>
    </van-sticky>
  </div>
</template>

<style lang="scss" scoped>
.detail-wrapper {
  height: 100%;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
  }
}

.container {
  .title {
    text-align: center;
  }
  .tag {
    text-align: center;
  }

  .content {
    white-space: pre-wrap;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    line-height: 32px;
    text-align: left;
  }
}

.van-button {
  border-radius: 4px;
  height: 56px;
}
</style>
