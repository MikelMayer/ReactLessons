import { useState, useEffect } from "react";
import { GetTrack, type GetTracksDetailsOutputData } from "../api/api";

export function useGetDetailsTrack(selectedTrackId: string | null)  {
  const [selectedTrack, setSelectedTrack] = useState<GetTracksDetailsOutputData | null>(null);

  useEffect(() => {
    if (!selectedTrackId) {
      setSelectedTrack(null);
      return;
    }
    GetTrack(selectedTrackId)
      .then((json) => setSelectedTrack(json.data));
  }, [selectedTrackId]);

  return { selectedTrack };
}