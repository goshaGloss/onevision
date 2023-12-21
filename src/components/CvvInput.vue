<script lang="ts" setup>
import {useCardData} from "@/stores/cardData";

const cardData = useCardData()

</script>

<template>

  <label class="card-cvv__label">
    <span>cvv</span>
    <input v-model="cardData.cvv" class="input card-cvv" maxlength="3" placeholder="***"
           type="text" @input="(e) => cardData.handleCvv(e.target.value)"/>
  </label>
</template>

<style scoped>
.card-cvv__label {
  display: flex;
  flex-direction: column;
}

.card-cvv {
  color: var(--black-0);
  width: 38px;
  border-radius: 8px;
  background-color: white;
  padding: 4px;
  font-weight: 600;
}

.card-cvv::placeholder {
  color: var(--gray-1);
}
</style>