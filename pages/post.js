import Link from 'next/link';
import { withRouter } from 'next/router'
import http from 'axios'
import MainLayout from '../component/MainLayout'

// const Post = (props) => {
//   <li>
//     <Link href={`/post?title=${ props.post.title }`}>
//       <a>{props.post.title}</a>
//     </Link>
//   </li>
// }

const Post = withRouter((props) => (
  <MainLayout>
    <h3>{props.post.title}</h3>
    <p>{props.post.description}</p>
  </MainLayout>
))

Post.getInitialProps = async (content) => {
  const response = await http.get(`http://127.0.0.1:4444/posts/${ content.query.id }`)
  console.log(response)
  return {
    post: response.data
  }
}

export default Post
