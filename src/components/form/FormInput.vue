<template>
  <v-sheet class="mx-auto ma-10" width="500">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="firstNameRules"
        label="نام"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        :rules="lastNameRules"
        label="نام خانوادگی"
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block>
        ارسال
      </v-btn>
    </v-form>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    firstName: '',
    firstNameRules: [
      value => {
        if (value?.length > 3) return true

        return 'First name must be at least 3 characters.'
      },
    ],
    lastName: '',
    lastNameRules: [
      value => {
        if (/[^0-9]/.test(value)) return true

        return 'Last name can not contain digits.'
      },
    ],
  }),
}
</script>
