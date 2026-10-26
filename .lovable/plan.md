## Move the Free Consultation stamp above the photo on phones

On phones, the stamp currently overlaps the top of the clinic photo and covers the monitor. Change it to sit above the photo on phones only.

### What changes
- Phones: the stamp sits fully above the clinic photo, still on the right and tilted like an applied stamp, so the monitor is fully visible.
- Add just enough space above the photo on phones so the stamp doesn't cover the text above it.
- Tablet and desktop: no change (the stamp keeps its current half-above, half-on-photo position).
- The link to the consultation form, the image and everything else stay the same.

### Technical details
- In the homepage stamp, change the mobile vertical offset from `-translate-y-1/2` to about `-translate-y-[95%]`, and keep `sm:-translate-y-[64%]`.
- Increase the photo wrapper's mobile top margin from `mt-16` to about `mt-44`, keeping `sm:mt-24 lg:mt-0`.
- Check in a browser at phone width (390px) that the stamp doesn't overlap the photo, that the page doesn't scroll sideways, and that the desktop view is unchanged.
