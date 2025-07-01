import { marked } from "marked";

export default function FutureTemplate({ data }) {
  // Markdown parser
  const md = (text) => ({ __html: marked.parse(text || "") });

  return (
    <div className="w-full px-12 py-10 bg-white text-gray-900 font-sans text-sm leading-relaxed space-y-6">
      {/* Header */}
      <div className="space-y-1 border-b border-gray-300 pb-4">
        <h1 className="text-4xl font-bold text-blue-800 tracking-wide">
          {data.name}
        </h1>
        <p className="text-sm text-gray-600">
          {data.email} · {data.phone}
        </p>
      </div>

      {/* Sections */}
      <Section title="Career Summary" content={data.summary} />
      <Section title="Skills" content={data.skills} />
      <Section title="Experience" content={data.experience} />
      <Section title="Certifications" content={data.certifications} />
      <Section title="Portfolio" content={data.portfolio} />
    </div>
  );
}

// 🔧 Section Component
function Section({ title, content }) {
  return (
    <section className="space-y-1">
      <h2 className="text-md font-semibold text-gray-700 border-l-4 border-blue-500 pl-2">
        {title}
      </h2>
      <div
        className="prose prose-sm max-w-none text-justify"
        dangerouslySetInnerHTML={{ __html: marked.parse(content || "") }}
      />
    </section>
  );
}
