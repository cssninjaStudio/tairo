<template>
  <div class="grid md:grid-cols-2 md:max-w-lg gap-6">
    <BaseSelect shape="rounded" label="Select a hero">
      <option value="">Select a hero</option>
      <optgroup label="Marvel">
        <option value="Iron man">Iron man</option>
        <option value="Magneto">Magneto</option>
        <option value="Cyclops">Cyclops</option>
      </optgroup>
      <optgroup label="DC Comics">
        <option value="Superman">Superman</option>
        <option value="Batman">Batman</option>
      </optgroup>
    </BaseSelect>
  </div>
</template>
