import { marked } from "marked";
marked.setOptions({ breaks: true }); // Optional

export default function ModernTemplate({ data }) {
  const md = (text) => ({ __html: marked.parse(text || "") });

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white text-gray-900 font-sans text-sm leading-relaxed text-justify">
      {/* Header */}
      <div className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold tracking-wide">{data.name}</h1>
        <p className="text-sm text-gray-600">
          {data.email} | {data.phone}
        </p>
      </div>

      {/* Sections */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-blue-700 mb-1">
          Career Summary
        </h2>
        <div
          className="prose prose-sm text-justify"
          dangerouslySetInnerHTML={md(data.summary)}
        />
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-blue-700 mb-1">Skills</h2>
        <div
          className="prose prose-sm text-justify"
          dangerouslySetInnerHTML={md(data.skills)}
        />
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-blue-700 mb-1">Experience</h2>
        <div
          className="w-full max-w-none prose prose-sm text-justify [&>*]:text-justify"
          dangerouslySetInnerHTML={md(data.experience)}
        />
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-blue-700 mb-1">
          Certifications
        </h2>
        <div
          className="w-full max-w-none prose prose-sm text-justify [&>*]:text-justify"
          dangerouslySetInnerHTML={md(data.certifications)}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-blue-700 mb-1">Portfolio</h2>
        <div
          className="w-full max-w-none prose prose-sm text-justify [&>*]:text-justify"
          dangerouslySetInnerHTML={md(data.portfolio)}
        />
      </section>
    </div>
  );
}
