export default {
    state: {
      pools: [],
      farmPools: [],
    },
    mutations: {
      setPools(state, payload) {
        state.pools = payload;
      },
      setFarmPools(state, payload) {
        state.farmPools = payload;
      },
    },
    getters: {
      getPools: (state) => state.pools,
      getPoolById: (state) => (id) => {
        return state.pools.find((pool) => pool.id === id);
      },
      getFarmPools: (state) => state.farmPools,
      getFarmPoolById: (state) => (id) => {
        return state.farmPools.find((pool) => pool.id === id);
      },
    },
  };