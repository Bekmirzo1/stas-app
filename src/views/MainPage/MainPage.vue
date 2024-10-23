<script setup lang="ts">
interface Post {
  body: string;
  id: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
  tags: string[];
  title: string;
  userId: number;
  views: number;
}
interface Posts {
  posts: Post[];
}

const post: Post = {
  body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  id: 1,
  reactions: {
    likes: 192,
    dislikes: 25,
  },
  tags: ["history", "american", "crime"],
  title: "His mother had always taught him",
  userId: 121,
  views: 30,
};

// const { data } = await useAPI<Posts>("/posts", {
//   method: "get",
//   query: { limit: 5 },
// });
// console.log(data.value);
</script>
<template>
  <div class="main">
    <div class="main__container">
      <h1 class="main__title title-big">ikakprosto.ru</h1>
      <div class="main__columns">
        <div class="column-main">
          <h3 class="column-main__title title">{{ post.title }}</h3>
          <div class="column-main__text text">
            {{ post.body }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "./ui/styles/_index" as *;
.main {
  padding: toRem(16) toRem(0) toRem(50);
}
</style>
