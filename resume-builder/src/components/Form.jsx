import React from "react";

export default function Form({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const fieldHelp = {
    summary: "Add a short summary of your career. Markdown works here!",
    skills: "List your skills using `-` or commas.",
    experience: "Describe your past roles. Use `**Role**, Company` format if you like.",
  };

  const fields = [
    { name: "name", label: "Full Name" },
    { name: "email", label: "Email" },
    { name: "phone", label: "Phone" },
    { name: "summary", label: "Career Summary", multiline: true },
    { name: "skills", label: "Skills", multiline: true },
    { name: "experience", label: "Experience", multiline: true },
    { name: "certifications", label: "Certifications", multiline: true },
    { name: "portfolio", label: "Portfolio Links", multiline: true },
  ];

  return (
    <div className="space-y-4">
      {fields.map((f) => (
        <div key={f.name} className="mb-4">
          <label className="block font-medium mb-1">{f.label}</label>
          {f.multiline ? (
            <textarea
              name={f.name}
              value={formData[f.name]}
              onChange={handleChange}
              rows={4}
              className="w-full border p-2 rounded"
              placeholder="Write here..."
            />
          ) : (
            <input
              type="text"
              name={f.name}
              value={formData[f.name]}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          )}

          {fieldHelp[f.name] && (
            <p className="text-xs text-gray-500 mt-1">{fieldHelp[f.name]}</p>
          )}

          {f.multiline && (
            <p className="text-xs text-gray-500 mt-1">
              ✏️ You can use <strong>Markdown</strong> for formatting (e.g. `**bold**`, `- list item`). Plain text works too.
            </p>
          )}
          {errors[f.name] && (
            <p className="text-red-600 text-sm mt-1">{errors[f.name]}</p>
          )}
        </div>
      ))}

    </div>
  );
}
