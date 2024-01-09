import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
// import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';
import { artistData } from '../assets/dummyArtistDetails';

const ArtistDetails = () => {
  const { artistid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = artistData;
  //   const { data: artistData, isFetchingArtistDetails, error } = useGetArtistDetailsQuery({ artistid });

  //   if (isFetchingArtistDetails)
  //     return <Loader title="fetching artist details.." />;

  //   if (error) return <Error />;

  // const songData = data;
  return (
    <div className="flex flex-col ">
      <DetailsHeader artistId={artistid} artistData={data[0]} />
      <div className="mt-10">
        <RelatedSongs
          artistId={artistid}
          data={data[0].views['top-songs']?.data}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      </div>
    </div>
  );
};

export default ArtistDetails;
