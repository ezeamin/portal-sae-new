import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

import ErrorPdfMessage from './Messages/ErrorPdfMessage';
import LoadingPdfMessage from './Messages/LoadingPdfMessage';

const PDFViewer = () => {
  const pageSize = window.innerWidth;

  const [array, setArray] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (pageSize <= 890) {
      setWidth(pageSize * 0.8);
    } else if (pageSize > 890 && pageSize < 1150) {
      setWidth(pageSize * 0.65);
    } else {
      setWidth(pageSize * 0.55);
    }
  }, [pageSize]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setArray(Array(numPages).fill(undefined));
  };

  return (
    <Document
      file=
      {'./static/sample.pdf'}
      // {{ url: 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf' }}
      /* { url: 'http://example.com/sample.pdf', httpHeaders: { 'X-CustomHeader': '40359820958024350238508234' }, withCredentials: true } */
      loading={LoadingPdfMessage} // mensaje mientras se carga el pdf
      noData={<div>No PDF file specified.</div>} // mensaje en caso que no exista data
      onLoadError={ErrorPdfMessage}
      onLoadSuccess={onDocumentLoadSuccess}
      onSourceError={ErrorPdfMessage}
    >
      {array.map((__page, pageNumber) => (
        <div key={pageNumber} style={{ userSelect: 'none' }}>
          <Page
            loading={'Cargando PDF MPP'}
            pageIndex={pageNumber}
            width={width}
          />
        </div>
      ))}
    </Document>
  );
};

export default PDFViewer;
