import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

import ErrorPdfMessage from './Messages/ErrorPdfMessage';
import LoadingPdfMessage from './Messages/LoadingPdfMessage';

const fileUrl = process.env.REACT_APP_USERS_BASE_URL + '/terms-and-conditions';

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
      file={fileUrl}
      loading={LoadingPdfMessage}
      noData={ErrorPdfMessage}
      error={ErrorPdfMessage}
      onLoadError={ErrorPdfMessage}
      onLoadSuccess={onDocumentLoadSuccess}
      onSourceError={ErrorPdfMessage}
    >
      {array.map((__page, pageNumber) => (
        <div key={pageNumber} style={{ userSelect: 'none' }}>
          <Page
            loading={LoadingPdfMessage}
            pageIndex={pageNumber}
            width={width}
          />
        </div>
      ))}
    </Document>
  );
};

export default PDFViewer;
