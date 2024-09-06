import React from "react";

export default function SliderComp({
  setValue,
  handleInput,
  bgColor,
  textColor,
}) {
    const sliderStyle = {
        appearance: 'none',
        width: '100%',
        height: 25,
        background: 'lightgray',
        curser: 'pointer',
        opacity: 0.7,
        borderRadius: "5px"
    }

  return (
    <div className="d-flex flex-column" style={{ gap: 100 }}>
      <input
        type="range"
        min="0"
        max={100}
        value={setValue}
        onInput={handleInput}
        style={sliderStyle}
      />
      <div
        style={{
          color: !textColor? "black": textColor,
          background: !bgColor? "lightgray" : bgColor,
          height: `${setValue * 4}px`,
          width: `${setValue * 4}px`,
          fontWeight: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        <span>{setValue}</span>
      </div>
    </div>
  );
}
