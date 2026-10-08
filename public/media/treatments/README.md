# Procedure video slots

Place the final clinic MP4 files in this folder. Map each one in
`lib/treatment-media.ts` by replacing its `video: null` with its public path,
for example `video: '/media/treatments/laser-skin-care.mp4'`.

The cards already handle muted, looping desktop hover previews and a mobile
play/pause button. Playback stops on pointer exit, when the card leaves the
screen or when the tab is hidden. A failed video falls back to its image.
Reduced-motion visitors can start playback manually.

Until clips are provided, the image-backed film spaces display “Procedure film
coming soon” and do not request any video or show a non-functional play button.
