<template>
    <header class="border-b p-4 pb-0 shadow-lg">
        <div class="flex items-center justify-between mb-5 md:mb-0">
            <h1 class="leading-none text-2xl text-grey-darkest">
                <a class="no-underline text-grey-darkest hover:text-black" href="#">
                    Site Title
                </a>
            </h1>

            <a class="text-black hover:text-orange md:hidden" href="#">
                <i class="fa fa-2x fa-bars"></i>
            </a>
        </div>
        <div class="button fixed top-5 right-2 h-7 w-9 cursor-pointer z-[100] transition-opacity duration-300 ease-in-out  hover:opacity-[0.7]"
            id="toggle" @click="toggle">
            <span
                class="bg-[#1abc9c] border-none h-[5px] w-full absolute top-0 left-0 transition-all duration-[0.35s] ease-linear cursor-pointer"
                :class="{ 'translate-y-[11px] translate-x-0 rotate-45 bg-white': isToggleActive }"></span>
            <span
                class=" bg-[#1abc9c] border-none h-[5px] w-full absolute top-0 left-0 transition-all duration-[0.35s] ease-linear cursor-pointer [&:nth-of-type(2)]:top-[11px]"
                :class="{ 'opacity-0 bg-white': isToggleActive }"></span>
            <span
                class=" bg-[#1abc9c] border-none h-[5px] w-full absolute top-0 left-0 transition-all duration-[0.35s] ease-linear cursor-pointer [&:nth-of-type(3)]:top-[22px]"
                :class="{ 'translate-y-[-11px] translate-x-0 rotate-[-45deg] bg-white': isToggleActive }"></span>
        </div>
        <div class="overlay  fixed bg-[#787878] top-0 left-0 w-full h-[0%] opacity-0 overflow-hidden transition-[opacity visibility height] duration-[0.35s]"
            id="overlay" :class="{ 'invisible': !isToggleActive, 'opacity-[0.9] visible h-full': isToggleActive }">
            <nav
                class="overlay-menu relative h-[70%] top-1/2 translate-y-[-50%] text-5xl font-normal text-center font-serif">
                <ul class="list-none p-0 mx-auto inline-block relative h-full">
                    <li class="[&:nth-of-type(1)]:delay-[0.35s] block h-1/4 min-h-[50px] relative opacity-0"
                        :class="{ 'animate-faderight delay-[0.35s]': isToggleActive }">
                        <router-link to="/"
                            class="block relative text-white no-underline overflow-hidden hover:after:w-full focus:after:w-full active:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-1/2  after:w-[0%] after:translate-x-[-50%] after:h-[3px] after:bg-white after:duration-[0.35s]"
                            @click="toggle" href="#">Home</router-link>
                    </li>
                    <li class="[&:nth-of-type(2)]:delay-[0.4s] block h-1/4 min-h-[50px] relative opacity-0"
                        :class="{ 'animate-faderight delay-[0.35s]': isToggleActive }">
                        <router-link to="about"
                            class="block relative text-white no-underline overflow-hidden hover:after:w-full focus:after:w-full active:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-1/2  after:w-[0%] after:translate-x-[-50%] after:h-[3px] after:bg-white after:duration-[0.35s]"
                            @click="toggle" href="#">About</router-link>
                    </li>
                    <li class="[&:nth-of-type(3)]:delay-[0.45s] block h-1/4 min-h-[50px] relative opacity-0"
                        :class="{ 'animate-faderight delay-[0.35s]': isToggleActive }">
                        <a class="block relative text-white no-underline overflow-hidden hover:after:w-full focus:after:w-full active:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-1/2  after:w-[0%] after:translate-x-[-50%] after:h-[3px] after:bg-white after:duration-[0.35s]"
                            href="#">Work</a>
                    </li>
                    <li class="[&:nth-of-type(4)]:delay-[0.5s] block h-1/4 min-h-[50px] relative opacity-0"
                        :class="{ 'animate-faderight delay-[0.35s]': isToggleActive }">
                        <a class="block relative text-white no-underline overflow-hidden hover:after:w-full focus:after:w-full active:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-1/2  after:w-[0%] after:translate-x-[-50%] after:h-[3px] after:bg-white after:duration-[0.35s]"
                            href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script lang="ts" setup>
import { ref } from "vue"

const isToggleActive = ref(false)

const toggle = () => {
    isToggleActive.value = !isToggleActive.value
}
</script>
<style lang="css"></style>
