import Layout from '../components/Layout'
import Welcome from '../components/homepage/Welcome'
// import Projects from "../components/homepage/Projects";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">

    <main>
      <Welcome />
      {/* <Projects /> */}
    </main>
  </Layout>
)

export default IndexPage
