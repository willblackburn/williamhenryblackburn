import type Lenis from 'lenis';

declare global {
  interface Window {
    timelineLenis?: Lenis | null;
    YT?: {
      Player: new (
        elementId: string,
        options: Record<string, unknown>,
      ) => YTPlayer;
      PlayerState: {
        PLAYING: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }

  interface YTPlayer {
    playVideo: () => void;
    pauseVideo: () => void;
    getPlayerState: () => number;
    destroy?: () => void;
  }
}

export {};
