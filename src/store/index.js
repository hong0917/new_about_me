import { createStore } from 'vuex'

export default createStore({
  state: {
    headerData:{
      name: "Lesser_Panda",
      position: "Backend Developer"
    },
    socialLink:{
      facebook: "https://www.facebook.com/profile.php?id=100003718911406",
      instagram: "https://www.instagram.com/inhongyou/",
      github: "https://github.com/hong0917"
    },
    portPolioItems:{
      item:{
        title: "이투스 - 다양한 강의를 제공하는 플렛폼",
        date: "2021.04.14 ~ 2021.11.25",
        description:"",
        review:"",
        useSkills:""
      },
      item:{
        title: "나이키 - 나이키 관련 판매 사이트",
        date: "2021.04.14 ~ 2021.11.25",
        description:"",
        review:"",
        useSkills:""
      },
      item:{
        title: "테스트 - 여차저차하는 그런저런 플렛폼 개발",
        date: "2021.04.14 ~ 2021.11.25",
        description:"",
        review:"",
        useSkills:""
      },
      item:{
        title: "하나은행 - 상담사들을 위한 챗봇 유지보수",
        date: "2021.04.14 ~ 2021.11.25",
        description:"",
        review:"",
        useSkills:""
      },
      item:{
        title: "이투스 - 다양한 강의를 제공하는 플렛폼",
        date: "2021.04.14 ~ 2021.11.25",
        description:"",
        review:"",
        useSkills:""
      },
      item:{
        title: "나이키 - 나이키 관련 판매 사이트",
        date: "2021.04.14 ~ 2021.11.25",
        description:"",
        review:"",
        useSkills:""
      },
      item:{
        title: "테스트 - 여차저차하는 그런저런 플렛폼 개발",
        date: "2021.04.14 ~ 2021.11.25",
        description:"",
        review:"",
        useSkills:""
      },
      item:{
        title: "하나은행 - 상담사들을 위한 챗봇 유지보수",
        date: "2021.04.14 ~ 2021.11.25",
        description:"",
        review:"",
        useSkills:""
      },
      item:{
        title: "이투스 - 다양한 강의를 제공하는 플렛폼",
        date: "2021.04.14 ~ 2021.11.25",
        description:"",
        review:"",
        useSkills:""
      },
      item:{
        title: "나이키 - 나이키 관련 판매 사이트",
        date: "2021.04.14 ~ 2021.11.25",
        description:"",
        review:"",
        useSkills:""
      },
      item:{
        title: "테스트 - 여차저차하는 그런저런 플렛폼 개발",
        date: "2021.04.14 ~ 2021.11.25",
        description:"",
        review:"",
        useSkills:""
      },
      item:{
        title: "하나은행 - 상담사들을 위한 챗봇 유지보수",
        date: "2021.04.14 ~ 2021.11.25",
        description:"",
        review:"",
        useSkills:""
      },
    },
    introMyself: "안녕하세요, 코딩이 즐거운 행복한 개발자입니다."
      +"저는 현재 백엔드 개발을 하고 있으며, 주로 JAVA 기반 백엔드 프레임워크를 다루고 있습니다.<br>"
      +"이곳은 저를 소개하는 동시에, 저의 개발 성장 일지를 기록하는 공간입니다.<br>"
      +"어떻게 보면 일종의 회고록으로도 볼 수 있겠네요. 😅<br>"
      +"저에게 문의할 사항이 있으면 언제든지 연락주셔도 좋습니다.<br>"
      +"감사합니다 !",
    myInfo:{
      name: "유인홍",
      age: "29",
      Address: "경기도 안양시",
      Email: "dbrlshddl@gmail.com",
      phone: "01034562345",
    },
    experience:{
      item:{
        title: "Freelancer",
        date: "2013 - present",
        description: "My current employment. Way better than the position before!"
      },
      item:{
        title: "Apple Inc.",
        date: "2011 - 2013",
        description: "My first employer. All the stuff I've learned and projects I've been working on."
      },
      item:{
        title: "Harvard University",
        date: "2008 - 2011",
        description: "A description of all the lectures and courses I have taken and my final degree?"
      },
    },
    mySkills:{
      skil:["JAVA","HTML","CSS","Python","Git","AWS","Docker","Oracle","Mysql","RabbitMQ"]
    },
    certificates:{
      item:{
        name: "정보처리산업기사",
        date: "2013 - present",
        description: "My current employment. Way better than the position before!"
      },
      item:{
        name: "리눅스 마스터 2급",
        date: "2011 - 2013",
        description: "My first employer. All the stuff I've learned and projects I've been working on."
      },
      item:{
        name: "운전면허증 2종",
        date: "2008 - 2011",
        description: "A description of all the lectures and courses I have taken and my final degree?"
      },
    },
    showView:{
      profileLeft: false,
      profileRight: false,
      intro: true,
      portpolio: false,
      portitem: false,
    }
  },
  mutations: {
    showMainView(state){
      state.showView.profileLeft = !state.showView.profileLeft;
      state.showView.profileRight = !state.showView.profileRight;
    },
    showContent(state,payload){
      var view = payload.view;
      switch(view){
        case "intro":
          state.showView.intro = true;
          state.showView.portpolio = false;
          state.showView.portitem = false;
          break;
        case "Portpolio":
          state.showView.intro = false;
          state.showView.portpolio = true;
          state.showView.portitem = false;
          break;
        case "portitem":
          state.showView.intro = false;
          state.showView.portpolio = true;
          state.showView.portitem = true;
          break;
      }
    }
  },
  actions: {
  },
  getters: {
    getHeaderData(state){
      return state.headerData;
    },
    getSocialLink(state){
      return state.socialLink;
    },
    getPolioItems(state){
      return state.portPolioItems;
    },
    getIntroMyself(state){
      return state.introMyself;
    },
    getMyInfo(state){
      return state.myInfo;
    },
    getExperience(state){
      return state.experience;
    },
    getMySkills(state){
      return state.mySkills;
    },
    getCertificates(state){
      return state.certificates;
    },
    getViews(state){
      return state.showView;
    },
  },
  modules: {
  }
})
