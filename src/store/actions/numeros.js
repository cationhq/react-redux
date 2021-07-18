// Action Creator
export const alterarNumeroMinimo = (novoNumero) => ({
    type: 'NUM_MIN_ALTERADO',
    payload: novoNumero
})

// Action Creator
export const alterarNumeroMaximo = (novoNumero) => ({
    type: 'NUM_MAX_ALTERADO',
    payload: novoNumero
})
