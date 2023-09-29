import { useState } from "react";
import "./textExpander.css";

export default function TextExpanderEx({
  children,
  className = "",
  expanded = false,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  collapsedNumWords = 10,
}) {
  const [isExpanded, setExpanded] = useState(expanded);
  const [numWords, setNumWords] = useState(collapsedNumWords);

  function handleCollapseButton() {
    setExpanded((isExpanded) => !isExpanded);
    setNumWords(isExpanded ? words.length : collapsedNumWords);
  }

  const words = children.split(" ");

  return (
    <div className={className}>
      {words.map((word, i) => (
        <>{i < numWords ? word + " " : ""}</>
      ))}

      <button
        onClick={() => handleCollapseButton(isExpanded)}
        style={{ color: buttonColor }}
      >
        {isExpanded ? expandButtonText : collapseButtonText}
      </button>
    </div>
  );
}
