const state = {
  totalMarketCap: 0,
  total24HrVolume: 0,
  totalBTCPercentage: 0
};
const getters = {
  totalMarketCap: state => state.totalMarketCap,
  total24HrVolume: state => state.total24HrVolume,
  totalBTCPercentage: state => state.totalBTCPercentage
};
const mutations = {
};
const actions = {
};

export default {
  state,
  getters,
  mutations,
  actions
}