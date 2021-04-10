<template>
  <div>
    <v-row>
      <v-col cols="12">
        <!-- <span v-if="!isAuthenticatied"> -->
          <p class="error-message">
            ※投稿するには
            <v-btn 
              small outlined 
              color="primary" 
              to="/login">
            ログイン
            </v-btn
            >または
            <v-btn 
              small outlined 
              color="error" 
              to="/register">
            ユーザー登録</v-btn
            >
            が必要です
          </p>
        <!-- </span> -->
        <v-card class="mx-auto">
          <v-row>
            <v-col cols="4">
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>
                タイトル：{{ book.title }}
              </v-card-title>
              読んだ日：
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
              <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                readonly
                v-bind="attrs"
                v-on="on"
              >
              </v-text-field>
              </template>
              <v-date-picker 
                  v-model="date" 
                  @input="menu = false"
                  locale="jp-ja"
                  :day-format="date => new Date(date).getDate()">
              </v-date-picker>
              </v-menu>
                この本にはどんな情報が書かれているか：<v-textarea
                  class="mx-2" 
                  v-model="book.memo"
                  rows="3">
                  {{ book.memo }}
              </v-textarea>
                自分はこの本から何を学んだか：<v-textarea
                  class="mx-2" 
                  v-model="book.learn"
                  rows="3">
                  {{ book.learn }}
              </v-textarea>
                この本がなぜ重要なのか：<v-textarea
                  class="mx-2" 
                  v-model="book.important"
                  rows="3">
                  {{ book.important }}
              </v-textarea>
                テーマに対しどのような事例を出しているか：<v-textarea
                  class="mx-2" 
                  v-model="book.examples"
                  rows="3">
                  {{ book.examples }}
              </v-textarea>
                この本が他の本と似ている所、違う要素は何か：<v-textarea
                  class="mx-2" 
                  v-model="book.different"
                  rows="3">
                  {{ book.different }}
              </v-textarea>
              <v-card-actions>
                <v-btn color="secondary" to="/">一覧に戻る</v-btn>
                <v-btn color="info" 
                @click="updateBookInfo">投稿する</v-btn>
                
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
  name:'BookEdit',
  props:{
    books:Array
  },
  data(){
    return{
      book:'',
      date: '',
      menu: false,
    }
  },
  methods:{
    updateBookInfo(){
      // 本の情報を更新する
      this.$emit('update-book-info',{
        id: this.$route.params.id,
        readDate: this.date,
        memo: this.book.memo,
        start: this.book.start,
        learn: this.book.learn
      })
    },
  },
  beforeRouteEnter (to, from, next) {
  next(vm => {
    // `vm` を通じてコンポーネントインスタンスにアクセス
    vm.$nextTick(()=>{
      vm.book = vm.books[vm.$route.params.id]
      if(vm.book.readDate){
        vm.date = vm.book.readDate
      } else {
        vm.date = new Date().toISOString().substr(0, 10)
      }
    })
  })
}
}
</script>

<style scoped>
  .error-message {
    text-align: center;
  }
</style>