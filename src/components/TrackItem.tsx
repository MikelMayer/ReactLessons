import type { TrackListItemOutput } from "../api/api";

type Props = {
  track: TrackListItemOutput;
  onTrackSelect: (trackId: string | null) => void;
  isSelected: boolean
}


const TrackItem = ({track, onTrackSelect,isSelected,}:Props) => {
  const handleClick = () => {
            onTrackSelect?.(track.id);
          };

  return (
    <li
      key={track.id}
      style={{
        border:
           isSelected
            ? "1px solid orange"
            : "none",
      }}
      onClick={handleClick}
    >
      <div>{track.attributes.title}</div>
      <audio src={track.attributes.attachments[0].url} controls />
    </li>
  );
};

export default TrackItem;
