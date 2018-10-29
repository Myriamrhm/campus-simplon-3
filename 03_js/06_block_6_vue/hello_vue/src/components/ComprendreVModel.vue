<template>
    <div id="tuto_v_model">
        <h2 class="title">Comprendre le two-way binding</h2>
        <p>
            msg vaut : {{ msg }}<br>
            montant vaut : {{ montant }}<br>
            plageDeDonnées vaut : {{ plageDeDonnées }}<br>
        </p>
        <div class="widget">
            <input type="text" v-model="msg">
            <input type="number" v-model="montant">
            <input type="range" v-model="plageDeDonnées" min="0" max="40">
        </div>
    </div>
</template>
<script>
export default {
  updated() {
    console.log(this);
  },
  data() {
    return {
      msg: "",
      montant: 10000,
      plageDeDonnées: 10
    };
  }
};
</script>
<style lang="scss" scoped>
#tuto_v_model {
  border: 2px solid gray;
  border-radius: 0.3rem;
  max-width: 340px;
  padding: 10px;
  & .widget {
    display: flex;
    flex-direction: column;
    & input {
        margin-top: 10px;
    }
  }

}
</style>
