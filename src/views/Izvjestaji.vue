<template>
<div class="container">
    <sidebar />
    <div class="sredina">
      <h1 class="naslovStranice">PREGLED IZVJEŠTAJA</h1>
      <div class="raspored">
          <div class="tablica">
          <div class="PrviRed">
            <div class="celija">Naziv artikla</div>
            <div class="celija manji">Količina</div>
            <div class="celija manji">Cijena</div>
            <div class="celija manji">Ukupno</div>
          </div>

          <div class="ZadnjiRed">Izvještaj dana: {{  }}</div>
        </div>




        <div class="tablicaUkupno">
          <div class="PrviRedUkupno">
            <div class="stupac celija">Polog</div>
            <div class="stupac celija">Plaćeno gotovinom</div>
            <div class="stupac celija">U kasi</div>
          </div>
          <div class="DrugiRedUkupno">
            <div class="stupac celija">{{  }} kn</div>
            <div class="stupac celija">{{  }}</div>
            <div class="stupac celija">{{  }}</div>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import { getDocs, doc as pomocni, collection, db } from '@/firebase'
 
export default {
    name: 'Izvjestaji',
    async mounted() {
        await this.getIzvjestaje();
        console.log("Izvjestaji", this.izvjestaji)
    },
    data() { return {
        izvjestaji: []
    }},

    components:{Sidebar},
    methods: {

      FiltrirajDatum(){},

        async getIzvjestaje() {
            
            const querySnapshot = await getDocs(collection(db, "Izvjestaj"));
            let newArr = []
            let idIzvjestaja = 0
            querySnapshot.forEach( async (doc) => {
                idIzvjestaja = doc.id
                const querySnapshotStavke = await getDocs(collection(pomocni(db, 'Izvjestaj', idIzvjestaja), 'Stavke'))
                
                newArr[doc.id] = []
                querySnapshotStavke.forEach((docA) => {
                    newArr[doc.id].push({id: doc.id, time: doc.data().time, polog:doc.data().polog, ...docA.data() }) 
                    
                })
              
            });
            this.izvjestaji = newArr
     
        }
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
}

.sredina {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;
  max-width: 140vh;
  width: 120vh;

  padding-left: 25%;
}

.raspored {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-left: 3rem;
  margin-right: 3rem;
  gap: 2rem;

  width: 90%;
}

.naslovStranice {
  font-family: "Amatic SC";
  font-size: 60px;
  color: #731642;
  font-weight: bold;
}



.tablica,
.tablicaUkupno {
  min-width: 17.5rem;
  width: 100%;
  color: white;
  background-color: #731642;
  border-radius: 10px;
}

.red {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.PrviRed {
  background-color: #731642;
  color: white;
  width: 100%;
  min-height: 2rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr;
  justify-content: center;
  align-items: center;
  border-bottom: 1px rgb(255, 255, 255) solid;
}

.ZadnjiRed {
  padding-top: 0.4rem;
  font-size: 1px;
  height: 1.7rem;
  font-size: 16px;
}

.celija {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-gap: 1px;
  margin: 0;
}

.siri {
  min-width: 13rem !important;
}
.manji {
  min-width: 5rem !important;
}
.najmanji {
  min-width: 2rem !important;
}

.DrugiRedUkupno {
  background-color: #b9889d;
  color: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  min-height: 2rem;
  justify-content: center;
  align-items: center;
}

.PrviRedUkupno {
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  min-height: 2rem;
  justify-content: center;
  align-items: center;
  border-bottom: 1px rgb(255, 255, 255) solid;
}

</style>