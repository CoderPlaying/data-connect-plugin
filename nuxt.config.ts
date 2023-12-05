// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    {
      src: './node_modules/@base-open/connector-api',
      ssr: false // 此处的 ssr:false 就是将其改为非服务器端渲染
    }
  ],
})
