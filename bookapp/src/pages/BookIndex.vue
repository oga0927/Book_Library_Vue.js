<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-btn 
          to="/search" 
          block
          color="orange lighten-1"
        >おすすめの一冊を投稿</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" v-for="(book, index) in books" :key="index">
        <v-card  class="mb-8">
          <v-row>
            <v-col cols="3">
              <!-- 画像が表示される -->
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="9">
              <v-card-title >{{ book.title }}</v-card-title>
              <!-- 読んだ日：{{book.readDate}}
              感想：{{book.memo}} -->
              <v-spacer></v-spacer>
              <v-card-actions>
                <!-- 書き込み -->
                <v-btn 
                  :to="{name: 'BookEdit', params: {id: index}}"
                  color="primary"
                  class="mx-1"
                >
                投稿をみる
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn 
                  color="error"
                  @click="deliteLocalStorage(index)"
                >削除する
                </v-btn>
                <!-- いいねボタン -->
                  <v-btn
                    icon
                    color="pink"
                    @click="addCount(booklikes)"
                  >
                  <v-icon>mdi-heart</v-icon>
                  {{ booklikes.counts }}
                  <!-- {{ $store.state.count }} -->
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
    books: Array,
  },
  data() {
    return {
      booklikes: [],
    }
  },
  methods: {
    addCount() {
      this.booklikes.push({ 
        
        })
        this.booklikes.counts ++  
        console.log(this.booklikes.counts);
    },
    deliteLocalStorage() {
      this.$emit('delete-local-storage')
    }
  },
}
  

</script>

<style scoped>

</style>
