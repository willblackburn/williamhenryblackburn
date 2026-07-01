'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

const YOUTUBE_AUDIO_ID = '-0JquOJfkLE';
const PLAYER_HOST_ID = 'youtube-audio-player';

type AudioContextValue = {
  isPlaying: boolean;
  isMutedUi: boolean;
  toggleAudio: () => void;
};

const AudioContext = createContext<AudioContextValue | null>(null);

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
}

function loadYouTubeApi(onReady: () => void) {
  if (window.YT?.Player) {
    onReady();
    return;
  }

  const previousReady = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = () => {
    previousReady?.();
    onReady();
  };

  if (document.getElementById('youtube-iframe-api')) return;

  const tag = document.createElement('script');
  tag.id = 'youtube-iframe-api';
  tag.src = 'https://www.youtube.com/iframe_api';
  tag.async = true;
  document.head.appendChild(tag);
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const playerRef = useRef<YTPlayer | null>(null);
  const playerReadyRef = useRef(false);
  const initStartedRef = useRef(false);
  const pendingPlayRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const syncPlayingState = useCallback(() => {
    const playing =
      playerReadyRef.current &&
      playerRef.current &&
      playerRef.current.getPlayerState?.() === window.YT?.PlayerState.PLAYING;
    setIsPlaying(Boolean(playing));
  }, []);

  const createPlayer = useCallback(() => {
    if (playerRef.current) return;

    const host = document.getElementById(PLAYER_HOST_ID);
    if (!host) return;

    host.innerHTML = '';

    playerRef.current = new window.YT!.Player(PLAYER_HOST_ID, {
      height: '1',
      width: '1',
      videoId: YOUTUBE_AUDIO_ID,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        loop: 1,
        playlist: YOUTUBE_AUDIO_ID,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
      },
      events: {
        onReady: () => {
          playerReadyRef.current = true;
          if (pendingPlayRef.current) {
            playerRef.current?.playVideo();
            pendingPlayRef.current = false;
          }
          syncPlayingState();
        },
        onStateChange: () => syncPlayingState(),
        onError: () => {
          pendingPlayRef.current = false;
          syncPlayingState();
        },
      },
    });
  }, [syncPlayingState]);

  const ensurePlayer = useCallback(() => {
    if (initStartedRef.current) return;
    initStartedRef.current = true;
    loadYouTubeApi(createPlayer);
  }, [createPlayer]);

  const playAudio = useCallback(() => {
    ensurePlayer();
    if (!playerReadyRef.current || !playerRef.current) {
      pendingPlayRef.current = true;
      return;
    }
    playerRef.current.playVideo();
  }, [ensurePlayer]);

  const pauseAudio = useCallback(() => {
    pendingPlayRef.current = false;
    playerRef.current?.pauseVideo();
  }, []);

  const toggleAudio = useCallback(() => {
    if (isPlaying) pauseAudio();
    else playAudio();
  }, [isPlaying, pauseAudio, playAudio]);

  useEffect(() => {
    return () => {
      pendingPlayRef.current = false;
      playerReadyRef.current = false;
      initStartedRef.current = false;
      playerRef.current?.destroy?.();
      playerRef.current = null;
      document.getElementById(PLAYER_HOST_ID)?.replaceChildren();
      document.getElementById('youtube-iframe-api')?.remove();
    };
  }, []);

  const isMutedUi = !isPlaying;

  return (
    <AudioContext.Provider value={{ isPlaying, isMutedUi, toggleAudio }}>
      <div
        id={PLAYER_HOST_ID}
        className="youtube-audio-player"
        aria-hidden="true"
      />
      {children}
    </AudioContext.Provider>
  );
}
