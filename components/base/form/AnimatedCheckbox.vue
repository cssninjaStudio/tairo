<script setup lang="ts">
export interface AnimatedCheckboxEmits {
  (e: 'update:modelValue', value: (string | number)[]): void
}
export interface AnimatedCheckboxProps {
  value?: string | number
  modelValue?: (string | number)[]
}

const emit = defineEmits<AnimatedCheckboxEmits>()
const props = withDefaults(defineProps<AnimatedCheckboxProps>(), {
  value: undefined,
  modelValue: () => [],
})

const animatedCheckboxId = `animated-checkbox-${useId()}`
const element = ref<HTMLElement>()
const innerElement = ref<HTMLElement>()
const checked = computed(() => props.modelValue.includes(props.value))

const updateCheckbox = () => {
  if (element.value && innerElement.value) {
    if (checked.value) {
      element.value.classList.add('is-checked')
      innerElement.value.classList.add('is-opaque')
      setTimeout(() => {
        element.value?.classList.remove('is-unchecked')
      }, 150)
    } else {
      element.value.classList.add('is-unchecked')
      element.value.classList.remove('is-checked')
      setTimeout(() => {
        innerElement.value?.classList.remove('is-opaque')
      }, 150)
    }
  }
}

function change() {
  const values = [...props.modelValue]

  if (checked.value) {
    values.splice(values.indexOf(props.value), 1)
  } else {
    values.push(props.value)
  }
  emit('update:modelValue', values)
}

watchEffect(updateCheckbox)
</script>

<template>
  <div ref="element" class="block ninja-focus focus-within:outline-current">
    <input
      :id="animatedCheckboxId"
      type="checkbox"
      :checked="checked"
      :value="props.value"
      v-bind="$attrs"
      @change="change"
    />
    <label :for="animatedCheckboxId">
      <div ref="innerElement"></div>
      <IconCheckCircle />
    </label>
  </div>
</template>

<style>
:root {
  --animated-checkbox-border: #cfcfcf;
}

.dark {
  --animated-checkbox-border: #3c4c69;
}
</style>

<style scoped>
.block {
  position: relative;
  height: 32px;
  width: 32px;
  border-radius: 50%;
}

.block input {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
}

.block label {
  position: relative;
  height: 32px;
  width: 32px;
}

.block label > div {
  position: absolute;
  top: 0;
  left: 0;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid var(--animated-checkbox-border);
  z-index: 0;
  opacity: 1;
  transition: all 0.2s;
}

.block label > div.is-opaque {
  opacity: 0;
}

.block label:deep(svg circle) {
  height: 32px;
  width: 32px;
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: currentColor;
  fill: none;
}

.block label:deep(svg) {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  color: currentColor;
  stroke: currentColor;
  stroke-miterlimit: 10;
  margin: 0 auto;
  box-shadow: inset 0 0 0 currentColor;
}

.block label:deep(svg path) {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  stroke: currentColor;
}

.block.is-checked label:deep(svg circle) {
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) both;
}

.block.is-checked label:deep(svg path) {
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s both;
}

.block.is-unchecked label:deep(svg circle) {
  animation: reverseCircle 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0.2s both;
}

.block.is-unchecked label:deep(svg path) {
  animation: reverseCheck 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.1s both;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes reverseCircle {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: 166;
  }
}

@keyframes reverseCheck {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: 48;
  }
}
</style>
