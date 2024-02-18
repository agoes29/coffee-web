<template>
  <div class="container">
    <h1>Click The Menu</h1>
    <p>Be Amazed</p>
    <!-- Everything below this is part of the menu-->
  </div>
  <div class="button_container" id="toggle">
    <span class="top"></span><span class="middle"></span
    ><span class="bottom"></span>
  </div>
  <div class="overlay" id="overlay">
    <nav class="overlay-menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
  <!-- 
  <div
    class="absolute w-full h-full text-center top-1/3 left-0 mx-auto font-sans"
  >
    <h1 class="ralative text-center font-sans">Click The Menu</h1>
    <p class="text-xl">Be Amazed</p>
  </div>
  <div
    class="fixed z-50 top-5 right-2 cursor-pointer"
    id="toggle"
    @click="toggle"
    :class="{active: isToggleActive}"
  >
    <span
      class="border-none h-1 w-full absolute top-0 left-0 cursor-pointer transition-all duration-300 ease-out"
      :class="{
        'bg-white rotate-45 translate-y-3 translate-x-0': isToggleActive,
        '-rotate-0 bg-green-300': !isToggleActive,
      }"
    ></span>

    <span
      class="block h-1 w-6 mb-1 bg-green-300 rounded-full mt-2 transform duration-300 origin-center"
      :class="{
        'opacity-0': isToggleActive,
      }"
    ></span>
    <span
      class="border-none h-1 w-full absolute top-0 left-0 cursor-pointer transition-all duration-300 ease-out"
      :class="{
        'rotate-0 bg-green-300': !isToggleActive,
        'bg-white -rotate-45 translate-y--3 translate-x-0': isToggleActive,
      }"
    ></span>
  </div>

  <div
    class="fixed bg-green-500 top-0 left-0 w-full h-0"
    id="overlay"
    :class="{
      'hidden overflow-hidden transition-opacity duration-300': !isToggleActive,
      'opacity-90 visible h-full': isToggleActive,
    }"
  >
    <nav
      class="relative h-3/4 top-1/2 text-5xl font-normal font-sans text-center translate-y--2/4"
    >
      <ul class="list-none p-0 mx-auto inline-block relative h-full">
        <li
          :class="{
            'faderight delay-1000': isToggleActive,
          }"
        >
          <a class="block relative text-white no-underline" href="#">Home</a>
        </li>
        <li :class="{'faderight delay-1000': isToggleActive}">
          <a class="block relative text-white no-underline" href="#">About</a>
        </li>
        <li :class="{'faderight delay-1000': isToggleActive}">
          <a class="block relative text-white no-underline" href="#">Work</a>
        </li>
        <li :class="{'faderight delay-1000': isToggleActive}">
          <a class="block relative text-white no-underline" href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </div> -->
</template>

<script setup lang="ts">
  import {ref} from "vue"

  const isToggleActive = ref(false)

  const toggle = () => {
    isToggleActive.value = !isToggleActive.value
  }
</script>

<style>
  body {
    background: #f5f5f5;
  }
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 40%;
    left: 0;
    margin: 0 auto;
    font-family: "Varela Round", sans-serif;
  }
  .container p {
    font-size: 20px;
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

  h1 {
    position: relative;
    text-align: center;
    font-family: "Varela Round", serif;
  }

  .button_container {
    position: fixed;
    top: 5%;
    right: 2%;
    height: 27px;
    width: 35px;
    cursor: pointer;
    z-index: 100;
    transition: opacity 0.25s ease;
  }
  .button_container:hover {
    opacity: 0.7;
  }
  .button_container.active .top {
    transform: translateY(11px) translateX(0) rotate(45deg);
    background: #fff;
  }
  .button_container.active .middle {
    opacity: 0;
    background: #fff;
  }
  .button_container.active .bottom {
    transform: translateY(-11px) translateX(0) rotate(-45deg);
    background: #fff;
  }
  .button_container span {
    background: #1abc9c;
    border: none;
    height: 5px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.35s ease;
    cursor: pointer;
  }
  .button_container span:nth-of-type(2) {
    top: 11px;
  }
  .button_container span:nth-of-type(3) {
    top: 22px;
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
