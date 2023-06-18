/* eslint-disable tailwindcss/classnames-order */
import React from "react"

import { GitHubProjects } from "@/components/github-projects"

export default function page() {
  return (
    <div>
      <h1 className="text-center my-10 text-2xl font-mono ">Projects</h1>
      <div className="flex  flex-wrap mx-6 justify-center gap-2 my-2">
        <GitHubProjects
          description="Emoji-only twitter built using Next.js"
          star={2}
          language="TypeScript"
          title="shreyas0924/twitter-emoji"
          TypeScript="fill-sky-400 text-sky-400"
        />
        <GitHubProjects
          description="Airport Management System built using React"
          star={2}
          language="JavaScript"
          title="shreyas0924/airport-management"
          JavaScript="fill-yellow-200 text-yellow-200"
        />
        <GitHubProjects
          description="Business Marketplace for small businesses"
          star={2}
          language="JavaScript"
          title="shreyas0924/business-marketplace"
          JavaScript="fill-yellow-200 text-yellow-200"
        />
        <GitHubProjects
          description="Blockchain Ticketing System built on the Polygon Network"
          star={2}
          language="JavaScript"
          title="shreyas0924/Biticket"
          JavaScript="fill-yellow-200 text-yellow-200"
        />
      </div>
    </div>
  )
}
