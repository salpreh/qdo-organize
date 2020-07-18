<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Todo list
        </q-toolbar-title>

      </q-toolbar>
      <h4 class="q-my-sm q-pl-sm"> {{headerDate}}</h4>
      <h5 class="q-my-sm q-pl-md"> {{headerTime}}</h5>
      <q-img
        src="~assets/backgrounds/notepad-coffe.jpg"
        id="header-image"
        class="absolute-top"
      >
      </q-img>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <DrawerLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {date} from 'quasar'
import DrawerLink from 'components/DrawerLink.vue'

export default {
  name: 'MainLayout',

  components: {
    DrawerLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Todo list',
          icon: 'fact_check',
          to: '/'
        },
        {
          title: 'Random notes',
          icon: 'event_note',
          to: '/notes'
        },
      ]
    }
  },
  computed: {
    headerDate() {
      return '1st January 2020'
    },
    headerTime() {
      return '22:12'
    }
  }
}
</script>

<style lang="scss">
  #header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.4;
  }
</style>