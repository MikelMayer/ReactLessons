import Title from "./Title.tsx";
import TracksList from "./TracksList.tsx";
import TrackDetails from "./TrackDetails.tsx";
import { useTrackSelect } from "../bll/useTrackSelect.tsx";

function MainPage() {
  const { trackId, setTrackId } = useTrackSelect();
  const handleClick = (id: string | null) => {
    setTrackId(id);
  };

  return (
    <div>
      <Title />
      <div style={{ display: "flex", gap: "20px" }}>
        <TracksList onTrackSelect={handleClick} selectedTrackId={trackId} />
        <TrackDetails selectedTrackId={trackId} />
      </div>
    </div>
  );
}
export default MainPage;
