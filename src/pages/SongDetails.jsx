import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from '../redux/services/shazamCore';
// import { data } from '../assets/dummyTrackData';
// import { relatedData } from '../assets/dummyRelated';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { songData, isFetchingSongDetails, error } = useGetSongDetailsQuery({
    songid,
  });
  const { relatedSongData, isFetchingRelatedSongs } = useGetSongRelatedQuery({
    songid,
  });

  if (isFetchingSongDetails || isFetchingRelatedSongs)
    return <Loader title="fetching song details.." />;

  if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, songData, i }));
    dispatch(playPause(true));
  };

  // const songData = data;
  return (
    <div className="flex flex-col ">
      <DetailsHeader artistId="" songData={songData} />
      <div className="my-10">
        <h1 className="font-bold text-2xl primary-text-color">Lyrics</h1>
        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS' ? (
            songData?.sections[1]?.text.map((line, i) => (
              <p
                key={`lyrics-${line}-${i}`}
                className="text-gray-400 text-base my-1"
              >
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, No lyrics found!
            </p>
          )}
        </div>
      </div>
      <RelatedSongs
        artistId=""
        data={relatedSongData}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
