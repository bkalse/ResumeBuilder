import TemplateOne from "./templates/TemplateOne";
import TemplateTwo from "./templates/TemplateTwo";
import TemplateThree from "./templates/TemplateThree";
import ModernTemplate from "./templates/ModernTemplate";
import FutureTemplate from "./templates/FutureTemplate";

export default function ResumePreview({ formData, selectedTemplate }) {
  const templates = {
    one: TemplateOne,
    two: TemplateTwo,
    three: TemplateThree,
    modern: ModernTemplate,
    future: FutureTemplate,
  };

  const Component = templates[selectedTemplate] || TemplateOne;

  return (
    <div id="resume-preview" className="border rounded p-4 bg-white shadow">
      <Component data={formData} />
    </div>
  );
}
