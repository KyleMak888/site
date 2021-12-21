export const post_1 = {
  title: '基于 GraphQL 平台化 BFF 构建及微服务治理',
  subTitle: '以下文章来源于58技术 ，作者董菲 ',
  poster: 'post_1_poster.webp',
  postDate: '2021-12-01 18:00',
  thumbnail: 'post_1_thumbnail.jpg',
  contentList: [
    {
      type: 'hashtag',
      value: '什么是BFF'
    },
    {
      type: 'textList',
      value: [
        'Backend For Frontend，即服务于前端的后端。',
        '面对越来越复杂的多端应用的需求，后端提供的 RESTful 接口形式难以应对多变的页面需求，这时候需要一层专门的 BFF 层来弥合这部分差异。',
        '例如同样一个商品详情页，在 App 端上和 PC 端上，两者的展示样式就有很多的不同。以往前后端分离的方式可能有几种做法。',
        '   ● 后端提供完全独立的 RESTful API，然后由前端来进行聚合。前端需要负责处理多个数据源的聚合和前后数据依赖关系，并且由于经过了多次的外网请求对页面性能、原生 App 的兼容性上都很不友好。',
        '   ● 由网关层来进行聚合处理。这种方式不太容易灵活的定制一些聚合或者页面逻辑的处理。',
        '   ● 后端把数据聚合处理后，提供一个 API 给到前端。这样后端的微服务之间会存在横向的调用，而这是后端微服务架构里一般需要极力避免的做法。',
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_01.webp'
    },
    
  ],
}
