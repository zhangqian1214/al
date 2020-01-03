<template>
  <div class="richT">
    换一个功能强大一点的富文本
    <editor id="tinymce" v-model="value" :init="init"></editor>
  </div>
</template>

<script>
import bus from '@/bus'

import tinymce from "tinymce/tinymce"; //tinymce默认hidden，不引入不显示
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import 'tinymce/plugins/image' // 插入上传图片插件
import 'tinymce/plugins/media' // 插入视频插件
import 'tinymce/plugins/table' // 插入表格插件
import 'tinymce/plugins/lists' // 列表插件
import 'tinymce/plugins/wordcount' // 字数统计插件
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/directionality'
import 'tinymce/plugins/emoticons' //表情，还报错
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/importcss'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/noneditable'
import 'tinymce/plugins/pagebreak'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/print'
import 'tinymce/plugins/save'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/spellchecker'
import 'tinymce/plugins/tabfocus'
import 'tinymce/plugins/template'
import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/textpattern'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/visualchars'
import 'tinymce/plugins/autosave'

export default {
  name: "richText2",
  components: { Editor },
  data() {
    return {
      value: "",
      init: {
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        // skin_url: 'tinymce/skins/ui/oxide-dark',//暗色系
        height: 400,
        width:800,
        plugins: ['visualchars visualblocks image textpattern textcolor template tabfocus spellchecker searchreplace save print preview paste pagebreak noneditable nonbreaking insertdatetime importcss  media table lists wordcount link code contextmenu colorpicker textcolor advlist anchor autolink autosave codesample directionality emoticons fullscreen hr imagetools'],
        emoticons_database_url: '/tinymce/emojis.min.js',
        toolbar: ['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent fontsizeselect  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen'],
        // plugins: this.plugins,
        // toolbar: this.toolbar, //
        branding: false,
        menubar: true //顶部快捷栏是否弹出
      }
    };
  },
  created(){
    bus.$emit('yc', false)
  },
  beforeDestroy(){
    bus.$emit('yc', true)
  },
  mounted() { tinymce.init({}) }
}
</script> 

<style lang="less">
.richT {
  margin: 0 auto;
  width: 700px;
  height: 200px;
}
</style>
 