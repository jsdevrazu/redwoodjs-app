import BlogCard from 'src/components/BlogCard'
import type { FindPostById } from 'types/graphql'

interface Props {
  post: NonNullable<FindPostById['post']>
}

const Post = ({ post }: Props) => {
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Post {post.id} Detail
          </h2>
        </header>
        <BlogCard className="mt" post={post} />
      </div>
    </>
  )
}

export default Post
