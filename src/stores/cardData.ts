import {computed, ref} from 'vue'
import {defineStore} from 'pinia'
import {isValidDate} from "@/utils/validateDate";
import {FieldType} from "@/types/fieldType";

export const useCardData = defineStore('cardData', () => {
    const cardNumber = ref('')
    const cardExpirationDate = ref('')
    const cvv = ref('')
    const name = ref('')

    const isExpirationDateValid = computed(() => isValidDate(cardExpirationDate.value))

    function handleCardNumber(value: string) {
        const cleanedValue = value.replace(/\D/g, '');
        const formattedValue = cleanedValue.match(/.{1,4}/g)?.join(' ');
        cardNumber.value = formattedValue ?? '';
    }

    function handleName(value: string) {
        name.value = value
    }

    function handleCardExpirationDate(value: string) {
        if (value.length > 5) return
        const cleanedValue = value.replace(/\D/g, '');
        cardExpirationDate.value = cleanedValue.match(/.{1,2}/g)?.join('/');
    }

    function handleCvv(value: string) {
        if (value.length > 3) return
        const cleanedValue = value.replace(/\D/g, '');
        cvv.value = cleanedValue
    }

    async function getFieldData() {
        const res = await fetch('src/mocks/mockCardData.json')
        const data: FieldType[] = await res.json()

        return data
    }

    return {
        cardNumber,
        handleCardNumber,
        cardExpirationDate,
        handleCardExpirationDate,
        isExpirationDateValid,
        name,
        handleName,
        cvv,
        handleCvv, getFieldData
    }
})

