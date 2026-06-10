import Layout from "./components/Layout"
import { EMAIL_URL, EMAIL } from "./urls"

export default function SupportPage() {
  const apps = [
    {
      name: "WDYDT",
      description: "A simple productivity tool to track what you did today.",
    },
    {
      name: "KoineGreek",
      description: "An educational app for learning and practicing Koine Greek.",
    },
    {
      name: "Scripture Defender",
      description: "A Bible verse memory and defense game.",
    },
  ]

  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-900">App Support</h1>
        
        <p className="text-xl text-gray-700 mb-10 leading-relaxed">
          Need help with one of my apps? I'm here to assist you.
        </p>

        <div className="grid gap-6 mb-12">
          {apps.map((app) => (
            <div key={app.name} className="border-2 border-gray-100 rounded-xl p-6 bg-gray-50 shadow-sm">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{app.name}</h2>
              <p className="text-gray-700 text-base leading-relaxed">{app.description}</p>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-100 pb-1">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">How do I report a bug?</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Please send an email to <a href={EMAIL_URL} className="text-gray-900 font-bold underline hover:text-blue-600 transition-colors">{EMAIL}</a> with a description of the issue and your device model.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Is my data backed up?</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                My apps store data locally on your device or via your personal iCloud account. 
                I do not have access to your data.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">How can I request a new feature?</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                I love hearing from users! Feel free to reach out via email with any suggestions.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t-2 border-gray-100 pt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Me</h2>
          <p className="text-gray-700 text-base mb-4">
            For any other inquiries, please reach out via email:
          </p>
          <a href={EMAIL_URL} className="text-2xl font-black text-gray-900 hover:text-blue-600 underline transition-colors">
            {EMAIL}
          </a>
        </section>
      </div>
    </Layout>
  )
}
