<template>
  <div class="px-10 md:px-5 h-screen md:h-auto md:py-10 py-16 w-full">
    <div v-motion-slide-visible-top class="w-full">
      <div id="about" class="section w-full flex items-center gap-4">
        <span class="text-green-500 font-semibold text-lg">01.</span>
        <span class="font-semibold text-white text-xl truncate">About me</span>
        <span class="w-1/3 bg-gray-700 h-[1px]"></span>
      </div>
      <div
        class="space-y-12 text-lg max-w-3xl font-medium text-gray-400 leading-9 my-6"
      >
        <p class="mb-3">
          Am Sezerano Jean Chrysostome, I love coding, I've got a thing for Web
          apps, AI, and Mobile apps - they're my playground. But here's the real
          scoop: I'm all about learning together and collaborating on cool
          projects! I find joy in crafting digital experiences that make life
          easier and more enjoyable, scroll to projects to see projects that I been working 🚀
        </p>
      </div>
      <div class="mt-10">
        <h4 class="font-semibold text-white text-xl truncate">Personal Info</h4>
        <div class="grid md:grid-cols-1 max-w-xl my-6 grid-cols-2 gap-4">
          <div
            class="flex items-center gap-3"
            v-for="info in [
              { key: 'First Name', value: 'Jean Chrysostome' },
              { key: 'Last Name', value: 'Sezerano' },
              { key: 'Phone', value: '(+250)789154432' },
              { key: 'Email', value: 'sezeranochrisostom123@gmail.com' },
            ]"
          >
            <span class="text-base font-semibold text-white"
              >{{ info.key }}:</span
            >
            <span class="text-gray-400 text-base font-medium">{{
              info.value
            }}</span>
          </div>
        </div>
      </div>
      <div class="py-12">
        <a
          class="flex items-center font-medium gap-4 text-white"
          aria-label="See More About Me"
          target="_blank"
          href="/resume.pdf"
          ><span>Download my resume.</span
          ><svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            class="fill-current bounce-svg"
          >
            <path
              d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
            ></path></svg
        ></a>
      </div>
    </div>
  </div>
</template>
