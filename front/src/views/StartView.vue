<template>
  <div class="wrapper">
    <div class="wrapper-header">
      <div class="header clearfix" id="top">Zadzwonimy do Ciebie w ciągu</div>
      <div
        class="header clearfix"
        id="26s"
        v-bind:style="{ color: counterColor, fontSize: fontSize + 'px' }"
        v-on:mouseover="startCounter"
      >
        {{ counter }}
      </div>
      <div class="header clearfix" id="bottom">sekund</div>
    </div>
    <div id="search-box">
      <label class="form-label clearfix" for="form-number"> </label>
      <input
        v-model="number"
        @input="onInput"
        @keypress="validateInput"
        class="form-number clearfix"
        placeholder="Wpisz swój numer "
      />
      <div class="call-button" @click="call()">
        <i class="bi bi-headset"></i>Zadzwoń
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: "",
      counter: 300,
      counterColor: "red",
      fontSize: 150,
      intervalId: null,
    };
  },
  methods: {
    // Metoda Call, która jest wywoływana po kliknięciu przycisku "Zadzwoń"
    async call() {
      const isValidNumber = this.validateNumber(this.number);
      if (!isValidNumber) {
        alert("Wprowadź poprawny numer");
        return;
      }
      let responseStream = await fetch(`http://localhost:3000/call`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ number: this.formatNumber(this.number) }),
      });
      let response = await responseStream.json();
      if (response?.status === "Failed") {
        alert("Wystąpił błąd");
        return;
      }
      this.$router.push({ name: "ringing", params: { callsId: response.id } });
    },
    // Metoda formatNumber, która usuwa wszystkie znaki z numeru telefonu, które nie są cyframi
    formatNumber(number) {
      return number.replace(/\D/g, "");
    },
    // Metoda onInput, która zapisuje numer telefonu w localStorage
    onInput() {
      localStorage.setItem("phoneNumber", this.number);
    },
    // Metoda validateInput, która sprawdza, czy wprowadzony znak jest cyfrą, znakiem plusa, minusa lub spacją
    validateInput(event) {
      const keyCode = event.keyCode ? event.keyCode : event.which;
      if (
        (keyCode < 48 || keyCode > 57) &&
        keyCode !== 43 &&
        keyCode !== 45 &&
        keyCode !== 32
      ) {
        event.preventDefault();
      }
    },
    // Metoda validateNumber, która sprawdza, czy numer telefonu zawiera tylko cyfry, znaki plusa, minusa lub spacji
    validateNumber(number) {
      const isValid = number && /^[\d\s+-]+$/.test(number);
      return isValid;
    },
    // Metoda startCounter, która uruchamia odliczanie do 26 sekund
    startCounter() {
      const totalDuration = 1500;
      const steps = this.counter - 26;
      const intervalDuration = totalDuration / steps;

      this.intervalId = setInterval(() => {
        if (this.counter > 26) {
          this.counter--;
          let percentage = (this.counter - 26) / (300 - 26);
          let green = Math.round(255 * percentage);
          let red = 255 - green;
          this.counterColor = `rgb(${green}, ${red}, 0)`;
          this.fontSize = 38 + (150 - 38) * percentage;
        } else {
          clearInterval(this.intervalId);
        }
      }, intervalDuration);

      setTimeout(() => {
        clearInterval(this.intervalId);
      }, totalDuration);
    },
  },
};
</script>
