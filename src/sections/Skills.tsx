import SkillBadge from "../components/SkillBadge";

export default function Skills() {
    return (
      <section id="skills" className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-center text-gray-900">Skills & Technologies</h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-6 text-xl font-bold border-b-2 border-gray-900 pb-2 text-gray-900">Mobile Development</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Swift" />
                <SkillBadge name="SwiftUI" />
                <SkillBadge name="SpriteKit" />
                <SkillBadge name="iCloud" />
                <SkillBadge name="App Store Connect" />
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-xl font-bold border-b-2 border-gray-900 pb-2 text-gray-900">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="React" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="Tailwind CSS" />
                <SkillBadge name="Next.js" />
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-xl font-bold border-b-2 border-gray-900 pb-2 text-gray-900">Backend & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Node.js" />
                <SkillBadge name="SQL" />
                <SkillBadge name="Git" />
                <SkillBadge name="CI/CD" />
                <SkillBadge name="Figma" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
