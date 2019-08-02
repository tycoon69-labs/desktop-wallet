<template>
  <ModalWindow
    :title="$t('MODAL_PROXY.TITLE')"
    @close="emitClose"
  >
    <form @submit.prevent="save">
      <InputText
        v-model="$v.form.host.$model"
        :is-invalid="$v.form.host.$dirty && $v.form.host.$invalid"
        :label="$t('MODAL_PEER.HOST')"
        placeholder="127.0.0.1"
        name="host"
      />

      <InputText
        v-model="$v.form.port.$model"
        :is-invalid="$v.form.port.$dirty && $v.form.port.$invalid"
        :label="$t('MODAL_PEER.PORT')"
        placeholder="8888"
        name="port"
      />

      <div
        class="flex justify-between items-center mt-4 mb-2"
      >
        <span>{{ $t('MODAL_PROXY.AUTHENTICATION') }}</span>
        <ButtonSwitch v-model="hasAuthentication" />
      </div>

      <InputText
        v-show="hasAuthentication"
        v-model="$v.form.username.$model"
        :label="$t('WALLET_DELEGATES.USERNAME')"
        name="username"
      />

      <InputPassword
        v-show="hasAuthentication"
        v-model="$v.form.password.$model"
      />

      <ButtonGeneric
        :label="$t('MODAL_PROXY.CONNECT')"
        :disabled="$v.form.$invalid"
        class="w-full mt-6"
      />
    </form>
  </ModalWindow>
</template>

<script>
import { numeric, required } from 'vuelidate/lib/validators'
import ModalWindow from '@/components/Modal'
import { InputText, InputPassword } from '@/components/Input'
import { ButtonSwitch, ButtonGeneric } from '@/components/Button'

export default {
  name: 'AppProxy',

  components: {
    ModalWindow,
    InputText,
    InputPassword,
    ButtonSwitch,
    ButtonGeneric
  },

  data: () => ({
    hasAuthentication: false,
    form: {
      host: '',
      port: '',
      username: '',
      password: ''
    }
  }),

  methods: {
    emitClose () {
      this.$emit('close')
    },

    submit () {
      // TODO
    }
  },

  validations: {
    form: {
      host: {
        required,
        isValid (value) {
          return /[a-zA-Z0-9\-_.]*[^\-.]+$/.test(value)
        }
      },
      port: {
        required,
        isNumeric (value) {
          return numeric(value)
        },
        isValid (value) {
          return parseInt(value) < 65536
        }
      },
      username: {
        // TODO
      },
      password: {
        // TODO
      }
    }
  }
}
</script>

<style>

</style>
