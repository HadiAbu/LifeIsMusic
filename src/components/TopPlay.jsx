/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
// import { data } from '../assets/dummyData';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="w-full flex flex-row items-center hover:bg-[#134256] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="font-bold text-base primary-text-color mr-3">{i + 1}.</h3>
    <div className="flex flex-1 flex-row justify-between items-start">
      <img
        className="rounded-lg w-20 h-20"
        src={song?.images?.background}
        alt={song?.title}
      />
      <div className="flex flex-1 flex-col mx-3 justify-center">
        <Link to={`/songs/${song.key}`}>
          <p className="text-xl font-bold primary-text-color">{song.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-base font-thin secondary-text-color">
            {song.subtitle}
          </p>
        </Link>
      </div>
    </div>
    <PlayPause
      song={song}
      isPlaying={isPlaying}
      activeSong={activeSong}
      handlePlayClick={handlePlayClick}
      handlePauseClick={handlePauseClick}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div
      ref={divRef}
      className="flex flex-col max-w-full xl:w-[500px] xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 "
    >
      <div className="w-full flex flex-col">
        {/* top charts */}
        <div className="flex flex-row justify-between items-center">
          <h2 className="font-bold  text-2xl primary-text-color">Top Charts</h2>
          <Link to="/top-charts" className="secondary-text-color">
            <p>see more</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song?.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={() => handlePauseClick()}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>

        {/* top artists */}
        <div className="w-full flex flex-col mt-8">
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-bold text-2xl primary-text-color">
              Top Artists
            </h2>
            <Link to="/top-artists" className="secondary-text-color">
              <p>see more</p>
            </Link>
          </div>

          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            centeredSlides
            freeMode
            centeredSlidesBounds
            modules={[FreeMode]}
            className="mt-4"
          >
            {topPlays?.map((song, i) => (
              <SwiperSlide
                key={song?.key}
                style={{ width: '25%', height: 'auto' }}
                song={song}
                className="shadow-lg animate-slideright rounded-full"
                i={i}
              >
                <Link
                  title={song?.subtitle}
                  to={`/artists/${song?.artists[0].adamid}`}
                >
                  <img
                    className="w-full rounded-full object-cover"
                    src={song?.images.background}
                    alt="album cover"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
