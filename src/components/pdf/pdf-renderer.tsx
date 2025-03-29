"use client";

import React, { useState, useEffect } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { CVDocument } from "./document";
import { Button } from "@/components/ui/button";
import { CV } from "@/types/cv";

interface PDFRendererProps {
  cv: CV;
  template: "classic" | "modern" | "professional";
  fileName?: string;
}

export function PDFRenderer({
  cv,
  template,
  fileName = "cv.pdf",
}: PDFRendererProps) {
  const [isClient, setIsClient] = useState(false);

  // This ensures this component only renders on the client
  // since react-pdf requires browser APIs
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading PDF viewer...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="h-[calc(100vh-200px)] w-full border rounded-md overflow-hidden">
        <PDFViewer width="100%" height="100%" style={{ border: "none" }}>
          <CVDocument cv={cv} template={template} />
        </PDFViewer>
      </div>

      <div className="flex justify-end">
        <PDFDownloadLink
          document={<CVDocument cv={cv} template={template} />}
          fileName={fileName}
        >
          {({ loading }) => (
            <Button disabled={loading}>
              {loading ? "Preparing document..." : "Download PDF"}
            </Button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
}
