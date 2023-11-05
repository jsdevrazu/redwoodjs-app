import BlogCard from 'src/components/BlogCard'
import React from 'react'
import type { FindPosts } from 'types/graphql'


const PostsList = ({ posts }: FindPosts) => {
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <div className="container mt">
        {posts.map((post) => (
          <React.Fragment key={post.id}>
            <BlogCard isShow={true} post={post} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default PostsList
