import React from "react";

export default function Form({ resumeData = {}, setResumeData, selectedTemplate, setSelectedTemplate }) {
  const handleChange = (field) => (e) => {
    setResumeData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-2 border rounded"
        value={resumeData.name || ""}
        onChange={handleChange("name")}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        value={resumeData.email || ""}
        onChange={handleChange("email")}
      />
      <input
        type="tel"
        placeholder="Phone"
        className="w-full p-2 border rounded"
        value={resumeData.phone || ""}
        onChange={handleChange("phone")}
      />
      <textarea
        placeholder="Career Summary (Markdown supported)"
        className="w-full p-2 border rounded h-24"
        value={resumeData.summary || ""}
        onChange={handleChange("summary")}
      />
      <textarea
        placeholder="Skills (use bullet list with '-')"
        className="w-full p-2 border rounded h-24"
        value={resumeData.skills || ""}
        onChange={handleChange("skills")}
      />
      <textarea
        placeholder="Experience (use bullet list or Markdown)"
        className="w-full p-2 border rounded h-32"
        value={resumeData.experience || ""}
        onChange={handleChange("experience")}
      />
      <textarea
        placeholder="Certifications (Markdown supported)"
        className="w-full p-2 border rounded h-24"
        value={resumeData.certifications || ""}
        onChange={handleChange("certifications")}
      />
      <textarea
        placeholder="Portfolio (links or Markdown)"
        className="w-full p-2 border rounded h-20"
        value={resumeData.portfolio || ""}
        onChange={handleChange("portfolio")}
      />
      <div className="pt-4">
        <label className="block text-sm mb-1">Select Template</label>
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
