// Add each finished MP4 under public/media/treatments and set its video path
// below (e.g. '/media/treatments/laser.mp4'). Until then show real clinic photos,
// not unrelated reels presented as procedure footage.
export const treatmentMedia: Record<string, { image: string; alt: string; video: string | null; caption: string }> = {
  'laser-skin-care': { image: '/media/results/treatment-result-01.jpeg', alt: 'Clinic-supplied before and after images of Forza laser treatment', video: null, caption: 'Clinic-supplied laser result' },
  injectables: { image: '/media/results/treatment-result-07.jpeg', alt: 'Clinic-supplied before and after images of chin and jawline filler', video: null, caption: 'Clinic-supplied filler result' },
  'thread-lift': { image: '/dr-saman-waseem-portrait-v2.jpg', alt: 'Dr. Saman Waseem at her clinic', video: null, caption: 'Consultation-led care' },
  'skin-rejuvenation': { image: '/media/results/treatment-result-04.jpeg', alt: 'Clinic-supplied before and after images of acne care', video: null, caption: 'Clinic-supplied skin result' },
  'scalp-hair-care': { image: '/media/results/treatment-result-02.jpeg', alt: 'Clinic-supplied before and after images of hair treatment', video: null, caption: 'Clinic-supplied hair result' },
  'exosome-therapy': { image: '/dr-saman-waseem-portrait-v2.jpg', alt: 'Dr. Saman Waseem in the DermaBliss consultation room', video: null, caption: 'Your plan begins with a consultation' },
};
