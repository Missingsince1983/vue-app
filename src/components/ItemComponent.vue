<template>
  <div class="item-wrapper">
    <div class="item-block">
      <div class="item-block__picture item-block-picture">
        <div class="item-block-picture__image"></div>
      </div>
      <div class="item-block__description item-block-description">
        <div class="item-block-description__header">

        </div>
        <div class="item-block-description__content">

        </div>
        <div class="item-block-description__button"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, prop } from 'vue-class-component'
import { Todo, Meta } from './models'

class Props {
  readonly title!: string;
  readonly todos = prop<Todo[]>({ default: () => [] });
  readonly meta!: Meta;
  readonly active!: boolean;
}

export default class ClassComponent extends Vue.with(Props) {
  clickCount = 0;

  increment () {
    this.clickCount += 1
  }

  get todoCount () {
    return this.todos.length
  }
}
</script>
