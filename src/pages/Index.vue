<template>
  <q-page class="card-index row items-center justify-evenly">
    <transition name="fade">
      <div class="item-block" v-if="MenuItem" :key="MenuItem.id">
        <div class="item-block__picture item-block-picture">
          <div class="item-block-picture__image" :style="`background-image: url(${MenuItem.pic})`"></div>
        </div>
        <div class="item-block__description item-block-description">
          <div class="item-block-description__header">
            {{ MenuItem.title }}
          </div>
          <div class="item-block-description__content">
            {{ MenuItem.content }}
          </div>
          <div class="item-block-description__button">
            {{ MenuItem.btn }}
          </div>
        </div>
      </div>
    </transition>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { MenuLink } from 'components/models'
@Options({
  components: { }
})
export default class PageIndex extends Vue {
  get MenuItem (): MenuLink {
    return this.$store.getters['menu/getMenuItem'] as MenuLink //eslint-disable-line
  }
};
</script>
