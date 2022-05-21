import type {
  GetStaticProps,
} from "next";
import dynamic from 'next/dynamic'
import { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import styles from "../styles/Home.module.css";
import ProductList from "../components/ProductList";
// import SearchBar from "../components/SearchBar";
import {
  StyledMainContainer,
  StyledContainer,
  StyledGridControls,
} from "../components/StyledUI/StyledPage";
import StyledControls from "../components/GridControls";
import { useDebounce } from "../hooks/useDebounce";
const DynamicSearchBar = dynamic(() => import('../components/SearchBar'), {ssr: false})

export default function Home({ data, total }: any) {
  const theme = useTheme();
  const [productList, setProductList] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [gridColumns, setGridColumns] = useState<number>(2);
  const isMobile = !useMediaQuery(theme.breakpoints.up("md"));

  const handleInputChange = (e: any) => {
    setSearchTerm(e.target.value);

    if (e.target.value.length === 0) {
      fetchproducts("");
    }
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  /**
   * fetchproducts
   * Get products by term
   * @return {*}
   */
  const fetchproducts = async (term: string) => {
    try {
      let termQuery = ""
      if (term && term.length > 0) {
        termQuery = `?name=${term}`
      }
      let response = await axios.get(
        `http://localhost:3000/api/products${termQuery}`
      );
      let { contents } = response.data;
      setProductList(contents);
      return contents;
    } catch (error) {
      console.log("error: ", error);
      setIsSearching(false);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetchproducts(debouncedSearchTerm).then(() => {
        setIsSearching(false);
      });
    }
  }, [debouncedSearchTerm]);

  return (
    <StyledMainContainer container justifyContent="center" alignItems="center">
      <StyledContainer>
        <StyledGridControls>
          <DynamicSearchBar
            searchQuery={searchTerm}
            handleInputChange={handleInputChange}
            isSearching={isSearching}
          />
          <StyledControls
            setGridColumns={setGridColumns}
            gridColumns={gridColumns}
            isMobile={isMobile}
          />
        </StyledGridControls>
        <ProductList
          productList={productList}
          isMobile={isMobile}
          gridColumns={gridColumns}
        />
        {productList.length === 0 && (
          <StyledContainer>
            <p>No se encontraron resultados para su busqueda</p>
          </StyledContainer>
        )}

      </StyledContainer>
    </StyledMainContainer>
  );
}

export const getInitialProps = async () => {
  return {
    props: {
      data: [],
    },
  };
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const request = await axios.get("http://localhost:3000/api/products");

    if (!request.data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: request.data.contents,
        total: request.data.total,
      },
      revalidate: 60, // update redered html
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

