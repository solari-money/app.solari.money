import axios from "axios";

export default {
    state: {
        sSolariStakeObject: null,
    },
    mutations: {
        setSSolariObject(state, payload) {
            state.sSolariStakeObject = payload;
        },
    },
    actions: {
        async getTokenPrice(_, { from, to }) {
            try {
                const url = `https://min-api.cryptocompare.com/data/price?fsym={from}&tsyms={to}`;
                const response = await axios.get(url);

                return response.data;
            } catch (e) {
                console.log('getTokenPrice error: ', e);
            }
        },
    },
    getters: {
        getSSolariObject: (state) => state.sSolariStakeObject,
    },
};