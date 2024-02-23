<template>
  <nav class="w-full min-w-[150px] h-[100px]  flex justify-between items-center fixed top-0 left-0 z-[2]">
    <div class="flex flex-nowrap items-center w-auto min-w-[200px] max-w-[470px] h-full justify-between">
      <img class="w-[95px] p-2 ml-[min(3rem, 12vw)] mr-2"
        src="https://assets.codepen.io/10936164/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1700504404&width=512"
        alt="">
      <h1 id="title" class="hf_text w-auto mr-12 tracking-[4px] text-[30px]">Hello World!</h1>
    </div>
    <div class="w-[55%] max-w-[650px] min-w-[50px] h-[70px] mr-5" id="nav-items">
      <div
        class="top-5 right-3 h-7 w-9 cursor-pointer z-[100] transition-opacity duration-300 ease-in-out  hover:opacity-[0.7]"
        id="toggle">
        <span
          class="bg-[#1abc9c] border-none h-[5px] w-full absolute top-0 left-0 transition-all duration-[0.35s] ease-linear cursor-pointer"></span>
        <span
          class=" bg-[#1abc9c] border-none h-[5px] w-full absolute top-0 left-0 transition-all duration-[0.35s] ease-linear cursor-pointer [&:nth-of-type(2)]:top-[11px]"></span>
        <span
          class=" bg-[#1abc9c] border-none h-[5px] w-full absolute top-0 left-0 transition-all duration-[0.35s] ease-linear cursor-pointer [&:nth-of-type(3)]:top-[22px]"></span>
      </div>
      <button id="nav-check">
        <span class=" block w-[25px] h-[10px] border-[3px] border-solid border-white"></span>
        <span class=" block w-[25px] h-[10px] border-[3px] border-solid border-white"></span>
        <span class=" block w-[25px] h-[10px] border-[3px] border-solid border-white"></span>
      </button>
      <ul class="nav-links">
        <li><a id="nav-home" href="#home" class="nav_link">HOME</a></li>
        <li><a id="nav-work" href="#work" class="nav_link">WORK</a></li>
        <li><a id="nav-about" href="#about" class="nav_link">ABOUT</a></li>
        <li><a id="nav-connect" href="#connect" class="nav_link">CONNECT</a></li>
      </ul>
    </div>
  </nav>

  <div class="content-wrap">
    <section id="home"></section>
    <section id="work"></section>
    <section id="about"></section>
    <section id="connect"></section>
  </div>
</template>

<!-- <style lang="scss">
$bgcolour: #1B2223;
$navbgcolour: #9CA6BB;
$navlight: #BFC9DA;
$textcolour: #111010;
$accentcolour: #16E0B1;
$bordercolour: #254773;
$section-1: #7161EF;
$section-2: #074F57;
$section-3: #B8B42D;
$section-4: #51344D;
$section-1-dark: #422176;
$section-2-dark: #223843;
$section-3-dark: #4A2000;
$section-4-dark: #37023C;

nav {
  width: 100%;
  min-width: 150px;
  height: 100px;
  background-color: $navbgcolour;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  border-bottom: 1.5px solid $bgcolour;
}

#portrait-frame {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 40vw;
  min-width: 200px;
  max-width: 470px;
  height: 100%;
  justify-content: space-between;
}

#portrait {
  width: 95px;
  clip-path: circle(40%);
  padding: 0.4rem;
  margin-left: min(3rem, 12vw);
  margin-right: 0.5rem;
}

#title {
  width: auto;
  margin-right: 3rem;
  letter-spacing: 4px;
  font-size: 30px;
}

#nav-items {
  width: 55%;
  max-width: 650px;
  min-width: 50px;
  height: 70px;
  margin-right: 20px;
}

.nav-icon,
#nav-check {
  display: none;
}

#nav-items>ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
}

#nav-items>ul>li {
  list-style-type: none;
  padding: 0;
  border: 0;
  width: 89px;
  text-align: center;

  &:hover {
    background-color: #BFC9DA;
    border: 6px outset $accentcolour;
    border-radius: 5px;
    cursor: pointer;
  }

  &:nth-of-type(3) {
    width: 100px;
  }

  &:nth-of-type(4) {
    width: 122px;
  }
}

#nav-items>ul>li>a {
  text-decoration: none;
  margin-left: 0px;
  padding: 0.6rem 0.85rem;
  display: block;
  letter-spacing: 1.5px;
  font-weight: bold;
  line-height: 2;
  overflow: hidden;
  color: $textcolour;
  font-size: 21px;
}

#nav-home:hover {
  color: $section-1-dark;
}

#nav-work:hover {
  color: $section-2-dark;
}

#nav-about {
  padding: 0.6rem 0.8rem !important;

  &:hover {
    color: $section-3-dark;
  }
}

#nav-connect {
  padding: 0.6rem 0.75rem !important;
  margin-left: -1.5px !important;

  &:hover {
    color: $section-4-dark;
  }
}

.content-wrap {
  margin-top: 100px;
}

section {
  display: flex;
  min-height: 100vh;
  width: 100%;
  scroll-snap-align: end;
}

#home {
  background-color: $section-1;
}

#work {
  background-color: $section-2;
}

#about {
  background-color: $section-3;
}

#connect {
  background-color: $section-4;
}

@media screen and (max-width: 750px) {

  nav {
    height: 80px;
    min-width: 200px;
  }

  #portrait {
    width: 75px;
    clip-path: circle(37%);
    margin-left: min(1.6rem, 12vw);
    margin-right: 0.8rem;
  }

  #title {
    min-width: 80px;
    font-size: 18px;
  }

  #nav-items {
    overflow: hidden;
    margin-left: 1px;
  }

  #nav-items>ul {
    flex-wrap: wrap;
    position: absolute;
    display: block;
    width: calc(100% + 4px);
    transition: height 0.3s step-start;
    overflow-y: hidden;
    top: 79px;
    left: -2px;
  }

  #nav-items>ul> :last-child {
    border-bottom: 1.5px solid $bordercolour;
  }

  #nav-items>ul>li {
    width: 100.5vw;
    min-width: 200px;
    height: 59px;
    border: 1px solid $bordercolour;
    border-radius: 0;
    background-color: $navlight;

    &:hover {
      border: 6px outset $accentcolour;
      border-radius: 2px;
    }

    &:nth-of-type(3) {
      width: 100.5vw;
    }

    &:nth-of-type(4) {
      width: 100.5vw;
    }
  }

  #nav-items>ul>li:hover .nav_link {
    line-height: 1.25;
  }

  #nav-items>ul>li>a {
    height: 53px;
    line-height: 1.9;
  }

  #nav-home,
  #nav-work,
  #nav-about,
  #nav-connect {
    margin: 0 !important;
  }

  .nav-icon {
    display: inline-block;
    float: right;
    line-height: 70px;
  }

  .nav-icon>label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
    vertical-align: middle;

    &:hover {
      cursor: pointer;
    }
  }

  .nav-icon>label>span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 3px solid $bordercolour;
  }

  #nav-check:not(:checked)~.nav-links {
    height: 0px;
  }

  #nav-check:checked~.nav-links {
    height: auto;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .content-wrap {
    margin-top: 79px;
  }
}</style> -->
