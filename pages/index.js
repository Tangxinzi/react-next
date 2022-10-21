import Link from 'next/link'
import http from 'axios'
import MainLayout from '../component/MainLayout'

const ListItem = (props) => (
  <li>
    <Link as={`/p/${ props.id }`} href={`/post?id=${ props.id }`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = (props) => (
  <MainLayout>
    <ul>
      {props.posts.map(item => (
        <ListItem key={item.id} id={item.id} title={item.title} />
      ))}
    </ul>
  </MainLayout>
)

Index.getInitialProps = async () => {
  const response = await http.get('http://127.0.0.1:4444/posts')
  return {
    posts: response.data
  }
}

export default Index
