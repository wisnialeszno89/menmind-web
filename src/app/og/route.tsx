import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url)

  const title =
    searchParams.get("title") ??
    "Poukladaj swoją sytuację"

  const world =
    searchParams.get("world") ??
    "MenMind"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #111827 100%)",
          color: "white",
          fontFamily: "sans-serif"
        }}
      >

        {/* TOP */}
        <div
          style={{
            fontSize: 24,
            opacity: 0.7,
            textTransform: "uppercase",
            letterSpacing: "2px"
          }}
        >
          {world}
        </div>

        {/* TITLE */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            lineHeight: 1.2,
            maxWidth: "900px"
          }}
        >
          {title}
        </div>

        {/* FOOTER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600
            }}
          >
            MenMind
          </div>

          <div
            style={{
              fontSize: 18,
              opacity: 0.6
            }}
          >
            menmind.app
          </div>
        </div>

      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  )
}