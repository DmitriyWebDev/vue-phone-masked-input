<template>
    <input :value=phone type="text" v-mask="{
      mask: '+7 (999) 999-99-99',
      placeholder:'+7 (XXX) XXX-XX-XX',
      clearMaskOnLostFocus: false,
      onBeforePaste: onBeforePaste
    }" ref="input" v-on:input="handleInputEvent" v-on:paste="handlePasteEvent"/>
</template>

<script>
import { removeNonNumericFromString } from './utils'

export default {
  name: 'PhoneMaskedInput',
  data: () => ({
    phone: '',
    pastedPhone: '',
    wasPasteEventOnInput: false,
  }),
  methods: {
    handleInputEvent: function (field) {
      const wasPasteEventOnInput = this.wasPasteEventOnInput;
      const target = field.target;
      const phoneFromInput = wasPasteEventOnInput ? this.pastedPhone : target.value;
      let validPhone = phoneFromInput;
      const phoneParts = phoneFromInput.split('(');

      if (!wasPasteEventOnInput && phoneParts.length >= 2 && phoneParts[1][0] === '8') {
        validPhone = phoneFromInput.slice(0, 3) + 'X' + phoneFromInput.slice(5);

        setTimeout(() => {
          target.setSelectionRange(4, 4)
        })
      } else {
        const numericPhoneString = removeNonNumericFromString(phoneFromInput);

        if (numericPhoneString.length >= 11) {
          validPhone = numericPhoneString.slice(1)
        }
      }

      this.phone = validPhone;
      this.wasPasteEventOnInput = false;
      this.pastedPhone = '';
    },
    handlePasteEvent: function () {
      this.wasPasteEventOnInput = true;
    },
    onBeforePaste: function (pastedValue) {
      this.pastedPhone = pastedValue;
    },
  }
}
</script>

<style scoped>

</style>
