import { Button } from 'ant-design-vue'
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import '../style/test.less'

export default defineComponent({
  props: ['title'],
  emits: ['update:title'],
  setup() {
    const store = useStore()
    const username = ref('tom')
    const age = ref(18)
    const vuexCount = computed(() => store.state.count)
    setTimeout(() => {
      age.value = 19
    }, 2000)
    function handleSetCountClick() {
      store.commit('setCount', store.state.count + 1)
    }
    return {
      username,
      age,
      vuexCount,
      handleSetCountClick
    }
  },
  render() {
    return (
      <>
        {/* 写一个 hello world */}
        <div class="test">
          普通用法： hello {this.username}, you are {this.age} years old now
        </div>
        <div>
          vuex使用：
          <Button type="primary" onClick={this.handleSetCountClick}>
            点击
          </Button>
          {this.vuexCount}
        </div>
        <div>
          展示v-model双向绑定： 值： {this.title}{' '}
          <button onClick={() => this.$emit('update:title', this.title + 1)}>点击修改</button>
        </div>
      </>
    )
  }
})
