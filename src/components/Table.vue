<template>
  <div v-if="loading">LOADING...</div>
</template>

<script>
import { mapMutations } from 'vuex'
import {getDoc, doc, db} from '@/firebase'

export default {
    name: 'Table',
    data() {
        return {
            tableID: this.$route.params.tableID,
            loading: true
        }
    },
    mounted() {
        this.setUserTable();
    },
    methods: {
        ...mapMutations({setTable: 'setTable'}),
        async setUserTable() {
            const tableData = await getDoc(doc(db, 'Stolovi', this.tableID));
            const table = tableData.id;
            if(this.tableID != table) {
                this.setTable('');
                this.loading = false
                this.$router.replace('/');
                return;
            };
            this.setTable(this.tableID);
            this.loading = false
            this.$router.replace('/');
        }
    }
}
</script>

<style>

</style>