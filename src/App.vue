<template>
  <div class="bg">
    <!-- 별똥별 배경 -->
    <div class="star comet">
    </div>

    <!-- 메인 화면 -->
    <transition name="fade">
      <div class="profile" v-show="showView">
        <ProfileLeft/>
        <ProfileRight/>
      </div>
    </transition>
    
    <!-- copyright -->
    <transition name="fade">
      <div class="copyright" v-show="showView">
        <span>© 2022 All rights reserved.</span>
      </div>
    </transition>
    
  </div>
</template>

<script>
import ProfileLeft from './view/ProfileLeft.vue'
import ProfileRight from './view/ProfileRight.vue'

export default {
  name: 'App',
  components: {
    ProfileRight,
    ProfileLeft
  },
  data(){
    return{
      showView:false
    }
  },
  mounted(){
    setTimeout(this.changeView,500)
  },
  methods:{
    changeView(){
        this.showView = !this.showView
    },
  }
}
</script>
