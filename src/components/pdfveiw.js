import React, { useState } from 'react';

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div>
      <iframe src={pdfUrl} title="PDF veiwer" width="100%" height="600px"/>
    </div>
  );
};

const PdfButton = ({ pdfUrl, onClick }) => {
  return <button onClick={() => onClick(pdfUrl)}>Open PDF</button>;
};

const PdfList = ({ pdfs, onPdfSelect }) => {
  return (
    <div>
      {pdfs.map((pdf, index) => (
        <PdfButton key={index} pdfUrl={pdf.url} onClick={onPdfSelect} />
      ))}
    </div>
  );
};

const PdfViewerWithButtons = ({ pdfs }) => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handlePdfSelect = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <PdfList pdfs={pdfs} onPdfSelect={handlePdfSelect} />
      </div>
      <div style={{ flex: 2 }}>
        {selectedPdf && <PdfViewer pdfUrl={selectedPdf} />}
      </div>
    </div>
  );
};


export default PdfViewerWithButtons
