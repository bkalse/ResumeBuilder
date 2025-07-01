import { marked } from "marked";

export default function ModernTemplate({ data = {} }) {
  const md = (text) => ({ __html: marked.parse(text || "") });

  return (
    <div className="w-full px-10 py-10 bg-white text-gray-900 font-sans text-[15px] leading-relaxed space-y-10">
      {/* Header */}
      <header className="space-y-1 border-b pb-4 border-gray-300">
        <h1 className="text-3xl font-bold text-gray-800">{data.name || ""}</h1>
        <p className="text-sm text-gray-500">
          {data.email} · {data.phone}
        </p>
      </header>

      {/* Sections */}
      <Section title="Career Summary" content={data.summary} />
      <Section title="Skills" content={data.skills} />
      <Section title="Experience" content={data.experience} />
      <Section title="Certifications" content={data.certifications} />
      <Section title="Portfolio" content={data.portfolio} />
    </div>
  );
}

function Section({ title, content }) {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-1">
        {title}
      </h2>
      <div
        className="text-justify max-w-none text-[15px] leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>li]:mb-[2px]"
        dangerouslySetInnerHTML={{ __html: marked.parse(content || "") }}
      />
    </section>
  );
}
