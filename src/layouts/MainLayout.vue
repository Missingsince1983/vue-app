<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-primary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <div class="main-line">
          <div class="main-line__icon main-line__icon--phone" :class="{selected: Screenwidth.current < Screenwidth.laptop}"></div>
          <div class="main-line__icon main-line__icon--laptop" :class="{selected: Screenwidth.current >= Screenwidth.laptop && Screenwidth.current < Screenwidth.desktop}"></div>
          <div class="main-line__icon main-line__icon--desktop" :class="{selected: Screenwidth.current >= Screenwidth.desktop}"></div>
        </div>
      </q-toolbar>
    </q-header>
    <div class="loader" v-if="localLoader">
        <q-spinner-ball
          class="loader-spinner"
          color="white"
          size="4em"
        />
    </div>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary"
    >
      <q-list>
        <div class="main-list" v-if="menuLinks.length">
          <div v-ripple v-for="item in menuLinks" :key="item.id" class="main-list__item main-list-item" @click="setMenuItem(item)" :class="{selected: MenuItem && MenuItem.id === item.id}">
            <div class="main-list-item__title">{{ item.menu_title }}</div>
            <div class="main-list-item__subtitle">{{ item.menu_subtitle }}</div>

          </div>
        </div>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { MenuLink, Screen } from '../components/models'
@Options({
  components: { }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  localLoader = false;
  toggleLeftDrawer () {
    this.leftDrawerOpen = !this.leftDrawerOpen
  }

  menuLinks: Array<MenuLink> = []

  get MenuItem (): MenuLink {
    return this.$store.getters['menu/getMenuItem'] as MenuLink //eslint-disable-line
  }

  setMenuItem (item: MenuLink) {
    this.$store.dispatch('menu/setMenuItem', item) //eslint-disable-line
    if (this.Screenwidth.current < this.Screenwidth.laptop) {
      setTimeout(() => {
        this.toggleLeftDrawer()
      }, 300)
    }
  }

  get Screenwidth (): Screen {
    return this.$store.getters['menu/getScreen'] as Screen //eslint-disable-line
  }

  updateScreenWidth (): void {
    this.$store.dispatch('menu/updateScreen', window.innerWidth) //eslint-disable-line
  }

  async loadMenu (): Promise<void> {
    await this.$store.dispatch('menu/loadMenu').then((resp) => {
      this.menuLinks = resp
    }) //eslint-disable-line
  }

  async mounted () {
    this.updateScreenWidth()
    window.addEventListener('resize', () => { this.updateScreenWidth() })
    this.localLoader = true
    await this.loadMenu()
    this.localLoader = false
  }
}
</script>
