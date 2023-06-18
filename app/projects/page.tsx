/* eslint-disable tailwindcss/classnames-order */
import React from "react"

import { GitHubProjects } from "@/components/github-projects"

export default function page() {
  return (
    <div>
      <h1 className="text-center my-10 text-2xl text-mono ">Projects</h1>
      <div className="flex  flex-wrap mx-6 justify-center gap-2 my-2">
        <GitHubProjects
          description="Emoji-only twitter built using Next.js"
          star={2}
          language="TypeScript"
          title="shreyas0924/twitter-emoji"
        />
        <GitHubProjects
          description="Emoji-only twitter built using Next.js"
          star={2}
          language="TypeScript"
          title="shreyas0924/twitter-emoji"
        />
        <GitHubProjects
          description="Emoji-only twitter built using Next.js"
          star={2}
          language="TypeScript"
          title="shreyas0924/twitter-emoji"
        />
        <GitHubProjects
          description="Emoji-only twitter built using Next.js"
          star={2}
          language="TypeScript"
          title="shreyas0924/twitter-emoji"
        />
      </div>
    </div>
  )
}
