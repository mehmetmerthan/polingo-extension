import "./App.css";
import { useState } from "react";
import { FaPlus, FaGooglePlay } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { addWord } from "./services/wordService";
import { TbWorld } from "react-icons/tb";
function App() {
  const [inputText, setInputText] = useState("");
  const [inputTranslation, setInputTranslation] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  async function handleAddWord() {
    setAlertMessage("");
    if (!inputText || !inputTranslation) {
      setAlertMessage("Please enter both word and translation.");
      return;
    }
    setLoading(true);
    const result = await addWord({
      newWord: inputText,
      newWordTranslation: inputTranslation,
    });
    if (result.error) {
      setAlertMessage(result.error);
    } else {
      setSuccessMessage("Word added successfully.");
    }
    setInputText("");
    setInputTranslation("");
    setLoading(false);
  }
  function ButtonGroup() {
    return (
      <div style={{ marginTop: "20px" }}>
        {loading ? (
          <ClipLoader
            color={""}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <button onClick={handleAddWord}>
            <FaPlus />
          </button>
        )}
      </div>
    );
  }
  return (
    <>
      <div className="input-section">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <label style={{ marginBottom: 5 }}>Word</label>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Add text here"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <label style={{ marginBottom: 5 }}>Translation</label>
          <input
            type="text"
            value={inputTranslation}
            onChange={(e) => setInputTranslation(e.target.value)}
            placeholder="Add translation here"
          />
        </div>
      </div>
      <ButtonGroup />
      {alertMessage && <p className="alert-message">{alertMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <p className="read-the-docs">
        Click and download app or visit the website to see your dictionary
      </p>
      <div style={{ flexDirection: "column" }}>
        <button style={{ borderWidth: "0px" }}>
          <FaGooglePlay />
        </button>
        <button style={{ borderWidth: "0px" }}>
          <TbWorld />
        </button>
      </div>
    </>
  );
}
export default App;
