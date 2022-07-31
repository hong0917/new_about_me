<template>
  <div class="profile_right" id="side">
    <transition name="slide-fade" mode="out-in">
      <div class="site_content" v-show="showEffect">
        <Intro v-show="showView.introView"></Intro>
        <Portpolio v-show="showView.portpolio"></Portpolio>
      </div>
    </transition>
      <button class="btn" @click="oparEffect()">임시버튼</button>
  </div>
</template>

<script>
import Intro from '../components/Intro.vue'
import Portpolio from '../components/Portpolio.vue' 

export default {
  name: 'ProfileRight',
  data(){
    return{
      showView:{
        introView:true,
        portpolio:false,
      },
      showEffect:true
    }
  },
  components:{
    Intro,
    Portpolio
  },
  methods:{
    changeView(){
      this.showView.introView = !this.showView.introView;
      this.showView.portpolio = !this.showView.portpolio;

      this.showEffect = !this.showEffect;
    },
    oparEffect(){
      this.showEffect = !this.showEffect;
      setTimeout(this.changeView,500)
    }
  }
}
</script>

<style>
  .btn{ position: absolute; bottom: 20px; right: 30px; border: 1px solid red; z-index: 1000; background-color: red; color: white;}
</style>>

