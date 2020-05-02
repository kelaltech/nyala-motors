import React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { AiOutlineSearch } from 'react-icons/ai'

import './hero-search.scss'
import Input from '../input/input'

type HeroSearchProps = {
  bg?: FluidObject | FluidObject[]
  title?: string

  term?: string
  onTerm?: (term: string) => void
  onSubmit?: (term: string) => void
}

const HeroSearch: React.FC<HeroSearchProps> = ({
  bg,
  title,
  term,
  onTerm,
  onSubmit,
}) => {
  return (
    <div className="shared-hero-search">
      {!bg ? null : (
        <GatsbyImage fluid={bg} className="shared-hero-search-underlay" />
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit && onSubmit((e.target as any)?.search?.value)
        }}
        className="shared-hero-search-overlay"
      >
        {!title ? null : <h1 className="shared-hero-search-title">{title}</h1>}

        <label className="shared-hero-search-bar">
          <Input
            type="search"
            placeholder={`Search`}
            name="search"
            value={term}
            onChange={(e) => onTerm && onTerm(e?.target?.value)}
            className="shared-hero-search-field"
            mode="L"
          />
          <AiOutlineSearch className="shared-hero-search-icon" />
        </label>
      </form>
    </div>
  )
}

export default HeroSearch
