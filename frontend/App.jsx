import React from 'react'

const App = () => {
  const [data, setData, ] = React.useState(null)

  React.useEffect(() => {
    window
      .fetch('/api')
      .then(res => res.json())
      .then(json => {
        setData(json)
      })
  }, [])

  return (
    <div>
      <div>
        Data from API:
        <pre>
          <code>
            {JSON.stringify(data)}
          </code>
        </pre>
      </div>
      <div>
        Data from environment variable:
        <pre>
          <code>
            {process.env.APP_FOO}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default App
