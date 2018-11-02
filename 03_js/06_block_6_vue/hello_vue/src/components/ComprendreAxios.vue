<template>
    <div>
        <h2 class="title">Comprendre Axios</h2>
        <!-- <tabler 
            :options="{
                editable: true,
                deletable: true,
                sortable: ['adress', 'height']
            }" 
            :dataList="dataList"
        ></tabler> -->
        <tabler 
            :options="{editable: true, deletable: true, sortable: ['name', 'height']}" 
            :dataList="[
                {name: 'pine', height: 40},
                {name: 'oak', height: 10},
                {name: 'redwood', height: 120},
                {name: 'cedar', height: 20}
            ]"></tabler>
    </div>
</template>
<script>
import Tabler from "@/components/Tabler.vue";
import axios from "axios"; 
// va chercher axios dans les node_modules ....
export default {
    components: {
        Tabler
    },
    data() {
        return {
            dataList: []
        }
    },
    beforeMount() {
        const url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis2011&rows=1000&facet=genre&facet=espece";
    
        axios.get(url).then(res => { // avec les fonctions flêchées, la valeur de this est conservée !
            this.dataList = this.prepareTreeData(res.data.records); // ici, this correspond donc au composant ($vm)
        }).catch(err => {
            console.error(err);
        })
    },
    methods: {
        prepareTreeData(data) {
            // return console.log("data base", data);
            var formatedData = []
            data.forEach(d => {
                var { adresse, arrondissement, hauteurenm, circonferenceencm, espece, libellefrancais, geom_x_y } = d.fields; 
                // ci-dessus on utilise la syntaxe de destructuration (es6)
                d["adress"] = adresse;
                d["borough"] = arrondissement;
                d['name'] = libellefrancais
                d['nameLatin'] = espece;
                d['height'] = hauteurenm;
                d['geoloc'] = `[x: ${geom_x_y[0]}, y: ${geom_x_y[1]}]`;
                d['circumference'] = circonferenceencm;

            })
            formatedData = data.map(d => {
                delete d.geometry;
                delete d.fields;
                delete d.datasetid;
                delete d.record_timestamp;
                return d;
            });
            
            console.log(formatedData)
            return formatedData;
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
