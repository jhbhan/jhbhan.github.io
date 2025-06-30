import SkillBadge from "./components/SkillBadge";

export default function Skills() {
    return (

      <section id="skills" className="bg-gray-50 py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-3xl font-bold tracking-tight">Skills & Technologies</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="React" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="HTML5" />
                <SkillBadge name="CSS" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="Vue.js" />
                <SkillBadge name="Responsive Design" />
                <SkillBadge name="Redux" />
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="C#" />
                <SkillBadge name=".NET" />
                <SkillBadge name="SQL" />
                <SkillBadge name="MySQL" />
                <SkillBadge name="SQL Server" />
                <SkillBadge name="RESTful APIs" />
                <SkillBadge name="Azure" />
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Tools & Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Git" />
                <SkillBadge name="Postman" />
                <SkillBadge name="Jest" />
                <SkillBadge name="Cypress" />
                <SkillBadge name="Figma" />
                <SkillBadge name="Agile/Scrum" />
                <SkillBadge name="CI/CD" />
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Design & Other</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="UI/UX Design" />
                <SkillBadge name="Database Design" />
                <SkillBadge name="Unit Testing" />
                <SkillBadge name="Problem Solving" />
                <SkillBadge name="Communication" />
                <SkillBadge name="Time Management" />
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}