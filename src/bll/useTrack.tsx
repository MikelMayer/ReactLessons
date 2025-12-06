import { useState, useEffect } from "react";
import { GetTracks, type TrackListItemOutput }  from "../api/api";

export function useTrack () {
  const [tracks, setTracks] = useState<  Array<TrackListItemOutput> | null>(null);

  useEffect(() => {
    GetTracks()
      .then((json) => setTracks(json.data));
  }, []);

  return { tracks };
}