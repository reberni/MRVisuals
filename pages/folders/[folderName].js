import Iterate from 'components/Iterate'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { folderName } = router.query

  return <Iterate folder={folderName} preview={false} />
}

export default Post
