import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ProductList from '../components/ProductList'

const Home: NextPage = ({ productList, total }: any) => {
  console.log('productList: ', productList);
  return (
    <div className={styles.container}>
      <p>produc liost</p>

      <ProductList productList={productList}/>
    </div>
  )
}

export const getInitialProps = async () => {

  return {
    props: {
      data: []
    }
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const request = await axios.get('http://localhost:3000/api/products');
    console.log('request: ', request);

    if (!request.data) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        productList: request.data.contents,
        total: request.data.total
      }
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default Home
