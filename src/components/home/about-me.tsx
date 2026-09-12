import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from '@/components/ui/timeline'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="my-20 flex flex-col items-center justify-center sm:my-24"
    >
      <h3 className="text-center text-4xl font-bold sm:text-5xl">About Me</h3>
      <div className="mt-8 grid w-full grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <Card className="order-2 w-full max-w-3xl justify-self-center xl:order-1 xl:max-w-none">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold">
              A little more about myself
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 sm:text-base">
            Well, I am a software developer who enjoys working across the stack,
            AKA Fullstack Developer. I primarily work with C#/.NET, JS/TS, and
            SQL. I mostly do web development nowadays, but I can and have done
            CLIs, desktop, and game development. Outside of dev work, I enjoy
            doing photography, making videos, and tinkering. Bonus… I am a big
            typography nerd, too. Actually, I am a nerd of many things: Fantasy,
            Sci-Fi, Anime, Comics, etc etc. You name it, I probably know it or
            have at least heard of it. It kinda comes with being a developer.
            <br />
            <br />
            A bit about my background: I went to George Mason University. I
            earned my degree in Computer Game Design and then pivoted right into
            web development. (I know, pretty obvious progression ??) Though,
            through my degree, I developed a deep passion for creating and
            expressing that through programming. I will say the biggest skill I
            honed through college was learning how to learn, aka
            problem-solving. Nowadays, when I don’t know something, it just
            means it is a challenge for me to figure it out.
            <br />
            <br />
            So that leaves me with this. First, wow, you read this far! I must
            say, I am impressed. You must really want to get to know me. Well, I
            can’t put down everything, nor should I. Though, if you are curious
            and want to know more, here are some options: the rest of this site,
            duhhh, or click the contact found in the nav and send me a message!
          </CardContent>
        </Card>

        <Timeline className="order-1 w-full max-w-xl justify-self-center xl:order-2">
          <TimelineItem>
            <TimelineHeading>Fullstack Developer</TimelineHeading>
            <TimelineDot status="custom" />
            <TimelineLine done />
            <TimelineContent>
              <span className="block font-medium text-foreground">
                2023 - Present
              </span>
              Building and maintaining web applications across the stack with
              .NET/C#, JavaScript, and SQL.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeading>Game Instructor</TimelineHeading>
            <TimelineDot status="done" />
            <TimelineLine done />
            <TimelineContent>
              <span className="block font-medium text-foreground">
                2022 - 2023
              </span>
              Guiding students through game development while helping them build
              their programming, design, and problem-solving skills.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeading>
              Bachelor's in Computer Game Design
            </TimelineHeading>
            <TimelineDot status="done" />
            <TimelineLine done />
            <TimelineContent>
              <span className="block font-medium text-foreground">
                Graduated 2023
              </span>
              Studied game design and development, building a foundation in
              programming, interactive design, and creative problem-solving.
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  )
}
