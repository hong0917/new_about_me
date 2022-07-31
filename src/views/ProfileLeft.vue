<template>
  <div class="profile_left">
      <div class="site_header">
        <div class="header_photo">
          <img src="../assets/img/KakaoTalk_20220720_215121441_01.jpg" alt="photo">
        </div>
        <div class="header_title">
          <h2>Lesser_Panda</h2>
          <h4>Backend Developer</h4>
        </div>
        <div class="header_btn">
          <button class="call_btn" @click="copyEmail()">Contact Me</button>
        </div>
      </div>

      <div class="main_menu">
      <div class="main_menu_social">
        <ul class="social-links">
          <li><a href="https://www.facebook.com/profile.php?id=100003718911406"><img class="icon" src="../assets/img/facebook.png" alt="facebook_icon"></a></li>
          <li><a href="https://www.instagram.com/inhongyou/"><img class="icon" src="../assets/img/premium-icon-instagram-3991634.png" alt="instagram_icon"></a></li>
          <li><a href="https://github.com/hong0917"><img class="icon" src="../assets/img/free-icon-github-sign-25657.png" alt="github_icon"></a></li>
        </ul>
      </div>

      <div class="main_menu_nav">
        <ul class="nav">
          <li><button><img class="icon" src="../assets/img/back.png" alt="back_icon"></button></li>
          <li><button><img class="icon" src="../assets/img/next.png" alt="next_icon"></button></li>
        </ul>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileLeft',
  data(){
    return{
    
    }
  },
  methods:{
    copyEmail(){
      alert("이메일 주소가 복사되었습니다.")
    }
  }
}
</script>

