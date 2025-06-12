import { data } from "./data/data";

import { useState } from "react";

import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

import "./App.css";

function App() {
  const calcImc = (e, altura, peso) => {
    e.preventDefault();

    if (!peso || !altura) return;

    const pesoFloat = +peso.replace(",", ".");
    const alturaFloat = +altura.replace(",", ".");

    const imcResult = (pesoFloat / (alturaFloat * alturaFloat)).toFixed(1);

    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClas(item.infoClass);
      }
    });
    if (!info) return;
  };

  const resetCalc = (e) => {
    e.preventDefault();

    setImc("");
    setInfo("");
    setInfoClas("");
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClas] = useState("");
  return (
    <>
      <div className="container">
        {!imc ? (
          <ImcCalc calcImc={calcImc} />
        ) : (
          <ImcTable
            data={data}
            imc={imc}
            info={info}
            infoClass={infoClass}
            resetCalc={resetCalc}
          />
        )}
      </div>
    </>
  );
}

export default App;
