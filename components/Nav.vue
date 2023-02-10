<template>
  <div id="nav">
    <div class="nav" :class="{ 'nav_fill-bg': showMenu }" :style="navStyles">
      <div class="flex space-between links container align-center">
        <div class="flex align-center">
          <!-- <img
            @click="showMenu = !showMenu"
            class="burger-menu hide-desktop pointer"
            :src="burgerSource"
            alt=""
          /> -->
          <div class="logo flex align-center center"><div>EnVision</div></div>
        </div>
        <div class="flex hide-mobile">
          <div
            @click="$router.push(`/${item.route}`)"
            class="item pointer flex"
            v-for="(item, index) in navItems"
            :key="`item_${index}`"
          >
            <div
              class="nav-link"
              v-if="!item.links"
              :class="{ selected: isSelected(item) }"
            >
              {{ item.label }}
            </div>
            <DropdownLink v-else :item="item" />
          </div>
          <Button
            :text="'Lets Talk'"
            :background="'var(--primary2)'"
            :height="'35px'"
            :font-size="'18px'"
            :font-weight="'bold'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      search: "",
      showMenu: false,
      navItems: [
        {
          label: "What we do",
          route: "",
          name: "index",
        },
        {
          label: "Our Work",
          route: "contact",
          name: "contact",
        },
        {
          label: "About Us",
          route: "contact",
          name: "contact",
        },
      ],
    };
  },
  computed: {
    isSelected() {
      return (item) => item.name === this.$route.name;
    },
    navStyles() {
      const styles = {
        position: "relative",
        background: "black",
      };

      if (this.absolute) {
        styles.position = "fixed";
        styles.background = "rgba($color: black, $alpha: 0.5)";
      }

      return styles;
    },
    burgerSource() {
      return this.showMenu
        ? require("~/assets/icons/white-close.svg")
        : require("~/assets/icons/white-burger-menu.svg");
    },
  },
  methods: {
    navRoute(item) {
      this.$router.push(`/${item.route}`);
      setTimeout(() => (this.showMenu = false), 500);
    },
    async showAuth(type) {
      await this.$store.commit("setModal", {
        show: true,
        type: "auth",
      });
      this.$router.replace({ query: { ...this.$route.query, auth: type } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/nav.scss";
</style>