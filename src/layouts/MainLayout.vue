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

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary"
    >
      <q-list>
        <div class="main-list" v-if="essentialLinks.length">
          <div v-ripple v-for="item in essentialLinks" :key="item.id" class="main-list__item main-list-item" @click="setMenuItem(item)" :class="{selected: MenuItem && MenuItem.id === item.id}">
            <div class="main-list-item__title">{{ item.title }}</div>
            <div class="main-list-item__subtitle">{{ item.subtitle }}</div>
            
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
import EssentialLink from 'components/EssentialLink.vue'
const linksList: Array<MenuLink> = [
  {
    id: '1',
    title: 'Docs',
    subtitle: 'Here subtitle',
    content: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quisquam temporibus omnis maiores incidunt nulla quas laudantium deserunt quaerat. Soluta.',
    link: 'https://quasar.dev',
    btn: 'learn more',
    pic: 'https://klike.net/uploads/posts/2018-10/1539499416_1.jpg'
  },
  {
    id: '2',
    title: 'Info',
    content: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quisquam temporibus omnis maiores incidunt nulla quas laudantium deserunt quaerat. Soluta.',
    link: 'https://quasar.dev',
    btn: 'Join',
    subtitle: '',
    pic: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg'
  }
];

import { Vue, Options } from 'vue-class-component'
import { MenuLink, Screen } from '../components/models'
@Options({
  components: { EssentialLink }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  essentialLinks: Array<MenuLink> = linksList;
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

  mounted () {
    this.updateScreenWidth()
    this.setMenuItem(this.essentialLinks[0])
    window.addEventListener('resize', () => { this.updateScreenWidth() })
  }
}
</script>
