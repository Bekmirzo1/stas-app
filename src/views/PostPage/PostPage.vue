<script setup lang="ts">
import { PostWidget, type Post } from "@/widgets/PostWidget";
useHead({
  title: 'Пост'
})
const data: Post = {
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

/* const route = useRoute();
const { data } = await useAPI<Post>(`/posts/${route.params.id}`, {
  method: "get",
}); */
</script>
<template>
  <div class="post-comments">
    <div class="post-comments__container">
      <PostWidget :post="data" />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
