import Link from 'next/link'
import React from 'react'

interface PropsType {}

const CourseHeader: React.FC<PropsType> = () => {
return (
<div>
<div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <div>
          <div style={{ width: "auto", textAlign: "center" }}>
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
              the most popular Packages
            </h3>
            &nbsp;&nbsp;
          </div>
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

export default CourseHeader