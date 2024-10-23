<script setup lang="ts">
import { PostWidget, type Post, type Posts } from "@/widgets/PostWidget";
useHead({
  title: "Главная",
});
/* const post: Post = {
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
}; */

const { data } = await useAPI<Posts>("/posts", {
  method: "get",
  query: { limit: 5 },
});
</script>
<template>
  <div class="main">
    <div class="main__container">
      <div class="main__columns">
        <PostWidget
          v-for="postData in data.posts"
          :key="postData.id"
          class="main__column"
          :post="postData" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  // .main__column
  &__column {
    &:not(:last-child) {
      margin-bottom: toRem(32);
    }
  }
}
</style>
