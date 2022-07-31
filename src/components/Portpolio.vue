<template>
  <div class="portpolio" id="side">
    <div class="title">
    <h2 class="mid_title">Portfolio</h2>
    </div>

    <div class="list">
      <ul>
        <li @click="changeItem()">
          <div class="item">
            <h3 class="item_title">이투스 - 다양한 강의를 제공하는 플렛폼 </h3>
            <span class="item_date">2021.04.14 ~ 2021.11.25</span>
          </div>
        </li>
        <li @click="changeItem()">
          <div class="item">
            <h3 class="item_title">나이키 - 나이키 관련 판매 사이트 </h3>
            <span class="item_date">2021.04.14 ~ 2021.11.25</span>
          </div>
        </li>
        <li @click="changeItem()">
          <div class="item">
            <h3 class="item_title">테스트 - 여차저차하는 그런저런 플렛폼 개발 </h3>
            <span class="item_date">2021.04.14 ~ 2021.11.25</span>
          </div>
        </li>
        <li @click="changeItem()">
          <div class="item">
            <h3 class="item_title">하나은행 - 상담사들을 위한 챗봇 유지보수 </h3>
            <span class="item_date">2021.04.14 ~ 2021.11.25</span>
          </div>
        </li>
        <li @click="changeItem()">
          <div class="item">
            <h3 class="item_title">이투스 - 다양한 강의를 제공하는 플렛폼 </h3>
            <span class="item_date">2021.04.14 ~ 2021.11.25</span>
          </div>
        </li>
        <li @click="changeItem()">
          <div class="item">
            <h3 class="item_title">나이키 - 나이키 관련 판매 사이트 </h3>
            <span class="item_date">2021.04.14 ~ 2021.11.25</span>
          </div>
        </li>
        <li @click="changeItem()">
          <div class="item">
            <h3 class="item_title">테스트 - 여차저차하는 그런저런 플렛폼 개발 </h3>
            <span class="item_date">2021.04.14 ~ 2021.11.25</span>
          </div>
        </li>
        <li @click="changeItem()">
          <div class="item">
            <h3 class="item_title">하나은행 - 상담사들을 위한 챗봇 유지보수 </h3>
            <span class="item_date">2021.04.14 ~ 2021.11.25</span>
          </div>
        </li>
        <li @click="changeItem()">
          <div class="item">
            <h3 class="item_title">이투스 - 다양한 강의를 제공하는 플렛폼 </h3>
            <span class="item_date">2021.04.14 ~ 2021.11.25</span>
          </div>
        </li>
        <li @click="changeItem()">
          <div class="item">
            <h3 class="item_title">나이키 - 나이키 관련 판매 사이트 </h3>
            <span class="item_date">2021.04.14 ~ 2021.11.25</span>
          </div>
        </li>
        <li @click="changeItem()">
          <div class="item">
            <h3 class="item_title">테스트 - 여차저차하는 그런저런 플렛폼 개발 </h3>
            <span class="item_date">2021.04.14 ~ 2021.11.25</span>
          </div>
        </li>
        <li @click="changeItem()">
          <div class="item">
            <h3 class="item_title">하나은행 - 상담사들을 위한 챗봇 유지보수 </h3>
            <span class="item_date">2021.04.14 ~ 2021.11.25</span>
          </div>
        </li>
      </ul>
    </div>
    <transition name="fade">
    <PortItem v-if="showItem"></PortItem>
    </transition>
  </div>
</template>

<script>
import PortItem from '../components/PortItem.vue'

export default {
  name: 'portpolio',
  data(){
    return{
      showItem:false
    }
  },
  components:{
    PortItem
  },
  methods:{
    changeItem(){
      this.showItem = !this.showItem
    }
  }
}
</script>

<style >

</style>
