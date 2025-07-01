import TemplateOne from "./templates/TemplateOne";
import TemplateTwo from "./templates/TemplateTwo";
import TemplateThree from "./templates/TemplateThree";
import ModernTemplate from "./templates/ModernTemplate";
import FutureTemplate from "./templates/FutureTemplate";

export default function ResumePreview({ resumeData, selectedTemplate }) {
  const templates = {
    one: TemplateOne,
    two: TemplateTwo,
    three: TemplateThree,
    modern: ModernTemplate,
    future: FutureTemplate,
  };

  const Component = templates[selectedTemplate] || TemplateOne;

  return (
    <div className="flex justify-center my-10">
      <div className="bg-white shadow-md p-8 rounded w-[794px] min-h-[1123px] text-justify text-[12pt] leading-relaxed print:shadow-none print:border-none print:p-8 print:w-full print:min-h-full">
        {selectedTemplate === "one" && <TemplateOne data={resumeData} />}
        {selectedTemplate === "two" && <TemplateTwo data={resumeData} />}
        {selectedTemplate === "three" && <TemplateThree data={resumeData} />}
        {selectedTemplate === "modern" && <ModernTemplate data={resumeData} />}
        {selectedTemplate === "future" && <FutureTemplate data={resumeData} />}
      </div>
    </div>
  );
}
