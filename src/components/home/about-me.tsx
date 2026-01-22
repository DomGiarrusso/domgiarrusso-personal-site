import { Timeline, TimelineContent, TimelineDot, TimelineHeading, TimelineItem, TimelineLine } from "@/components/ui/timeline"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {}

export default function AboutMe({}: Props) {
    return(
        <section id="about-me" className="flex flex-col items-center justify-center my-24">
            <h3 className="text-5xl font-bold text-center">About Me</h3>
            <div className="grid grid-cols-[60%_40%] gap-6 mt-8 w-fit">
              <Card className="w-lg justify-self-center">
                <CardHeader>
                  <CardTitle className="text-center text-xl font-semibold">
                    A little more about myself
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  
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

              <Timeline className="justify-self-center">
                <TimelineItem>
                  <TimelineHeading >
                    Fullstack Developer
                  </TimelineHeading>
                  <TimelineDot status="custom" />
                  <TimelineLine done />
                  <TimelineContent>Timeline Content</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineHeading>
                    Game Instructor
                  </TimelineHeading>
                  <TimelineDot status="done" />
                  <TimelineLine done />
                  <TimelineContent>Timeline Content</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineHeading className="">
                    Bachelors in Computer Game Design
                  </TimelineHeading>
                  <TimelineDot status="done" />
                  <TimelineLine done />
                  <TimelineContent>Timeline Content</TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
        </section>
    )
}