import Button from "./Button";
import "./Button.css";
import "./ImcCalc.css";
import { useState } from "react";

const ImcCalc = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setAltura("");
    setPeso("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "")
  }

  const handleHeightChange = (e) => {
    const updateValue = validDigits(e.target.value)

    setAltura(updateValue)}
  }

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
              onChange={(e) => handleHeightChange(e)}
              value={altura}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 70,5"
              onChange={(e) => setPeso(e.target.value)}
              value={peso}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
