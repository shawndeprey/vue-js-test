<template>
  <div class="ui segment coin desktop">
    <div class="ui grid">
      <div class="one wide column segment__bold">{{coin.rank}}</div>
      <div class="two wide column segment__primary">
        <img :src="`http://chasing-coins.com/api/v1/std/logo/${coin.symbol}`" class="segment__crypto-logo" />
        {{coin.name}}
      </div>
      <div class="one wide column segment__bold">{{coin.symbol}}</div>
      <div class="three wide column segment__bold">{{formatCurrency(coinQuotes.market_cap)}}</div>
      <div class="two wide column segment__primary">{{formatCurrency(coinQuotes.price)}}</div>
      <div class="three wide column segment__primary">{{formatNumber(coin.circulating_supply)}} {{coin.symbol}}</div>
      <div :class="[isValuePositive(coinQuotes.percent_change_1h) ? 'segment__positive' : 'segment__negative', 'two', 'wide', 'column']">
        {{coinQuotes.percent_change_1h}}
      </div>
      <div :class="[isValuePositive(coinQuotes.percent_change_24h) ? 'segment__positive' : 'segment__negative', 'two', 'wide', 'column']">
        {{coinQuotes.percent_change_24h}}
      </div>
    </div>
  </div>
</template>

<script>
  import utils from '@/utils'
  export default {
    name: 'HomeCoinItem',
    props: {
      coin: Object,
      coinQuotes: Object
    },
    created() {
      this.formatCurrency = utils.formatCurrency;
      this.formatNumber = utils.formatNumber;
      this.isValuePositive = utils.isValuePositive;
    }
  }
</script>

<style src="@/assets/styles/home-coin-item.css">
</style>