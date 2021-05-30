<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    absolute
    temporary
    app
    class="nav"
  >
  <v-list nav>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title></v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'ログイン', icon: 'mdi-view-dashboard', link:{ name: 'login'} },
        { title: 'ユーザー登録', icon: 'mdi-forum', link: { name: 'register'} },
      ],
    }
  },
}
</script>