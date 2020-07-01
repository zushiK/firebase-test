<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li v-for="(img,index) in images" :key='index' @click="show(index)">
        <img :src="img.thumb">
      </li>
    </ul>
    <ImageLightBox
      ref="lightBox"
      :media="images"
      :show-light-box="true"
      :show-caption="true"></ImageLightBox>
    </div>
</template>

<script>
import ImageLightBox from 'vue-image-lightbox';

export default {
  name: 'App',
  components: {
      ImageLightBox
  },
  data: function(){
    return {
      images: [
        {
          thumb: 'https://dummyimage.com/150x150/fcc/000.png&text=thumb1',
          src: 'https://dummyimage.com/600x600/fcc/000.png&text=Uploaded1',
          caption: 'キャプション1',
          width: 800, // required
          height: 600, // required
        },
        {
          thumb: 'https://dummyimage.com/150x150/fcc/000.png&text=thumb2',
          src: 'https://dummyimage.com/600x600/fcc/000.png&text=Uploaded2',
          caption: 'キャプション2',
          width: 800, // required
          height: 600, // required
        },
        {
          thumb: 'https://dummyimage.com/150x150/fcc/000.png&text=thumb3',
          src: 'https://dummyimage.com/600x600/fcc/000.png&text=Uploaded3',
          caption: 'キャプション3',
          width: 800, // required
          height: 600, // required
        }
      ]
    }
  },
  mounted: function () {
    console.log(this.$refs.lightBox)
  },
  methods: {
    show: function(index){
      console.log(this.$refs,index);
      this.$refs.lightBox.showImage(index);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  padding: 20px;
  font-family: Helvetica;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}

li {
  display:inline-block;
  border:1px solid #ddd;
  margin: 5px;
}
</style>
