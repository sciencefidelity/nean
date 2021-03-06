import * as React from "react"
// import { PageProps } from "gatsby"
import { FormattedMessage, useIntl } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
// import SEO from "../components/seo"

import Introduction from "../components/introduction"
import QuoteA from "../components/quoteA"
import CaseStudies from "../components/caseStudies"
import Figures from "../components/figures"
import QuoteB from "../components/quoteB"
import Artists from "../components/artists"
import Model from "../components/model"
import Network from "../components/network"
import OurPromise from "../components/ourPromise"
import SignUp from "../components/signup"
import Courses from "../components/courses"

import IllustrationA from "../components/illustrations/illustrationA"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      {/* <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`gatsby`, `application`, `react`]}
      /> */}

      <section>
        <IllustrationA />
        <h2 className="headline"><FormattedMessage id="headline" /></h2>
      </section>

      <Introduction
        introText1={intl.formatMessage({ id: "introduction-1" })}
        introText2={intl.formatMessage({ id: "introduction-2" })}
      />

      <div className="heading__container">
        <h2 className="heading"><FormattedMessage id="heading-1" />, </h2>
        <h2 className="heading"><FormattedMessage id="heading-2" />, </h2>
        <h2 className="heading"><FormattedMessage id="heading-3" /></h2>
      </div>

      <QuoteA
        quote1={intl.formatMessage({ id: "quote-1" })}
        cite1={intl.formatMessage({ id: "cite-1" })}
      />

      <CaseStudies
        art1={intl.formatMessage({ id: "art-heading" })}
        art2={intl.formatMessage({ id: "art-text" })}
        music1={intl.formatMessage({ id: "music-heading" })}
        music2={intl.formatMessage({ id: "music-text" })}
        theatre1={intl.formatMessage({ id: "theatre-heading" })}
        theatre2={intl.formatMessage({ id: "theatre-text" })}
      />

      <Figures
        legacy1={intl.formatMessage({ id: "legacy" })}
        legacy2={intl.formatMessage({ id: "engagement" })}
        legacy3={intl.formatMessage({ id: "participation" })}
        legacy4={intl.formatMessage({ id: "delivered" })}
        legacy5={intl.formatMessage({ id: "community" })}
      />

      <QuoteB
        quote2={intl.formatMessage({ id: "quote-2" })}
        cite2={intl.formatMessage({ id: "cite-2-p1" })}
        cite3={intl.formatMessage({ id: "cite-2-p2" })}
      />

      <Artists
        artists1={intl.formatMessage({ id: "artists-heading" })}
        artists2={intl.formatMessage({ id: "artists-text" })}
        artists3={intl.formatMessage({ id: "creators-heading" })}
        artists4={intl.formatMessage({ id: "creators-text" })}
      />

      <Model
        model1={intl.formatMessage({ id: "model" })}
        model2={intl.formatMessage({ id: "model-p1" })}
        model3={intl.formatMessage({ id: "model-p2" })}
        model4={intl.formatMessage({ id: "model-p3" })}
        model5={intl.formatMessage({ id: "model-1" })}
        model6={intl.formatMessage({ id: "model-2" })}
        model7={intl.formatMessage({ id: "model-3" })}
        model8={intl.formatMessage({ id: "model-4" })}
        model9={intl.formatMessage({ id: "model-5" })}
      />

      <Network
        network1={intl.formatMessage({ id: "network-heading" })}
        network2={intl.formatMessage({ id: "network-text" })}
      />

      <OurPromise
        promise1={intl.formatMessage({ id: "promise" })}
        promise2={intl.formatMessage({ id: "promise-p1" })}
        promise3={intl.formatMessage({ id: "promise-p2" })}
        promise4={intl.formatMessage({ id: "promise-p3" })}
      />

      <SignUp
        signup1={intl.formatMessage({ id: "signup-1" })}
        signup2={intl.formatMessage({ id: "signup-2" })}
        signup3={intl.formatMessage({ id: "signup-3" })}
      />

      <section className="getInvolved">
        <h2><FormattedMessage id="involved-1" /></h2>
        <p><FormattedMessage id="involved-2" /></p>
      </section>

      <Courses
        site1={intl.formatMessage({ id: "site-1" })}
        site2a={intl.formatMessage({ id: "site-2-d1" })}
        site2b={intl.formatMessage({ id: "site-2-d2" })}
        site2c={intl.formatMessage({ id: "site-2-d3" })}
        site3={intl.formatMessage({ id: "site-3" })}
        site4={intl.formatMessage({ id: "site-4" })}
        digital1={intl.formatMessage({ id: "digital-1" })}
        digital2a={intl.formatMessage({ id: "digital-2-d1" })}
        digital2b={intl.formatMessage({ id: "digital-2-d2" })}
        digital2c={intl.formatMessage({ id: "digital-2-d3" })}
        digital3={intl.formatMessage({ id: "digital-3" })}
        digital4={intl.formatMessage({ id: "digital-4" })}
        book={intl.formatMessage({ id: "book" })}
      />

    </Layout>
  )
}

export default IndexPage
