<template>
  <table id="tabler" class="tabler">
    <!-- https://github.com/Justineo/vue-awesome -->
    <!-- @todo => intégrer des icônes pour les cols edit et delete de body ;) -->
    <!-- @created => exec une fonction qui vérifie que dataList est bien un Array d'objects -->
    <!-- Afficher un tr portant la mention tableau vide, si length 0 -->
    <thead class="head">
      <tr class="row">
        <th v-if="dataList" v-for="(data, key) in dataList[0]" :key="key">
          <span>{{key}}</span>
          <div v-if="options && options.sortable && options.sortable.includes(key)" class="sortable">
            <span class="stop-events" @click="sort(key, 'up')">
              <v-icon name="caret-up"/>
            </span>
            <span class="stop-events" @click="sort(key, 'down')">
              <v-icon name="caret-down" @click="sort(key, 'down')"/>
            </span>
          </div>
        </th>
        <th v-if="options && options.editable">
          <v-icon name="edit"/>
        </th>
        <th v-if="options && options.deletable">
          <v-icon name="trash-alt"/>
        </th>
      </tr>
    </thead>
    <tbody class="body">
      <tr class="row" v-for="(data, i) in dataList" :key="i">
        <td v-for="(val, prop) in data" :key="prop">{{typeof val !== 'object' ? val : 'object'}}</td>
        <td v-if="options && options.editable" data-id="`data_${i}`">
          <span>edit</span>
        </td>
        <td v-if="options && options.deletable" data-id="`data_${i}`">
          <span class="clickable" @click="deleteRow(i)">X</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  methods: {
    deleteRow(index) {
      // console.log("@deleteROw", index)
      return this.dataList.splice(index, 1);
    },
    sort(key, dir) {
      const pol = {
        pos: dir === "up" ? 1 : -1,
        neg: dir === "up" ? -1 : 1
      };
      this.dataList = this.dataList.sort((a, b) => {
        if (a[key] < b[key]) return pol.neg;
        else if (a[key] > b[key]) return pol.pos;
        return 0;
      });
    }
  },
  props: ["dataList", "options"]
};
</script>
<!-- tuto CSS : https://css-tricks.com/accessible-simple-responsive-tables/ -->
<style lang="scss" scoped>
.stop-events > * {
  pointer-events: none;
}
#tabler,
#tabler th,
#tabler td {
  border: 1px solid;
  border-collapse: collapse;
}
#tabler th,
#tabler td {
  padding: 10px;
  text-align: center;
}
.body .row:nth-child(odd) {
  background: silver;
}
.sortable > svg > * {
  pointer-events: none;
}
</style>
