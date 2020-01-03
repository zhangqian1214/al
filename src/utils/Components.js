// 封装一个vue插件
// 作用：注册所有组件为全局组件
// vue插件定义的规则：
import child3 from '@/child3/index'
import child2 from '@/child2/index'
import child1 from '@/child1/index'
import richText from '@/richText/index'
import richText2 from '@/richText2/index'
import echarts from '@/chart/index'
import chart1 from '@/chart/chart1/index'
import chart2 from '@/chart/chart2/index'

export default { // 1.暴露(导出)一个对象{}
  install (Vue) { // 2.在对象中选项install
    // 3.对应一个函数 函数形参 vue对象
    Vue.component(child3.name, child3) // 使用的组件名，组件
    Vue.component(child2.name, child2) // 这样就是全局的了
    Vue.component(child1.name, child1)
    Vue.component(richText.name, richText)
    Vue.component(richText2.name, richText2)//富文本2
    Vue.component(chart1.name, chart1)
    Vue.component(chart2.name, chart2)
  }
}
