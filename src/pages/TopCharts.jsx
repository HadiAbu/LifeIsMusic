import { ArtistCard, Error, Loader } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
// import { data } from '../assets/dummyData';

// eslint-disable-next-line arrow-body-style
const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl primary-text-color mt-4 mb-6">
        Top Charts
      </h1>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
