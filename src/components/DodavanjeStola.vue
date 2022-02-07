<template>
  <div>
    <div
      v-if="!Vidljiv"
      class="dodavanje vidljivo krug"
      @click="Vidljiv = !Vidljiv"
    >
      <i class="fas fa-plus pluss"></i>
      <p>Dodaj stol</p>
    </div>
    <div v-if="Vidljiv" class="dodavanje nevidljivo">
      <input
        class="InputDodaj"
        placeholder="Ime stola"
        v-model="OznakaStola"
        type="text"
      />

      <button class="potvrdi" v-if="Vidljiv" @click="DodajStol">Potvrdi</button>
      <i class="fas fa-times" @click="Vidljiv = !Vidljiv"></i>
    </div>
  </div>
</template>

<script>
import { db, collection, addDoc } from "@/firebase";

export default {
  name: "dodavanjeStola",
  data() {
    return { OznakaStola: "", Vidljiv: false };
  },

  methods: {
    async DodajStol() {
      try {
        console.log("DODAVANJE STOLA:", this.OznakaStola);

        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "Stolovi"), {
          oznaka: this.OznakaStola,
        });
        console.log("Dodan je stol: ", docRef.id);
        this.Vidljiv = !this.Vidljiv;
        this.OznakaStola = "";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.ikona:hover {
  cursor: pointer;
}

.dodavanje {
  height: 11rem;
  width: 11rem;
  border-radius: 100%;
  border: 3.5px solid #731641;
  padding: 0.5rem;
  background-color: #731641;
  color: white;
  font-size: 16px;
  font-weight: bold;
  filter: drop-shadow(1px 1px 1px #0000007a);
  box-shadow: 2px 2px 0 rgba(170, 170, 170, 0.733);
  margin-right: 1rem;
  margin-left: 1rem;
}

i {
  z-index: 999;
}

a {
  text-decoration: none;
}

.pluss {
  color: white !important;
  font-size: 40px;
  margin-top: 3.5rem;
  margin-bottom: 0.5rem;

  z-index: 999;
}

.nevidljivo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.InputDodaj {
  margin: 0.3rem;
  width: 80%;
  height: 1.4rem;
  border-radius: 7px;
  font-size: 14px;
  border: 1.5px solid #731642;
  padding: 0.2rem;
  margin-top: 1rem;
}

.potvrdi {
  background-color: #ffffff;
  color: #731642;
  border-radius: 7px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  border: none;
  font-weight: bold;

  outline: none;
  max-width: 5rem;
  min-width: 5rem;
  max-height: 1.8rem;
  min-height: 1.8rem;
}

.potvrdi:hover {
  cursor: pointer;
  background-color: #aa6b88e3;
  color: #ffffff;
}

.krug:hover {
  cursor: pointer;
   background-color: #aa6b88e3;
  color: #ffffff;
  border-color:#aa6b88e3 ;
}
</style>
