<template>
    <div id="swipecard">
		<GameCardsStack
			:cards="visibleCards"
			@cardAccepted="handleCardAccepted"
			@cardRejected="handleCardRejected"
			@cardSkipped="handleCardSkipped"
			@hideCard="removeCardFromDeck"
		/>
  </div>
</template>

<script>
import GameCardsStack from "../components/GameCard/GameCardsStack.vue";

export default {
    name: 'SwipeCard',

    components: {
        GameCardsStack
    },
    data() {
        return {
            visibleCards: ["Ciss", "LeadFinder", "Apus"]
        };
    },
    methods: {
        handleCardAccepted() {
        console.log("handleCardAccepted");
        },
        handleCardRejected() {
        console.log("handleCardRejected");
        },
        handleCardSkipped() {
        console.log("handleCardSkipped");
        },
        removeCardFromDeck() {
        this.visibleCards.shift();
        }
    }
}
</script>

<style lang="scss">
    @import "../assets/scss/mixin.scss";

    #swipecard{
        text-align: center;
    }
</style>