import { marked } from "marked";

export default function TemplateTwo({ data }) {
  const md = (text) => ({ __html: marked.parse(text || "") });

  return (
    <div className="p-6 font-serif text-gray-900">
      <h1 className="text-3xl font-bold border-b">{data.name}</h1>
      <p className="italic">
        {data.email} | {data.phone}
      </p>

      <section className="mt-4">
        <h2 className="font-bold text-lg">Summary</h2>
        <div dangerouslySetInnerHTML={md(data.summary)} />
      </section>

      <section className="mt-4">
        <h2 className="font-bold text-lg">Skills</h2>
        <div dangerouslySetInnerHTML={md(data.skills)} />
      </section>

      <section className="mt-4">
        <h2 className="font-bold text-lg">Experience</h2>
        <div dangerouslySetInnerHTML={md(data.experience)} />
      </section>

      <section className="mt-4">
        <h2 className="font-bold text-lg">Certifications</h2>
        <div dangerouslySetInnerHTML={md(data.certifications)} />
      </section>

      <section className="mt-4">
        <h2 className="font-bold text-lg">Portfolio</h2>
        <div dangerouslySetInnerHTML={md(data.portfolio)} />
      </section>
    </div>
  );
}
