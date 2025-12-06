import { useGetDetailsTrack } from "../bll/useGetDetailsTrack";

type Props = {
  selectedTrackId: string | null;
};

const TrackDetails = ({ selectedTrackId }: Props) => {
  const { selectedTrack } = useGetDetailsTrack(selectedTrackId);

  return (
    <div>
      <h3>Details:</h3>
      {!selectedTrackId && !selectedTrack && "Tracks is not selected"}
      {!selectedTrack && selectedTrackId && "Loading..."}
      {selectedTrack &&
        selectedTrackId &&
        selectedTrack.id !== selectedTrackId &&
        "Loading..."}
      {selectedTrack && selectedTrack.id === selectedTrackId && (
        <div>
          <div>Title: {selectedTrack.attributes.title}</div>
          <h2>Lyrics</h2>
          <p>{selectedTrack.attributes.lyrics ?? "No lyrics"}</p>
        </div>
      )}
    </div>
  );
};
export default TrackDetails;
