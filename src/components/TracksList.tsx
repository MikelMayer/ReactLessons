import TrackItem from "./TrackItem";
import { useTrack } from "../bll/useTrack";

type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (trackId: string | null) => void;
};

const TracksList = ({ onTrackSelect, selectedTrackId }: Props) => {
  const { tracks } = useTrack();

  if (tracks === null) {
    return <div>Loading...</div>;
  }
  if (tracks.length === 0) {
    return <div>No tracks</div>;
  }
  const handleReset = () => {
    onTrackSelect(null);
  };

  const handleClick = (trackId: string | null): void => {
    onTrackSelect?.(trackId);
  };

  return (
    <div>
      <button onClick={handleReset}>reset</button>
      <ul>
        {tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={selectedTrackId === track.id}
              onTrackSelect={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TracksList;
