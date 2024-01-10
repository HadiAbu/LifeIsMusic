import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';
// import { data } from '../assets/dummyData';

// eslint-disable-next-line arrow-body-style
const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);
  const songs = data?.tracks?.hits.map((song) => song.track);

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl primary-text-color mt-4 mb-6">
        Showing results for&nbsp;
        <span className="font-thin secondary-text-color">
          {` ${searchTerm}`}
        </span>
      </h1>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
