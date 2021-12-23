<template>
  <div class="container">
    <sidebar />
    <div class="sredina">
      <h1 class="naslovStranice">COFFE SHOP CETRAL PERK</h1>
      <div class="raspored-info">
        <div class="l-stupac">
          <div class="konatkt razmak">
            <h2>KONATKT</h2>
            <div class="informacije">091 852 1234</div>
            <input class="inp2"

              v-if="Vidljiv"
              v-model="broj"
              name="Broj"
              type="text"
              placeholder="Upišite konakt broj"
               value="091 852 1234"
            />
          </div>
          <div class="lokacija razmak">
            <h2>LOKACIJA</h2>
            <div class="informacije">Rovinjska ul. 14, 52100, Pula</div>
            <input
            class="inp2"
              v-if="Vidljiv"
              v-model="adresa"
              name="Adresa"
              type="text"
              placeholder="Upišite adresu lokala"
              value="Rovinjska ul. 14, 52100, Pula"
            />
          </div>
        </div>

        <div>
          <h2>RADNO VRIJME</h2>
          <div class="RadnoVrijeme razmak">
            <div class="dantjedana">
              <div class="dan">Ponedjeljak:</div>
              <div class="dan">Utorak:</div>
              <div class="dan">Srijeda:</div>
              <div class="dan">Četvrtak:</div>
              <div class="dan">Petak:</div>
              <div class="dan">Subota:</div>
              <div class="dan">Nedjelja:</div>
            </div>

            <div class="vrijemedan">
              <div class="sat">08:00 - 23:00</div>
              <div class="sat">08:00 - 23:00</div>
              <div class="sat">08:00 - 23:00</div>
              <div class="sat">08:00 - 23:00</div>
              <div class="sat">08:00 - 23:00</div>
              <div class="sat">08:00 - 01:00</div>
              <div class="sat">08:00 - 23:00</div>
            </div>

            <div class="vrijemeforma">
              <input
                class="inp tekstNesto"
                v-if="Vidljiv"
                v-model="pon"
                name="pon"
                type="text"
                placeholder="Upišite radno vrijeme"
                value="8:00 -  23:00"
              />
              <input
                class="inp tekstNesto"
                v-if="Vidljiv"
                v-model="uto"
                name="uto"
                type="text"
                placeholder="Upišite radno vrijeme"
                value="8:00 -  23:00"
              />
              <input
                class="inp tekstNesto"
                v-if="Vidljiv"
                v-model="sri"
                name="sri"
                type="text"
                placeholder="Upišite radno vrijeme"
                value="08:00 -  23:00"
              />
              <input
                class="inp tekstNesto"
                v-if="Vidljiv"
                v-model="cet"
                name="cet"
                type="text"
                placeholder="Upišite radno vrijeme"
                value="08:00 -  23:00"
              />
              <input
                class="inp"
                v-if="Vidljiv"
                v-model="pet"
                name="pet"
                type="text"
                placeholder="Upišite radno vrijeme"
                value="08:00 -  23:00"
              />
              <input
                class="inp"
                v-if="Vidljiv"
                v-model="sub"
                name="sub"
                type="text"
                placeholder="Upišite radno vrijeme"
                value="08:00 -  01:00"
              />
              <input
                class="inp tekstNesto"
                v-if="Vidljiv"
                v-model="ned"
                name="ned"
                type="text"
                placeholder="Upišite radno vrijeme"
                value="08:00 -  20:00"
              />
            </div>
          </div>
        </div>
      </div>
      <button v-if="!Vidljiv" class="btn2" @click="Vidljiv = !Vidljiv">
        Izmjeni podatke 
      </button>
         <button v-if="Vidljiv" class="btn2" @click="  IzmjenaPodataka()" >
        Potvrdi izmjene
      </button>

      <div class="karta razmak">
        <!--   <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.979973662515!2d13.846800051191035!3d44.862702478995814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd323b2935583%3A0xddd59e242797b198!2sRovinjska%20ul.%2014%2C%2052100%2C%20Pula!5e0!3m2!1shr!2shr!4v1640256067829!5m2!1shr!2shr"
          width="400"
          height="250"
          style="border: 5px solid #731641"
          allowfullscreen=""
          loading="lazy"
        ></iframe> -->
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: "Info",
  data() {
    return { Vidljiv: false,
              pon:"",
              uto:"",
              sri:"",
              cet:"",
              pet:"",
              sub:"",
              ned:"",
              broj:"",
              adresa:"" };
  },
  methods: {IzmjenaPodataka(){
    
   
    console.log("IZMJENA PODATAKA")
     this.Vidljiv = !this.Vidljiv}
    },
    
  components: { Sidebar },
};
</script>

<style lang="scss" scoped>
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
}

.raspored-info {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.naslovStranice {
  font-family: "Amatic SC", cursive;
  font-size: 60px;
  color: #731642;
  font-weight: bold;
}

.razmak {
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 2.4rem;
}


iframe {
  border-radius: 40px;
}
h2 {
  color: #731641;
  margin-bottom: 0.5rem;
}

.informacije {
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.l-stupac {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  
}

.btn2 {
  min-width: 13rem;
  padding: 0.5rem;
  border-radius: 30px;
  border: none;
  outline: none;
  background-color: #731642;
  color: white;
  margin-top: 1rem;
  font-size: 18px;
}

.RadnoVrijeme {
  margin-bottom: 0.5rem;
  display: flex;
  gap: 1rem;
}

.vrijemedan {
  display: flex;
  flex-direction: column;
  gap: 1.05rem;
  margin-top: 0.2rem;
}


.vrijemeforma {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.dantjedana {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 0.2rem;
}

.inp {
  border-radius: 7px;
  font-size: 14px;
  border: 1.5px solid #731642;
  padding: 0.1rem;
  width: 6rem;
}



.inp[value] {
  text-align: center;
   color: rgb(109, 109, 109);
}

.inp2 {
  border-radius: 7px;
  font-size: 14px;
  border: 1.5px solid #731642;
  padding: 0.2rem;
  width: 13rem;
  margin-top: 0.5rem;
 


}
.inp2[value] {
  text-align: center;
  color:  rgb(109, 109, 109);
}
</style>
