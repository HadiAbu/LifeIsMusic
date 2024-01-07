import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const handlePauseClick = () => {};
  const handlePlayClick = () => {};

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 animate-slideup backdrop-blur-sm rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center rounded-lg bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song?.title
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'
          }`}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePlayClick={handlePlayClick}
            handlePauseClick={handlePauseClick}
          />
        </div>
        <img
          src={song.images?.coverart}
          alt="album cover"
          className="rounded-lg"
        />
      </div>
      <div className="mt-2 flex flex-col">
        <p className="font-semibold text-white opacity-80 text-lg truncate">
          <Link title={song.title} to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="font-thin text-white opacity-40 text-lg truncate">
          <Link
            data-te-toggle="tooltip"
            title={song.subtitle}
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : 'top/artists'
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
