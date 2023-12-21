<script lang="ts" setup>
import CreditCard from '@/components/CreditCard.vue'</script>

<template>
  <div class="card-form-container">
    <form class="card-form">
      <h1 class="title">Enter your credit card data</h1>
      <credit-card/>
      <button class="card-form__submit-btn" type="submit">Submit data</button>
    </form>
  </div>
</template>

<style scoped>
.card-form {
  width: 100%;
  background-color: white;
  border: 1px solid var(--gray-1);
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  padding: 40px;
  justify-content: center;
}

.card-form-container {
  height: 100vh;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-form__submit-btn {
  margin-top: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  border-width: 1px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
  cursor: pointer;
  transition: background-color 100ms;
  background-color: var(--black-0);
  color: var(--gray-2);
  height: 48px;
  padding: 7px 16px;
}
</style>