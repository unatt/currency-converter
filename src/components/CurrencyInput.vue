<template>
  <div class="input-group">
    <div class="amount">
      <input type="number" v-model="amount" @input="amountChangeHandler" />
    </div>
    <div class="currency">
      <select v-model="currency" @change="currencyChangeHandler">
        <option v-for="cur in currencies" :key="cur" :value="cur">
          {{ cur }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ["amount", "currency", "currencies"],
  emits: ["changeAmount", "changeCurrency"],
  data() {
    return {};
  },
  methods: {
    amountChangeHandler() {
      this.$emit("changeAmount", this.amount);
    },
    currencyChangeHandler() {
      this.$emit("changeCurrency", this.currency);
    },
  },
};
</script>

<style lang='scss'>
.input-group {
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background: $main-bg;
  margin: 1rem;
  @media screen and (max-width: $mobile) {
    margin-bottom: 2.5rem;
  }
}

input,
select {
  font-size: 1.1rem;
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
  padding: 10px 20px 10px 15px;
  background: none;
  border: 0;
  color: $main-color;
  &:focus {
    outline: none;
  }
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select::-webkit-scrollbar {
  display: none;
}

.currency {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: "";
    position: relative;
    right: 20px;
    width: 0.8em;
    height: 0.5em;
    background-color: $main-color;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
}


/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>