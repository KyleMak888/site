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
        '\xa0\xa0\xa0 ● 后端提供完全独立的 RESTful API，然后由前端来进行聚合。前端需要负责处理多个数据源的聚合和前后数据依赖关系，并且由于经过了多次的外网请求对页面性能、原生 App 的兼容性上都很不友好。',
        '\xa0\xa0\xa0 ● 由网关层来进行聚合处理。这种方式不太容易灵活的定制一些聚合或者页面逻辑的处理。',
        '\xa0\xa0\xa0 ● 后端把数据聚合处理后，提供一个 API 给到前端。这样后端的微服务之间会存在横向的调用，而这是后端微服务架构里一般需要极力避免的做法。',
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_01.webp'
    },
    {
      type: 'textList',
      value: [
        '针对这样的场景，现在一般会引入 BFF 这一中间层，让前端应用直接和 BFF 通信，BFF 再和后端 API 进行通信，获取数据并且处理完以后返回给前端。这样就能比较好的满足前后端各自的需求。其实从本质上来说是前端面向页面场景和后端面向业务领域之间的矛盾，由 BFF 这层来解决。'
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_02.webp'
    },
    {
      type: 'textList',
      value: [
        '但是 BFF 也只是为了解耦前端和后端间的依赖而增加的一层，BFF 内部还是存在的非常多的问题。'
      ]
    },
    {
      type: 'hashtag',
      value: 'BFF的主要职责和问题'
    },
    {
      type: 'textList',
      value: [
        'BFF 最主要是为了针对前端页面进行定制化的处理，虽然可以针对每个页面都开发一个单独的接口，但是实际上为了开发效率，我们还是会在很多代码上做一些复用。而这些页面可能有部分共有的逻辑，又会有部分差异。对 BFF 进行深入的分析我们发现，BFF 面临最主要的问题有三个：',
        '第一个问题是按需取数',
        '例如同样一个商品详情页，在 App 端上，完整的获取数据可能需要 100 个字段，对应 10 个接口。而在 Mobile Web 上，这个页面可能只需要 50 个字段，对应 6 个接口。但是实际开发的时候，工程师为了方便很容易写出来一个大而全的方法，包含了这 100 个字段并且调用 10 个接口，这样后期维护反而会很困难，而且拖累的部分页面的性能。',
        '面对这样的场景，如果希望代码能够优雅的复用，对工程师的能力的要求会特别高，需要设计一套非常精巧的代码框架来实现。实际情况却是很容易演变成上面例子中描述的样子。',
        '而 GraphQL 正是这样一套精巧的框架，可以很方便的按我们需求，选择性的对字段和数据进行获取。并且对于不需要获取的数据，GraphQL 也不会调用对应的数据接口，从而提升访问性能。',
        '第二个问题是页面差异化兼容',
        '同一个业务针对不同的端，前端可能也是不同的团队来负责的，使用的技术栈也不相同，因此需要的数据结构、字段名称可能都不同。比如 Web 端需要完全平铺的字段结构，而 App 上可以接受结构化对象结构，或者前端使用了低代码平台来实现，字段结构是跟着 UI 组件来走的。',
        '对于字段的映射，本质上其实一种 JSON 结构转换成另外一种 JSON 结构，我们参考了很多 Node.js 生态里的解决方案，发现通过 JSON 模板渲染的方式来实现 JSON 结构的转换是比较可行的方案。',
        '第三个问题是不同版本的差异化兼容',
        '在原生的 APP 上，BFF 层需要针对不同的版本做不同的处理。甚至原生的 iOS/Android 两端，有时候也要做一些不同的兼容逻辑处理。例如老版本展示 A 样式，新版本展示 B 样式。或者 iOS 的原生代码在某个版本有 bug，只能 BFF 来兼容。时间久了以后代码会越来越难以维护，代码里充斥着各种 if-else 的判断逻辑。',
        '考虑到绝大部分的情况，App 版本发布之后，对应的接口一般不会做大的调整，特别是两三个版本以前的代码，调整的概率更低。因此我们引入了路由的能力来解决这个问题。',
        '\xa0\xa0\xa0 ● 不同的版本或者 iOS/Android 端映射到不同的 API 接口上，API 内处理 GraphQL 的调用和 JSON 模板映射',
        '\xa0\xa0\xa0 ● 每次需要开发新版本接口的时候，可以简单的复制以前逻辑到新版本接口上，然后做适当的调整',
        '\xa0\xa0\xa0 ● 需要处理历史版本逻辑的时候，找到对应 API，进行调整即可',
        '这样 BFF 里的逻辑可以始终保持相对清晰，不同版本的逻辑都可以相互解耦。虽然会存在一定的代码拷贝的问题，但是长期的维护上来说更加清晰了，而且也可以通过增加字段审计的能力来缓解代码拷贝所带来的问题。'
      ]
    },
    {
      type: 'hashtag',
      value: '平台化构建BFF层'
    },
    {
      type: 'textList',
      value: [
        '针对上面一节里提到的三个问题和对应的解决方案，下面分别做详细的介绍',
        '\xa0\xa0\xa0 ● 数据获取：多领域的按需取数和数据聚合 —— 引入 GraphQL',
        '\xa0\xa0\xa0 ● 数据转换：一种 JSON 结构转换成另外一种 —— 引入 JSON 模板',
        '\xa0\xa0\xa0 ● 请求映射：多版本兼容 —— 引入路由能力',
        '',
        '3.1 GraphQL 简单介绍',
        '我们先对 GraphQL 做一下简单的介绍，关于 GraphQL 更详细的内容可以浏览官网 graphql.org 了解。',
        'GraphQL 从名字上就能看出来和 SQL 有些类似。它首先定义了一套类型系统。这里以官方的例子说明。'
      ]
    },
    {
      type: 'code',
      lang: 'graphql',
      value: `
type Query {
  hero: Character
}

type Character {
  name: String
  friends: [Character]
  homeWorld: Planet
}

type Planet {
  name: String
  climate: String
}
      `
    },
    {
      type: 'textList',
      value: [
        '官方定义了一套以《星球大战》背景的两个类型，角色和角色所属的星球。这里 type 可以对应到 Java 语言中的 class， 初看起来和 Java 语言没有太大的差别。'
      ]
    },
    {
      type: 'code',
      lang: 'graphql',
      value: `
{
  hero {
    name
    friends {
      name
      homeWorld {
        name
        climate
      }
      friends {
        name
          homeWorld {
            name
            climate
          }
          friends {
            name
          }
      }
    }
  }
}
      `
    },
    {
      type: 'textList',
      value: [
        '这是一段 GraphQL 的 query 语句，通过 Query 对象的入口，就可以开始对 GraphQL 对象进行查询了。它的查询语句有几个特性：',
        '\xa0\xa0\xa0 ● 按需取字段，不需要的字段可以不查询，类似于 SQL 里的 select',
        '\xa0\xa0\xa0 ● 在类型定义的基础上，可以关联查询多个类型的数据，类似于 SQL 里的 join(但不完全一样)',
        '\xa0\xa0\xa0 ● 可以递归的对某些字段进行理论上无限深度的查询(上面例子里的 friends，不过一般会限制深度)',
        '而在 GraphQL 的实现里，是通过实现 DataFetcher 的接口来获取真正的数据的，例如调用 RESTful 接口或者调用 RPC 接口，都是封装在这里。DataFetcher 可以绑定在某个 type 的某个字段上，这样当访问到这个字段时， GraphQL 会自动调用这个 DataFetcher 来获取数据，没有使用到这个字段自然也不会请求。也是因为绑定到字段的原因，我们实现 DataFetcher 的时候可以聚焦在单一数据类型的获取上，而把多类型的数据关联交给 GraphQL 自己来完成。',
        '通过 GraphQL 这样的能力，我们即可以按需选择需要的数据字段，也可以让 GraphQL 自动帮助我们组装多个数据对象的数据。',
        '',
        '3.2 引入 GraphQL',
        '从前面的介绍里可以发现 GraphQL 和 SQL 有很多相似之处，而且也很容易对应起来。所以业界之前对 GraphQL 也有个普遍的误解，需要后端把数据库直接暴露出来整合进 GraphQL，这样对后端的架构、数据库的性能都有非常大的侵入性。但是 GraphQL 实际的使用上，可以很方便的融入现在普遍应用的微服务和 DDD 的架构。',
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_03.webp'
    },
    {
      type: 'textList',
      value: [
        '我们可以用 GraphQL 服务来替换原来的 BFF 层，这样后端原有的架构体系都不需要进行改变，只需要在 GraphQL 中实现 RESTful API 到 GraphQL 的转换功能即可。这也是业界目前大部分公司使用的方案。',
        '在我们的方案里，为了方便后端同学更加快速的接入 GraphQL 以及兼容我们内部的服务治理框架，我们提供了一套 Java 注解的方式方便业务的同学快速构建出一个 GraphQL 服务出来。',
        '针对 GraphQL 里的 Type、Enum、Interface、Union、Query 等，我们定义了对应的注解进行转换。'
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_04.webp'
    },
    {
      type: 'textList',
      value: [
        '而针对字段扩展，我们单独定义了一个注解来进行处理，可以参考如下形式：'
      ]
    },
    {
      type: 'code',
      lang: 'graphql',
      value: `
@GraphQLFieldAttach(targetType = "Property", sourceFields = "communityId", targetFieldName = "community", batch = true)
public MapResponse<Long, Community> getCommunity(@GraphQLQueryKey Set<Long> communityId);
      `
    },
    {
      type: 'textList',
      value: [
        '我们的房源(Property)和小区(Community)数据是属于两个不同的领域来对外提供服务的。实际的业务场景里，房源属于某一个小区，有个字段(communityId)保存着小区 id，因此需要将这两个数据对象进行关联。我们提供了一个查询小区的接口(CommunityService)，再通过上面的注解，在 GraphQL 里绑定到房源的对象的 Property.community 字段上。这样当查询请求处理到 Property.community 的时候，会自动请求这个接口，获取小区数据，返回给调用方。'
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_05.webp'
    },
    {
      type: 'textList',
      value: [
        '同时为了适配大家已有的微服务体系，这里以 Spring Cloud 为例，把上面的接口定义打包成类似 FeighClient 这样二方包的形式，集成到 Gateway 中的依赖里。然后扫描 Jar 包自动生成 Schema 和 DataFetcher，在 DataFetcher 里调用对应的 FeignClient。这样就可以自动构建出一个完整的 GraphQL 服务。'
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_06.webp'
    },
    {
      type: 'textList',
      value: [
        '在 GraphQL 网关里我们会解析各个服务的二方包，自动生成 Schema 和对应的字段解析调用。当某个业务有需求的时候可以非常快速的集成到我们的 GraphQL 体系中',
        '目前二方包的依赖还是静态管理的，有更新后需要重新部署网关，后续迭代中我们会升级支持动态更新 Jar 包以实现动态生成 Schema 的能力。',
        '',
        '3.3 引入 JSON 模板',
        '前端页面所需的 JSON 字段的结构和 GraphQL 查询结果的 JSON 结构往往不相同，而且页面上也存在一些 format、if-else 的判断逻辑，这部分放在 GraphQL 里的话其实很难实现。特别是现在的一些前端低代码平台，页面的展现模块可能在很多不同的页面复用，这样的字段定义和后端的数据字段定义是完全不一样的，一定需要有人参与这部分转换工作。参考 Node.js 生态的解决方案和以前后端模板的页面渲染方式，我们采用 JSON 模板来对这两个不同的 JSON 结构进行映射。',
        '目前我们的平台支持 JSLT 模板、Javascript 两种方式来进行 JSON 结构的映射，下面以 JSLT 为例 (JSLT 是一个开源的 JSON 模板引擎，基于 Java 语言，详情可以参考 JSLT)。',
      ]
    },
    {
      type: 'code',
      lang: 'graphql',
      value: `
//GraphQL 的结果，模板的输入 JSON
{
  "data": [
    {
      "id": 10000,
      "title": "房子 1",
      "roomNum": 2,
      "hallNum": 2,
      "area": 90.12
    }, {
      "id": 10001,
      "title": "房子 2",
      "roomNum": 3,
      "hallNum": 2,
      "area": 99.34
    },
    ...
  ]
}
//JSLT 模板
{
  "dataList": [
    for( .data) {
      "id": .id,
      "title": .title,
      "label1": "户型",
      "text1":  .roomNum + "室" + .hallNum + "厅" ,
      "label2": "面积",
      "text2": .area +"㎡"，
      "link": URLRoute("HousePage", {"id": .id})
    }
  ]
}
//输出JSON
{
  "dataList": [
    {
      "id": 10000,
      "title": "房子 1",
      "label1": "户型",
      "text1":  "2室2厅",
      "label2": "面积",
      "text2": "90.12㎡",
      "link": "https://anjuke.com/house.html?id=10000"
    },
    {
      "id": 10001,
      "title": "房子 2",
      "label1": "户型",
      "text1":  "3室2厅",
      "label2": "面积",
      "text2": "100.34㎡",
      "link": "https://anjuke.com/house.html?id=10001"
    }
  ]
}
      `
    },
    {
      type: 'textList',
      value: [
        '上面这个例子可以发现，最终输出的 JSON 结构和字段名称和 GraphQL 请求返回的结构完全不同。通过这样的映射处理，可以完全解耦前端页面的展示逻辑和后端提供数据的取数逻辑，根据前端页面对返回数据的结构要求，我们可以进行各种 JSON 结构的转换来适配。后期随着模板越来越复杂，也可以引入一些可复用的子模板方式来进行管理',
        '',
        '3.4 引入路由能力',
        '路由这部分比较简单，主要就是根据不同的端、版本、iOS/Anroid 等参数，映射到对应的 GraphQL 请求和 JSON 模板上即可。',
        '',
        '3.5 构建 BFF 平台',
        'BFF 由前端还是后端开发，其实在各家公司都有不同的实践。但不管是谁来做，都会存在一定的问题',
        '\xa0\xa0\xa0 ● BFF 由前端负责，需要额外关注服务器的稳定性、性能，以及RPC/HTTP 请求的容错等等，对前端同学的能力要求较高',
        '\xa0\xa0\xa0 ● BFF 由后端负责，由于并不一定能很好的理解前端页面的各种数据需求，对后端同学来说基本上是纯工作量。如果是一个独立的后端 BFF 团队，工程师容易觉得没有成长，人员也很难稳定',
        '这个问题我们先放放，回到 BFF 本身的开发工作，通过前面的拆解之后，我们发现 BFF 的开发工作其实比较模板化',
        '\xa0\xa0\xa0 ● 数据获取：编写 GraphQL query，调用 GraphQL 服务获取数据',
        '\xa0\xa0\xa0 ● 数据转换：编写 JSON 模板，转换成前端需要的 JSON 结构',
        '\xa0\xa0\xa0 ● 请求映射：编写路由逻辑，映射到对应的 GraphQL 请求和 JSON 模板上',
        '基于这样的项目开发流程，我们把整个 BFF 层构建成了一个平台。开发同学只需要在平台里的三个表单里输入上面的内容，就可以得到想要的 API 接口。'
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_07.webp'
    },
    {
      type: 'image',
      value: 'post_1_image_08.webp'
    },
    {
      type: 'textList',
      value: [
        '整合完成后，我们的整体架构如下'
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_09.webp'
    },
    {
      type: 'textList',
      value: [
        '\xa0\xa0\xa0 ● 统一请求入口：BFF 平台负责对外部统一的 API 接口',
        '\xa0\xa0\xa0 ● 请求映射：根据请求参数和内部配置的路由规则，把请求映射到不同的配置模板上',
        '\xa0\xa0\xa0 ● 获取模板信息：单个配置模板里， 保存着 GraphQL 的 query 语句和 JSON 映射模板',
        '\xa0\xa0\xa0 ● 数据获取：使用 GraphQL query 语句调用 GraphQL 网关，获取数据结果',
        '\xa0\xa0\xa0 ● 数据转换：调用模板引擎，进行 JSON 结构的转换，并将数据返回给调用方',
        '通过上述几个步骤，我们的 BFF 平台可以支持非常快速的实现一个 API 来对外提供服务',
        'BFF 平台由后端负责开发和维护，保证服务的性能和稳定性。前端主要的工作使用 BFF 平台写 query 和模板，完成页面的数据拼装。通过这样的方式，前端和后端都能够最大化的发挥自己的擅长的能力，优化团队研发效率。'
      ]
    },
    {
      type: 'hashtag',
      value: 'GraphQL网关架构及微服务治理'
    },
    {
      type: 'textList',
      value: [
        '前面的架构里可以看到，我们是把 GraphQL 当做一个网关来处理，负责对接底层的微服务。在一些 GraphQL 应用的场景里，随着接入的业务越来越多，GraphQL 的服务会逐步的变成一个非常庞大的单体应用，维护起来会越来越困难。另外所有的业务都聚合到这一个 GraphQL 的出口，可能光 Schema 定义就需要上万行。这样不论是维护还是使用上都很难进行下去，而且与现在主流的微服务架构体系相矛盾',
        '业界目前最主流的解决方案是 Apollo GraphQL 提供的 GraphQL Federation 功能，并且 Netflix 在此基础上构建了一套 DGS (Domain GraphQL Service) 的架构来进行治理的。这里做一个简单的介绍：'
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_10.webp'
    },
    {
      type: 'textList',
      value: [
        '\xa0\xa0\xa0 ● 每个领域服务单独构建一个对应的GraphQL领域服务(DGS)',
        '\xa0\xa0\xa0 ● 由集中式的 GraphQL Gateway 借助 Federation 的能力来负责聚合多个 DGS，自动生成统一 Schema 对外提供服务',
        '但是这样的做法只是解决了 GraphQL 服务的单体应用的问题，最终聚合出来的 GraphQL Schema 还是可能会非常的庞大，使用起来还是会很困难。而且整个架构其实是做了 2 层的 GraphQL 处理，一层在 DSG 上，一层在 Gateway 上，会有一定性能的重复开销，服务稳定性上也有更多的挑战。',
        '针对这样的问题，结合前文提到的注解方式构建的 GraphQL Gateway，我们设计了如下的架构'
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_11.webp'
    },
    {
      type: 'textList',
      value: [
        '\xa0\xa0\xa0 ● 针对每个领域服务，使用我们的 GraphQL 注解定义一套类型和接口，然后用类似于 FeignClient 的方式提供给网关和服务方分别使用',
        '\xa0\xa0\xa0 ● 领域服务实现这部分接口，提供 RPC 的能力给到 GraphQL Gateway 使用',
        '\xa0\xa0\xa0 ● 接口注册到 GraphQL Gateway，网关会为每个领域服务的接口定义生成一个定义模块(Module)。同时针对每个模块，网关也生成了对应模块的 RPC 请求的封装',
        '\xa0\xa0\xa0 ● 业务方在使用时，定义一个业务应用(Application)，选择这个应用所需要的模块，网关自动聚合所选择的模块，生成该应用所对应的 GraphQL Schema。在 query 执行时，处理到对应的模块，会调用对应的 RPC 接口访问底层服务获取数据',
        '\xa0\xa0\xa0 ● 业务方根据这个所生成的Application Schema 来开发',
        '这样，GraphQL 的使用方只需要选择自己关心的模块来生成 Schema 即可。比如我们的网关现在集成了十几个领域，而某个页面只使用到了其中的 3 个，只需要选择这三个生成自己的 Schema 使用即可。而另外一个页面可能用到了另外 5 个领域，也可以单独生成 Schema。通过这样的方式，可以把 Schema 的大小控制在可控的范围内，维护起来也相对容易',
        '另外由于在 RPC 的调用上减少了一层，而且 GraphQL 的处理都还是集中在网关内部一次性进行，在服务的稳定性和性能上的提升相对更容易一些。'
      ]
    },
    {
      type: 'hashtag',
      value: '应用场景'
    },
    {
      type: 'textList',
      value: [
        '目前我们的最主要的应用场景是在我们内部的前端低代码平台上。',
        '现在市面上的低代码平台大多数只考虑了前端的页面如何快速生成，而对于后端的接口的实现上考虑的很少，一般都是生成模板代码或者仅限于特殊场景的后端代码生成。极端的情况需要后端针对每个页面单独再开发 API 接口进行对接，这样对后端来说工作量其实更多了。',
        '我们将内部的低代码平台和这套 BFF 平台进行了整合，构建了一整套低代码开发流程，帮助需求方能够快速应用上线。'
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_12.webp'
    },
    {
      type: 'textList',
      value: [
        '通过这样的整合，构建了整个从前端到后端完整的低代码平台，来实现业务需求的快速上线',
        '以我们现在线上的一个房价页面为例子'
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_13.webp'
    },
    {
      type: 'textList',
      value: [
        '这个页面由于多端上都存在，而且逻辑有部分差异，以前是写了一个大而全的接口把所有端的逻辑都合到了一起，存在着维护困难和性能拖慢等问题',
        '而在迁移到了 BFF 平台之后，近期针对不同城市对页面的不同需求的项目，开发工作量相比原来少了 50%。而且由于切换到 GraphQL 之后可以并行的按需取数据，页面的接口性能也从之前的近 100ms 降低到 20ms 左右。',
      ]
    },
    {
      type: 'image',
      value: 'post_1_image_14.webp'
    },
    {
      type: 'image',
      value: 'post_1_image_15.webp'
    },
    {
      type: 'hashtag',
      value: '总结'
    },
    {
      type: 'textList',
      value: [
        '随着团队规模、业务复杂的逐渐上升，传统 BFF 模式实际上面临了一个代码可维护性、性能、个性化页面的不可能三角。针对这样的场景，我们构建了一套平台化的 BFF，结合 GraphQL 、 JSON 模板以及微服务治理，来尽可能的解耦各个需求间的相互依赖，提升团队研发效率，更加高效快速的满足业务需求。',
        '未来我们会在以下几个方面进行更进一步的迭代以满足我们的业务需求',
        '\xa0\xa0\xa0 ● 二方包和 Schema 的动态更新支持，无需重启即可更新 Schema',
        '\xa0\xa0\xa0 ● 字段使用审计和调用量监控，对于长时间无访问的 query、模板和字段可以提示业务方做下线处理',
        '\xa0\xa0\xa0 ● GraphQL 内部性能优化',
        '\xa0\xa0\xa0 ● 支持低代码平台以拖拽的方式自动绑定数据',
        '',
        '',
        '',
        '',
        '',
        '',
        '参考资料：',
        '\xa0\xa0\xa0 ● graphql.org',
        '\xa0\xa0\xa0 ● Reconciling GraphQL and Thrift at Airbnb',
        '\xa0\xa0\xa0 ● How Netflix Scales its API with GraphQL Federation (Part 1)',
        '\xa0\xa0\xa0 ● How Netflix Scales its API with GraphQL Federation (Part 2)',
        '\xa0\xa0\xa0 ● GraphQL及元数据驱动架构在后端BFF中的实践',
      ]
    },
  ]
}
