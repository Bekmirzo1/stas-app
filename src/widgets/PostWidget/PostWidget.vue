<script setup lang="ts">
import { PAGE_ROUTES } from "@/shared/config";
import type { Post } from "./model";
import { LikeDislike } from "@/entities/LikeDislike";
interface Props {
  post: Post;
}
defineProps<Props>();
</script>
<template>
  <div class="column-main">
    <h3 class="column-main__title title">{{ post.title }}</h3>
    <div class="column-main__text text">
      {{ post.body }}
    </div>
    <div class="column-main__bottom">
      <LikeDislike
        :likes="post.reactions.likes"
        :dislikes="post.reactions.dislikes" />
      <div class="column-main__to-comments text-caption">
        <nuxt-link
          :to="PAGE_ROUTES.posts + '/' + post.id"
          class="column-main__to-comments-link link-underline">
          Open comments
        </nuxt-link>
      </div>
      <div class="column-main__data text-caption">
        <div class="column-main__data-text">Today</div>
      </div>
      <div class="column-main__tags">
        <div
          v-for="(tag, index) in post.tags"
          :key="index"
          class="column-main__tag text-caption">
          <span v-if="index == 0" class="column-main__tag-icon">
            <svg
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.67378 0.952284L1.44969 7.07412C0.76728 7.74533 0.426073 8.08093 0.426073 8.5C0.426073 8.91907 0.767281 9.25468 1.4497 9.92588L7.67379 16.0477C7.76484 16.1373 7.81037 16.1821 7.85607 16.2235C8.37635 16.6947 9.04542 16.9686 9.74681 16.9975C9.80842 17 9.87228 17 10 17L10 0C9.87228 0 9.80842 0 9.74681 0.00253296C9.04542 0.0313797 8.37635 0.305277 7.85607 0.776546C7.81038 0.81793 7.76487 0.862694 7.67388 0.952192L7.67378 0.952284Z"
                fill="#787880"
                fill-opacity="0.08" />
            </svg>
          </span>
          <span class="column-main__tag-text">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "./ui/styles/_index" as *;
</style>
