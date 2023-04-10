import { createStore } from 'vuex';
import { reactive } from 'vue';


export default reactive(createStore({

	state: {
		cart: new Object(),
		currentID: new Number(),
		totalPrice: new Number(),

		selectedCard: {
			name: new String(),
			size: new String(),
			price: new String()
		},

		selectedOptions: new Object(),
		selectedAmount: new Number(),
	},


	getters: {

	},


	mutations: {
		SET_SELECTED_CARD(state, payload) {
			state.selectedCard = payload;
		},

		CLEAR_SELECTED(state) {
			state.selectedCard = {
				name: new String(),
				size: new String(),
				price: new String()
			};
			state.selectedOptions = new Object(),
			state.selectedAmount = new Number()
		},

		ADD_OPTION(state, payload) {
			state.selectedOptions[payload.name] = {
				price: payload.price,
				amount: payload.amount
			};
		},

		REMOVE_OPTION(state, payload) {
			delete state.selectedOptions[payload];
		},

		ADD_TO_CART(state, payload) {
			payload['options'] = state.selectedOptions;
			state.cart[state.currentID] = payload;
			state.currentID++;
			// console.log(state.cart);
		}
	},


	actions: {
		setSelectedCard(context, payload) {
			context.commit('SET_SELECTED_CARD', payload);
		},

		clearSelected(context) {
			context.commit('CLEAR_SELECTED');
		},

		addOption(context, payload) {
			context.commit('ADD_OPTION', payload);
		},

		removeOption(context, payload) {
			context.commit('REMOVE_OPTION', payload);
		},

		addToCart(context, payload) {
			context.commit('ADD_TO_CART', payload);
		}
	},


	modules: {

	}

}));