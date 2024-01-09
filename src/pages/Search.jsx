import { useParams } from 'react-router-dom';
import { ArtistCard, Error, Loader } from '../components';
// import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';
import { data } from '../assets/dummyData';

// eslint-disable-next-line arrow-body-style
const Search = () => {
  const { searchTerm } = useParams();
  //   const { data, isFetching, error } = useGetSongsBySearchQuery(search);
  // const songs = data?.tracks?.hits.map((song) => song.track);

  //   if (/*isFetching ||*/ loading) return <Loader title="Loading songs..." />;

  //   if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl primary-text-color mt-4 mb-6">
        Showing results for&nbsp;
        <span className="font-thin secondary-text-color">
          {` ${searchTerm}`}
        </span>
      </h1>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default Search;
