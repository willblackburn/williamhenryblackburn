'use client';

import { useAudio } from '@/components/providers/AudioProvider';

export function PersistentAudioPlayer() {
  const { isMutedUi, toggleAudio } = useAudio();

  return (
    <div className="musicplayer">
      <button
        type="button"
        className={`toggle audio-toggle${isMutedUi ? ' active' : ''}`}
        aria-label="Toggle background audio"
        aria-pressed={!isMutedUi}
        onClick={toggleAudio}
      >
        <svg
          className="audio-icon audio-icon--playing"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          aria-hidden="true"
        >
          <path d="M3 10v4h4l5 5V5L7 10H3zm7.5 2.5c0-1.65-1.02-3.07-2.5-3.71v7.42c1.48-.64 2.5-2.06 2.5-3.71zm2.5 0c0 2.48-1.36 4.64-3.38 5.78l1.46 1.46A7.935 7.935 0 0 0 18 12.5C18 8.97 15.51 6.03 12 5.05v2.09c2.06.73 3.5 2.62 3.5 4.86z" />
        </svg>
        <svg
          className="audio-icon audio-icon--muted"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          aria-hidden="true"
        >
          <path d="M3.63 3.63a.996.996 0 0 0 0 1.41L7.29 8.7 7 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.002 8.002 0 0 0 3.69-1.81l2.04 2.04 1.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM12 4l-2.05 2.05L12 8.1V4zm6.36 10.36-1.55-1.55A3.978 3.978 0 0 0 16 12.5v-2.16l-1.51-1.51C15.51 9.64 16 10.99 16 12.5c0 1.12-.39 2.15-1.04 2.96l1.46 1.46A7.935 7.935 0 0 0 18 12.5c0-1.21-.27-2.36-.76-3.39l-1.88-1.88v2.06c0 .55-.11 1.08-.3 1.57z" />
        </svg>
      </button>
    </div>
  );
}
