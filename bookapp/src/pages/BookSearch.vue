<template>
  <div>
    <v-row>
      <v-col cols=6>
        <v-text-field 
          label="本を検索する"
          v-model="keyword"
          class="search__text"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn
          color="primary"
          @click="search(keyword)">
          検索
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn
          color:
          to="/bookindex"
          >一覧に戻る
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <!-- カードを表示 -->
      <v-col 
        cols="12" 
        md="6"
        class="mb-5"
        v-for="(book,index) in searchResults" 
        :key="book.index"
      >
        <!-- mx-autoでmargin横幅の自動調整 -->
        <v-card class="mx-auto">
          <v-row>
            <!-- 画像のサイズ -->
            <v-col cols="4">
              <v-img :src="book.image"></v-img>
            </v-col>
            <!-- 写真以外の情報 -->
            <v-col cols="8">
              <v-card-title>
                {{ book.title}}
              </v-card-title>
              {{ book.description }}
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn 
                  class="mx-2" 
                  fab dark color="indigo"
                  @click="addBookList(index)"
                >
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
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
  name: 'BookSearch',
  data(){
    return {
      keyword:'',
      searchResults:[],
    }
  },
  methods:{
    // 修正前 ここから
    // ======================================================
    addBookList(index) {
      // クリックした箇所を指定
      this.$emit('add-book-list',this.searchResults[index]) 
    // =====================================================
    // ここまで
    },
    // 修正後 ここから
    // ===========================================================
    // addBookList(value) {
    // //   // クリックした箇所を指定
    //   this.$emit('add-book-list',value)
    // },
    // ここまで
    // ===========================================================
    async search(keyword){
      // GoogleBookApiのURLを作成（クエリーストリングを作成）
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?'
    // オブジェクト形式でparamsを作成
      const params = {
        q: `intitle:${keyword}`,
        // 検索結果を40件取得する
        maxResults:40,
    }
    
    // urlを作成してオブジェクトの中にkeyとvalueを設定
    const queryParams = new URLSearchParams(params)
    console.log(baseUrl + queryParams);
    // fetchでJSON取得
    // fetchでqueryParamsを追加。パラメーター付きのURLを取得
    const response = await fetch(baseUrl + queryParams)
    .then( response => response.json())
      
    // 必要な情報を配列にpush
    for(let book of response.items ){
      
      // タイトルを取得
      let title = book.volumeInfo.title
      // 画像を取得
      let img = book.volumeInfo.imageLinks
      // 詳細を取得
      let description = book.volumeInfo.description
      this.searchResults.push({
        title: title ? title : '',
        image: img ? img.thumbnail : '',
        description: description ? description.slice(0, 40) : ''
      })
    }
    
  }
}
}
</script>

<style scoped>
.search__text {
  padding: 20px 0 0 20px;
}
@media (max-width: 576px) {
  .search__text {
    padding-left: 10px;
  }
}
</style>
