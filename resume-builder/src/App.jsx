import { useState } from "react";
import Form from "./components/Form";
import ResumePreview from "./components/ResumePreview";
import { validateEmail, validatePhone } from "./utils/validators";
import html2pdf from "html2pdf.js";
import htmlDocx from "html-docx-js/dist/html-docx";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        summary: "",
        skills: "",
        experience: "",
        certifications: "",
        portfolio: "",
    });

    const [errors, setErrors] = useState({});
    const [selectedTemplate, setSelectedTemplate] = useState("one");

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!validateEmail(formData.email))
            newErrors.email = "Invalid email address";
        if (!validatePhone(formData.phone))
            newErrors.phone = "Invalid phone number";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const exportPDF = () => {
        const element = document.getElementById("resume-preview");
        html2pdf().from(element).save(`${formData.name}_resume.pdf`);
    };

    const exportDOCX = () => {
        const element = document.getElementById("resume-preview");
        const html = element.innerHTML;
        const blob = htmlDocx.asBlob(html);
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${formData.name}_resume.docx`;
        link.click();
    };

    return (
        <div className="min-h-screen p-4 bg-gray-100 text-gray-800">
            <h1 className="text-3xl font-bold mb-4">Resume Builder</h1>
            <p className="text-sm mb-6">🛡️ Your data stays on your device. We don’t store anything.</p>

            <div className="flex gap-4 mb-4">
                {["one", "two", "three", "modern", "future"].map((tpl) => (
                    <button
                        key={tpl}
                        onClick={() => setSelectedTemplate(tpl)}
                        className={`px-3 py-1 rounded border ${selectedTemplate === tpl ? "bg-blue-600 text-white" : "bg-white"
                            }`}
                    >
                        {tpl === "modern"
                            ? "Modern"
                            : tpl === "future"
                                ? "Future Style"
                                : `Template ${tpl.toUpperCase()}`}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Form formData={formData} setFormData={setFormData} errors={errors} />
                <ResumePreview formData={formData} selectedTemplate={selectedTemplate} />
            </div>

            <div className="mt-4 flex gap-4">
                <button
                    onClick={() => validate() && exportPDF()}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Download PDF
                </button>
                <button
                    onClick={() => validate() && exportDOCX()}
                    className="px-4 py-2 bg-green-600 text-white rounded"
                >
                    Download DOCX
                </button>
            </div>
        </div>
    );
}

export default App;