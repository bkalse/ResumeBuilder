import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ResumePreview from "./components/ResumePreview";
import { validateEmail, validatePhone } from "./utils/validators";
import html2pdf from "html2pdf.js";
import htmlDocx from "html-docx-js/dist/html-docx";

function App() {
    const [resumeData, setResumeData] = useState(() => {
        const stored = localStorage.getItem("resumeData");
        return stored
            ? JSON.parse(stored)
            : {
                name: "Jane Doe",
                email: "jane.doe@email.com",
                phone: "+1 555-123-4567",
                summary:
                    "Experienced **Full Stack Developer** with a passion for building scalable web applications and working across the stack. Adept at collaborating in agile teams and delivering high-quality solutions.\n\n- 5+ years in software engineering\n- Strong communicator & mentor",
                skills:
                    "- JavaScript (React, Node.js)\n- Python (Django, FastAPI)\n- SQL & NoSQL Databases\n- REST & GraphQL APIs\n- CI/CD & Cloud (AWS, Azure)\n- Unit Testing & TDD",
                experience:
                    "- **Senior Developer**, Acme Corp (2021–Present)\n  - Led migration to React and improved performance by 30%\n  - Mentored 4 junior devs\n- **Web Developer**, BetaSoft (2018–2021)\n  - Built internal tools with Django\n  - Automated deployment pipelines",
                certifications:
                    "- AWS Certified Solutions Architect\n- Microsoft Certified: Azure Developer Associate",
                portfolio:
                    "- [GitHub](https://github.com/janedoe)\n- [Portfolio Website](https://janedoe.dev)"
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
        const opt = {
            margin: [0.5, 0.5, 0.5, 0.5], // inches: top, left, bottom, right
            filename: `${resumeData.name}_resume.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, backgroundColor: null },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
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
        <div className={`min-h-screen p-4 transition-colors ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h1 className="text-3xl font-bold mb-1 text-gray-900 dark:text-gray-100">Resume Builder</h1>
                    <p className="text-sm mb-0 text-gray-700 dark:text-gray-300">
                        🛡️ Your data stays on your device. We don’t store anything.
                    </p>
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

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    {/* Template selection dropdown moved here */}
                    <div className="mb-4 px-4 w-full max-w-4xl mx-auto">
                        <label htmlFor="template-select" className="block text-sm font-semibold mb-1 text-gray-800 dark:text-gray-200">
                            Select Resume Template
                        </label>
                        <select
                            id="template-select"
                            className="w-full max-w-xs p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors"
                            value={selectedTemplate}
                            onChange={e => setSelectedTemplate(e.target.value)}
                        >
                            <option value="modern">Modern</option>
                            <option value="future">Future Style</option>
                            <option value="one">Template ONE</option>
                            <option value="two">Template TWO</option>
                            <option value="three">Template THREE</option>
                        </select>
                    </div>
                    <div className="w-full max-w-4xl mx-auto px-4 bg-white dark:bg-gray-800 rounded shadow transition-colors">
                        <Form
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                            selectedTemplate={selectedTemplate}
                            setSelectedTemplate={setSelectedTemplate}
                        />
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
                </div>
                <div className="w-full flex justify-center items-start">
                    <div className="bg-white dark:bg-gray-800 shadow-md p-8 rounded w-[794px] min-h-[1123px] text-justify text-[12pt] leading-relaxed print:shadow-none print:border-none print:p-8 print:w-full print:min-h-full transition-colors text-gray-900 dark:text-gray-100" id="resume-preview">
                        <ResumePreview
                            resumeData={resumeData}
                            selectedTemplate={selectedTemplate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;