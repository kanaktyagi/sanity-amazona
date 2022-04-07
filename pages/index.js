import { Alert, CircularProgress, Typography,Grid } from '@mui/material'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Layout  from '../components/Layout'
import client from '../utils/client'


export default function Home() {
  const [state, setState] = useState({
    products: [],
    error: '',
    loading: true
  });
  const {products, error,loading} = state
  useEffect( () => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`)
        setState({products, loading: false})
        console.log("products", products)
      }
      catch(err) {
        setState({loading:false, error: err.message})
      }
    }
    fetchData();
  },[])
  return (
    <div> 
    <Layout>
      {loading? (<CircularProgress/>): error? (<Alert variant='danger'>{error}</Alert>) :
      <Grid container spacing={3}>
      {products.map(product => (
        <Grid item md={4} key={product.slug}>
          <Typography>{product.name}</Typography>
        </Grid>
      ))}
      </Grid>
    }
    </Layout>
    </div>
  )
}
