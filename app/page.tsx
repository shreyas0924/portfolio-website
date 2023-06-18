/* eslint-disable tailwindcss/no-contradicting-classname */
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="mt-[10%] text-center font-mono text-[3.2rem] antialiased ">
        <span className="italic">
          <div>Hello everyone,</div>
          <div>I`m Shreyas P</div>
        </span>
        <div className="mx-[30%] mt-5 text-left font-mono text-[2.2rem] text-xl leading-7 ">
          Passionate Frontend Developer, building captivating web experiences
          with React and pushing boundaries.
        </div>

        <div className="mt-6 flex w-full gap-3">
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
              <Icons.twitter className="h-5 w-5 fill-current" />
              <span className="sr-only">LinkedIn</span>
            </div>
          </Link>
        </div>
      </section>
    </section>
  )
}
