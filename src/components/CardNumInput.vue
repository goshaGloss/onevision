<script lang="ts" setup>
import {useCardData} from "@/stores/cardData";

const cardData = useCardData()

</script>

<template>
  <input v-model="cardData.cardNumber" class="input card-number" maxlength="19" placeholder="**** **** **** ****"
         type="text" @input="(e) => cardData.handleCardNumber(e.target.value)"/>
</template>

<style scoped>
.card-number {
  color: var(--black-0);
}

.card-number::placeholder {
  color: var(--gray-1);
}
</style>