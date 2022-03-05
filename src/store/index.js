import Vue from "vue";
import Vuex from "vuex";
import {
  db,
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  addDoc,
  onSnapshot,
  deleteDoc,
  arrayUnion,
  updateDoc
} from "@/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    admin: "",
    konobar: "",
    izvjestaj: {},
    kasa: 0,
    Pohrana: {},
  },
  mutations: {
    // state- objekt gore // payload - šaljemo u funkciju
    setKonobar(state, payload) {
      localStorage.setItem("konobar", payload);
      state.konobar = payload;
    },
    setIzvjestaj(state, payload) {
      state.izvjestaj = payload;
    },
    setKasa(state, payload) {
      state.kasa = payload;
    },
  },
  getters: {
    konobar(state) {
      return state.konobar;
    },
    izvjestaj(state) {
      return state.izvjestaj;
    },
    kasa(state) {
      return state.kasa;
    },
  },
  actions: {
    async dohvatiStavke(context) {
      const qNarudzbe = await getDocs(query(collection(db, "Narudzbe")));
      let stavke;
      let PohranaArr = [];
      qNarudzbe.forEach(async (elem) => {
        if (elem.data().jePlaceno) {
          //placene stavkee
          stavke = await getDocs(
            query(
              collection(doc(collection(db, "Narudzbe"), elem.id), "Stavke")
            )
          );
          stavke.forEach((stavka) => {
            PohranaArr.push({ id: stavka.id, ...stavka.data() });
          });

          deleteDoc(doc(collection(db, "Narudzbe"), elem.id));
        }
      });

      setTimeout(() => {
        let dictionary = {};
        let k = 0;
        PohranaArr.forEach((elem) => {
          if (dictionary[elem.ime]) {
            dictionary[elem.ime].kolicina += elem.kolicina;
            dictionary[elem.ime].ukupnaCijena =
              dictionary[elem.ime].kolicina * elem.cijena;
            k += elem.kolicina * elem.cijena;
          } else {
            dictionary[elem.ime] = {
              naziv: elem.ime,
              kolicina: elem.kolicina,
              cijenaArtikla: elem.cijena,
              ukupnaCijena: elem.cijena * elem.kolicina,
            };
            k += dictionary[elem.ime].kolicina * elem.cijena;
          }
        });
        this.Pohrana = dictionary;
        context.commit("setKasa", k);
        this.kasa = k;
        context.commit("setIzvjestaj", dictionary);
      }, 1000);
    },
    async SpremiDan() {
      try {
        let P = this.Pohrana;
        
        
        onSnapshot(doc(db, "Polog", "PologKase"), async (docElem) => {
          const izvjRef = await addDoc(collection(db, "Izvjestaj"), {
            time: Date.now(),
            polog: docElem.data().PologKase,
          })
          for (var elem in P) {
            let element = {
           
              naziv: P[elem].naziv,
              kolicina: P[elem].kolicina,
              cijenaArtikla: P[elem].cijenaArtikla,
              ukupnaCijena: P[elem].ukupnaCijena,
              kasa: this.kasa * 1 + docElem.data().PologKase * 1,
            }
            updateDoc(izvjRef, {
              stavke: arrayUnion(element)
            })
            
          }

          console.log("SPEREMI DAN");
        });
      } catch (error) {
       
        console.log(error);
      }
    },
  },
  modules: {},
});
