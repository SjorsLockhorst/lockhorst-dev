<template>
  <main>
    <ContentList path="/posts" v-slot="{ list }">
      <div v-for="post in list" :key="post._path">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
      </div>
    </ContentList>
  </main>
</template>
