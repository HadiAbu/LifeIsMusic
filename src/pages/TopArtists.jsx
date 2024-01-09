import { useSelector } from 'react-redux';
import { ArtistCard, Error, Loader, SongCard } from '../components';
// import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { data } from '../assets/dummyData';

const TopArtists = () => {
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  //   const { data, isFetching, error } = useGetTopChartsQuery();

  //   if (/*isFetching ||*/ loading) return <Loader title="Loading songs..." />;

  //   if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl primary-text-color mt-4 mb-6">
        Top Artists
      </h1>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song) => (
          <ArtistCard key={song.key} track={song} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
