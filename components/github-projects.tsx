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
  language: string
  star: number
}

export function GitHubProjects({ title, description, language, star }: Github) {
  return (
    <Card className="w-2/5">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0 ">
        <div className="space-y-2">
          <Link href={`https://www.github.com/${title}`} target="_blank">
            <CardTitle>{title}</CardTitle>
          </Link>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="ml-4">
          <Button variant="ghost" className="bg-secondary">
            <Star className="mr-2 h-4 w-4" />
            Star
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Circle className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
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
