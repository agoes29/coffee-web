<template>
  <div class="container absolute w-full h-full text-center top-1/3 left-0 mx-auto font-sans">
    <h1 class="relative text-center font-sans">Click The Menu</h1>
    <p class="text-xl">D'Ice Digital</p>
    <!-- Everything below this is part of the menu-->
  </div>
  <div
    class="button fixed top-5 right-2 h-7 w-9 cursor-pointer z-50 transition-opacity duration-300 ease-in-out  hover:opacity-[0.7]"
    id="toggle" @click="toggle" :class="{ active: isToggleActive }">
    <span
      class="top bg-[#1abc9c] border-none h-[5px] w-full absolute top-0 left-0 transition-all duration-[0.35s] ease-linear cursor-pointer"
      :class="{ 'translate-y-[11px] translate-x-0 rotate-45': isToggleActive }"></span>
    <span
      class=" middle bg-[#1abc9c] border-none h-[5px] w-full absolute top-0 left-0 transition-all duration-[0.35s] ease-linear cursor-pointer [&:nth-of-type(2)]:top-[11px]"
      :class="{ 'opacity-0': isToggleActive }"></span>
    <span
      class=" bottom bg-[#1abc9c] border-none h-[5px] w-full absolute top-0 left-0 transition-all duration-[0.35s] ease-linear cursor-pointer [&:nth-of-type(3)]:top-[22px]"
      :class="{ 'translate-y-[-11px] translate-x-0 rotate-[-45deg] bg-white': isToggleActive }"></span>
  </div>
  <div class="overlay" id="overlay" :class="{ open: isToggleActive }">
    <nav class="overlay-menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const isToggleActive = ref(false)

const toggle = () => {
  isToggleActive.value = !isToggleActive.value
}
</script>

<style>
body {
  background: #f5f5f5;
}

.container a {
  display: inline-block;
  position: relative;
  text-align: center;
  color: #1abc9c;
  text-decoration: none;
  font-size: 20px;
  overflow: hidden;
  top: 5px;
}

.container a:after {
  content: "";
  position: absolute;
  background: #1abc9c;
  height: 2px;
  width: 0%;
  transform: translateX(-50%);
  left: 50%;
  bottom: 0;
  transition: 0.35s ease;
}

.container a:hover:after,
.container a:focus:after,
.container a:active:after {
  width: 100%;
}

.active .top {
  background: #fff;
}

.active .middle {
  background: #fff;
}

.active .bottom {
  background: #fff;
}

.overlay {
  position: fixed;
  background: #1abc9c;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
}

.overlay.open {
  opacity: 0.9;
  visibility: visible;
  height: 100%;
}

.overlay.open li {
  animation: fadeInRight 0.5s ease forwards;
  animation-delay: 0.35s;
}

.overlay.open li:nth-of-type(2) {
  animation-delay: 0.4s;
}

.overlay.open li:nth-of-type(3) {
  animation-delay: 0.45s;
}

.overlay.open li:nth-of-type(4) {
  animation-delay: 0.5s;
}

.overlay nav {
  position: relative;
  height: 70%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
  font-family: "Varela Round", serif;
  font-weight: 400;
  text-align: center;
}

.overlay ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  height: 100%;
}

.overlay ul li {
  display: block;
  height: 25%;
  height: calc(100% / 4);
  min-height: 50px;
  position: relative;
  opacity: 0;
}

.overlay ul li a {
  display: block;
  position: relative;
  color: #fff;
  text-decoration: none;
  overflow: hidden;
}

.overlay ul li a:hover:after,
.overlay ul li a:focus:after,
.overlay ul li a:active:after {
  width: 100%;
}

.overlay ul li a:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  transform: translateX(-50%);
  height: 3px;
  background: #fff;
  transition: 0.35s;
}

/* @keyframes fadeInRight {
    0% {
      opacity: 0;
      left: 20%;
    }
    100% {
      opacity: 1;
      left: 0;
    }
  } */
</style>
