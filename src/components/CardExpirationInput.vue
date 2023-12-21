<script lang="ts" setup>
import {useCardData} from "@/stores/cardData";

const cardData = useCardData()
</script>

<template>
  <input v-model="cardData.cardExpirationDate" :class="{'card-expiration--is-error':!cardData.isExpirationDateValid}"
         class="input card-expiration" maxlength="5" placeholder="MM/DD"
         type="text" @input="(e) => cardData.handleCardExpirationDate(e.target.value)"/>
</template>

<style scoped>
.card-expiration {
  border-bottom: 1px solid var(--gray-1);
  margin-left: 4px;
  width: 60px;
  line-height: 1;
  transition: border-bottom-color .2s ease-in-out;
}

.card-expiration--is-error {
  border-bottom-color: var(--red-0);
}
</style>