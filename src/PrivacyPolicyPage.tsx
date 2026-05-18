import Layout from "./components/Layout"

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Privacy Policy</h1>
        
        <div className="max-w-none">
          <p className="text-gray-500 mb-6 italic text-sm">Effective date: May 18, 2026</p>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-gray-900 border-b-2 border-gray-100 pb-1">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              This Privacy Policy applies to all apps published by Jason Bhan, including but not limited to 
              <strong> WDYDT</strong>, <strong>KoineGreek</strong>, and <strong>Scripture Defender</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-gray-900 border-b-2 border-gray-100 pb-1">Information Collection</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Our apps are designed with privacy in mind. We do not collect, store, or transmit any personal 
              information to external servers. All data created or entered within the apps is stored 
              locally on your device or in your personal iCloud account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-gray-900 border-b-2 border-gray-100 pb-1">Data Usage</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Since we do not collect any data, we do not use, share, or sell your information. 
              Any data you input into the apps remains under your sole control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-gray-900 border-b-2 border-gray-100 pb-1">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              We do not use third-party analytics, tracking, or advertising services that collect your data. 
              If the apps offer in-app purchases, all payment processing is handled securely by Apple Inc. 
              through the App Store.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-gray-900 border-b-2 border-gray-100 pb-1">Contact</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              If you have any questions regarding this Privacy Policy, you can contact me at:
              <br />
              <a href="mailto:jhbhan@gmail.com" className="text-gray-900 hover:text-blue-600 underline mt-2 inline-block font-bold transition-colors">jhbhan@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}
