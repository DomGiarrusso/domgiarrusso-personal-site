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
        <Card className="w-full max-w-3xl justify-self-center xl:max-w-none">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold">
              A little more about myself
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 sm:text-base">
            I’m a Full-Stack Developer at CACI Inc., where I work on diverse
            projects across the stack. My passion for programming began during
            my time at George Mason University, where I studied Computer Game
            Design. With foundations in C/C++ and C#, I honed my skills through
            projects like my capstone, Awakened, built with Unreal Engine 5.
            Since graduating, I’ve broadened my expertise to include software
            and web development, mastering tools like Python and JavaScript.
            Along the way, I’ve developed a knack for teaching myself, adapting
            to challenges, and exploring new technologies. My journey is far
            from over, and I’m excited to continue growing, building, and
            creating innovative solutions.
          </CardContent>
        </Card>

        <Timeline className="w-full max-w-xl justify-self-center">
          <TimelineItem>
            <TimelineHeading>Fullstack Developer</TimelineHeading>
            <TimelineDot status="custom" />
            <TimelineLine done />
            <TimelineContent>Timeline Content</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeading>Game Instructor</TimelineHeading>
            <TimelineDot status="done" />
            <TimelineLine done />
            <TimelineContent>Timeline Content</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeading>Bachelors in Computer Game Design</TimelineHeading>
            <TimelineDot status="done" />
            <TimelineLine done />
            <TimelineContent>Timeline Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  )
}
