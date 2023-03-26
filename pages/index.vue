<template>
  <div>
    <h1 class="text-8xl mb-16 mt-8">{{ greeting }}!</h1>
    <div class="grid grid-cols-2 gap-8">
      <p>
        My name is Sjors Lockhorst. I'm a Master student in Artificial Intelligence at
        the University of Utrecht. I'm also a freelance full-stack software developer.
        Check out my <NuxtLink to="/blog" class="underline">blog</NuxtLink> for my
        thoughts on new innovations in the tech and AI space.
      </p>
      <img src="https://plchldr.co/i/500x250?text=hello" alt="plchldr.co">
    </div>
    <hr class="h-px my-8 bg-slate-900 border-0 dark:bg-slate-300">
    <h2 class="text-4xl text-center" id="about-me">About me</h2>
    <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
    <hr class="h-px my-8 bg-slate-900 border-0 dark:bg-slate-300">
    <h2 class="text-4xl text-center" id="links">Links</h2>

    <div class="grid grid-cols-4 justify-items-center mt-16 text-4xl">
      <a v-for="(link, index) in socialMediaLinks" :key="index" :href="link.url" target="_blank" :class="link.hoverColor">
        <i :class="link.icon"></i>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">

// Interface for social media links
interface SocialMediaLink {
  icon: string;
  url: string;
  hoverColor: string;
}
const greeting = computed(() => {
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning"
  }
  else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon"
  }
  return "Good evening"
})

const socialMediaLinks: SocialMediaLink[] = [
  {
    icon: "fab fa-github",
    url: "https://github.com/SjorsLockhorst",
    hoverColor: "hover:text-gray-400"
  },
  {
    icon: "fab fa-twitter",
    url: "https://twitter.com/SjorsLockhorst",
    hoverColor: "hover:text-blue-400"
  },
  {
    icon: "fab fa-linkedin",
    url: "https://www.linkedin.com/in/sjors-lockhorst-73a72512a/",
    hoverColor: "hover:text-blue-800"
  },
  {
    icon: "fa fa-envelope",
    url: "mailto:sjors@lockhorst.dev",
    hoverColor: "hover:text-purple-400"
  },
]

</script>
