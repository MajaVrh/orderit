<template>
  <div>
    <sidebar />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import store from "@/store/index"


export default { 
  name: "UredjivanjePonude",
  data() {
    
    return {
      store
    };
  },
  components: {Sidebar}
  };
</script>

<style></style>
