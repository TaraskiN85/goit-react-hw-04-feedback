import React from 'react'
import css from './Section.module.css'

export const Section = ({title, children}) => {
  return (
    <div className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  )
}
