import '../css/Report.css'; 

const Report = () => {
  return (
    <div className="iframe-container">
      <iframe
        title="Looker Studio Report"
        src="https://lookerstudio.google.com/embed/reporting/be42be9a-67fd-413a-939f-899ec1efaca5/page/bbUDE"
        frameBorder="0"
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
  );
};

export default Report;