export default defineNuxtPlugin({
  async setup() {
    const host = $fetch.create({
      baseURL: import.meta.env.VITE_APP_API_HOST,
    });
    return {
      provide: {
        host,
      },
    };
  },
});