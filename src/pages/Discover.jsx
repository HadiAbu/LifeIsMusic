import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
// import { useGetTopChartsQuery, useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { selectGenreListId } from '../redux/features/playerSlice';
// import { data } from '../assets/dummyData';
import { songsByGenre as data } from '../assets/dummySongsByGenre';

const Discover = () => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong, genreListId } = useSelector(
    (state) => state.player
  );
  // const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId | Pop);
  const isFetching = false;
  const error = false;

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = genres.find((g) => g.value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle || 'Pop'}
        </h2>
        <select
          value={genreListId || 'Pop'}
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          className="rounded-md bg-gray-700 text-white p-3 text-sm outline-none sm:mt-0 mt-5"
        >
          {genres.map((gen) => (
            <option key={gen.value} value={gen.value}>
              {gen.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            activeSong={activeSong}
            isPlaying={isPlaying}
            data={data}
            song={song}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
