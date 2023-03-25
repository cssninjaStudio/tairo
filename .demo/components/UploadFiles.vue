<script>
import FileUpload from 'vue-upload-component'
import Compressor from 'compressorjs'

export default {
  components: {
    FileUpload,
  },
  data() {
    return {
      files: [],
    }
  },
  methods: {
    inputFile(newFile, oldFile) {
      if (newFile && oldFile) {
        // update
        if (newFile.active && !oldFile.active) {
          // beforeSend
          // min size
          if (
            newFile.size >= 0 &&
            this.minSize > 0 &&
            newFile.size < this.minSize &&
            newFile.type !== 'text/directory'
          ) {
            this.$refs.upload.update(newFile, { error: 'size' })
          }
        }
        if (newFile.progress !== oldFile.progress) {
          // progress
        }
        if (newFile.error && !oldFile.error) {
          // error
        }
        if (newFile.success && !oldFile.success) {
          // success
        }
      }
      if (!newFile && oldFile) {
        // remove
        if (oldFile.success && oldFile.response.id) {
          // $.ajax({
          //   type: 'DELETE',
          //   url: '/upload/delete?id=' + oldFile.response.id,
          // })
        }
      }
      // Automatically activate upload
      if (
        Boolean(newFile) !== Boolean(oldFile) ||
        oldFile.error !== newFile.error
      ) {
        if (this.uploadAuto && !this.$refs.upload.active) {
          this.$refs.upload.active = true
        }
      }
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前
        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }
        // Filter php html js file
        // 过滤 php html js 文件
        if (
          /\.(php5?|html?|jsx?)$/i.test(newFile.name) &&
          newFile.type !== 'text/directory'
        ) {
          return prevent()
        }
        // Automatic compression
        // 自动压缩
        if (
          newFile.file &&
          newFile.error === '' &&
          newFile.type.substr(0, 6) === 'image/' &&
          this.autoCompress > 0 &&
          this.autoCompress < newFile.size
        ) {
          newFile.error = 'compressing'
          const imageCompressor = new Compressor(null, {
            convertSize: 1024 * 1024,
            maxWidth: 512,
            maxHeight: 512,
          })
          imageCompressor
            .compress(newFile.file)
            .then((file) => {
              this.$refs.upload.update(newFile, {
                error: '',
                file,
                size: file.size,
                type: file.type,
              })
            })
            .catch((err) => {
              this.$refs.upload.update(newFile, {
                error: err.message || 'compress',
              })
            })
        }
      }
      if (
        newFile &&
        newFile.error === '' &&
        newFile.file &&
        (!oldFile || newFile.file !== oldFile.file)
      ) {
        // Create a blob field
        // 创建 blob 字段
        newFile.blob = ''
        let URL = window.URL || window.webkitURL
        if (URL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }
        // Thumbnails
        // 缩略图
        newFile.thumb = ''
        if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
          newFile.thumb = newFile.blob
        }
      }
      // image size
      // image 尺寸
      if (
        newFile &&
        newFile.error === '' &&
        newFile.type.substr(0, 6) === 'image/' &&
        newFile.blob &&
        (!oldFile || newFile.blob !== oldFile.blob)
      ) {
        newFile.error = 'image parsing'
        let img = new Image()
        img.onload = () => {
          this.$refs.upload.update(newFile, {
            error: '',
            height: img.height,
            width: img.width,
          })
        }
        img.οnerrοr = (e) => {
          this.$refs.upload.update(newFile, { error: 'parsing image size' })
        }
        img.src = newFile.blob
      }
    },
  },
}
</script>

<template>
  <div class="relative example-drag max-w-3xl mx-auto">
    <div class="upload">
      <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
        <h3>Drop files to upload</h3>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-2 mb-4">
        <file-upload
          class="relative h-10 w-10 flex items-center justify-center border border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 bg-white dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 rounded-full cursor-pointer transition-colors duration-300"
          post-action="/upload/post"
          :multiple="true"
          :drop="true"
          :drop-directory="true"
          @input-filter="inputFilter"
          @input-file="inputFile"
          v-model="files"
          ref="upload"
          data-tooltip="Select files"
        >
          <Icon
            name="lucide:plus"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4"
          />
          <span class="sr-only">Select files</span>
        </file-upload>
        <button
          v-if="!$refs.upload || !$refs.upload.active"
          type="button"
          class="relative h-10 w-10 flex items-center justify-center border border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 bg-white dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 rounded-full cursor-pointer transition-colors duration-300"
          data-tooltip="Start Upload"
          @click.prevent="$refs.upload.active = true"
        >
          <Icon name="lucide:arrow-up" class="w-4 h-4" />

          <span class="sr-only">Start Upload</span>
        </button>
        <button
          v-else
          type="button"
          class="relative h-10 w-10 flex items-center justify-center border border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 bg-white dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 rounded-full cursor-pointer transition-colors duration-300"
          data-tooltip="Stop Upload"
          @click.prevent="$refs.upload.active = false"
        >
          <Icon name="lucide:pause" class="w-4 h-4" />
          <span class="sr-only">Stop Upload</span>
        </button>
      </div>
      <!-- Uploaded files -->
      <ul v-if="files.length" class="mt-6 space-y-2">
        <li v-for="file in files" :key="file.id">
          <div
            class="relative flex items-center gap-2 p-3 rounded-xl border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800"
          >
            <div class="flex items-center gap-2">
              <div class="shrink-0">
                <img
                  class="w-14 h-14 object-cover object-center rounded-xl"
                  v-if="file.thumb"
                  :src="file.thumb"
                  alt="Image preview"
                />
                <img
                  v-else
                  class="w-14 h-14 object-cover object-center rounded-xl"
                  src="/img/avatars/placeholder-file.png"
                  alt="Image preview"
                />
              </div>
              <div class="font-sans">
                <span
                  class="block text-sm line-clamp-1 text-muted-800 dark:text-muted-100"
                >
                  {{ file.name }}
                </span>
                <span class="block text-xs text-muted-400">
                  {{ formatFileSize(file.size) }}
                </span>
              </div>
            </div>
            <div class="w-40 flex items-center justify-center">
              <div v-if="file.error">
                <BaseTag color="danger" shape="full" condensed>
                  {{ file.error }}
                </BaseTag>
              </div>
              <div v-else-if="file.success">
                <BaseTag color="success" shape="full" condensed>
                  Success
                </BaseTag>
              </div>
              <div v-else-if="file.active">
                <BaseTag color="info" shape="full" condensed>Active</BaseTag>
              </div>
              <div v-else></div>
            </div>
            <div
              class="px-4 w-32 transition-opacity duration-300"
              :class="file.progress !== 0 ? 'opacity-100' : 'opacity-0'"
            >
              <BaseProgress
                :value="Number(file.progress)"
                size="xs"
                :color="file.error ? 'danger' : 'success'"
              />
            </div>
            <div class="ml-auto flex gap-2">
              <a
                class="relative h-8 w-8 flex items-center justify-center border border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 bg-white dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 rounded-full cursor-pointer transition-colors duration-300"
                :disabled="!file.active"
                href="#"
                data-tooltip="Cancel"
                @click.prevent="
                  file.active
                    ? $refs.upload.update(file, { error: 'cancel' })
                    : false
                "
              >
                <Icon name="lucide:slash" class="w-4 h-4" />
                <span class="sr-only">Cancel</span>
              </a>

              <a
                class="relative h-8 w-8 flex items-center justify-center border border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 bg-white dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 rounded-full cursor-pointer transition-colors duration-300"
                href="#"
                data-tooltip="Abort"
                v-if="file.active"
                @click.prevent="$refs.upload.update(file, { active: false })"
              >
                <Icon name="lucide:slash" class="w-4 h-4" />
                <span class="sr-only">Abort</span>
              </a>
              <a
                class="relative h-8 w-8 flex items-center justify-center border border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 bg-white dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 rounded-full cursor-pointer transition-colors duration-300"
                href="#"
                data-tooltip="Retry"
                v-else-if="
                  file.error &&
                  file.error !== 'compressing' &&
                  file.error !== 'image parsing' &&
                  $refs.upload.features.html5
                "
                @click.prevent="
                  $refs.upload.update(file, {
                    active: true,
                    error: '',
                    progress: '0.00',
                  })
                "
              >
                <Icon name="lucide:rotate-ccw" class="w-4 h-4" />
                <span class="sr-only">Retry</span>
              </a>
              <a
                class="relative h-8 w-8 flex items-center justify-center border border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 bg-white dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 rounded-full cursor-pointer transition-colors duration-300"
                :disabled="
                  file.success ||
                  file.error === 'compressing' ||
                  file.error === 'image parsing'
                "
                href="#"
                data-tooltip="Upload"
                v-else
                @click.prevent="
                  file.success ||
                  file.error === 'compressing' ||
                  file.error === 'image parsing'
                    ? false
                    : $refs.upload.update(file, { active: true })
                "
              >
                <Icon name="lucide:arrow-up" class="w-4 h-4" />
                <span class="sr-only">Upload</span>
              </a>
              <a
                class="relative h-8 w-8 flex items-center justify-center border border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 bg-white dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 rounded-full cursor-pointer transition-colors duration-300"
                href="#"
                data-tooltip="Remove"
                @click.prevent="$refs.upload.remove(file)"
              >
                <Icon name="lucide:x" class="w-4 h-4" />
                <span class="sr-only">Remove</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <!-- Drop zone -->
      <div class="group cursor-pointer" v-else>
        <div
          class="p-8 border-[3px] rounded-lg border-dashed border-muted-300 dark:border-muted-800 group-hover:border-muted-400 dark:group-hover:border-muted-700 transition-colors duration-300"
        >
          <div class="text-center p-5">
            <Icon
              name="mdi-light:cloud-upload"
              class="h-12 w-12 mb-2 text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
            />
            <h4 class="font-sans text-base text-muted-400">
              Drop files to upload
            </h4>
            <div>
              <span
                class="font-sans font-semibold text-xs uppercase text-muted-400"
              >
                Or
              </span>
            </div>
            <label
              for="file"
              class="font-sans text-base underline underline-offset-4 text-muted-400 hover:text-primary-500 transition-colors duration-300 cursor-pointer"
            >
              Select files
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.example-drag label.btn {
  margin-bottom: 0;
  margin-right: 1rem;
}
.example-drag .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: 0.6;
  text-align: center;
  background: #000;
}
.example-drag .drop-active h3 {
  margin: -0.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}
</style>
