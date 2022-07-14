import { defineComponent, ref } from 'vue'
import '../style/test.less'

export default defineComponent({
  setup() {
    let name = ref('tom')
    let age = ref(18)
    setTimeout(() => {
      age.value = 19
    }, 2000);
    return () => <div class='test'>hello {name.value}, you are {age.value} years old now.</div> //写一个 hello world
  }
})
