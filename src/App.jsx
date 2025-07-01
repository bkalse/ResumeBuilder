import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ResumePreview from "./components/ResumePreview";
import { validateEmail, validatePhone } from "./utils/validators";
import html2pdf from "html2pdf.js";
import htmlDocx from "html-docx-js/dist/html-docx";

function App() {
    const [resumeData, setResumeData] = useState(() => {
        const stored = localStorage.getItem("resumeData");
        return stored ? JSON.parse(stored) : {
            name: "",
            email: "",
            phone: "",
            summary: "",
            skills: "",
            experience: "",
            certifications: "",
            portfolio: ""
        };
    });


    const [errors, setErrors] = useState({});
    const [selectedTemplate, setSelectedTemplate] = useState(() => {
        const stored = localStorage.getItem("selectedTemplate");
        return stored || "modern";
    });
    const [darkMode, setDarkMode] = useState(() => {
        const stored = localStorage.getItem("darkMode");
        return stored === "true";
    });

    const validate = () => {
        const newErrors = {};
        if (!resumeData.name.trim()) newErrors.name = "Name is required";
        if (!validateEmail(resumeData.email))
            newErrors.email = "Invalid email address";
        if (!validatePhone(resumeData.phone))
            newErrors.phone = "Invalid phone number";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const exportPDF = () => {
        const element = document.getElementById("resume-preview");
        html2pdf().from(element).save(`${resumeData.name}_resume.pdf`);
    };

    const exportDOCX = () => {
        const element = document.getElementById("resume-preview");
        const html = element.innerHTML;
        const blob = htmlDocx.asBlob(html);
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${resumeData.name}_resume.docx`;
        link.click();
    };

    useEffect(() => {
        const stored = localStorage.getItem("resumeData");
        if (stored) {
            setResumeData(JSON.parse(stored));
        }
        const storedTemplate = localStorage.getItem("selectedTemplate");
        if (storedTemplate) {
            setSelectedTemplate(storedTemplate);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
    }, [resumeData]);

    useEffect(() => {
        localStorage.setItem("selectedTemplate", selectedTemplate);
    }, [selectedTemplate]);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className={`min-h-screen p-4 text-gray-800 ${darkMode ? "bg-gray-900" : "bg-gray-100"} transition-colors`}>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h1 className="text-3xl font-bold mb-1">Resume Builder</h1>
                    <p className="text-sm mb-0">🛡️ Your data stays on your device. We don’t store anything.</p>
                </div>
                <button
                    onClick={() => setDarkMode((d) => !d)}
                    className="inline-flex items-center px-3 py-2 rounded-full border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Toggle dark mode"
                    title="Toggle dark mode"
                >
                    {darkMode ? (
                        // Moon icon
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                        </svg>
                    ) : (
                        // Sun icon
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="5" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
                        </svg>
                    )}
                </button>
            </div>

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
                <Form
                    resumeData={resumeData}
                    setResumeData={setResumeData}
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                />
                <ResumePreview
                    resumeData={resumeData}
                    selectedTemplate={selectedTemplate}
                />
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