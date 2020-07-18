<template>
  <q-item
    :to="to"
    :exact="exact"
    clickable
    v-ripple
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label
        v-if="caption"
        caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'DrawerLink',
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: '/'
    },
    icon: {
      type: String,
      default: ''
    },
    exact: {
      type: Boolean,
      default: true
    }
  }
}
</script>
