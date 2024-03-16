<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css/pagination';
import "swiper/css";

setTimeout(() => {
    
}, 1000);

</script>
<template>
  <main class="h-[100vh] z-[3]">
    <swiper :direction="'vertical'" class="mySwiper">
      <swiper-slide class="px-[20px]">
        <div class="w-[100%]">
          <h1
            class="bg-gradient-to-r from-blue to-green bg-clip-text text-transparent text-[40px] font-[Montserrat] font-[1000] leading-[40px] mb-[6px]">
            ROSSIYADA
            <img class="inline-block h-[31px] mt-[-20px]" src="../assets/images/russia.png" alt="russia"> <br>
            UNIVERSITET
          </h1>
          <span class="text-white font-[Montserrat] leading-[15px] font-[600] text-[12px]">Tanlashga qiynalyapsizmi ?
            Bizda yechim bor. Rossiyaning barcha universitetlarida o`qing</span>
          <p class="text-white text-[10px] font-[Montserrat] font-[300] mt-[21px]">Qiziqishingizga qarab universitet
            tanlang va rus tilini o`rganib oliy ma`lumotga ega boling.</p>
          <div class="mt-[29px] flex gap-[10px]">
            <button
              class="ariza bg-gradient-to-r from-blue to-green w-[138px] h-[45px]  rounded-[22px] font-[Montserrat] font-[1000] text-[12px] relative text-white">Ariza
              Qoldirish <div class="wave"></div></button>
            <button
              class="top-10u relative bg-gradient-to-r from-blue to-green bg-clip-text text-transparent w-[150px] h-[45px]  rounded-[22px] font-[Montserrat] font-[1000] text-[12px]">Top
              10 Universitet</button>
          </div>

          <div class="h-[250px] border-white border-[1px] rounded-[10px] mt-[30px] w-[100%]">
            <swiper   :space-between="5" :direction="'horizontal'" class="mySwiper2 rounded-[10px]">
              <swiper-slide class="h-[100%] flex flex-col">
                <div
                  style="background-image: url('https://энергия-единой-сети.рф/wp-content/uploads/2023/10/tpu-konferencziya-678x381.jpg');"
                  class="h-[70%] flex items-end p-[10px] bg-cover bg-center w-[100%]">
                  <p class="shadows font-[Montserrat] font-[1000] ">Электроэнергетика и электротехника</p>
                </div>
                <div class="h-[30%] w-[100%] p-[10px] flex flex-col justify-between">
                  <p class="text-white font-[Montserrat]">Ta`lim: Kunduzgi, Sirtqi, Onlayn</p>
                  <div class="flex gap-2">
                    <button
                      class="py-[2px] font-[600] px-[10px] rounded-[20px] font-[Montserrat] text-[10px] bg-gradient-to-r from-blue to-green">Grant</button>
                    <button
                      class="py-[2px] font-[600] px-[10px] rounded-[20px] font-[Montserrat] text-[10px] bg-gradient-to-r from-blue to-green">Kontrakt
                      90.000₽ ~ 300.000₽ </button>
                  </div>
                </div>


              </swiper-slide>
              <swiper-slide v-for="item of 10" :key="item.id" class="h-[100%] flex flex-col">
                <div
                  style="background-image: url('https://cdn.tripster.ru/thumbs2/31e059f8-92ba-11ed-882c-d6f107627fa6.1220x600.jpeg');"
                  class="h-[70%] flex items-end p-[10px] bg-cover bg-center w-[100%]">
                  <p class="shadows font-[Montserrat] font-[1000] ">Информационные технологии и системы</p>
                </div>
                <div class="h-[30%] w-[100%] p-[10px] flex flex-col justify-between">
                  <p class="text-white font-[Montserrat]">Ta`lim: Kunduzgi, Sirtqi, Onlayn</p>
                  <div class="flex gap-2">
                    <button
                      class="py-[2px] font-[600] px-[10px] rounded-[20px] font-[Montserrat] text-[10px] bg-gradient-to-r from-blue to-green">Grant</button>
                    <button
                      class="py-[2px] font-[600] px-[10px] rounded-[20px] font-[Montserrat] text-[10px] bg-gradient-to-r from-blue to-green">Kontrakt
                      60.000₽ ~ 250.000₽ </button>
                  </div>
                </div>


              </swiper-slide>
            </swiper>
          </div>

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="down-arrow">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </swiper-slide>
      <swiper-slide class="px-[20px]">
        <div class="h-[max-content] min-h-[400px]  w-[100%] flex flex-col">
          <div class="p-[17px] font-[druk] text-[20px] font-[1000] text-white border">
            Nega aynan bizni tanlashadi ?
          </div>
          <ol class="border-white border flex-1 p-[17px]">
            <li v-for="item of 6" :key="item.id"
              class="text-white mb-[15px] font-[400] font-[Montserrat] flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 mr-[10px]  text-blue">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
              <span>10 yildan ortiq tajriba va <span class="text-green">500</span> dan ortiq abiturient biga ishondi</span>
            </li>

          </ol>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="down-arrow">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </swiper-slide>
      <swiper-slide class="px-[20px] flex flex-col">
        <div class="h-[126px] w-[100%] flex flex-col relative justify-between bg-blue p-[17px] border-white border">
          <span class="font-[druk] text-[12px] ">Byujedlar soni</span>
          <article class="font-[druk] text-[35px]">2275+</article>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 absolute right-[7px] bottom-[7px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
          </svg>

        </div>
        <div class="h-[126px] w-[100%] flex flex-col relative justify-between bg-green p-[17px] border-white border mt-[-1px]">
          <span class="font-[druk] text-white text-[12px] ">Kontrakt soni</span>
          <article class="font-[druk] text-white text-[35px]">3722+</article>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 text-white absolute right-[7px] bottom-[7px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
          </svg>

        </div>
        <div class="h-[126px] w-[100%] flex flex-col relative justify-between border-white p-[17px] border mt-[-1px]">
          <span class="font-[druk] text-[12px] text-white">Universitetlar soni</span>
          <article class="font-[druk] text-[35px] text-white">2377+</article>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 text-white absolute right-[7px] bottom-[7px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
          </svg>

        </div>
      </swiper-slide>
      <swiper-slide style="justify-content: space-evenly;" class="flex px-[20px] flex-col">
        <div class="w-[100%] text-white">
          <div class="font-[druk] text-[18px] p-[15px] border">Bizning raqamlar:</div>
          <div class="p-[15px] text-white border mt-[-1px]">
            <div class="flex justify-between items-center mb-[20px]">
              <span class="bg-gradient-to-r from-blue to-green bg-clip-text text-transparent text-[12px] font-[Montserrat] font-[1000]">+7 (123) 123-23-33 - Will Smith</span>
              <button class="bg-gradient-to-r from-blue to-green text-[10px] font-[Montserrat] px-[10px] py-[10px] rounded-[30px] font-[1000]">Позвонить</button>
            </div>
            <div class="flex justify-between items-center">
              <span class="bg-gradient-to-r from-blue to-green bg-clip-text text-transparent text-[12px] font-[Montserrat] font-[1000]">+7 (123) 123-23-33 - Will Smith</span>
              <button class="bg-gradient-to-r from-blue to-green text-[10px] font-[Montserrat] px-[10px] py-[10px] rounded-[30px] font-[1000]">Позвонить</button>
            </div>
          </div>
        </div>
        <div class="w-[100%]">
          <div class="font-[druk] text-[18px] p-[15px] text-white border">Bizni ijtimoiy tarmoqlarda kuzating:</div>
          <div class="flex justify-between p-[17px] text-white border mt-[-1px]">
            <div class="flex items-center justify-center bg-gradient-to-r from-[#FF2C69] to-[#8816FE] w-[24%] rounded-[30px] py-[5px]"><img src="../assets/images/inst.png" alt=""></div>
            <div class="flex items-center justify-center bg-gradient-to-r from-blue to-green w-[24%] rounded-[30px] py-[5px]"><img src="../assets/images/tg.png" alt=""></div>
            <div class="flex items-center justify-center bg-gradient-to-r from-[#FF0000] to-[#A30101] w-[24%] rounded-[30px] py-[5px]"><img src="../assets/images/you.png" alt=""></div>
          </div>
        </div>
      </swiper-slide>

    </swiper>
  </main>
</template>

<style>
.down-arrow {
  height: 20px;
  position: absolute;
  bottom: 70px;
  color: white;
}

.wave {
  position: absolute;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  box-sizing: content-box;
  border: 0px solid #1697FA;
  width: 100%;
  background: transparent;
  animation-name: wave;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes wave {
  0% {
    border: 0px solid #1697fa;
    opacity: 1;
  }

  100% {
    border: 10px solid #1697fa4d;
    opacity: 0;
  }
}

.shadows {
  color: #1697FA;
  text-shadow: 1px 1px 0px black;
}

main {
  background-image: url("../assets/images/mask.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}

.top-10u {
  cursor: pointer;
  border: 1px solid #4e4e4e;
  /* [150px] h-[45px] */
}

.top-10u::after {
  content: '';
  position: absolute;
  border-radius: 22px;
  width: 144px;
  left: 2px;
  top: 2px;
  height: 38px;
  background: linear-gradient(90deg, transparent, #22edc44b);
}

.ariza {
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.658);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: initial;
}

#app {
  height: 100%;
}

html,
body {
  position: relative;
  height: 100%;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
