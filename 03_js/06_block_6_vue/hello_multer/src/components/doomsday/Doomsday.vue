<template lang="html">
  <div id="doomsday">
    <h2>CodeCombat in ...</h2>
    <span id="date"> {{ doomsday }}</span>
    <p>getReady()</p>
  </div>
</template>

<script>
import moment from "moment";

import countdown from "moment-countdown";

export default {
  data() {
    return {
      doomsday: null,
      limit: "2019-01-15",
    }
  },
  methods: {
    getDate() {
      return moment().countdown(this.limit).toString();
    }
  },
  mounted() {
    const vm = this;
    this.doomsday = this.getDate();
    setInterval(() => {
      vm.doomsday = vm.getDate();
    }, 1000);
    return countdown;
  }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Creepster');
#doomsday {
  border: 2px solid;
  border-radius: .4rem;
  font-family: 'Creepster', cursive;
  width: 66%;
  margin: auto;
  padding: 20px;
  position: relative;
  text-align: center;
  font-size: 1.3rem;
}
#date {
  font-size: .9rem;
}
</style>
