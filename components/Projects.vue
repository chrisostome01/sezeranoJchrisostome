<template>
  <div class="h-fit">
    <div class="px-10 md:px-5 h-full md:py-10 py-28 w-full">
      <div class="w-full">
        <div class="flex items-center justify-between w-full">
          <div
            v-motion-slide-visible-left
            id="projects"
            class="section w-full flex items-center gap-4"
          >
            <span class="text-green-500 font-semibold text-lg">02.</span>
            <span class="font-semibold text-white text-xl md:text-base truncate"
              >Projects</span
            >
            <span class="w-1/3 bg-gray-700 h-[1px] md:hidden"></span>
          </div>
        </div>
        <div
          v-for="(project, index) in projects"
          class="my-16 md:my-10"
          :key="index"
        >
          <div :class="['grid md:grid-cols-1 grid-cols-2 gap-2']">
            <a
              :href="project.link"
              target="_blank"
              v-motion-slide-visible-left
              :class="[
                index % 2 === 0
                  ? 'order-1 w-[120%] md:w-full'
                  : 'md:order-1 order-2',
                ' order-2 p-4 group relative flex items-center justify-center rounded-[4px] bg-gray-800 overflow-hidden max-w-full',
              ]"
            >
              <div
                class="bg-gray-800 duration-500 group-hover:bg-opacity-10 transition-all cursor-pointer bg-opacity-60 absolute top-0 h-full w-full"
              ></div>
              <img
                class="rounded-[3px]"
                :alt="project.name"
                :src="project.image"
              />
            </a>
            <div
              v-motion-slide-visible-left
              :class="[
                index % 2 === 0
                  ? 'order-2 text-right md:text-left md:items-start items-end '
                  : 'order-1 md:order-2 text-left items-start md:w-full w-[120%] ',
                'flex md:mt-4 flex-col relative z-30 gap-4 justify-center ',
              ]"
            >
              <p class="text-base font-medium capitalize text-green-500">
                {{ project.category }}
              </p>
              <h4 class="text-2xl md:text-xl font-bold text-white">
                {{ project.name }}
              </h4>
              <a
                target="_blank"
                :href="project.link"
                class="text-gray-400 hover:shadow-2xl font-medium bg-gray-800 shadow-lg p-5 rounded-[3px]"
              >
                {{ project.description }}
              </a>
              <div
                class="text-base capitalize font-medium text-gray-400 gap-4 items-center flex"
              >
                <span v-for="(stack, index) in project.stack" :key="index">
                  {{ stack }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    link: "https://hey.bild.de/",
    category: "https://hey.bild.de/",
    stack: ["React", "Typeorm", "postgress", "redis", "aws", "OpenAi"],
    name: "Hey bild",
    image: "/projects/hey.png",
    description: `Hey_ is an exciting new service from Axel Springer, launching initially on BILD. This innovative AI assistant, 
    created and fine-tuned by Axel Springer using a combination of GPT models, offers users a fresh, interactive, and individual 
    approach to experiencing journalistic topics through artificial intelligence. Additionally, Hey_ grants open access to ChatGPT's 
    extensive knowledge base and has plans to incorporate more AI models in the future. Its mission is to establish BILD as a trusted 
    hub for AI applications, serving a diverse user community. At its outset, Hey_ will focus on topics like nutrition, finance, travel, 
    and also provide engaging elements such as personalized children's bedtime stories and quizzes. The range of topics will expand gradually 
    with input from the editorial team.`,
  },
  {
    link: "https://dacade.org/",
    category: "https://dacade.org/",
    stack: ["Vue", "React", "Nexts", ""],
    name: "Dacde",
    image: "/projects/dacade.png",
    description: `Peer to peer learning, Dacade makes learning multiplayer`,
  },
  {
    link: "https://lab3.space/",
    category: "https://lab3.space/",
    stack: ["react-spring", "React", "framer-motion"],
    name: "Dacade",
    image: "/projects/lab3.png",
    description: `A music maker's knowledge-sharing community has surfaced on the web's latest incarnation, 
    harnessing decentralized blockchain technology. This advancement brings with it new tools like ERC20 
    tokens, NFTs, and DAOs.`,
  },
];
</script>
