"use client";

import React from "react";
import { CVDocument } from "./document";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { CVTemplate } from "@/types/cv";
import { CV } from "@/types/cv";

export interface PDFRendererProps {
  cv: CV;
  template: CVTemplate;
  fileName: string;
}

// Keep only the PDF renderer component here
export function PDFRenderer({ cv, template, fileName }: PDFRendererProps) {
  return (
    <div className="space-y-4 h-full">
      <div className="flex justify-end">
        <PDFDownloadLink
          document={<CVDocument cv={cv} template={template} />}
          fileName={fileName}
        >
          {({ loading }) => (
            <Button disabled={loading}>
              <Download className="mr-2 h-4 w-4" />
              {loading ? "Generating PDF..." : "Download PDF"}
            </Button>
          )}
        </PDFDownloadLink>
      </div>

      <div className="h-[calc(100%-48px)]">
        <PDFViewer
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid #e2e8f0",
            borderRadius: "0.375rem",
          }}
        >
          <CVDocument cv={cv} template={template} />
        </PDFViewer>
      </div>
    </div>
  );
}
