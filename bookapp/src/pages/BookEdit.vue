<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-row>
            <v-col cols="4">
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="8" class="book__template">
              <v-card-title class="book__title">
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
                v-model="book.date"
                readonly
                v-bind="attrs"
                v-on="on"
              >
              </v-text-field>
              </template>
              <v-date-picker 
                v-model="book.date" 
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
                テーマに対しどのような事例を<br>出しているか：<v-textarea
                class="mx-2" 
                v-model="book.examples"
                rows="3">
                {{ book.examples }}
              </v-textarea>
                この本が他の本と似ているところ<br>違う要素は何か：<v-textarea
                class="mx-2" 
                v-model="book.different"
                rows="3">
                {{ book.different }}
              </v-textarea>
              <v-card-actions>
                <v-btn color="secondary" to="/bookindex">一覧に戻る</v-btn>
                <!-- 投稿した本のuserIdとログイン中のuserIdが同じなら投稿ボタンを表示 -->
                <v-btn 
                v-if="book.userId === this.$store.state.userId" 
                color="info" 
                @click="updateBookInfo"
                >
                投稿
                {{ books.userId}}
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
import firebase from '@/plugins/firebase'
// // const STORAGE_KEY = 'books'
const booksRef = firebase.database().ref('books')

console.log(booksRef);



export default {
  name:'BookEdit',
  props:{
    books:Array
  },
  data(){
    return{

      // 1つの本の情報を格納
      book:'',
      date: '',
      menu: false,
    }
  },
  methods:{
    // 本の情報を更新する
    updateBookInfo(){
      // bookRef.set({
        
      // })
      // saveBooksにアクセスして保存
      this.saveBooks()
      // 保存した後にトップページに戻る
      this.$router.push('/bookindex')
      console.log(this.updateBookInfo);
    },
    // saveBooks() {
    //   // const parsed = JSON.stringify(this.books);
    //   localStorage.setItem(STORAGE_KEY, parsed);
    // },
  },
  computed: {
    getStateUser(state) {
      return state.user
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // `vm` を通じてコンポーネントインスタンスにアクセス
    vm.$nextTick(()=>{

      // クリックした箇所のデータをbookに入れる
      // vm.book = vm.books[vm.$route.params.id]
    const bookId = vm.$route.params.id;
      vm.book = vm.books.find((book) => book.id === bookId);
      
      if(vm.book.readDate){
        vm.date = vm.book.readDate
      } else {
        vm.date = new Date().toISOString().substr(0, 10)
      }
    })
  })
}
}
  // .then(() => {
  //   console.log('成功');
  // })
  // .catch(() => {
  //   console.log('失敗');
  // })
</script>

<style scoped>
  .error-message {
    text-align: center;
  }

@media (max-width: 576px) {
  .book__template {
    font-size: 0.8rem;
  }
}

</style>
