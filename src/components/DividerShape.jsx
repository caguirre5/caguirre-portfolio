import React from 'react'

function DividerShape({fillColor, backgroundColor}) {
  return (
    <div style={{backgroundColor: backgroundColor}}>
        <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ fill: fillColor }}
        >
            <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
            ></path>
        </svg>
    </div>
  )
}

export default DividerShape