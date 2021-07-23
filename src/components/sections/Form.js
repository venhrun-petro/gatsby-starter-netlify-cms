import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Content from "~u/Content"

export default function Form2() {
  const content = Content(useFormQuery())
  
  return(
    <a href={"tel:" + content.contactPhone2} className="general-button" >
      {content.dataButton}
    </a>
  )
}


export const useFormQuery = () =>
useStaticQuery(graphql`
  query FormQuery {
    allFile(filter: {name: {eq: "content"}}) {
      nodes {
        childEnJson {
          contactPhone2
        }
        childUkJson {
          contactPhone2,
        }
        sourceInstanceName
      }
    }
  }
`).allFile.nodes
