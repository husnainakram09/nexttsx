import Link from 'next/link'
import React from 'react'

interface PropsType {}

const TutorHeader: React.FC<PropsType> = () => {
return (
<div>
<div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div>
          <p style={{ width: "auto", textAlign: "center" }}>
            <span
              style={{
                backgroundColor: "var(--orange)",
                border: "2px solid var(--orange)",
                padding: "0",
                marginRight: "5px",
              }}
            ></span>
            <h3 style={{ display: "inline", fontWeight: "700" }}>
              {" "}
              the most popular Tutors
            </h3>
            &nbsp;&nbsp;
          </p>
        </div>
        <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />
        <div>
          <p style={{ width: "70px", textAlign: "center" }}>
            <Link
              href="/"
              style={{ textAlign: "right", color: "var(--orange)" }}
            >
              see more
            </Link>
          </p>
        </div>
      </div>
</div>
)
}

export default TutorHeader