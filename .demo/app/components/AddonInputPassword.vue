<script setup lang="ts">
import type { Options, OptionsType, ZxcvbnResult } from '@zxcvbn-ts/core'

type LocaleImport = typeof import('@zxcvbn-ts/language-en')

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  /**
   * The password input.
   */
  modelValue?: string
  /**
   * The user inputs to include in the calculation.
   */
  userInputs?: string[]
  /**
   * The locale to use for the feedback strings and dictionary.
   */
  locale?: () => Promise<LocaleImport> | LocaleImport
  /**
   * The radius of the input.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  /**
   * Whether the password is visible or not by default.
   */
  show?: boolean
  /**
   * The icon to show before the input.
   */
  icon?: string
  /**
   * Whether the input has been touched or not, this is used to show the feedback.
   */
  touched?: boolean
  disabled?: boolean
  error?: string

  /**
   * Customize icons used in the component.
   */
  icons?: {
    hint?: string
    reveal?: string
    hide?: string
  }
}>(), {
  modelValue: '',
  userInputs: () => [],
  locale: undefined,
  rounded: 'sm',
  icons: () => ({
    hint: 'solar:question-square-outline',
    reveal: 'solar:eye-linear',
    hide: 'solar:eye-closed-linear',
  }),
})

const emits = defineEmits<{
  'update:modelValue': [value?: string]
  'validation': [state: { validation: ZxcvbnResult | null, touched: boolean }]
  'visibility': [state: boolean]
}>()

const vmodel = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: '',
})

const showPassword = ref(props.show ?? false)

let zxcvbn: typeof import('@zxcvbn-ts/core').zxcvbnAsync
let zxcvbnOptions: Options
let options: OptionsType
let parsePending = Boolean(props.modelValue)

const inputRef = ref<any>()
const loading = ref(false)
const isTouched = ref(props.touched ?? false)
const validation = shallowRef<ZxcvbnResult | null>(null)

defineExpose({
  touched: isTouched,
  loading,
  validation,
  showPassword,
  toggleVisibility,
  inputRef,
})

function handleInput(value: string, _touched = true) {
  vmodel.value = value
  isTouched.value = _touched
}

function toggleVisibility() {
  showPassword.value = !showPassword.value
}
watch(showPassword, value => emits('visibility', value))

async function checkPassword(value: string) {
  loading.value = true

  if (!zxcvbn) {
    parsePending = true
    return
  }

  zxcvbnOptions.setOptions(options)
  validation.value = await zxcvbn(value, props.userInputs)

  // add a point for passwords that take over a century to crack
  const fastHashingCenturies = validation.value.crackTimesSeconds.offlineFastHashing1e10PerSecond > 1e9
  validation.value.score += (fastHashingCenturies ? 1 : 0)

  emits('validation', { validation: validation.value, touched: isTouched.value })
  loading.value = false
}

watchDebounced(
  [vmodel, () => props.userInputs],
  ([value]) => checkPassword(value),
  { debounce: 200, immediate: true },
)

onNuxtReady(async () => {
  const [
    { zxcvbnAsync: _zxcvbn, zxcvbnOptions: _zxcvbnOptions },
    { dictionary: dictionaryCommon, adjacencyGraphs: adjacencyGraphsCommon },
    { dictionary: dictionaryLocale, translations: translationsLocale },
  ] = await Promise.all([
    import('@zxcvbn-ts/core'),
    import('@zxcvbn-ts/language-common'),
    props.locale ? props.locale() : import('@zxcvbn-ts/language-en'),
  ])

  options = {
    useLevenshteinDistance: true,
    graphs: adjacencyGraphsCommon,
    dictionary: {
      ...dictionaryCommon,
      ...dictionaryLocale,
    },
    // locale used for feedback strings (e.g. too guessable, etc)
    translations: translationsLocale,
  } satisfies OptionsType

  zxcvbn = _zxcvbn
  zxcvbnOptions = _zxcvbnOptions

  if (parsePending) {
    parsePending = false

    if (!vmodel.value) {
      return
    }
    checkPassword(vmodel.value)
  }
})
</script>

<template>
  <div class="group/password-strength relative">
    <div
      v-if="validation?.feedback?.suggestions?.length || validation?.feedback?.warning"
      class="border-muted-200 dark:border-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 dark:bg-muted-800 pointer-events-none absolute -bottom-1  start-0 z-20 translate-y-full rounded-lg border bg-white p-6 opacity-0 shadow-xl transition-opacity duration-300 group-focus-within/password-strength:pointer-events-auto group-focus-within/password-strength:opacity-100 "
    >
      <slot
        name="help"
        v-bind="{
          touched: isTouched,
          validation,
          showPassword,
          toggleVisibility,
        }"
      >
        <ul class="flex flex-col gap-4">
          <li
            v-if="validation?.feedback?.warning"
            class="flex items-center justify-between gap-2"
          >
            <Icon
              :name="props.icons.hint"
              class="text-muted-400 dark:text-muted-500 size-4 shrink-0"
            />
            <span
              class="grow text-xs dark:text-slate-400 dark:text-slate-350 font-semibold"
            >
              {{ validation?.feedback?.warning }}
            </span>
          </li>
          <li
            v-for="suggestion in validation?.feedback?.suggestions"
            :key="suggestion"
            class="flex items-center justify-between gap-2"
          >
            <Icon
              :name="props.icons.hint"
              class="text-muted-400 dark:text-muted-500 size-4 shrink-0"
            />
            <span
              class="grow text-xs dark:text-slate-400 dark:text-slate-350 font-semibold"
            >
              {{ suggestion }}
            </span>
          </li>
        </ul>
      </slot>
    </div>
    <div
      class="group has-aria-invalid:ring-destructive-base focus-within:nui-focus rounded-md flex *:rounded-none *:border-e-0 *:first:rounded-s-md *:last:border-e *:last:rounded-e-md"
      :class="[
        props.error ? 'ring-destructive-base!' : '',
      ]"
    >
      <div
        v-if="props.icon"
        class="ps-3 border text-input-default-text/60 group-has-disabled:opacity-50 bg-input-default-bg flex items-center justify-center group-has-aria-invalid:border-destructive-base"
        :class="[
          props.error ? 'border-destructive-base' : 'border-input-default-border',
        ]"
      >
        <Icon :name="props.icon" class="size-4" />
      </div>
      <BaseInput
        ref="inputRef"
        :model-value="vmodel"
        :type="showPassword ? 'text' : 'password'"
        :disabled="props.disabled"
        :aria-invalid="props.error ? 'true' : undefined"
        :rounded="props.rounded"
        v-bind="$attrs"
        class="ring-0!"
        :class="props.icon ? 'border-s-0' : ''"
        @update:model-value="
          (value) => {
            handleInput(String(value))
          }
        "
      />
      <slot
        name="action"
        v-bind="{
          touched: isTouched,
          validation,
          showPassword,
          toggleVisibility,
        }"
      >
        <BaseTooltip disable-closing-trigger :content="props.disabled ? '' : `${showPassword ? 'Hide' : 'Show'} password`">
          <button
            class="leading-0 peer-focus-within:text-primary-500 focus-visible:nui-focus text-input-default-text/60 bg-input-default-bg border border-s-0 flex size-10 items-center justify-center text-center text-xl group-has-disabled:opacity-50 group-has-disabled:cursor-not-allowed outline-none group-has-aria-invalid:border-destructive-base"
            :class="[
              props.error ? 'border-destructive-base' : 'border-input-default-border',
            ]"
            type="button"
            tabindex="0"
            :disabled="props.disabled"
            @click.prevent="() => toggleVisibility()"
          >
            <div
              class="relative flex size-full items-center justify-center"
            >
              <Icon
                :name="
                  showPassword
                    ? props.icons.reveal
                    : props.icons.hide
                "
                class="size-4"
              />
            </div>
          </button>
        </BaseTooltip>
      </slot>
    </div>

    <slot
      v-bind="{
        touched: isTouched,
        validation,
        showPassword,
        toggleVisibility,
      }"
    >
      <div class="-mx-1 mt-2 grid grid-cols-5">
        <template v-for="x of 5" :key="x">
          <div class="px-1">
            <div
              class="h-1.5 rounded-xl transition-colors"
              :class="
                !isTouched
                  ? 'bg-muted-200 dark:bg-muted-700'
                  : (validation?.score ?? 0) >= x ? 'bg-success-500' : 'bg-destructive-500'"
            />
          </div>
        </template>
      </div>
    </slot>
  </div>
</template>
