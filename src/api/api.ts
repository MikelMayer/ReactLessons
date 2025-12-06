
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

export const GetTrack = (selectedTrackId: string) : Promise<{ data: GetTracksDetailsOutputData }> => {
  return fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" +
        selectedTrackId,
      {
        headers: {
          // "api-key": "4d9c5337-8ff5-41cb-baa5-af9e5060eae1",
        },
      }
    ) 
      .then((res) => res.json())
} 




export const GetTracks = (): Promise<{ data: Array<TrackListItemOutput> }> => {
  return  fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
      headers: {
        // "api-key": "4d9c5337-8ff5-41cb-baa5-af9e5060eae1",
      },
    })
      .then((res) => res.json())
      
}