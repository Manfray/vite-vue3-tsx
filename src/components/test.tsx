import { Button } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'
import '../style/test.less'

export default defineComponent({
  setup() {
    let name = ref('tom')
    let age = ref(18)
    setTimeout(() => {
      age.value = 19
    }, 2000);
    return () =>
      <>
        {/* 写一个 hello world */}
        <div class='test'>hello {name.value}, you are {age.value} years old now</div>
        <Button>点击</Button>
      </>
  }
})
