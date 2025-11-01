import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "广州领燕科技隐私政策 - 了解我们如何收集、使用和保护您的个人信息",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <Container>
          <SectionHeading
            title="隐私政策"
            titleEn="Privacy Policy"
            description="我们重视并致力于保护您的隐私"
            align="center"
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <article className="prose prose-lg mx-auto max-w-4xl">
            <p className="text-sm text-gray-500">最后更新日期：2024年11月</p>

            <h2>1. 信息收集</h2>
            <p>
              广州领燕科技有限公司（以下简称"我们"）重视用户的隐私。本隐私政策说明我们如何收集、使用、存储和保护您的个人信息。
            </p>
            
            <h3>1.1 我们收集的信息类型</h3>
            <ul>
              <li><strong>个人身份信息</strong>：姓名、邮箱地址、电话号码、公司名称</li>
              <li><strong>使用数据</strong>：IP地址、浏览器类型、访问时间、页面浏览记录</li>
              <li><strong>Cookie和跟踪技术</strong>：用于改善网站体验和分析的技术</li>
            </ul>

            <h3>1.2 信息收集方式</h3>
            <ul>
              <li>当您填写联系表单时</li>
              <li>当您订阅我们的资讯时</li>
              <li>通过Cookie和类似技术自动收集</li>
              <li>当您与我们的网站互动时</li>
            </ul>

            <h2>2. 信息使用</h2>
            <p>我们收集的信息将用于以下目的：</p>
            <ul>
              <li>回复您的咨询和提供客户服务</li>
              <li>改进我们的网站和服务</li>
              <li>发送营销通讯（需获得您的同意）</li>
              <li>遵守法律义务</li>
              <li>防止欺诈和确保安全</li>
            </ul>

            <h2>3. 信息共享</h2>
            <p>
              我们不会出售、交易或出租您的个人信息给第三方。我们可能在以下情况下共享您的信息：
            </p>
            <ul>
              <li><strong>服务提供商</strong>：与帮助我们运营网站和提供服务的第三方合作伙伴</li>
              <li><strong>法律要求</strong>：当法律要求或为保护我们的权利时</li>
              <li><strong>业务转让</strong>：在合并、收购或资产出售的情况下</li>
            </ul>

            <h2>4. 数据安全</h2>
            <p>
              我们采用行业标准的安全措施来保护您的个人信息，包括：
            </p>
            <ul>
              <li>SSL/TLS加密传输</li>
              <li>安全的服务器和数据存储</li>
              <li>访问控制和身份验证</li>
              <li>定期安全审计</li>
            </ul>
            <p>
              尽管我们尽最大努力保护您的信息，但没有任何互联网传输或电子存储方法是100%安全的。
            </p>

            <h2>5. Cookie政策</h2>
            <p>
              我们使用Cookie和类似技术来改善您的浏览体验。Cookie类型包括：
            </p>
            <ul>
              <li><strong>必要Cookie</strong>：网站运行所必需的</li>
              <li><strong>功能Cookie</strong>：记住您的偏好设置</li>
              <li><strong>分析Cookie</strong>：帮助我们了解网站使用情况</li>
              <li><strong>营销Cookie</strong>：用于提供相关广告</li>
            </ul>
            <p>
              您可以通过浏览器设置管理Cookie偏好。禁用Cookie可能影响网站的某些功能。
            </p>

            <h2>6. 您的权利</h2>
            <p>根据适用的数据保护法律，您享有以下权利：</p>
            <ul>
              <li><strong>访问权</strong>：请求访问我们持有的您的个人信息</li>
              <li><strong>更正权</strong>：要求更正不准确的信息</li>
              <li><strong>删除权</strong>：在某些情况下要求删除您的信息</li>
              <li><strong>限制处理权</strong>：要求限制处理您的信息</li>
              <li><strong>数据可携权</strong>：以结构化格式接收您的数据</li>
              <li><strong>反对权</strong>：反对处理您的个人信息</li>
            </ul>

            <h2>7. 数据保留</h2>
            <p>
              我们将在实现收集目的所需的时间内保留您的个人信息，或遵守法律、会计或报告要求所需的时间。
            </p>

            <h2>8. 第三方链接</h2>
            <p>
              我们的网站可能包含指向第三方网站的链接。我们不对这些网站的隐私做法负责。建议您查看这些网站的隐私政策。
            </p>

            <h2>9. 儿童隐私</h2>
            <p>
              我们的服务不面向16岁以下的儿童。我们不会有意收集儿童的个人信息。如果您认为我们可能持有儿童的信息，请联系我们。
            </p>

            <h2>10. 国际数据传输</h2>
            <p>
              您的信息可能被传输到您所在国家/地区以外的地方进行处理。我们将采取措施确保您的数据得到适当保护。
            </p>

            <h2>11. 隐私政策更新</h2>
            <p>
              我们可能会不时更新本隐私政策。重大变更时，我们将通过网站公告或电子邮件通知您。继续使用我们的服务即表示您接受更新后的政策。
            </p>

            <h2>12. 联系我们</h2>
            <p>
              如果您对本隐私政策有任何疑问或想行使您的权利，请通过以下方式联系我们：
            </p>
            <ul>
              <li><strong>邮箱</strong>：privacy@linkend.tech</li>
              <li><strong>电话</strong>：+86 020 1234 5678</li>
              <li><strong>地址</strong>：广东省广州市天河区</li>
            </ul>

            <h2>13. 法律依据（GDPR合规）</h2>
            <p>
              对于欧盟用户，我们处理您个人数据的法律依据包括：
            </p>
            <ul>
              <li>履行合同义务</li>
              <li>获得您的同意</li>
              <li>遵守法律义务</li>
              <li>保护我们的合法利益</li>
            </ul>

            <h2>14. 中国大陆适用法律</h2>
            <p>
              对于中国大陆用户，我们遵守《中华人民共和国个人信息保护法》、《中华人民共和国网络安全法》及相关法律法规。
            </p>
            <ul>
              <li>我们在中国境内运营中收集和产生的个人信息将存储在中国境内</li>
              <li>因业务需要确需向境外提供的，我们会按照法律法规要求向您告知并征得同意</li>
              <li>您可以向我们查询、更正、删除您的个人信息，或撤回授权同意</li>
            </ul>

            <div className="mt-12 rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
              <p className="mb-2 font-semibold text-gray-900">
                📞 如有疑问，请随时联系我们
              </p>
              <p className="text-gray-700">
                我们致力于保护您的隐私并透明地处理您的数据。如果您有任何问题或担忧，请通过上述联系方式与我们沟通。
              </p>
            </div>
          </article>
        </Container>
      </section>
    </main>
  );
}
