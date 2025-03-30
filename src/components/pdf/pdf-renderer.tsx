"use client";

import React, { useState, useEffect } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { CVDocument } from "./document";
import { Button } from "@/components/ui/button";
import { CV } from "@/types/cv";
import { Loader2 } from "lucide-react";

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
  const [isRendering, setIsRendering] = useState(true);

  // This ensures this component only renders on the client
  // since react-pdf requires browser APIs
  useEffect(() => {
    setIsClient(true);
    // Add a small delay to simulate PDF rendering
    const timer = setTimeout(() => {
      setIsRendering(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isClient || isRendering) {
    return (
      <div className="h-[calc(100vh-200px)] w-full border rounded-md flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Preparing your CV preview...</p>
        </div>
      </div>
    );
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
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Preparing document...
                </>
              ) : (
                "Download PDF"
              )}
            </Button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
}
