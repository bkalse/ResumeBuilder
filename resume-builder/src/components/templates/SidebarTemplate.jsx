import { marked } from "marked";

export default function SidebarTemplate({ data }) {
  const md = (text) => ({ __html: marked.parse(text || "") });

  return (
    <div className="min-h-screen w-full bg-white font-sans text-sm text-gray-800 leading-relaxed">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-[280px] w-full bg-gray-100 px-6 py-8 space-y-6 border-r border-gray-300">
          {/* Name & Contact */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-blue-800">{data.name}</h1>
            <p className="text-xs text-gray-600 break-words">{data.email}</p>
            <p className="text-xs text-gray-600 break-words">{data.phone}</p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 border-b mb-1">
              Skills
            </h2>
            <div
              className="text-sm text-justify [&>ul]:list-disc [&>ul]:pl-5 [&>li]:mb-[2px]"
              dangerouslySetInnerHTML={md(data.skills)}
            />
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 border-b mb-1">
              Certifications
            </h2>
            <div
              className="text-sm text-justify [&>ul]:list-disc [&>ul]:pl-5 [&>li]:mb-[2px]"
              dangerouslySetInnerHTML={md(data.certifications)}
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-8 py-10 space-y-8 bg-white">
          <Section title="Career Summary" content={data.summary} />
          <Section title="Experience" content={data.experience} />
          <Section title="Portfolio" content={data.portfolio} />
        </main>
      </div>
    </div>
  );
}

// 🔧 Shared Section Renderer
function Section({ title, content }) {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-1">
        {title}
      </h2>
      <div
        className="text-justify text-[15px] leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>li]:mb-[2px]"
        dangerouslySetInnerHTML={{ __html: marked.parse(content || "") }}
      />
    </section>
  );
}
