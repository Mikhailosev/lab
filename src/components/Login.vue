<template>
    <section class="hero is-primary is-fullheight">
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-1 has-text-centered">Симулятор форфейтинга</h1>

                <div class="columns is-centered">
                    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form action class="box">
                            <div class="field">
                                <label for class="label">Имя</label>
                                <div class="control has-icons-left">
                                    <input
                                        v-model="selectedName"
                                        type="text"
                                        placeholder="Введите имя"
                                        class="input"
                                        required
                                    />
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label for class="label">Роль</label>
                                <div class="control has-icons-left">
                                    <select
                                        v-model="selectedRole"
                                        type="name"
                                        class="input"
                                        required
                                    >
                                        <option :value="'importer'">Импортёр</option>
                                        <option :value="'exporter'">Экспортёр</option>
                                        <option :value="'bank'">Банк</option>
                                    </select>
                                </div>
                            </div>

                            <div style="display:flex;justify-content:center" class="field">
                                <div @click="logIn">
                                    <button
                                        v-if="selectedRole!==''&&selectedName!==''"
                                        class="button is-success"
                                    >Войти</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            selectedRole: "",
            selectedName: ""
        };
    },
    methods: {
        logIn() {
            this.$store.commit("login", {
                role: this.selectedRole,
                name: this.selectedName
            });
            this.$router.push({ name: this.selectedRole });
            this.selectedRole = "";
            this.selectedName = "";
        }
    }
};
</script>