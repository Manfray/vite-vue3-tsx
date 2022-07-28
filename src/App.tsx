import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Test from '@/components/test'
import './App.less'

export default defineComponent({
  components: {},
  props: {},
  emits: [],
  setup(props, ctx) {
    const test = ref(0)
    return {
      test
    }
  },
  render() {
    return (
      <div style={{ border: '1px solid #aaa', padding: '10px', backgroundColor: '#ddd' }}>
        这里是父容器
        <div>展示v-model: 值: {this.test}</div>
        <div style={{ border: '1px solid #999', padding: '10px', backgroundColor: '#bbb' }}>
          <HelloWorld msg="Hello" />
        </div>
        <div style={{ border: '1px solid #999', padding: '10px', backgroundColor: '#bbb' }}>
          <Test v-model:title={this.test}></Test>
        </div>
        <div style={{ border: '1px solid #999', padding: '10px', backgroundColor: '#bbb' }}>
          <router-view></router-view>
        </div>
      </div>
    )
  }
})
