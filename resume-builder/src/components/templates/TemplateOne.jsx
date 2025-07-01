import { marked } from "marked";

export default function TemplateOne({ data = {} }) {
  const md = (text) => ({
    __html: marked.parse(text || ""),
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{data.name || ""}</h1>
      <p>
        {data.email} | {data.phone}
      </p>
      <hr className="my-4" />

      <h2 className="font-semibold text-xl">Career Summary</h2>
      <div dangerouslySetInnerHTML={md(data.summary)} />

      <h2 className="font-semibold text-xl mt-4">Skills</h2>
      <div dangerouslySetInnerHTML={md(data.skills)} />

      <h2 className="font-semibold text-xl mt-4">Experience</h2>
      <div dangerouslySetInnerHTML={md(data.experience)} />

      <h2 className="font-semibold text-xl mt-4">Certifications</h2>
      <div dangerouslySetInnerHTML={md(data.certifications)} />

      <h2 className="font-semibold text-xl mt-4">Portfolio</h2>
      <div dangerouslySetInnerHTML={md(data.portfolio)} />
    </div>
  );
}
