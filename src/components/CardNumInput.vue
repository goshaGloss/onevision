<script lang="ts" setup>
import {useCardData} from "@/stores/cardData";
import {computed} from "vue";

const cardData = useCardData()
const value = computed({
  get() {
    return cardData.cardNumber
  },
  set(val:string) {
    cardData.handleCardNumber(val)
  }
})

</script>

<template>
  <input v-model="value" class="input card-number" maxlength="19" placeholder="**** **** **** ****"
         type="text"/>
</template>

<style scoped>
.card-number {
  color: var(--black-0);
}

.card-number::placeholder {
  color: var(--gray-1);
}
</style>