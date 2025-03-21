"use client";
import { makeLinksClickable } from "@/app/utils/detectLink";
import { ToolInfo } from "@/types/tool-info";
import {
  FileText,
  ClipboardList,
  Settings,
  Lightbulb,
  AlertTriangle,
  BadgeAlert,
} from "lucide-react";
import JSZip from "jszip";

function ToolInfoSection({ data }: { data: ToolInfo }) {
  const getFileExtensionFromContentType = (
    contentType: string | null
  ): string => {
    if (!contentType) return "";
    if (
      contentType.includes(
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      )
    ) {
      return ".docx";
    }
    if (contentType.includes("text/html")) {
      return ".html";
    }
    // Handle pdf
    if (contentType.includes("application/pdf")) {
      return ".pdf";
    }
    return "";
  };

  const downloadAllDocuments = async (): Promise<void> => {
    if (data.documents && data.documents.length > 0) {
      const zip = new JSZip();
      const folder = zip.folder("documents");

      if (!folder) {
        console.error("Could not create a folder in the zip.");
        return;
      }

      for (const doc of data.documents) {
        if (doc && typeof doc === "object" && doc.path) {
          try {
            const response = await fetch(doc.path);
            if (!response.ok) {
              console.error(`Failed to fetch ${doc.path}`);
              continue;
            }
            const blob = await response.blob();
            const contentType = response.headers.get("Content-Type");
            const extension = getFileExtensionFromContentType(contentType);

            // Check if the file name already has an extension.
            const hasExtension = /\.[0-9a-z]+$/i.test(doc.name);
            const fileName = hasExtension ? doc.name : doc.name + extension;

            folder.file(fileName, blob);
          } catch (error) {
            console.error(`Error fetching ${doc.path}:`, error);
          }
        }
      }

      try {
        const zipBlob = await zip.generateAsync({ type: "blob" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(zipBlob);
        link.download = "documents.zip";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error generating zip file:", error);
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Documents Section */}
      {data.documents && (
        <div className="space-y-4">
          {/* Header section with title and "Download All" button */}
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-xl text-[#001f3f] flex items-center gap-2">
              <FileText className="w-5 h-5" /> Documents Required
            </h1>
            {data.troubleshooting ? (
              <button
                onClick={downloadAllDocuments}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
              >
                Download All
              </button>
            ) : (
              ""
            )}
          </div>
          {/* Documents grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.documents.map((doc, index) => {
              return (
                <div
                  key={index}
                  className="bg-white border border-[#B8C8B9] rounded-lg p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                >
                  <FileText className="w-8 h-8 text-[#A7C4BC]" />
                  {typeof doc === "string" ? (
                    <p className="mt-2 text-[#001f3f] font-medium">{doc}</p>
                  ) : (
                    <p className="mt-2 text-[#001f3f] font-medium">
                      {doc.name}
                    </p>
                  )}
                </div>
              );
            })}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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

      {/* Troubleshooting Section */}
      {data.troubleshooting && (
        <div className="space-y-4">
          <h1 className="font-semibold text-xl text-[#001f3f] flex items-center gap-2">
            <BadgeAlert className="w-5 h-5" /> Troubleshooting
          </h1>
          <ol className="space-y-3">
            {data.troubleshooting.map((troubleshooting, index) => (
              <li
                key={troubleshooting}
                className="flex items-start gap-3 bg-[#F3F8F2] border border-[#B8C8B9] rounded-lg p-3"
              >
                <div className="w-6 h-6 flex items-center justify-center bg-[#A7C4BC] text-white rounded-full font-semibold">
                  {index + 1}
                </div>
                <p className="text-[#001f3f]">{troubleshooting}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default ToolInfoSection;
