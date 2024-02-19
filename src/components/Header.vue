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
        <div class="overlay fixed bg-[#787878] top-0 left-0 w-full h-[0%] opacity-0 overflow-hidden transition-[opacity visibility height] duration-[0.35s]"
            id="overlay" :class="{ open: isToggleActive }">
            <nav
                class="overlay-menu relative h-[70%] top-1/2 translate-y-[-50%] text-5xl font-normal text-center font-serif">
                <ul class="list-none p-0 mx-auto inline-block relative h-full">
                    <li class="[&:nth-of-type(1)]:delay-[0.35s] block h-1/4 min-h-[50px] relative opacity-0"
                        :class="{ 'animate-faderight delay-[0.35s]': isToggleActive }">
                        <router-link to="/" class="block relative text-white no-underline overflow-hidden " @click="toggle"
                            href="#">Home</router-link>
                    </li>
                    <li class="[&:nth-of-type(2)]:delay-[0.4s] block h-1/4 min-h-[50px] relative opacity-0"
                        :class="{ 'animate-faderight delay-[0.35s]': isToggleActive }">
                        <router-link to="about" class="block relative text-white no-underline overflow-hidden"
                            @click="toggle" href="#">About</router-link>
                    </li>
                    <li class="[&:nth-of-type(3)]:delay-[0.45s] block h-1/4 min-h-[50px] relative opacity-0"
                        :class="{ 'animate-faderight delay-[0.35s]': isToggleActive }">
                        <a class="block relative text-white no-underline overflow-hidden" href="#">Work</a>
                    </li>
                    <li class="[&:nth-of-type(4)]:delay-[0.5s] block h-1/4 min-h-[50px] relative opacity-0"
                        :class="{ 'animate-faderight delay-[0.35s]': isToggleActive }">
                        <a class="block relative text-white no-underline overflow-hidden" href="#">Contact</a>
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
<style lang="css">
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
    visibility: hidden;
}

.overlay.open {
    opacity: 0.9;
    visibility: visible;
    height: 100%;
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
</style>
