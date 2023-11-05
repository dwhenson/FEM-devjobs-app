const { Children } = require("react");

function JobDetailLayout({ children }) {
  return (
    <main className="place-content" style={{ "--max": "800px" }}>
      {children}
    </main>
  );
}

export default JobDetailLayout;
