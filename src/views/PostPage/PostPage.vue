<script setup lang="ts">
import { PostWidget, type Post } from "@/widgets/PostWidget";
useHead({
  title: "Пост",
});
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

const route = useRoute();
/* 
const { data } = await useAPI<Post>(`/posts/${route.params.id}`, {
  method: "get",
}); */
interface User {
  id: number;
  username: string;
  fullName: string;
}

interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}
interface CommentsResponse {
  comments: Comment[];
  total: number;
  skip: number;
  limit: number;
}
// const commentsData: CommentsResponse = {
//   comments: [
//     {
//       id: 93,
//       body: "These are fabulous ideas!",
//       postId: 1,
//       likes: 7,
//       user: {
//         id: 190,
//         username: "leahw",
//         fullName: "Leah Gutierrez",
//       },
//     },
//     {
//       id: 107,
//       body: "You are a symbol of beauty.",
//       postId: 1,
//       likes: 7,
//       user: {
//         id: 131,
//         username: "jacksonm",
//         fullName: "Jackson Morales",
//       },
//     },
//     {
//       id: 209,
//       body: "Your eyes are like stars.",
//       postId: 1,
//       likes: 10,
//       user: {
//         id: 95,
//         username: "miless",
//         fullName: "Miles Stevenson",
//       },
//     },
//   ],
//   total: 3,
//   skip: 0,
//   limit: 3,
// };

const { data: commentsDataRes } = await useAPI<CommentsResponse>(
  `/posts/${route.params.id}/comments`,
  {
    method: "get",
    query: { limit: 10 },
  },
);
// const commentsStaticData = commentsDataRes.value;
// const commentsData = ref(commentsDataRes.value);
// const commentsData2 = shallowRef(commentsDataRes.value);
const deleteArray = ref([]);
function removeData(id: number) {
  deleteArray.value.push(id);
  // commentsData.value.comments = commentsData.value.comments.filter((item) => item.id !== index);
  commentsDataRes.value.total--;
  commentsDataRes.value.limit--;
}
function resetData() {
  commentsDataRes.value.comments = commentsDataRes.value.comments.filter(
    (item) => !deleteArray.value.includes(item.id),
  );
  deleteArray.value = [];
}
</script>
<template>
  <div class="post-comments">
    <div class="post-comments__container">
      <PostWidget :post="post" class="post-comments__post" />
      <div class="post-comments__body">
        <h2 class="post-comments__title title">
          {{ commentsDataRes.total }} comments
        </h2>
        <div class="post-comments__comments">
          <div
            v-for="commentData in commentsDataRes.comments"
            :key="commentData.id"
            class="post-comments__comment comment">
            <div class="comment__left">
              <div class="comment__image">
                <div class="comment__image-body ibg">
                  <img
                    src="@/shared/assets/images/post/stas-photo.svg"
                    alt="" />
                </div>
              </div>
            </div>
            <div class="comment__body">
              <div class="comment__name text">
                {{ commentData.user.username }}
              </div>
              <div
                v-if="!deleteArray.includes(commentData.id)"
                class="comment__main">
                <div class="comment__text text">
                  {{ commentData.body }}
                </div>
                <div class="comment__bottom text-caption">
                  <div class="comment__date">Today</div>
                  <div class="comment__delete">
                    <span
                      class="comment__delete-text link-underline"
                      @click="removeData(commentData.id)">
                      <!-- <span class="comment__delete-text link-underline"> -->
                      Delete
                    </span>
                  </div>
                </div>
              </div>
              <div v-else class="comment__deleted text">
                <div class="comment__deleted-text">
                  This comment has been deleted.
                </div>
                <span
                  class="comment__deleted-return link-underline"
                  @click="resetData">
                  Return
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.post-comments {
  // .post-comments__container
  &__container {
  }
  // .post-comments__post
  &__post {
    margin: toRem(0) toRem(0) toRem(10) toRem(0);
  }
  // .post-comments__body
  &__body {
    padding: toRem(32) toRem(0) toRem(0) toRem(0);
  }
  // .post-comments__title
  &__title {
    margin: toRem(0) toRem(0) toRem(24) toRem(0);
  }
  // .post-comments__comments
  &__comments {
  }
  // .post-comments__comment
  &__comment {
    &:not(:last-child) {
      margin-bottom: toRem(27);
    }
  }
}

.comment {
  display: flex;
  // .comment__left
  &__left {
    margin: toRem(0) toRem(8) toRem(0) toRem(0);
  }
  // .comment__image
  &__image {
    &-body {
      width: toRem(46);
      border-radius: 50%;
      overflow: hidden;
      transform: translateZ(0);
      padding-bottom: 100%;
    }
  }
  // .comment__body
  &__body {
    &.remove-ready {
    }
  }

  // .comment__name
  &__name {
    text-transform: capitalize;
    font-weight: 600;
    margin: toRem(0) toRem(0) toRem(12) toRem(0);
  }
  // .comment__main
  &__main {
  }
  // .comment__text
  &__text {
    margin: toRem(0) toRem(0) toRem(16) toRem(0);
  }
  // .comment__bottom
  &__bottom {
    display: flex;
    align-items: flex-start;
  }
  // .comment__date
  &__date {
    margin: toRem(0) toRem(20) toRem(0) toRem(0);
    color: $blackColor;
    opacity: 0.22;
  }
  // .comment__delete
  &__delete {
    // .comment__delete-text
    &-text {
      color: $redColor;
      &::after {
        opacity: 1;
      }
    }
  }
  // .comment__deleted
  &__deleted {
    display: flex;
    // .comment__deleted-text
    &-text {
      margin: toRem(0) toRem(8) toRem(0) toRem(0);
    }
    // .comment__deleted-return
    &-return {
      color: $orangeMainColor;
    }
  }
}
</style>
