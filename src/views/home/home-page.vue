<template>
  <div class="home">
    <div class="ui grid">
      <div class="sixteen wide column coin-market">
        <div class="ui three column grid">
          <div class="column">
            <div class="ui segment banner">
              Market Cap: {{formatCurrency(totalMarketCap)}}
            </div>
          </div>
          <div class="column">
            <div class="ui segment banner">
              Volume (24hr): {{formatCurrency(total24HrVolume)}}
            </div>
          </div>
          <div class="column">
            <div class="ui segment banner">
              BTC Dominance: {{totalBTCPercentage}}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import utils from '@/utils';

  export default {
    name: 'HomePage',
    created() {
      this.formatCurrency = utils.formatCurrency;
    },
    computed: {
      totalMarketCap() { return this.$store.getters.totalMarketCap },
      total24HrVolume() { return this.$store.getters.total24HrVolume },
      totalBTCPercentage() { return this.$store.getters.totalBTCPercentage }
    }
  }
</script>

<style src="@/assets/styles/home-page.css">
</style>