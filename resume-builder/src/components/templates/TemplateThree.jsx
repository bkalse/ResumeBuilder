import { marked } from "marked";

export default function TemplateThree({ data }) {
  const md = (text) => ({ __html: marked.parse(text || "") });

  return (
    <div className="p-6 text-sm text-gray-800 font-mono bg-gray-50">
      <h1 className="text-xl font-bold">{data.name}</h1>
      <div className="text-xs">
        {data.email} | {data.phone}
      </div>

      <div className="mt-3">
        <strong>Summary:</strong>
        <div dangerouslySetInnerHTML={md(data.summary)} />
      </div>

      <div className="mt-3">
        <strong>Skills:</strong>
        <div dangerouslySetInnerHTML={md(data.skills)} />
      </div>

      <div className="mt-3">
        <strong>Experience:</strong>
        <div dangerouslySetInnerHTML={md(data.experience)} />
      </div>

      <div className="mt-3">
        <strong>Certifications:</strong>
        <div dangerouslySetInnerHTML={md(data.certifications)} />
      </div>

      <div className="mt-3">
        <strong>Portfolio:</strong>
        <div dangerouslySetInnerHTML={md(data.portfolio)} />
      </div>
    </div>
  );
}
