<template>
    <div id="counter">
        <p>
            <span>{{ count }} => le compte est </span>
            <span v-if="count < limit"  class="inf">inférieur </span>
            <span v-else-if="count === limit" class="egal">égal </span>
            <span v-else class="sup">supérieur </span>
            <span>à {{ limit }} </span>
        </p>
        <button @click="decrement">decrementer le compteur</button>
        <button @click="increment">incrementer le compteur</button>
        <button @click="reset">reset</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      limit: 2
    };
  },
  methods: {
    decrement() {
      this.count -= 1;
    },
    increment() {
      this.count += 1;
    },
    reset() {
      this.count = 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.inf {
    color: darkorange;
}
.egal {
    color: darkblue;
}
.sup {
    color: darkgreen;
}
</style>
