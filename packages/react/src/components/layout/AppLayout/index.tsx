import React from 'react'

type AppLayoutProps = React.PropsWithChildren

export const AppLayout: React.FC<AppLayoutProps> = (props) => {
  return <div>
    <main className='App-header'>
      {props.children}
    </main>
  </div>
}