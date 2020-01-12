import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import { HomeLayout } from "../layouts/HomeLayout/HomeLayout"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
  </HomeLayout>
)

export default IndexPage
