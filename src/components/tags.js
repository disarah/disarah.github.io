import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import { Link, StaticQuery, graphql } from "gatsby"

import "./layout.css"

export default function TagsPage() {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
          allMarkdownRemark(
            limit: 2000
            filter: { frontmatter: { tags: { nin: ["Other"] } } }
          ) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => (
          <ul style={{padding: "0", marginLeft:"0"}}>
            <li key="all">
              <Link style={{margin: "3px"}}className="btn btn-outline-dark" to={`/work/`}>
                all tags
                </Link>
            </li>
            {data.allMarkdownRemark.group.map(tag => (
              <li key={tag.fieldValue}>
                <Link style={{margin: "3px"}}className="btn btn-outline-dark" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                <span class="zoom">#{tag.fieldValue}</span>
                </Link>
              </li>
            ))}
          </ul>
      )}
    />
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
