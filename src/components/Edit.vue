<template>
<section style="height:100vh;" class="hero is-primary">
    <div class="container">
    <div class="column">
          <h1 class="title is-1 has-text-centered">Добавление данных экспортёра</h1>
          <div class="field">
            <label class="label">Название компании</label>
            <div class="control">
              <input
                v-model="formData.name2"
                style="color: black;"
                class="input"
                type="text"
                placeholder="прим. ООО Роснефть"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Адрес</label>
            <div class="control">
              <input
                v-model="formData.address2"
                style="color: black;"
                class="input"
                type="text"
                placeholder="напр. Мира 8"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">ИНН</label>
            <div class="control">
              <input
                v-model="formData.inn2"
                style="color: black;"
                class="input"
                type="number"
                placeholder="напр. 123123"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">КПП</label>
            <div class="control">
              <input
                v-model="formData.kpp2"
                style="color: black;"
                class="input"
                type="number"
                placeholder="напр. 83892"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Рассчётный счёт</label>
            <div class="control">
              <input
                v-model="formData.account2"
                style="color: black;"
                class="input"
                type="number"
                placeholder="напр. 123123"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Интернет</label>
            <div class="control">
              <input
                v-model="formData.site2"
                style="color: black;"
                class="input"
                type="text"
                placeholder="напр. hackjunction.com"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="formData.email2"
                style="color: black;"
                class="input"
                type="email"
                placeholder="напр. alexsmith@gmail.com"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Скидка</label>
            <div class="control">
              <input
                v-model="formData.sale"
                style="color: black;"
                class="input"
                type="email"
                placeholder="В процентах"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Информация о сделке</label>
            <div class="control">
              <textarea
                v-model="formData.description2"
                style="color: black;"
                class="textarea"
                required
                placeholder="Впишите все необходимые детали"
              ></textarea>
            </div>
          </div>
          <button class="button" @click="sendData">Отправить</button>
        </div>
        </div>
        </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        name2: "",
        inn2: "",
        kpp2: "",
        address2: "",
        account2: "",
        description2: "",
        email2: "",
        site2: "",
        status: "С данными от импортёра и экспортёра",
        sale: ""
      },
      requests: {}
    };
  },
  methods: {
    sendData() {
        console.log(this.$route.params.id)
      axios
        .post(this.$store.state.url + "updateRequest", {data:this.formData,id:this.$route.params.id}).then(res=>{

                        this.$router.push({name:'exporter'})
                        return res
        })

    }
  },
  created() {
   
  }
};
</script>