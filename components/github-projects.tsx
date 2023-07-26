import Link from "next/link"
import { Circle, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Github = {
  title: string
  description: string
  language: "TypeScript" | "JavaScript"
  star: number
  TypeScript?: "fill-sky-400 text-sky-400"
  JavaScript?: "fill-yellow-200 text-yellow-200"
}

export function GitHubProjects({
  title,
  description,
  language,
  star,
  TypeScript,
  JavaScript,
}: Github) {
  return (
    <Card className="lg:w-2/5">
      <CardHeader className="grid items-start gap-4 space-y-0 md:grid-cols-[1fr_120px] ">
        <div className="space-y-2">
          <Link href={`https://www.github.com/${title}`} target="_blank">
            <CardTitle>{title}</CardTitle>
          </Link>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="lg:ml-4">
          <Link href={`https://www.github.com/${title}`} target="_blank">
            <Button variant="ghost" className="bg-secondary">
              <Star className="mr-2 h-4 w-4" />
              Star
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Circle className={`mr-1 h-3 w-3 ${JavaScript} ${TypeScript}`} />
            {language}
          </div>
          <div className="flex items-center">
            <Star className="mr-1 h-3 w-3" />
            {star}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
