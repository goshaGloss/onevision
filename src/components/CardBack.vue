<script lang="ts" setup>
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

const cvvInput = computed(() => {
  if (!fields.value) return null

  return fields.value.data.find(field => field.fieldTag === 'cvv')
})

</script>

<template>
  <div class="card-back-side">
    <div v-if="cvvInput" class="card__row card__row--h-end">
      <component :is="cvvInput.fieldTag"/>
    </div>
  </div>
</template>

<style scoped>
.card__row {
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.card__row--h-end {
  justify-content: flex-end;
}

.card-back-side {
  border: 1px solid var(--black-0);
  background-color: var(--gray-2);
  width: 360px;
  height: 220px;
  border-radius: 7px;
  padding: 40px;
  position: absolute;
  top: 0;
  z-index: 1;
  left: 25%;
}
</style>