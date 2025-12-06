import { useState } from "react";

export function useTrackSelect() {
  const [trackId, setTrackId] = useState<string | null>(null);

  return { trackId, setTrackId };
}
