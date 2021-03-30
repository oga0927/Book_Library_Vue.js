<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-btn color="primary" to="/search" block>本を投稿する</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" v-for="book in books" :key="book.id">
        <v-card>
          <v-row>
            <v-col cols="4">
              <!-- 画像が表示される -->
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>{{ book.title }}</v-card-title>
              読んだ日：{{book.readDate}}
              感想：{{book.memo}}
              <v-spacer></v-spacer>
              <v-card-actions>
                <!-- 書き込み -->
                <v-btn 
                  :to="{name: 'BookEdit', params: {id: book.id}}"
                  color="indigo" 
                  fab small dark
                >
                <v-icon>mdi-pencil</v-icon>
                <v-spacer></v-spacer>
                </v-btn>

                <!-- いいねボタン -->
                  <v-btn
                    icon
                    color="pink"
                  >
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  props: {
    books: Array
  },
  data() {
    return {
      count: 1
    }
  },
}
</script>

<style>

</style>