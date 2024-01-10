import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';
// import { countrySongsData } from '../assets/dummyCountryChart';

const CountryTracks = () => {
  const [country, setCountry] = useState('US');
  const [loading, setLoading] = useState(false);
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery();

  if (isFetching || loading) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=${
          import.meta.env.VITE_GEO_API_KEY
        }&ipAddress=8.8.8.8`
      )
      .then((result) => {
        setCountry(result?.data?.location?.country);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(setLoading(false));
  }, [country]);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl primary-text-color mt-4 mb-6">
        Around you <span className="secondary-text-color">{` ${country}`}</span>
      </h1>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            i={i}
            song={song}
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;
