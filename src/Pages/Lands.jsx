// @ts-nocheck
import React, { useEffect, useState } from "react";
import { LandContainer, Loader } from "./style";
import Card from "../Components/Card";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

const Lands = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${page}&page_size=10`
      );

      setData((prevData) => [...prevData, ...response.data.results]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight +
          1 >=
        document.documentElement.scrollHeight
      ) {
        fetchImages();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <LandContainer>
        {data.map((lands) => (
          <Card lands={lands} />
        ))}
      </LandContainer>
      {loading && (
        <Loader>
          <TailSpin
            visible={true}
            height="40"
            width="40"
            color="yellow"
            radius="3"
          />
        </Loader>
      )}
    </>
  );
};

export default Lands;
