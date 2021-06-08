import '../../../node_modules/grapesjs/dist/css/grapes.min.css'
// export { getStaticProps } from 'destack/build/server'
// import { ContentProvider } from 'destack'
import { useEffect, useState } from 'react'

const Index = (props) => {
  // const [useEffectIsTriggered, setUseEffectIsTriggered] = useState(false) // remove
  useEffect(() => {
    console.log('useEffect')
  }, [])
  return (
    <div style={{ height: '100%' }}>
      {/* {useEffectIsTriggered.toString()} */}
      {/* <ContentProvider {...props} showEditorInProd={true}/> */}
    </div>
  )
}
export default Index
