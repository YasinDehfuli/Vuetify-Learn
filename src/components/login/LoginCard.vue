<script>
export default {
  data: () => ({
    firstName: '',
    rules: [
      value => {
        if (value) return true

        return 'فرمت وارد شده درست نمیباشد'
      },
    ],
  }),
}
</script>

<template>
  <v-card
    class="mx-auto my-8 rounded-xl bg-black"
    border="opacity-50 sm"
    elevation="16"
    max-width="344"
  >
    <img src="../../../src/assets/img/logo.svg" class="ma-5" width="50" alt="">
    <v-card-item>
      <v-card-title>
          ورود
      </v-card-title>

      <v-card-subtitle >
        برای ادامه شماره موبایل خود را وارد کنید.
      </v-card-subtitle>
    </v-card-item>



        <v-form @submit.prevent class="ma-5 bg-black" border="opacity-50 sm">
          <v-text-field
            v-model="firstName"
            :rules="rules"
            label="شماره موبایل"
          ></v-text-field>

          <v-btn variant="flat" block color="blue" class="text-black font-weight-medium mt-10 rounded-lg pa-6">
            تایید
          </v-btn>
        </v-form>




  </v-card>
</template>
<style scoped>
</style>
