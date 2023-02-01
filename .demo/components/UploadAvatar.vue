<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import FileUpload from 'vue-upload-component'

export default {
  components: {
    FileUpload,
  },
  data() {
    return {
      files: [],
      edit: false,
      cropper: false,
    }
  },
  watch: {
    edit(value) {
      if (value) {
        this.$nextTick(function () {
          if (!this.$refs.editImage) {
            return
          }
          let cropper = new Cropper(this.$refs.editImage, {
            aspectRatio: 1 / 1,
            viewMode: 1,
          })
          this.cropper = cropper
        })
      } else {
        if (this.cropper) {
          this.cropper.destroy()
          this.cropper = false
        }
      }
    },
  },
  methods: {
    editSave() {
      this.edit = false
      let oldFile = this.files[0]
      let binStr = atob(
        this.cropper.getCroppedCanvas().toDataURL(oldFile.type).split(',')[1],
      )
      let arr = new Uint8Array(binStr.length)
      for (let i = 0; i < binStr.length; i++) {
        arr[i] = binStr.charCodeAt(i)
      }
      let file = new File([arr], oldFile.name, { type: oldFile.type })
      this.$refs.upload.update(oldFile.id, {
        file,
        type: file.type,
        size: file.size,
        active: true,
      })
    },
    alert(message) {
      alert(message)
    },
    inputFile(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        this.$nextTick(function () {
          this.edit = true
        })
      }
      if (!newFile && oldFile) {
        this.edit = false
      }
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (!/\.(gif|jpg|jpeg|png|webp)$/i.test(newFile.name)) {
          this.alert('Your choice is not a picture')
          return prevent()
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        newFile.url = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.url = URL.createObjectURL(newFile.file)
        }
      }
    },
  },
}
</script>

<template>
  <div class="relative">
    <div v-show="!edit">
      <div class="flex items-center justify-center">
        <label class="flex items-center justify-center relative" for="avatar">
          <img
            :src="
              files.length ? files[0].url : '/img/avatars/placeholder-file.png'
            "
            class="h-20 w-20 rounded-full mx-auto"
            width="80"
            height="80"
          />
          <span
            class="absolute bottom-0 right-0 h-8 w-8 flex items-center justify-center rounded-full border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800 cursor-pointer hover:border-primary-500 text-muted-400 hover:text-primary-500 hover:shadow-xl hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 transition-all duration-300"
          >
            <file-upload
              extensions="gif,jpg,jpeg,png,webp"
              accept="image/png,image/gif,image/jpeg,image/webp"
              name="avatar"
              class="relative -top-0.5 flex items-center justify-center cursor-pointer"
              post-action="/upload/post"
              :drop="!edit"
              v-model="files"
              @input-filter="inputFilter"
              @input-file="inputFile"
              ref="upload"
            >
              <Icon name="lucide:plus" class="w-4 h-4" />
            </file-upload>
          </span>
        </label>
      </div>
    </div>

    <BaseCard
      class="!absolute -top-8 inset-x-0 z-10 max-w-[304px] mx-auto p-3 shadow-xl shadow-muted-300 dark:shadow-muted-800/30"
      v-show="files.length && edit"
    >
      <div class="relative max-w-[280px]" v-if="files.length">
        <img ref="editImage" :src="files[0].url" />
      </div>
      <div class="flex justify-between gap-2 pt-3">
        <button
          type="button"
          class="w-full h-10 inline-flex items-center justify-center px-4 rounded-lg border border-muted-200 dark:border-muted-600 bg-white dark:bg-muted-700"
          @click.prevent="$refs.upload.clear"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="w-full h-10 inline-flex items-center justify-center px-4 rounded-lg bg-primary-600 text-white"
          @click.prevent="editSave"
        >
          Save
        </button>
      </div>
    </BaseCard>
  </div>
</template>

<style>
.cropper-view-box {
  box-shadow: 0 0 0 1px #39f;
  border-radius: 50%;
  outline: 0;
}
.cropper-face {
  background-color: inherit !important;
}
.cropper-view-box {
  outline: inherit !important;
}
</style>
