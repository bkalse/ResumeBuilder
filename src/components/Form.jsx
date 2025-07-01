import React from "react";

export default function Form({ resumeData = {}, setResumeData, selectedTemplate, setSelectedTemplate }) {
  const handleChange = (field) => (e) => {
    setResumeData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-4">
      <div>
        <label className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors"
          value={resumeData.name || ""}
          onChange={handleChange("name")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors"
          value={resumeData.email || ""}
          onChange={handleChange("email")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Phone</label>
        <input
          type="tel"
          placeholder="Phone"
          className="w-full p-2 border rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors"
          value={resumeData.phone || ""}
          onChange={handleChange("phone")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Career Summary (Markdown supported)</label>
        <textarea
          placeholder="Career Summary (Markdown supported)"
          className="w-full p-2 border rounded h-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors"
          value={resumeData.summary || ""}
          onChange={handleChange("summary")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Skills (use bullet list with '-')</label>
        <textarea
          placeholder="Skills (use bullet list with '-')"
          className="w-full p-2 border rounded h-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors"
          value={resumeData.skills || ""}
          onChange={handleChange("skills")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Experience (use bullet list or Markdown)</label>
        <textarea
          placeholder="Experience (use bullet list or Markdown)"
          className="w-full p-2 border rounded h-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors"
          value={resumeData.experience || ""}
          onChange={handleChange("experience")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Certifications (Markdown supported)</label>
        <textarea
          placeholder="Certifications (Markdown supported)"
          className="w-full p-2 border rounded h-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors"
          value={resumeData.certifications || ""}
          onChange={handleChange("certifications")}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Portfolio (links or Markdown)</label>
        <textarea
          placeholder="Portfolio (links or Markdown)"
          className="w-full p-2 border rounded h-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors"
          value={resumeData.portfolio || ""}
          onChange={handleChange("portfolio")}
        />
      </div>
    </div>
  );
}
