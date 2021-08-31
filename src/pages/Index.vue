<template>
  <q-page class="card-index row items-center justify-evenly">
    <transition name="fade">
      <div class="item-block" v-if="MenuItem" :key="MenuItem.id">
        <div v-if="MenuItem.content && MenuItem.content.image_url" class="item-block__picture item-block-picture">
          <div class="item-block-picture__image" :style="`background-image: url(${MenuItem.content.image_url})`"></div>
        </div>
        <div class="item-block__description item-block-description">
          <div v-if="MenuItem.content && MenuItem.content.header" class="item-block-description__header">
            {{ MenuItem.content.header }}
          </div>
          <div v-if="MenuItem.content && MenuItem.content.short_text" class="item-block-description__content">
            {{ MenuItem.content.short_text }}
          </div>
          <div v-if="MenuItem.content && MenuItem.content.full_text_btn_title" class="item-block-description__button">
            {{ MenuItem.content.full_text_btn_title }}
          </div>
        </div>
      </div>
      <div v-else class="item-block">
        <div class="item-block-description__header item-block-description__header--centered">
          Choose one item from menu :)
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
