// /pages/blogs/[postSlug].tsx

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface Props {}

const BlogPage: NextPage<Props> = () => {
  return <div>single page</div>;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{params: {postSlug: "Creating-my-first-blog" }}],
    fallback: false, // we will come back to this later and understand this with example
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  return {
    props: {
    },
  };
};


export default BlogPage;
