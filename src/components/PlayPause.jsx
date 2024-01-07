import { FaPauseCircle, FaPlayCircle } from 'react-icons';

const PlayPause = ({
  song,
  isPlaying,
  activeSong,
  handlePlayClick,
  handlePauseClick,
}) =>
  isPlaying && activeSong?.title === song?.title ? (
    <FaPauseCircle
      size={35}
      handlePauseClick={handlePlayClick}
      className="bg-gray-300"
      handleClick={handlePauseClick}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="bg-gray-300"
      handleClick={handlePauseClick}
    />
  );
export default PlayPause;
