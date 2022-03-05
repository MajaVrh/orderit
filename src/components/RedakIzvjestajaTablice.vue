<template>
  <div>
    <div class="PrviRed">
      <div class="celija">Naziv artikla</div>
      <div class="celija manji">Količina</div>
      <div class="celija manji">Cijena</div>
      <div class="celija manji">Ukupno</div>
    </div>
    <div class="redak" v-for="stavka in stavke" :key="stavka.naziv">
      <div class="stupac celija">{{ stavka.naziv }}</div>
      <div class="stupac celija">{{ stavka.kolicina }}</div>
      <div class="stupac celija">{{ stavka.cijenaArtikla }}</div>
      <div class="stupac celija">{{ stavka.ukupnaCijena }}</div>
    </div>
    <div class="PrviRedUkupno">
      <div class="stupac celija">Polog</div>
      <div class="stupac celija">Plaćeno gotovinom</div>
      <div class="stupac celija">U kasi</div>
    </div>
    <div class="DrugiRedUkupno">
      <div class="stupac celija">{{ polog }} kn</div>
      <div class="stupac celija">{{ stanjeKase }} kn</div>
      <div class="stupac celija">{{ polog * 1 + stanjeKase * 1 }} kn</div>
    </div>
    <div class="footerTablice">
      <div class="ZadnjiRed">Izvještaj dana: {{ datumFormated }}</div>
      <div class="ZadnjiRed" style="opacity: 50%">
        Vrijeme zatvaranja: {{ vrijemeZatvaranja }}
      </div>
    </div>

    <br />
  </div>
</template>

<script>
import moment from "moment";
import { getDocs, collection, db, query, onSnapshot } from "@/firebase";
moment.locale("hr");

export default {
  name: "RedakIzvjestajaTablice",
  props: ["stavkeIzvjestaja", "stavke", "datum", "polog"],
  data() {
    return {
      datumFormated: moment(this.datum).format("DD.MM.YYYY."),
      vrijemeZatvaranja: moment(this.datum).format("LT"),
      polog2: 0,
      pomocni:[],
      StanjeBlagajne: 0,
      stanjeKase: 0,
    };
  },

  mounted() {
     this.Stanje();
  },

  methods: {
    async Stanje() {
      this.pomocni = this.stavke;
    
    
      this.pomocni.forEach(async (e) => {
        let s = e?.s;
        this.polog2 = e.polog;
        this.stanjeKase += e.ukupnaCijena;
      });
    },
  },
};
</script>

<style scoped>
.redak {
  width: 100%;
  height: 1.8rem;
  background-color: #b9889d;
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr;
  justify-content: center;
  align-items: center;
  border-bottom: 1px rgb(255, 255, 255) solid;
  color: white;
}

.footerTablice {
  padding-top: 0.8rem;
  margin-bottom: -0.8rem !important;
}
.ZadnjiRed {
  font-size: 1px;
  height: 1.7rem;
  font-size: 16px;
}
.stupac {
  grid-gap: 1px;
  width: 100%;

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.siri {
  min-width: 13rem !important;
}
.manji {
  min-width: 5rem !important;
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

.celija {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-gap: 1px;
  margin: 0;
}

.manji {
  min-width: 5rem !important;
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

.DrugiRedUkupno {
  background-color: #b9889d;
  color: #ffffff;

  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  min-height: 2rem;
  justify-content: center;
  align-items: center;
}
</style>
