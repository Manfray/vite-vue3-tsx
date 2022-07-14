import { defineComponent, render } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Test from '@/components/test'
import './App.less'

export default defineComponent({
  props: {},
  emits: [],
  components: {},
  setup(props, ctx) {
  },
  render() {
    return (
      <div>
        <HelloWorld msg="Hello" />
        111232233
        <Test></Test>
        <router-view></router-view>
      </div>
    )
  }
})
