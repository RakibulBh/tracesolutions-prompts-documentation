import { makeLinksClickable } from "@/app/utils/detectLink";
import { ToolInfo } from "@/types/tool-info";
import {
  FileText,
  ClipboardList,
  Settings,
  Lightbulb,
  AlertTriangle,
} from "lucide-react"; // Icons for visual distinction

function ToolInfoSection({ data }: { data: ToolInfo }) {
  return (
    <div className="space-y-8">
      {/* Documents Section */}
      {data.documents && (
        <div className="space-y-4">
          <h1 className="font-semibold text-xl text-[#001f3f] flex items-center gap-2">
            <FileText className="w-5 h-5" /> Documents Required
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.documents.map((document) => (
              <div
                key={document}
                className="bg-white border border-[#B8C8B9] rounded-lg p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <FileText className="w-8 h-8 text-[#A7C4BC]" />
                <p className="mt-2 text-[#001f3f] font-medium">{document}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Prerequisites Section */}
      {data.prerequisites && (
        <div className="space-y-4">
          <h1 className="font-semibold text-xl text-[#001f3f] flex items-center gap-2">
            <ClipboardList className="w-5 h-5" /> Prerequisites
          </h1>
          <ol className="space-y-3">
            {data.prerequisites.map((prerequisite, index) => (
              <li
                key={prerequisite}
                className="flex items-start gap-3 bg-[#F3F8F2] border border-[#B8C8B9] rounded-lg p-3"
              >
                <div className="w-6 h-6 flex items-center justify-center bg-[#A7C4BC] text-white rounded-full font-semibold">
                  {index + 1}
                </div>
                <p className="text-[#001f3f]">{prerequisite}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Setup Steps Section */}
      {data.setup_steps && (
        <div className="space-y-4">
          <h1 className="font-semibold text-xl text-[#001f3f] flex items-center gap-2">
            <Settings className="w-5 h-5" /> Setup Steps
          </h1>
          <ol className="space-y-3">
            {data.setup_steps.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-3 bg-[#F3F8F2] border border-[#B8C8B9] rounded-lg p-3"
              >
                <div className="w-6 h-6 flex items-center justify-center bg-[#A7C4BC] text-white rounded-full font-semibold">
                  {index + 1}
                </div>
                <p
                  className="text-[#001f3f]"
                  dangerouslySetInnerHTML={{ __html: makeLinksClickable(step) }}
                />
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Input and Output Sample Section */}
      {data.IO_sample && (
        <div className="space-y-4">
          <h1 className="font-semibold text-xl text-[#001f3f] flex items-center gap-2">
            🔄 Input and Output Sample
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#F3F8F2] border border-[#B8C8B9] rounded-lg p-4">
              <p className="font-medium text-[#001f3f]">Input</p>
              <p className="mt-2 text-[#001f3f]">{data.IO_sample.input}</p>
            </div>
            <div className="bg-[#F3F8F2] border border-[#B8C8B9] rounded-lg p-4">
              <p className="font-medium text-[#001f3f]">Output</p>
              <p className="mt-2 text-[#001f3f]">{data.IO_sample.output}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tips Section */}
      {data.tips && (
        <div className="space-y-4">
          <h1 className="font-semibold text-xl text-[#001f3f] flex items-center gap-2">
            <Lightbulb className="w-5 h-5" /> Good to Know
          </h1>
          <ol className="space-y-3">
            {data.tips.map((tip, index) => (
              <li
                key={tip}
                className="flex items-start gap-3 bg-[#F3F8F2] border border-[#B8C8B9] rounded-lg p-3"
              >
                <div className="w-6 h-6 flex items-center justify-center bg-[#A7C4BC] text-white rounded-full font-semibold">
                  {index + 1}
                </div>
                <p className="text-[#001f3f]">{tip}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Limitations Section */}
      {data.limits && (
        <div className="space-y-4">
          <h1 className="font-semibold text-xl text-[#001f3f] flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> Limitations
          </h1>
          <ol className="space-y-3">
            {data.limits.map((limitation, index) => (
              <li
                key={limitation}
                className="flex items-start gap-3 bg-[#F3F8F2] border border-[#B8C8B9] rounded-lg p-3"
              >
                <div className="w-6 h-6 flex items-center justify-center bg-[#A7C4BC] text-white rounded-full font-semibold">
                  {index + 1}
                </div>
                <p className="text-[#001f3f]">{limitation}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default ToolInfoSection;
