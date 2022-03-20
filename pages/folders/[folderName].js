import Iterate from 'components/Iterate'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { folderName } = router.query

  return (
    <div className='text-center'>
    <h1 className='text-2xl font-bold mb-8 mt-3'>{folderName}</h1>
    <Iterate folder={folderName} preview={false} />
    </div>
  )
}

export default Post
