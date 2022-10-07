import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import * as Links from '../components/links.json'

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Patrick McCallum" />
    <div className={styles.textCenter}>
      {/*<StaticImage*/}
      {/*  src="../images/example.png"*/}
      {/*  loading="eager"*/}
      {/*  width={64}*/}
      {/*  quality={95}*/}
      {/*  formats={["auto", "webp", "avif"]}*/}
      {/*  alt=""*/}
      {/*  style={{ marginBottom: `var(--space-3)` }}*/}
      {/*/>*/}
      <h1>
        Hi, I'm Patrick McCallum
      </h1>
    </div>
    <ul className={styles.list}>
      {Links.history.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.name} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {Links.quick.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.name}</a>
        {i !== Links.quick.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
