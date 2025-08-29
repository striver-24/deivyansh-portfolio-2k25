# How to Add Your Background Video

1. Place your background video file in the `/public/videos/` directory
2. Name it `background-video.mp4` or update the source path in `src/components/Hero.tsx`
3. For optimal performance, consider these guidelines:
   - Keep the file size under 10MB
   - Use H.264 codec for best browser compatibility
   - Resolution around 1280x720 is usually sufficient
   - Consider a video length of 15-30 seconds that loops seamlessly

## Video Format Recommendations

- Format: MP4 with H.264 codec
- Resolution: 1280x720 or 1920x1080
- Aspect Ratio: 16:9
- Duration: 15-30 seconds (looping)
- File Size: Ideally under 10MB

## Alternative Video Sources

If you want to provide multiple format options for better browser compatibility:

```jsx
<video autoPlay loop muted playsInline>
  <source src="/videos/background-video.mp4" type="video/mp4" />
  <source src="/videos/background-video.webm" type="video/webm" />
</video>
```

## Mobile Considerations

The current implementation includes the `playsInline` attribute, which allows the video to play inline on iOS devices rather than fullscreen.
