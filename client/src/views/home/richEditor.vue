<template>
  <div id="rich_editor">
    <quill-editor></quill-editor>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'richEditor',
  components: {
    quillEditor
  }
}
</script>

<style lang="scss">
#rich_editor {
  .ql-container {
    min-height: 500px;
  }
}
</style>
