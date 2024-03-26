<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css/pagination';
import "swiper/css";
import { ref } from "vue";


let valid = true

const onSwiper = (swiper) => {
  console.log(swiper.activeIndex);
}



function ariza(item) {
  console.log('asddas');
  if(item == 'hidden'){
    document.querySelector(".need").click()
  }
}

let animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}



</script>
<template>
  <main class="h-[100vh] z-[3]">
    <swiper :direction="'vertical'" @swiper="onSwiper" class="mySwiper swiperboss">
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
            <label for="my_modal_7"
              class="ariza flex items-center justify-center bg-gradient-to-r from-blue to-green w-[138px] h-[45px]  rounded-[22px] font-[Montserrat] font-[1000] text-[12px] relative text-white">
              Barcha Univ
              <div class="wave"></div>
            </label>

            <!-- modal  -->
            <input type="checkbox" id="my_modal_7" class="modal-toggle" />
            <div class="modal openariza" role="dialog">
              <div class="modal-box openarizawrp">
                <label for="my_modal_7"
                  class="absolute right-[20px] text-[#5c5c5c] text-[25px] top-[15px]">&times;</label>
                <h3
                  class="font-[1000] mb-[20px] text-[30px] font-[Montserrat] bg-gradient-to-r from-blue to-green bg-clip-text text-transparent ">
                  Universitetlar</h3>


                <div class="mb-[10px]">
                  <span class="text-white font-[Montserrat] mb-[2px] text-[12px]">Yo'nalishlar</span>
                  <select class="select  bg-[#333] text-white w-full max-w-xs">
                    <option selected>Barchasi</option>
                    <option>Информационные технологии и системы </option>
                    <option>Информационные технологии и системы </option>
                    <option>Электроэнергетика и электротехника </option>
                    <option>Автодорожный и железнодорожный </option>
                    <option>Экономика и Менеджмент </option>
                    <option>Психология </option>
                    <option>Гуманитарное</option>
                    <option>Физическая культура </option>
                    <option>Нефт и газ</option>
                    <option>Лингвистика </option>
                    <option>Медицина </option>
                  </select>
                </div>
                <div class="mb-[20px]">
                  <span class="text-white font-[Montserrat] mb-[2px] text-[12px]">Fakultet</span>
                  <select class="select  bg-[#333] text-white w-full max-w-xs">
                    <option selected>Barchasi</option>
                    <option>Информационные технологии и системы </option>
                    <option>Информационные технологии и системы </option>
                    <option>Электроэнергетика и электротехника </option>
                    <option>Автодорожный и железнодорожный </option>
                    <option>Экономика и Менеджмент </option>
                    <option>Психология </option>
                    <option>Гуманитарное</option>
                    <option>Физическая культура </option>
                    <option>Нефт и газ</option>
                    <option>Лингвистика </option>
                    <option>Медицина </option>
                  </select>
                </div>

                <div class="mb-[20px]">
                  <p class="text-white font-[Montserrat] mb-[4px] text-[12px]">Shahar</p>
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <label for="mosk" class="text-white mr-[10px] font-[Montserrat]">Moskva</label>
                      <input id="mosk" checked type="radio" name="radio-1" class="radio border-blue" />
                    </div>
                    <div class="flex items-center">
                      <label for="pit" class="text-white mr-[10px] font-[Montserrat]">Sankt-peterburg</label>
                      <input id="pit" type="radio" name="radio-1" class="radio border-blue" />
                    </div>
                  </div>
                </div>

                <div class="mb-[10px]">
                  <span class="text-white font-[Montserrat] mb-[2px] text-[12px]">O'qish turi</span>
                  <select class="select  bg-[#333] text-white w-full max-w-xs">
                    <option selected>Barchasi</option>
                    <option>Kunduzgi</option>
                    <option>Kechgi</option>
                    <option>Sritqi</option>
                  </select>
                </div>


                <div class="modal-action w-[100%]">
                  <div @click="ariza()" class="arizaBtn overflow-hidden relative">
                    <div onclick="my_modal_99.showModal()" class="btnbtnbtn">
                      <label for="my_modal_7" class="font-[1000] arizatext font-[Montserrat] text-[18px] bg-gradient-to-r from-blue to-green
                        bg-clip-text text-transparent">
                        Qidirish
                      </label>
                    </div>
                    <!-- <img src="../assets//images/btn.png" alt=""> -->
                  </div>
                </div>
              </div>
            </div>


            <dialog id="my_modal_99" class="modal openariza">
              <div style="padding: 18px;" class="modal-box openarizawrp flex flex-col justify-between">
                <form class="absolute right-[0px]" method="dialog">
                  <button class="btn need text-white btn-sm btn-circle btn-ghost absolute right-[30px] top-[0px]">✕</button>
                </form>
                <h3 class="font-[1000] text-[25px] font-[Montserrat] bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">Qidiruv natijasi</h3>


                <div class="overflow-x-auto mt-[25px] text-white">
                  <table class="table">
                    <!-- head -->
                    <thead>
                      <tr class="text-white">
                        <th>Nomi</th>
                        <th>Yo'nalish</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- row 1 -->
                      <tr>
                        <td>1. МГУ</td>
                        <td>Texnologiya</td>
                        <td>
                          <div class="badge badge-accent">info</div>
                      </td>
                      </tr>
                      <!-- row 1 -->
                      <tr>
                        <td>2. RUDN</td>
                        <td>Texnologiya</td>
                        <td>
                          <div class="badge badge-accent">info</div>
                      </td>
                      </tr>
                      <tr>
                        <td>2. RUDN</td>
                        <td>Texnologiya</td>
                        <td>
                          <div class="badge badge-accent">info</div>
                      </td>
                      </tr>
                      <tr>
                        <td>2. RUDN</td>
                        <td>Texnologiya</td>
                        <td>
                          <div class="badge badge-accent">info</div>
                      </td>
                      </tr>
                      <!-- row 1 -->
                      <tr>
                        <td>3. Медицинский</td>
                        <td>Texnologiya</td>
                        <td>
                          <div class="badge badge-accent">info</div>
                      </td>
                      </tr>
                      <!-- row 1 -->
                      <tr>
                        <td>4. Боткина</td>
                        <td>Texnologiya</td>
                        <td>
                          <div class="badge badge-accent">info</div>
                      </td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>

                <div @click="ariza('hidden')" class="arizaBtn mt-[30px] overflow-hidden relative">
                    <div class="btnbtnbtn">
                      <label for="my_modal_6"
                        class="font-[1000] arizatext font-[Montserrat] text-[18px] bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
                        Ko'proq ma'lumot olish</label>
                    </div>
                  </div>
              </div>
            </dialog>


            <label for="my_modal_6"
              class="top-10u relative flex items-center justify-center bg-gradient-to-r from-blue to-green bg-clip-text text-transparent w-[150px] h-[45px]  rounded-[22px] font-[Montserrat] font-[1000] text-[12px]">Ariza
              qoldirish</label> 

            <!-- Put this part before </body> tag -->
            <input type="checkbox" id="my_modal_6" class="modal-toggle" />
            <div class="modal openariza" role="dialog">
              <div class="modal-box flex flex-col  justify-between items-center openarizawrp">
                <label for="my_modal_6"
                  class="absolute right-[20px] text-[#5c5c5c] text-[25px] top-[15px]">&times;</label>
                <div class="h-[64px] mb-[20px] flex items-center justify-center w-[64px] bg-[white] rounded-[100%]">
                  <img src="../assets/images/2logo.svg" alt="">
                </div>
                <div class="w-[100%] text-center">
                  <h3
                    class="font-[1000] font-[Montserrat] mb-[6px] text-[20px] bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
                    HUMO O'QUV MARKAZI</h3>
                  <div class="arizaline mb-[20px]"></div>
                </div>
                <div class="w-[100%] arizainpwrp">
                  <input placeholder="+7 (999) 777-77-77" type="text"
                    class="h-[50px] w-[100%] arizainput font-[Montserrat] pl-[10px] font-[700] rounded-[6px]">
                </div>
                <div class="w-[100%] arizainpwrp">
                  <input placeholder="Ivan Ivanov" type="text"
                    class="h-[50px] w-[100%] arizainput font-[Montserrat] pl-[10px] font-[700] rounded-[6px]">
                </div>
                <p class="mt-[12px] text-[#5c5c5c] text-[13px]">Ariza qoldirganingizdan so`ng tez orada siz bilan admin
                  bog`lanadi.</p>
                <div class="modal-action w-[100%]">
                  <div @click="ariza()" class="arizaBtn overflow-hidden relative">
                    <div class="btnbtnbtn">
                      <label for="my_modal_6"
                        class="font-[1000] arizatext font-[Montserrat] text-[18px] bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
                        Ariza qoldirish</label>
                    </div>
                    <!-- <img src="../assets//images/btn.png" alt=""> -->
                  </div>

                  <!-- надо сюда кликать -->
                  <label for="my_modal_6"></label>
                </div>
              </div>
            </div>

          </div>
          <div>
            <!-- <button class="btn" onclick="my_modal_3.showModal()">open modal</button> -->

          </div>
          <div class="h-[250px] border-white overflow-hidden border-[1px] rounded-[10px] mt-[30px] w-[100%]">
            <iframe class="w-[100%] h-[100%]" src="https://www.youtube.com/embed/95MObjlb2KM"
              title="Rus tilida 1000ta fe&#39;lning aytilishi (1-qism)! +79099022030 Rus tili guruhiga yozilish"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
              <span>10 yildan ortiq tajriba va <span class="text-green">500</span> dan ortiq abiturient biga
                ishondi</span>
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
        <div
          class="h-[126px] w-[100%] flex flex-col relative justify-between bg-green p-[17px] border-white border mt-[-1px]">
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
              <span
                class="bg-gradient-to-r from-blue to-green bg-clip-text text-transparent text-[12px] font-[Montserrat] font-[1000]">+7
                (123) 123-23-33 - Will Smith</span>
              <button
                class="bg-gradient-to-r from-blue to-green text-[10px] font-[Montserrat] px-[10px] py-[10px] rounded-[30px] font-[1000]">Позвонить</button>
            </div>
            <div class="flex justify-between items-center">
              <span
                class="bg-gradient-to-r from-blue to-green bg-clip-text text-transparent text-[12px] font-[Montserrat] font-[1000]">+7
                (123) 123-23-33 - Will Smith</span>
              <button
                class="bg-gradient-to-r from-blue to-green text-[10px] font-[Montserrat] px-[10px] py-[10px] rounded-[30px] font-[1000]">Позвонить</button>
            </div>
          </div>
        </div>
        <div class="w-[100%]">
          <div class="font-[druk] text-[18px] p-[15px] text-white border">Bizni ijtimoiy tarmoqlarda kuzating:</div>
          <div class="flex justify-between p-[17px] text-white border mt-[-1px]">
            <div
              class="flex items-center justify-center bg-gradient-to-r from-[#FF2C69] to-[#8816FE] w-[24%] rounded-[30px] py-[5px]">
              <img src="../assets/images/inst.png" alt="">
            </div>
            <div
              class="flex items-center justify-center bg-gradient-to-r from-blue to-green w-[24%] rounded-[30px] py-[5px]">
              <img src="../assets/images/tg.png" alt="">
            </div>
            <div
              class="flex items-center justify-center bg-gradient-to-r from-[#FF0000] to-[#A30101] w-[24%] rounded-[30px] py-[5px]">
              <img src="../assets/images/you.png" alt="">
            </div>
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

.openariza {
  backdrop-filter: blur(10px);
}

.openarizawrp {
  min-height: 470px;
  background: #1F1F1F;
  border: 1px solid #4e4e4e;
  background-image: url('../assets/images/baby.png');
  background-size: contain !important;
  background-repeat: no-repeat;
}

.arizaBtn {
  background: #222222;
  width: 100%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.402);
  height: 50px;
  border: 1px solid #3e3e3e;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arizaBtn .btnbtnbtn {
  width: calc(100% - 8px);
  border-radius: 6px;
  height: 40px;
  background: linear-gradient(90deg, transparent, #515151);
  position: relative;
}

.arizaBtn .btnbtnbtn::after {
  content: '';
  left: 50%;
  border-radius: 5px;
  top: 50%;
  z-index: 0;
  transform: translate(-50%, -50%);
  position: absolute;
  background: #222222;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
}

.arizatext {
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translate(-50%, -50%);
}

.arizaline {
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, #1697FA, #22edc4);
}

.arizainput {
  outline: none;
  color: white;
  background: linear-gradient(90deg, #232323, #454545);
}

.arizainput::placeholder {
  color: #454545;
}

.arizainpwrp {
  background: linear-gradient(90deg, #5c5c5c, rgb(83, 83, 83));
  ;
  padding: 1px;
  border-radius: 5px;
}
</style>
