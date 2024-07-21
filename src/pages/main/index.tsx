import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { WeatherReading } from "./main.interface.ts";
import styles from "./MainPage.module.scss";
import Layout from "../../app/layout";
import { RootState } from "../../app/store/store.ts";
import LoaderCircle from "../../entities/loader-circle";
import MainService from "../../shared/api/main.ts";

const MainPage = () => {
  const city = useSelector((state: RootState) => state.city.value);
  const { i18n } = useTranslation();
  const language = i18n.language;

  const [weatherInfo, setWeatherInfo] = useState<WeatherReading[]>([]);
  const [time] = useState(21);

  const queryClient = useQueryClient();

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["getAll", city, language],
    queryFn: () => MainService.getAll(city, language),
  });

  useEffect(() => {
    if (city.trim() !== "") {
      queryClient.refetchQueries({
        queryKey: ["getAll", city, language],
        exact: true,
      });
    }
  }, [city, time, language, queryClient]);

  useEffect(() => {
    if (data) {
      const dailyData = data.list.filter(
        (reading: { dt_txt: string | string[] }) =>
          reading.dt_txt.includes(`${time}:00:00`),
      );
      setWeatherInfo(dailyData);
    }
  }, [data, time, city]);

  if (isError) {
    return (
      <Layout>
        <h1 className={styles.main__notfound}>Not found!</h1>
      </Layout>
    );
  }

  if (isLoading || isFetching) {
    return (
      <Layout>
        <LoaderCircle />
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <h1>MainPage</h1>
        <h2>{city}</h2>
        {weatherInfo.map((el) => {
          const date = new Date(el.dt_txt);
          return (
            <div key={el.dt}>
              <h3>{date.toLocaleString()}</h3>
              <p>
                Temperature: {el.main.temp}°C, Humidity: {el.main.humidity}%
              </p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default MainPage;
