<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://i.imgur.com/MtCtrCr.png" width="112" height="28" />
            </a>

            <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">Здравствуйте, {{name}}</a>

                <a class="navbar-item">{{role}}</a>
                <router-link :to="{name:'login'}"> Перезайти за другого пользователя </router-link>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    computed: {
        name() {
            return this.all.name;
        },
        all() {
            return this.$store.getters["all"];
        },
        role() {
            let returned = "";
            if (this.all.role === "bank") {
                returned = "Банк";
                console.log(returned);

                return returned;
            } else if (this.all.role === "exporter") {
                returned = "Экспортёр";
                console.log(returned);

                return returned;
            } else if (this.all.role === "importer") {
                returned = "Импортёр";
                console.log(returned);

                return returned;
            }
            return "";
        }
    },
    created() {
        document.addEventListener("DOMContentLoaded", () => {
            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(
                document.querySelectorAll(".navbar-burger"),
                0
            );

            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {
                // Add a click event on each of them
                $navbarBurgers.forEach(el => {
                    el.addEventListener("click", () => {
                        // Get the target from the "data-target" attribute
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);

                        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                        el.classList.toggle("is-active");
                        $target.classList.toggle("is-active");
                    });
                });
            }
        });
    }
};
</script>