import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numeros: function (state, action) {
        console.log('> Reducers de numeros...')
        console.log(state, ' ', action);

        switch (action.type) {
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                }
            case 'NUM_MAX_ALTERADO':
                return {
                    ...state,
                    max: action.payload
                }
            default:
                return {
                    min: 1,
                    max: 31
                }
        }
    },
    nomes: function (state, action) {
        console.log('> Reducers de nomes...')
        console.log(state, ' ', action);

        return [
            'Gabriel', 'Maxuel', 'Marcos'
        ]
    }
})

export default function storeConfig() {
    return createStore(reducers)
}