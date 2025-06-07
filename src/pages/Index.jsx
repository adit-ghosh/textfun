import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { DarkModeContext } from "../App";

export default function Index() {
    const [text, setText] = useState("");
    const [summary, setSummary] = useState(null);
    const { darkMode } = useContext(DarkModeContext);

    // Utility functions
    const capitalizeText = (str) =>
        str
            .toLowerCase()
            .replace(/(^\w{1}|\.\s*\w{1}|\!\s*\w{1}|\?\s*\w{1})/gm, (match) => match.toUpperCase());

    const punctuateText = (str) => {
        let s = str.trim();
        if (!/[.!?]$/.test(s) && s.length > 0) s += ".";
        return capitalizeText(s);
    };

    // Button handlers
    const handleUppercase = () => setText(text.toUpperCase());
    const handleLowercase = () => setText(text.toLowerCase());
    const handleRemoveSpaces = () => setText(text.replace(/\s+/g, ""));
    const handleInvert = () => setText(text.split("").reverse().join(""));
    const handleCapitalize = () => setText(capitalizeText(text));
    const handleRemovePunctuations = () => setText(text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, ""));
    const handleRemoveNumbers = () => setText(text.replace(/[0-9]/g, ""));
    const handleRemoveVowels = () => setText(text.replace(/[aeiouAEIOU]/g, ""));
    const handleRemoveConsonants = () => setText(text.replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, ""));

    const handleSummary = () => {
        const charsWithSpaces = text.length;
        const charsWithoutSpaces = text.replace(/\s/g, "").length;
        const words = text.trim().split(/\s+/).filter(Boolean);
        const wordCount = words.length;
        const totalSeconds = Math.round((wordCount / 238) * 60);

        // Calculate hours, minutes, seconds
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        // Build time string (only show non-zero units)
        let timeParts = [];
        if (hours > 0) timeParts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
        if (minutes > 0) timeParts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
        if (seconds > 0) timeParts.push(`${seconds} second${seconds > 1 ? "s" : ""}`);
        if (timeParts.length === 0) timeParts.push("0 second");
        const readingTime = timeParts.join(" ");

        setSummary({
            charsWithSpaces,
            charsWithoutSpaces,
            wordCount,
            readingTime,
            properText: punctuateText(text),
        });
    };

    // Styling
    const containerStyle = {
        maxWidth: "700px",
        width: "75vh",
        margin: "40px auto",
        padding: "32px",
        background: darkMode ? "#181c24" : "#f8f9fa",
        borderRadius: "16px",
        boxShadow: darkMode
            ? "0 2px 16px rgba(0,0,0,0.32)"
            : "0 2px 16px rgba(0,0,0,0.08)",
        color: darkMode ? "#f8f9fa" : "#181c24",
        transition: "background 0.3s, color 0.3s",
    };
    const buttonStyle = {
        margin: "6px 8px 6px 0",
        minWidth: "170px",
        fontWeight: "500",
        letterSpacing: "0.5px",
        background: darkMode ? "#2563eb" : undefined,
        color: darkMode ? "#fff" : undefined,
        border: darkMode ? "none" : undefined,
    };
    const summaryStyle = {
        marginTop: "32px",
        background: darkMode ? "#23272f" : "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: darkMode
            ? "0 1px 8px rgba(0,0,0,0.18)"
            : "0 1px 8px rgba(0,0,0,0.06)",
        color: darkMode ? "#f8f9fa" : "#181c24",
    };
    const textareaStyle = {
        fontSize: "16px",
        marginBottom: "18px",
        background: darkMode ? "#23272f" : "#fff",
        color: darkMode ? "#f8f9fa" : "#181c24",
        border: darkMode ? "1px solid #444" : undefined,
        transition: "background 0.3s, color 0.3s",
    };

    return (
        <>
            <Navbar />
            <div style={containerStyle}>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                        style={{
                            fontWeight: "bold",
                            fontSize: "18px",
                            color: darkMode ? "#f8f9fa" : "#181c24",
                        }}
                    >
                        Enter Your Text
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="10"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        style={textareaStyle}
                    ></textarea>
                </div>
                <div>
                    <button className="btn btn-primary" style={buttonStyle} onClick={handleUppercase}>Convert to Uppercase</button>
                    <button className="btn btn-primary" style={buttonStyle} onClick={handleLowercase}>Convert to Lowercase</button>
                    <button className="btn btn-primary" style={buttonStyle} onClick={handleRemoveSpaces}>Remove All Spaces</button>
                    <button className="btn btn-primary" style={buttonStyle} onClick={handleInvert}>Invert</button>
                    <button className="btn btn-primary" style={buttonStyle} onClick={handleCapitalize}>Capitalize</button>
                    <button className="btn btn-primary" style={buttonStyle} onClick={handleRemovePunctuations}>Remove All Punctuations</button>
                    <button className="btn btn-primary" style={buttonStyle} onClick={handleRemoveNumbers}>Remove All Numbers</button>
                    <button className="btn btn-primary" style={buttonStyle} onClick={handleRemoveVowels}>Remove All Vowels</button>
                    <button className="btn btn-primary" style={buttonStyle} onClick={handleRemoveConsonants}>Remove All Consonants</button>
                    <button className="btn btn-success" style={buttonStyle} onClick={handleSummary}>Generate Summary</button>
                </div>
                {summary && (
                    <div style={summaryStyle}>
                        <h4>Summary</h4>
                        <ul>
                            <li><b>Characters (with spaces):</b> {summary.charsWithSpaces}</li>
                            <li><b>Characters (without spaces):</b> {summary.charsWithoutSpaces}</li>
                            <li><b>Words:</b> {summary.wordCount}</li>
                            <li><b>Approx. Reading Time:</b> {summary.readingTime}</li>
                        </ul>
                        <div>
                            <b>Text:</b>
                            <div style={{
                                background: darkMode ? "#181c24" : "#f1f3f4",
                                borderRadius: "8px",
                                padding: "12px",
                                marginTop: "8px",
                                color: darkMode ? "#f8f9fa" : "#181c24"
                            }}>
                                {summary.properText}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}