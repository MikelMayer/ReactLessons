
export type GetTracksDetailsOutputData = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  }
}


export type TrackListItemOutput = {
  id: string;
  attributes: {
    title: string;
    attachments: [{ url: string }];
  }
}

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) return undefined;
  return {
      "api-key": apiKey,
  };
}

export const GetTrack = (selectedTrackId: string) : Promise<{ data: GetTracksDetailsOutputData }> => {
  return fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" +
        selectedTrackId,
      {
        headers: prepareHeaders(),
      }
    ) 
      .then((res) => res.json())
} 




export const GetTracks = (): Promise<{ data: Array<TrackListItemOutput> }> => {
  return  fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
      headers: prepareHeaders(),
    })
      .then((res) => res.json())
      
}