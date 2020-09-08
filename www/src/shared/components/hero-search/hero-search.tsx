import React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { AiOutlineSearch } from 'react-icons/ai'

import './hero-search.scss'
import Input from '../input/input'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type HeroSearchProps = {
  bg?: FluidObject | FluidObject[]
  title?: string
  term?: string
  onTerm?: (term: string) => void
  onSubmit?: (term: string) => void
  chips?: { name: string; url?: string }[]
  selectedChip?: { name: string; url?: string } | null
  onSelectedChip?: (chips: { name: string; url?: string } | null) => void
  color?: boolean
}

const HeroSearch: React.FC<HeroSearchProps> = ({
  bg,
  title,
  term,
  onTerm,
  onSubmit,
  chips,
  selectedChip,
  onSelectedChip,
  color,
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
        style={color ? { backgroundColor: 'rgba(0,0,0,0.5)' } : {}}
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
        <div className="shared-hero-search-chips">
          {chips?.map((chip, i) => (
            <div className="center" key={i}>
              <span
                className={`${
                  selectedChip === chip
                    ? 'shared-hero-selected-filter-chip'
                    : ' '
                } shared-hero-filter-chip`}
                key={i}
                onClick={() => onSelectedChip && onSelectedChip(chip)}
              >
                {chip.name.toLocaleLowerCase()}
              </span>
              {chips.length - 1 !== i ? (
                <span className="font-M padding-normal">|</span>
              ) : selectedChip ? (
                <span
                  title={'clear all filters'}
                  className="shared-hero-clear-icon"
                  onClick={() => onSelectedChip && onSelectedChip(null)}
                >
                  <AiOutlineCloseCircle />
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}

export default HeroSearch
