import React, { useState } from "react";

const TestReport = () => {
  const [tests, setTests] = useState([
    { id: 1, name: "Test for valid registration", status: "passed" },
    { id: 2, name: "Test for invalid registration", status: "failed" },
    { id: 3, name: "Test for login", status: "passed" },
    { id: 4, name: "Test for payment", status: "skipped" },
  ]);

  const rerunTests = () => {
    const newTests = tests.map(test => ({
      ...test,
      status: ['passed', 'failed', 'skipped'][Math.floor(Math.random() * 3)],
    }));
    setTests(newTests);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>TestNG Test Report</h2>

      <div style={styles.annotations}>
        <h3 style={styles.subHeader}>TestNG Annotations</h3>
        <ul style={styles.list}>
          <li><strong>@BeforeClass</strong> - Runs before any test method in the class.</li>
          <li><strong>@Test</strong> - Marks a method as a test method.</li>
          <li><strong>@AfterClass</strong> - Runs after all test methods in the class.</li>
        </ul>
      </div>

      <div style={styles.testResults}>
        <h3 style={styles.subHeader}>Test Results</h3>
        {tests.map(test => (
          <div key={test.id} style={styles.testItem}>
            <strong style={styles.testName}>{test.name}:</strong>
            <span
              style={{
                ...styles.testStatus,
                color: test.status === 'passed' ? 'green' : test.status === 'failed' ? 'red' : 'orange',
              }}
            >
              {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
            </span>
          </div>
        ))}
      </div>

      <button onClick={rerunTests} style={styles.button}>
        Re-run Tests
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  subHeader: {
    fontSize: '1.5rem',
    color: '#34495e',
    marginBottom: '10px',
  },
  annotations: {
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
    marginBottom: '20px',
  },
  testResults: {
    marginBottom: '20px',
  },
  testItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
    backgroundColor: '#fff',
  },
  testName: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  testStatus: {
    fontSize: '1rem',
    fontWeight: 'normal',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#2980b9',
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'block',
    width: '100%',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  },
};

export default TestReport;
