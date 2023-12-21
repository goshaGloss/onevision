<script lang="ts" setup>

import MasterCardIcon from "@/assets/icons/MasterCardIcon.vue";
import {useCardData} from "@/stores/cardData";
import {computed, onMounted, ref} from "vue";

const cardData = useCardData()

const fields = ref(undefined)

onMounted(async () => {
  try {
    const response = await cardData.getFieldData()

    fields.value = response;
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
});


const filteredFields = computed(() => {
  if (!fields.value) return []
  return fields.value.data.filter(field => field.fieldTag !== 'cvv')
})

const sortedFields = computed(() => {
  if (!filteredFields.value) return []
  const sortedArr = filteredFields.value
  return sortedArr.sort((a, b) => {
    const order = {
      "CardNumInput": 0,
      "CardExpirationInput": 1,
      "NameInput": 2
    };

    return order[a.fieldTag] - order[b.fieldTag];
  })
})
</script>

<template>
  <div class="card">
    <div class="card__row">
      <span class="icon"><MasterCardIcon/></span>
    </div>
    <div v-for="(item, index) in sortedFields" class="card__row">
      <p v-if="item.fieldTag === 'CardExpirationInput'">Expires at:</p>
      <p v-if="item.fieldTag === 'NameInput'">Full name:</p>
      <component :is="item.fieldTag" :key="index"/>
    </div>
  </div>
</template>


<style scoped>
.card {
  position: inherit;
  z-index: 2;
  border: 1px solid var(--black-0);
  background-color: var(--gray-2);
  width: 360px;
  height: 220px;
  border-radius: 7px;
  padding: 40px;
}

.card__row {
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.card__row:not(:first-child) {
  margin-top: 8px;
}
</style>