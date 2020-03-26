<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div
        style="    width: 100%; flex-direction:row;"
        class="columns hero is-primary"
      >
        <div class="column is-half has-text-centered">
          <div
            class="columns is-multiline is-centered cards-container"
            id="sectioncontainer"
          >
            <div v-for="request in requests"
                :key="request._id" :class="request.success==='true'?'green column is-narrow ':request.status==='Поиск'?'red column is-narrow ':request.status==='С данными от импортёра и экспортёра'?'yellow column is-narrow ':''">
              <article
                
                class="message is-white"
              >
                <div class="message-header">
                  <p>{{ request.name }}</p>
                </div>
                <div class="message-body">
                  <hr />

                  <div class="board-item">
                    <div class="board-item-content">
                      <span>Данные импортёра</span>
                    </div>
                  </div>
                  <hr />
                  <div class="board-item">
                    <div class="board-item-content">
                      <span>ИНН: {{ request.inn }}</span>
                    </div>
                  </div>
                  <div class="board-item">
                    <div class="board-item-content">
                      <span>КПП: {{ request.kpp }}</span>
                    </div>
                  </div>
                  <div class="board-item">
                    <div class="board-item-content">
                      <span>Сайт: {{ request.site }}</span>
                    </div>
                  </div>
                  <div class="board-item">
                    <div class="board-item-content">
                      <span>БИК: {{ request.account }}</span>
                    </div>
                  </div>
                  <div class="board-item">
                    <div class="board-item-content">
                      <span>EMAIL: {{ request.email }}</span>
                    </div>
                  </div>
                  <div class="board-item">
                    <div class="board-item-content">
                      <span>Адрес: {{ request.address }}</span>
                    </div>
                  </div>
                  <div class="board-item">
                    <div class="board-item-content">
                      <span>Cтатус: {{ request.status }}</span>
                    </div>
                  </div>
                  <div class="board-item">
                    <div class="board-item-content">
                      <span>Cумма обязательств: {{ request.sum }}</span>
                    </div>
                  </div>
                  <div class="board-item">
                    <div class="board-item-content">
                      <span
                        >Описание от импортёра: {{ request.description }}</span
                      >
                    </div>
                  </div>
                  <template v-if="request.inn2">
                    <hr />

                    <div class="board-item">
                      <div class="board-item-content">
                        <span>Данные экспортёра</span>
                      </div>
                    </div>
                    <hr />
                    <div class="board-item">
                      <div class="board-item-content">
                        <span>ИНН: {{ request.inn2 }}</span>
                      </div>
                    </div>
                    <div class="board-item">
                      <div class="board-item-content">
                        <span>КПП: {{ request.kpp2 }}</span>
                      </div>
                    </div>
                    <div class="board-item">
                      <div class="board-item-content">
                        <span>Сайт: {{ request.site2 }}</span>
                      </div>
                    </div>
                    <div class="board-item">
                      <div class="board-item-content">
                        <span>БИК: {{ request.account2 }}</span>
                      </div>
                    </div>
                    <div class="board-item">
                      <div class="board-item-content">
                        <span>EMAIL: {{ request.email2 }}</span>
                      </div>
                    </div>
                    <div class="board-item">
                      <div class="board-item-content">
                        <span>Адрес: {{ request.address2 }}</span>
                      </div>
                    </div>
                    <div class="board-item">
                      <div class="board-item-content">
                        <span>Cтатус: {{ request.status }}</span>
                      </div>
                    </div>
                    <div class="board-item">
                      <div class="board-item-content">
                        <span>Cкидка в процентах: {{ request.sale }}</span>
                      </div>
                    </div>
                    <div class="board-item">
                      <div class="board-item-content">
                        <span
                          >Описание от Экспортёра:
                          {{ request.description2 }}</span
                        >
                      </div>
                    </div>
                  </template>
                </div>
                <div
                  class="message-body"
                  :key="file"
                  v-for="(file, index) in request.files"
                >
                  <a
                    :href="$store.state.url + '?file=/' + file"
                    target="_blank"
                    download
                  >
                    {{
                      (index = 0
                        ? "Данные импортёра"
                        : (index = 1
                            ? "Данные экспортёра+импортёра"
                            : (index = 2 ? "Данные для договора" : "")))
                    }}
                    <img
                      class="image is-32x32"
                      src="https://lh3.googleusercontent.com/oUukRV8x9WR5J68u9pAxzbDoesBqT3lvdsEip-c0RnsNnO9f-qcqmddWzl6AFuYDMbA"
                    />
                  </a>
                </div>
              </article>
            </div>
            <div class="column is-narrow">
              <article class="message is-primary"></article>
            </div>
          </div>
        </div>
        <div class="column">
          <h1 class="title is-1 has-text-centered">
            Подать заявку на форфейтинг
          </h1>
          <div class="field">
            <label class="label">Название компании</label>
            <div class="control">
              <input
                v-model="formData.name"
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
                v-model="formData.address"
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
                v-model="formData.inn"
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
                v-model="formData.kpp"
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
                v-model="formData.account"
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
                v-model="formData.site"
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
                v-model="formData.email"
                style="color: black;"
                class="input"
                type="email"
                placeholder="напр. alexsmith@gmail.com"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Сумма обязательств</label>
            <div class="control">
              <input
                v-model="formData.sum"
                style="color: black;"
                class="input"
                type="email"
                placeholder="В рублях"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Информация о сделке</label>
            <div class="control">
              <textarea
                v-model="formData.description"
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
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        name: "",
        inn: "",
        kpp: "",
        address: "",
        account: "",
        description: "",
        email: "",
        site: "",
        status: "Поиск",
        sum: ""
      },
      requests: {}
    };
  },
  methods: {
    sendData() {
      axios
        .post(this.$store.state.url + "postRequest", this.formData)
        .then(() => {
          axios.get(this.$store.state.url + "requests").then(response => {
            this.requests = response.data;
            this.formData = {
              name: "",
              inn: "",
              kpp: "",
              address: "",
              account: "",
              description: "",
              email: "",
              site: "",
              status: "Поиск",
              sum: ""
            };
          });
        });
    }
  },
  created() {
    axios.get(this.$store.state.url + "requests").then(response => {
      console.log(response.data);
      this.requests = response.data;
    });
  }
};
</script>
<style>
.label {
  color: white;
}
</style>
