---
slug: "/axidraw-voice-memos"
date: "2021-12-08"
title: "Axidraw Voice Memos"
featuredImage: "../../static/images/code/axidraw/book.jpg"
featuredImageAlt: "a photo of a notebook page filled with asemic words"
tags: ["Code", "Music"]
showDate: true
---
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/_alznpKj0AE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style="text-align: center;">This system transcribes your pitch into a plot in realtime.

## Some Inspirations

This idea was primarily inspired by the music synced tracks made by people in the Line Rider community such as 
[this track created by DoodleChaos](https://youtu.be/vcBn04IyELc), which took them 3 months to complete by hand an [this track by Rabid Squirrel](https://youtu.be/qasxqKScOfY), which took them a whole 18 months to complete (I highly recommend watching this one).

After hearing Golan talk about [asemic writing systems](https://courses.ideate.cmu.edu/60-428/f2021/daily-notes/11-01-work/asemic-writing/), I began to reevaluate my idea as an archival practice rather than a visual accompaniment. Sweetcorn also suggested that I take a look at cursive shorthand, and I was particularly blown away by [tersive shorthand](https://omniglot.com/conscripts/tersive.htm) and [zhong hua yu zi(中华语字)](https://omniglot.com/conscripts/zhonghuayuzi.htm).

## Process

I first got Max MSP's monophonic pitch detection working to send pitch data to Processing.

<img class="alignnone size-full wp-image-2507" src="https://courses.ideate.cmu.edu/60-428/f2021/wp-content/uploads/2021/12/trim.5DCA3B86-9C50-4B91-9D9D-F613E0B70C61-2.gif" alt="" width="480" height="361" />

The patch sends over the note detected relative to C. This means, for example, that if it detects a D it will send over 1 as opposed to a B where it will send over a 12.

I then began drafting an alphabet for my processing sketch. My first impulse was a draft a geometric alphabet consisting of 12 different symbols. I think one issue I encountered was trying to figure out which features I wanted to preserve, such as pitch, duration, octave, whether it was an incident or not, and dynamics. At this stage, I was influenced by my familiarity with traditional Chinese musical notation [(工尺)](https://en.wikipedia.org/wiki/Gongche_notation).

<img src="../images/code/axidraw/plots-7.png" alt="" width="174" height="405"/>

Ultimately, I settled on this alphabet.

Each note corresponds to a symbol. I ignore flats in favor of sharps, and indicate that a note is a sharp with a serif.
To preserve duration, every time my program reevaluates the current pitch, it adds a small snaking line, so that the length of the snake tacked onto each symbol represents how long that note was held.
Rests are denoted by whitespace, but the length of rests are ignored.

These are some plots that used this system.
![plot-1](../images/code/axidraw/plots-1.jpg)
<img src="../images/code/axidraw/plots-6.jpg" alt="" width="343" height="356"/>

^ The bottom three plots (and this close up shot) highlight the amount of variation (chaos?) that can be achieved by changing the frame rate. Processing usually calls draw() at 60 fps, but this created too many unpredictable symbols for my preference.

At the end of a plot, I wanted something I could still decipher.

Additionally I originally plotted my symbols from left to right, similar to how I write. This however made the Axidraw fall out of sync with my pitch, since it needed time to go to the next line. This was fixed by plotting the symbols in boustrophedon (left to right, then right to left, alternating), which minimized the distance.

<iframe src="https://player.vimeo.com/video/646970438?h=d2367b003f" width="640" height="387" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

Even with this fix, I was still unsatisfied with the Axidraw's ability to keep up with me. This was mostly due to my initial alphabet, since each of the symbols had a different start position which added more moving time in between pitches. I also didn't like how distinct each symbol was, since I didn't think pitch should look as "blocky" as what it became on paper.

To fix this, I revised my alphabet to look more organic and to standardize the starting position. I did this through playing around with bezier curves.

![plot-2](../images/code/axidraw/plots-2.jpg)
![plot-3](../images/code/axidraw/plots-3.jpg)
<img src="../images/code/axidraw/plots-4.png" alt="" width="306" height="306"/>

After drafting more symbols, I finalized another alphabet.

Instead of drawing "snakes" to denote duration of pitch, I switched to drawing little spikes. Each symbol starts and ends at the same place. I also added in noise to the individual symbols and to the Axidraw's plotting direction to give the plot a more handwritten quality.

![plot-5](../images/code/axidraw/plots-5.jpg)

Here's a plot with the new alphabet

## More documentation.
![book-2](../images/code/axidraw/book-2.jpg)
![book-3](../images/code/axidraw/book-3.jpg)

## Takeaways.

I learned a lot about how structuring a working pipeline (Max MSP to OSC to Processing to CNC server to Axidraw). I feel more knowledgeable about what resources are available for and the current limitations of pitch detection, which will help me immensely with future audio related projects experimentation. I still have more in plan for this project, such as adding in generated computer-generated lyrics using [pronouncing.py](https://github.com/aparrish/pronouncingpy), and additional support for quick changes in pitch.