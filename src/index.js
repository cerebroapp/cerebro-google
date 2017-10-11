import React from 'react'

import Preview from './Preview'
import iconPath from './icon.png'

const id = 'search-web'
export const order = 11
export const icon = iconPath

/**
 * Search term in google
 *
 * @param  {String} options.term
 * @param  {Object} options.actions
 * @param  {Function} options.display
 */
export const fn = ({ term, actions, display }) => {
  /**
   * Open browser with google search of term
   * @param  {String} searchTerm
   */
  // eslint-disable-next-line no-var
  var search = (searchTerm) => {
    const q = encodeURIComponent(searchTerm)
    actions.open(`https://www.google.com/search?newwindow=1&q=${q}&cad=h`)
    actions.hideWindow()
  }

  display({
    id,
    icon,
    order,
    title: `Search web for ${term}`,
    onSelect: () => search(term),
    getPreview: () => <Preview query={term} key={term} search={search} />
  })
}
