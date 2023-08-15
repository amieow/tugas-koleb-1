import Service from './section/service'
import { Cols } from './layout/direction'
import Title from './components/typography/title'

export default function Home() {
  return (
    <>
    <Cols whiteSpaceX className='w-full lg:flex-row max-w-lg'>
      <Cols>
        <Title variantI={1}>
          The workspacethat works for you& your team
        </Title>
      </Cols>
    </Cols>
    <Service/>
    </>
  )
}
