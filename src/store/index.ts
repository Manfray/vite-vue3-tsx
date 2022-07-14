import { createStore } from "vuex"

// 此处和router类似
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    setCount (state, payLoad) {
      state.count = payLoad
    }
  }
})

export default store
