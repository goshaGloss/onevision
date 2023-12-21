<script lang="ts" setup>
import {useCardData} from "@/stores/cardData";

const cardData = useCardData()

</script>

<template>

  <input v-model="cardData.name" class="input card-name" placeholder="JOHN DOE"
         type="text" @input="(e) => cardData.handleName(e.target.value.toUpperCase())"/>
</template>

<style scoped>
.card-name {
  color: var(--black-0);
  line-height: 1;
  margin-left: 4px;
}

.card-name::placeholder {
  color: var(--gray-1);
}
</style>