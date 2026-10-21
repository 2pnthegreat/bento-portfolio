import { ImageResponse } from "next/og";

export const alt = "Kampanart Poonpanao — Full-stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background: "#121212",
                    color: "#f5f5f5",
                }}
            >
                <div style={{ fontSize: 28, color: "#ff8233", letterSpacing: 4, textTransform: "uppercase" }}>
                    Portfolio
                </div>
                <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24 }}>Kampanart Poonpanao</div>
                <div style={{ fontSize: 40, color: "#a3a3a3", marginTop: 16 }}>
                    Full-stack & Low-code Developer
                </div>
                <div style={{ fontSize: 28, color: "#737373", marginTop: 48 }}>
                    Go-Fiber · Next.js · PostgreSQL · Joget DX
                </div>
            </div>
        ),
        size
    );
}
