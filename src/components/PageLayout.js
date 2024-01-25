import React from 'react'

function PageLayout({header, footer, children}) {
  return (
    <div>
        <header>{header}</header>
      {children}
      <footer>{footer}</footer>
    </div>
  )
}

export default PageLayout