'use client';

import { useAudio } from '@/components/providers/AudioProvider';
import { WhbIcon } from '@/components/icons/WhbIcon';

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
        <WhbIcon
          name="audio"
          className="audio-icon audio-icon--playing"
          size="sm"
          tone="inherit"
        />
        <WhbIcon
          name="audio-muted"
          className="audio-icon audio-icon--muted"
          size="sm"
          tone="inherit"
        />
      </button>
    </div>
  );
}
