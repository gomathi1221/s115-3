import React, { useState, useEffect } from "react";
import Calculator from "./components/Calculator";
import "./styles.css"; //

function App() {
  const [numberType, setNumberType] = useState("p");
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`http://localhost:9876/numbers/${numberType}`);
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        setNumbers(result.numbers || []);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [numberType]);

  // Calculate Average
  const calculateAverage = () => {
    if (!numbers.length) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return (sum / numbers.length).toFixed(2);
  };

  return (
    <div className="app-container">
      <h1>Average Calculator</h1>
      <Calculator 
        numbers={numbers} 
        setNumberType={setNumberType} 
        average={calculateAverage()} 
        loading={loading} 
        error={error} 
      />
    </div>
  );
}

export default App;
