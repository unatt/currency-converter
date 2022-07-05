<template>
  <main>
    <div class="location">
      <h3>Your current location:</h3>
      <p>{{ country }}</p>
    </div>
    <div class="converter" v-if="rates">
      <CurrencyInput
        :amount="baseAmount"
        :currency="baseCurrency"
        @changeCurrency="changeBaseCurrency"
        @changeAmount="changeBaseAmount"
        :currencies="currencyList"
      />
      <CurrencyInput
        :amount="convertionAmount"
        :currency="convertionCurrency"
        @changeCurrency="changeConvertionCurrency"
        @changeAmount="changeConvertionAmount"
        :currencies="currencyList"
      />
    </div>
    <div v-else>Loading convertion rates...</div>
  </main>
</template>

<script>
import CurrencyInput from "./components/CurrencyInput.vue";
import { getCurrencyDetailsByLocale } from "./utils/currencyByLocale.js";
import { COUNTRY_EMOJIS } from "./assets/funEmojiCountries.js";

const DEFAULT_BASE = "RUB";
const DEFAULT_COUNTRY = "Russia";
const DEFAULT_CONVERTION = "EUR";

const format = (number) => {
  return number.toFixed(4);
};

export default {
  name: "App",
  components: { CurrencyInput },
  data() {
    return {
      baseAmount: 100,
      baseCurrency: DEFAULT_BASE,
      convertionAmount: null,
      convertionCurrency: DEFAULT_CONVERTION,
      rates: null,
      country: "",
      flag: null,
    };
  },
  computed: {
    currencyList: function () {
      return Object.keys(this.rates);
    },
  },
  methods: {
    changeBaseAmount(newBaseAmount) {
      this.baseAmount = newBaseAmount;
      this.convertionAmount = format(
        newBaseAmount *
          (this.rates[this.convertionCurrency] / this.rates[this.baseCurrency])
      );
    },
    changeBaseCurrency(newBaseCurrency) {
      this.baseCurrency = newBaseCurrency;
      this.convertionAmount = format(
        (this.rates[this.convertionCurrency] / this.rates[newBaseCurrency]) *
          this.baseAmount
      );
    },
    changeConvertionAmount(newConvertionAmount) {
      this.convertionAmount = newConvertionAmount;
      this.baseAmount = format(
        (this.rates[this.baseCurrency] / this.rates[this.convertionCurrency]) *
          newConvertionAmount
      );
    },
    changeConvertionCurrency(newConvertionCurrency) {
      this.convertionCurrency = newConvertionCurrency;
      this.baseAmount = format(
        (this.rates[this.baseCurrency] / this.rates[newConvertionCurrency]) *
          this.convertionAmount
      );
    },
  },
  mounted() {
    // API to fetch currency rates

    const fetchRates = async (base) => {
      const response = await fetch(
        `https://api.exchangerate.host/latest?base=${base}`
      );
      const data = await response.json();
      return data.rates;
    };

    // browser language is used to detect client currency and country

    const getBaseLocation = () => {
      const location = getCurrencyDetailsByLocale(navigator.languages[0]) ?? {
        code: DEFAULT_BASE,
        countryName: DEFAULT_COUNTRY,
      };

      return {
        currency: location.code,
        country: location.countryName.split(",")[0],
      };
    };

    const initialConvertionSetup = async () => {
      const location = getBaseLocation();
      this.baseCurrency = location.currency;
      this.country = COUNTRY_EMOJIS[location.country] ?? location.country; // had some fun showing emoji instead of country
      this.rates = await fetchRates(this.baseCurrency);
      this.convertionAmount = format(
        (this.rates[this.convertionCurrency] / this.rates[this.baseCurrency]) *
          this.baseAmount
      );
    };

    initialConvertionSetup();
  },
};
</script>

<style lang='scss'>
#app {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

main {
  width: 500px;
  background: $card-background;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .location {
    margin: 1.5rem 0;
    text-align: center;
    h3 {
      margin-bottom: 10px;
    }
  }

  .converter {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: $mobile) {
    width: 100%;
    .converter {
      width: 95%;
    }
  }
}
</style>
