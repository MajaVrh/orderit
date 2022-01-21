<template>
  <div v-if="loading" class="loading"><img src="MainLogo.png" alt=""></div>
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
            const table = {id: tableData.id,...tableData.data()}
            if(this.tableID != table.id) {
                this.setTable('');
                this.loading = false
                this.$router.replace('/');
                return;
            };
            this.setTable(table);
            this.loading = false
            this.$router.replace('/');
        }
    }
}
</script>

<style scoped>
.loading > img{
    width: 10rem;
    animation: rotation 1s infinite linear;
}
@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }

}
    
</style>