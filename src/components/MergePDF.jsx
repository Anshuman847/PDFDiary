import React, { useState } from "react";
import PDFMerger from "pdf-merger-js/browser";

const MergePDF = () => {
  const [files, setFiles] = useState([]);
  const [mergedUrl, setMergedUrl] = useState(null);

  const handleFiles = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const mergePDFs = async () => {
    if (files.length < 2) {
      alert("Please select at least 2 PDF files to merge.");
      return;
    }

    const merger = new PDFMerger();
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      await merger.add(arrayBuffer);
    }

    const mergedPdf = await merger.saveAsBlob();
    const url = URL.createObjectURL(mergedPdf);
    setMergedUrl(url);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Merge PDFs</h2>
      <input type="file" accept="application/pdf" multiple onChange={handleFiles} />
      <br />
      <button onClick={mergePDFs} style={{ marginTop: "1rem" }}>
        Merge PDFs
      </button>

      {mergedUrl && (
        <div style={{ marginTop: "2rem" }}>
          <a href={mergedUrl} download="merged.pdf">
            Download Merged PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default MergePDF;
