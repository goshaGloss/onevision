<script lang="ts" setup>
import {useCardData} from "@/stores/cardData";
import {computed} from "vue";

const cardData = useCardData()
const value = computed({
  get() {
    return cardData.name
  },
  set(val:string) {
    cardData.handleName(val.toUpperCase())
  }
})
</script>

<template>

  <input v-model="value" class="input card-name" placeholder="JOHN DOE"
         type="text" />
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