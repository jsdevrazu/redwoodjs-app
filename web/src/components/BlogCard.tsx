import { Link, routes, navigate } from '@redwoodjs/router'
import React, { FC } from 'react'
import type { DeletePostMutationVariables } from 'types/graphql'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'


const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

interface IBlog {
  img: string
  id: number
  body: string
  title: string
  author: string
  createdAt: string
}

interface IProps {
  post: IBlog
  className?: string,
  isShow?:boolean
}



const BlogCard: FC<IProps> = ({ post, className, isShow }) => {

  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
      navigate(routes.home())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePostMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  return (
    <div className={`card-container ${className && className}`}>
      <div className="card-image">
        <img src={post.img} alt="a city full of buildings" />
      </div>
      <div className="card-body">
        <span className="card-badge card-badge-pink">Engineering</span>
        <h1>{post.title}</h1>
        <p className="card-subtitle">{post.body}</p>
        <div className="card-author">
          <img src={post.img} alt="author avatar" />
          <div className="author-info">
            <p>{post.author}</p>
            <p>{new Date(post.createdAt).toISOString()}</p>
          </div>
        </div>
      </div>

      {isShow && <nav className="rw-table-actions">
                <Link
                  to={routes.post({ id: post.id })}
                  title={'Show post ' + post.id + ' detail'}
                  className="rw-button rw-button-small"
                >
                  Show
                </Link>
                <Link
                  to={routes.editPost({ id: post.id })}
                  title={'Edit post ' + post.id}
                  className="rw-button rw-button-small rw-button-blue"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  title={'Delete post ' + post.id}
                  className="rw-button rw-button-small rw-button-red"
                  onClick={() => onDeleteClick(post.id)}
                >
                  Delete
                </button>
              </nav>}
    </div>
  )
}

export default BlogCard
