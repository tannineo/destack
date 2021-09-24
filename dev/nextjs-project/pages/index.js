require('./styles/index.module.css')
export { getStaticProps } from '@tannineo/destack/build/server'
import { ContentProvider } from '@tannineo/destack'

const Index = (props) => {
  return (
    <div style={{ height: '100%' }}>
      <ContentProvider {...props} />
    </div>
  )
}
export default Index
