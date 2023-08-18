import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="mt-[10%] text-center font-mono text-4xl antialiased md:text-5xl ">
        <span className="font-mono">
          <div>Hello everyone,</div>
          <div>I`m Shreyas P</div>
        </span>
        <div className="mt-8 text-left font-mono text-2xl leading-7 md:mx-[30%] md:text-2xl   ">
          Passionate Full-Stack Developer, building captivating web experiences
          with React and pushing boundaries.
        </div>

        <div className="mt-8 flex w-full justify-center gap-3 ">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.twitter className="h-5 w-5 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>

          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.linkedin />
              <span className="sr-only">LinkedIn</span>
            </div>
          </Link>
        </div>
      </section>
    </section>
  )
}
