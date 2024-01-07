import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

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
      className="text-gray-300"
      onClick={handlePauseClick}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={handlePlayClick}
    />
  );
export default PlayPause;
