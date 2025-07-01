import { marked } from "marked";

export default function SidebarTemplate({ data }) {
  const md = (text) => ({ __html: marked.parse(text || "") });

  return (
    <div className="max-w-5xl mx-auto bg-white text-gray-900 font-sans text-sm leading-relaxed">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-6 border-r border-gray-200 pr-4">
          <div>
            <h2 className="text-md font-semibold text-blue-700 mb-1 border-l-4 border-blue-500 pl-2">
              Skills
            </h2>
            <div
              className="prose prose-sm text-justify"
              dangerouslySetInnerHTML={md(data.skills)}
            />
          </div>
          <div>
            <h2 className="text-md font-semibold text-blue-700 mb-1 border-l-4 border-blue-500 pl-2">
              Certifications
            </h2>
            <div
              className="prose prose-sm text-justify"
              dangerouslySetInnerHTML={md(data.certifications)}
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3 space-y-6">
          <div className="border-b pb-4">
            <h1 className="text-3xl font-bold text-blue-800 tracking-wide">
              {data.name}
            </h1>
            <p className="text-sm text-gray-600">
              {data.email} · {data.phone}
            </p>
          </div>

          <section>
            <h2 className="text-md font-semibold text-gray-700 border-l-4 border-blue-500 pl-2 mb-1">
              Career Summary
            </h2>
            <div
              className="prose prose-sm text-justify"
              dangerouslySetInnerHTML={md(data.summary)}
            />
          </section>

          <section>
            <h2 className="text-md font-semibold text-gray-700 border-l-4 border-blue-500 pl-2 mb-1">
              Experience
            </h2>
            <div
              className="prose prose-sm text-justify"
              dangerouslySetInnerHTML={md(data.experience)}
            />
          </section>

          <section>
            <h2 className="text-md font-semibold text-gray-700 border-l-4 border-blue-500 pl-2 mb-1">
              Portfolio
            </h2>
            <div
              className="prose prose-sm text-justify"
              dangerouslySetInnerHTML={md(data.portfolio)}
            />
          </section>
        </main>
      </div>
    </div>
  );
}
