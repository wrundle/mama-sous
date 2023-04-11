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

		modal: {
			type: new String(),
			params: new Object()
		},

		promo: new Object(),
		promoCount: 2,

		delivery: true
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
		},

		CLEAR_CART(state) {
			state.cart = new Object();
		},

		CHANGE_AMOUNT(state, payload) {
			state.cart[payload.id].amount + payload.value == 0
			? delete state.cart[payload.id]
			: state.cart[payload.id].amount += payload.value;
		},

		SET_DELIVERY(state, payload) {
			state.delivery = payload;
		},

		OPEN_MODAL(state, payload) {
			document.body.classList.add('overflow-hidden');
			state.modal = {
				type: payload.type,
				params: payload.params
			};
		},

		CLOSE_MODAL(state) {
			document.body.classList.remove('overflow-hidden');
			state.modal = {
				type: new String(),
				params: new Object()
			};
		},

		SET_PROMO(state, payload) {
			state.promo = payload;
		},
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
		},

		clearCart(context) {
			context.commit('CLEAR_CART');
		},

		changeAmount(context, payload) {
			context.commit('CHANGE_AMOUNT', payload);
		},

		setDelivery(context, payload) {
			context.commit('SET_DELIVERY', payload);
		},

		openModal(context, payload) {
			context.commit('OPEN_MODAL', payload);
		},

		closeModal(context) {
			context.commit('CLOSE_MODAL');
		},

		setPromo(context, payload) {
			context.commit('SET_PROMO', payload);
		}
	},


	modules: {

	}

}));
