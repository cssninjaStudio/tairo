<script setup lang="ts">
definePageMeta({
  title: 'New Doctor',
})
</script>

<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 sm:col-span-8">
      <BaseCard shape="rounded" class="p-4 md:p-8">
        <div class="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-12">
          <div class="col-span-12 text-gray-600 sm:col-span-3">
            <BaseHeading as="h2" size="lg" weight="medium">
              New Doctor
            </BaseHeading>
            <BaseText size="xs" class="text-muted-400"
              >Fill in the required fields</BaseText
            >
          </div>

          <div class="col-span-12 space-y-10 sm:col-span-9">
            <TairoFormGroup
              label="General info"
              sublabel="Some general information"
            >
              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-6">
                  <BaseInput
                    label="First name"
                    icon="ph:user-duotone"
                    placeholder="Ex: John"
                  />
                </div>

                <div class="col-span-12 md:col-span-6">
                  <BaseInput
                    label="Last name"
                    icon="ph:user-duotone"
                    placeholder="Ex: Doe"
                  />
                </div>

                <div class="col-span-12 md:col-span-6">
                  <BaseInput
                    label="Email Address"
                    icon="ph:envelope-duotone"
                    placeholder="Ex: johndoe@gmail.com"
                  />
                </div>

                <div class="col-span-12 md:col-span-6">
                  <BaseSelect label="Speciality" icon="ph:first-aid-duotone">
                    <option value=""></option>
                    <option value="Surgery">Surgery</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Pediatry">Pediatry</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Traumatology">Traumatology</option>
                  </BaseSelect>
                </div>

                <div class="col-span-12">
                  <BaseInput
                    label="Comments"
                    icon="ph:stethoscope-duotone"
                    placeholder="Ex: General Orthopedic Surgery, Foot & Ankle Surgery"
                  />
                </div>

                <div class="col-span-12 md:col-span-4">
                  <BaseSelect label="Status" icon="ph:heartbeat-duotone">
                    <option value=""></option>
                    <option value="Intern">Intern</option>
                    <option value="Resident">Resident</option>
                    <option value="Titular">Titular</option>
                  </BaseSelect>
                </div>

                <div class="col-span-12 md:col-span-4">
                  <BaseSelect label="Experience" icon="ph:trophy-duotone">
                    <option value=""></option>
                    <option value="0-5">0-5</option>
                    <option value="5-10">5-10</option>
                    <option value="10-15">10-15</option>
                    <option value="15+">15+</option>
                  </BaseSelect>
                </div>

                <div class="col-span-12 md:col-span-4">
                  <BaseSelect label="Rating" icon="ph:star-duotone">
                    <option value=""></option>
                    <option value="1">B+</option>
                    <option value="2">A</option>
                    <option value="3">A+</option>
                    <option value="4">S</option>
                    <option value="5">S+</option>
                  </BaseSelect>
                </div>
              </div>
            </TairoFormGroup>

            <TairoFormGroup
              label="Personal info"
              sublabel="Some personal information"
            >
              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12">
                  <BaseInput
                    label="Address / Street"
                    icon="ph:map-pin-duotone"
                    placeholder="Ex: App 2 suite g3 santa monica"
                  />
                </div>
                <div class="col-span-12 sm:col-span-4">
                  <BaseInput
                    label="City"
                    icon="ph:buildings-duotone"
                    placeholder="Ex: Los Angeles"
                  />
                </div>
                <div class="col-span-12 sm:col-span-4">
                  <BaseInput
                    label="State/Province"
                    icon="ph:globe-duotone"
                    placeholder="Ex: CA"
                  />
                </div>
                <div class="col-span-12 sm:col-span-4">
                  <BaseInput
                    type="number"
                    label="Zip Code"
                    icon="ph:paper-plane-tilt-duotone"
                    placeholder="Ex: 912656"
                  />
                </div>
                <div class="col-span-12">
                  <div
                    class="bg-muted-100 flex items-center gap-2 rounded-lg p-4"
                  >
                    <BaseAvatar
                      size="xs"
                      src="/img/icons/flags/united-states-of-america.svg"
                    />
                    <BaseText
                      size="sm"
                      class="text-muted-500 dark:text-muted-400"
                      >United States</BaseText
                    >
                    <div class="ms-auto">
                      <NuxtLink
                        to="#"
                        class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                        >Change</NuxtLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </TairoFormGroup>

            <div class="text-right md:col-span-5">
              <div class="-mt-4 inline-flex items-center justify-end gap-2">
                <BaseButton class="!h-12 w-full sm:w-40"> Cancel </BaseButton>
                <BaseButton
                  type="submit"
                  color="primary"
                  class="!h-12 w-full sm:w-40"
                >
                  Submit
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
    <div class="col-span-12 sm:col-span-4">
      <BaseCard class="p-8">
        <div class="mb-4 flex">
          <div class="grow">
            <BaseHeading as="h3" weight="medium">Dr. John Howland </BaseHeading>
            <BaseText size="sm" class="text-muted-400">Cleveland, OH</BaseText>
          </div>
          <div class="shrink-0">
            <BaseAvatar size="lg" src="/img/avatars/2.svg" />
          </div>
        </div>
        <div>
          <BaseHeading as="h3" size="md" weight="medium"
            >Orthopedic surgery</BaseHeading
          >
          <BaseText size="sm" class="text-muted-400">
            General Orthopedic Surgery, Foot & Ankle Surgery
          </BaseText>
        </div>
        <div
          class="divide-muted-200 dark:divide-muted-700 flex w-full items-center divide-x py-6"
        >
          <div class="xxl:pr-6 flex flex-1 flex-col gap-1 pr-4">
            <BaseHeading as="h3" size="sm" weight="medium" lead="none"
              >Resident</BaseHeading
            >
            <BaseText size="xs" class="text-muted-400"> Role status </BaseText>
          </div>
          <div class="xxl:px-6 flex flex-1 flex-col gap-1 px-4">
            <BaseHeading as="h3" size="sm" weight="medium" lead="none"
              >5-10</BaseHeading
            >
            <BaseText size="xs" class="text-muted-400">
              Years of exp.
            </BaseText>
          </div>
          <div class="xxl:pl-6 flex flex-1 flex-col gap-1 pl-4">
            <BaseHeading as="h3" size="sm" weight="medium" lead="none"
              >S+</BaseHeading
            >
            <BaseText size="xs" class="text-muted-400">
              Global rating
            </BaseText>
          </div>
        </div>
        <div>
          <div class="flex items-end justify-between">
            <div class="w-24 text-xs uppercase leading-tight">Rating</div>
            <div class="text-success-600 font-sans text-xs font-semibold">
              Excellent
            </div>
          </div>
          <div class="mt-1 flex">
            <div class="bg-success-600 h-3 grow border-x border-white"></div>
            <div class="bg-success-600 h-3 grow border-x border-white"></div>
            <div class="bg-success-600 h-3 grow border-x border-white"></div>
            <div class="bg-success-600 h-3 grow border-x border-white"></div>
            <div class="bg-success-600 h-3 grow border-x border-white"></div>
          </div>
        </div>
        <div class="text-muted-400 mt-6 flex items-center gap-2">
          <Icon name="lucide:mail" class="h-4 w-4" />
          <BaseText size="xs">johndoe@gmail.com</BaseText>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
