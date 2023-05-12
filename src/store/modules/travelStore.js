import { getTravelListByUserId, getZzimTravelListByUserId } from "@/apis/travel";

const travelStore = {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		getZzimTravelListByUserId({ commit }, userId) {
			return getZzimTravelListByUserId(userId);
		},

		getTravelListByUserId({ commit }, userId) {
			return getTravelListByUserId(userId);
		},
	},
};

export default travelStore;
