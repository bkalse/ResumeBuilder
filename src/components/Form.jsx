import React from "react";

export default function Form({ resumeData = {}, setResumeData, selectedTemplate, setSelectedTemplate }) {
  const handleChange = (field) => (e) => {
    setResumeData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-4">
      <div>
        <label className="block mb-1 font-semibold">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          value={resumeData.name || ""}
          onChange={handleChange("name")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={resumeData.email || ""}
          onChange={handleChange("email")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Phone</label>
        <input
          type="tel"
          placeholder="Phone"
          className="w-full p-2 border rounded"
          value={resumeData.phone || ""}
          onChange={handleChange("phone")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Career Summary (Markdown supported)</label>
        <textarea
          placeholder="Career Summary (Markdown supported)"
          className="w-full p-2 border rounded h-24"
          value={resumeData.summary || ""}
          onChange={handleChange("summary")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Skills (use bullet list with '-')</label>
        <textarea
          placeholder="Skills (use bullet list with '-')"
          className="w-full p-2 border rounded h-24"
          value={resumeData.skills || ""}
          onChange={handleChange("skills")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Experience (use bullet list or Markdown)</label>
        <textarea
          placeholder="Experience (use bullet list or Markdown)"
          className="w-full p-2 border rounded h-32"
          value={resumeData.experience || ""}
          onChange={handleChange("experience")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Certifications (Markdown supported)</label>
        <textarea
          placeholder="Certifications (Markdown supported)"
          className="w-full p-2 border rounded h-24"
          value={resumeData.certifications || ""}
          onChange={handleChange("certifications")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Portfolio (links or Markdown)</label>
        <textarea
          placeholder="Portfolio (links or Markdown)"
          className="w-full p-2 border rounded h-20"
          value={resumeData.portfolio || ""}
          onChange={handleChange("portfolio")}
        />
      </div>

      <div className="pt-4">
        <label className="block text-sm font-semibold mb-1">Select Template</label>
        <select
          className="w-full p-2 border rounded"
          value={selectedTemplate}
          onChange={(e) => setSelectedTemplate(e.target.value)}
        >
          <option value="modern">Modern</option>
          <option value="template1">Template One</option>
          <option value="future">Future</option>
        </select>
      </div>
    </div>
  );
}
