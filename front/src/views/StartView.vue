<template>
  <div>
   <div class="header clearfix" >
     Zadzwonimy do Ciebie w ciągu 26 sekund.
   </div>
   <label class="form-label clearfix"  for="form-number">
     Wprowadź numer
   </label>
   <input v-model="number"
          @input="onInput"
          @keypress = "validateInput"
    class="form-number clearfix"  id="form-number"/>
   <div class="call-button"  @click="call()">
     Zadzwoń teraz
   </div>
  </div>
</template>

<script>
export default {
 data() {
   return {
     number: ''
   }
 },
 methods: {
   async call() {
     let responseStream = await fetch(`http://localhost:3000/call`, {
       method: "POST",
       headers: {
         "Content-type": "application/json; charset=UTF-8"
       },
       body: JSON.stringify({number: this.formatNumber(this.number)})
     });
     let response = await responseStream.json()
     this.$router.push({ name: 'ringing', params: { callsId: response.id }})
   },
   formatNumber(number) {
      return number.replace(/\D/g,'')
   },
   onInput() {
     localStorage.setItem('phoneNumber', this.number);
   },
   validateInput(event) {
     const keyCode = (event.keyCode ? event.keyCode : event.which);
     if ((keyCode < 48 || keyCode > 57) && keyCode !== 43 && keyCode !== 45 && keyCode !== 32) {
       event.preventDefault();
     }
   }
 }
}
</script>