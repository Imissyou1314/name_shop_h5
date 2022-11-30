import { defineStore } from 'pinia'
import { Book } from '#/store'

interface State {
  nameTag: string,
  book: Book,
}

const useBookStore = defineStore('bookStore', {
  state(): State {
    return {
      nameTag: '',
      book: {
        title: '测试',
        fileName: 'test',
        desc: '测试',
        total: 4,
        tag: '测试'
      }
    }
  },
  actions: {
    setBook(book: Book) {
      this.book = book
    },
    setNameTag(nameTag: string) {
      this.nameTag = nameTag
    },

  }
})

export default useBookStore
