---
slug: "/wfc"
date: "2021-11-03"
title: "Tiling my name"
featuredImage: "../../static/images/code/wfc/tiling1.png"
featuredImageAlt: "a plot of 5 wave function collapse tilings"
tags: ["Code"]
showDate: true
---

---
## Process
I first created a 16x16 tile generator so I could draw my name (I made 15 tiles, 3 for each letter). 

Here are some examples:

<img class="alignnone size-full wp-image-1905" src="https://courses.ideate.cmu.edu/60-428/f2021/wp-content/uploads/2021/11/20940.png" alt="" width="16" height="16" /><img class="alignnone size-full wp-image-1906" src="https://courses.ideate.cmu.edu/60-428/f2021/wp-content/uploads/2021/11/71562.png" alt="" width="16" height="16" /><img class="alignnone size-full wp-image-1907" src="https://courses.ideate.cmu.edu/60-428/f2021/wp-content/uploads/2021/11/32247.png" alt="" width="16" height="16" />

I then modified a wave function collapse algorithm (after reading up about WFC's and how they work) mentioned in [this Processing thread](https://discourse.processing.org/t/wave-collapse-function-algorithm-in-processing/12983/11)which is based off of [mxgmn's original implementation](https://github.com/mxgmn/WaveFunctionCollapse) to generate tilings of each of the letter tiles I produced as a sort of signature. And then I converted it to svg using marching squares and plotted the result.

![wfcplot](../images/code/wfc/wfc.JPG)

One aspect of this plot I enjoy is how depending on the font style and character density the overall density of the tiling changes.

## More Experimentation

After creating this tiling, I became interested in ways I could alter the pattern. 

I explored a couple of ways of manipulating these tiles. For one experiment, I tried using different plotting tools. It's interesting how material can change the plot in unexpected ways. For example, plotting with a brush pen adds a layer of unpredictability to the final result since we can't control how the brush hairs will react to mechanical force. Additionally, plotting with a pencil or a willow stick adds a temporal dimension to a plot, since the tip will wear down as the plot progresses, which can create unfinished spots in the plot. 

<img src="../images/code/wfc/wfc-3.jpg" alt="" width="589" height="1024"/>

In another experiment, I wanted to create a "Where's Waldo" with WFC, so I created a 16x16 waldo tile in my tile maker in Processing and then generating multiple tilings.

<img src="../images/code/wfc/waldo.png" alt="" width="660" height="300"/>

I also created a T-shirt using this pattern. I used a Cricut to cut three colors of vinyl and then I heat-pressed the design to a white T-shirt. I also added two shoulder details of the original Waldo tiling.

![waldoshirt](../images/code/wfc/waldo-shirt.jpg)

Another experiment I wanted to carry out was to see if the original letter appeared in any of the produced tilings. But I also didn't want to hand annotate/circle any letters I found, just because I thought that would be time consuming. Identifying letters by hand also brings in a degree of subjectivity and human error. 

Instead I found another, unpredictable and fun way to identify letters: by using **OCR (Optical Character Recognition) !**

I think OCR in particular is interesting because sometimes the computer identifies letters in nonsensical ways; I find these peculiarities to be hilarious. Then I implemented it in Python. Here are some examples:

![ocr1](../images/code/wfc/ocr-1.png)

![ocr2](../images/code/wfc/ocr-2.png)

I think it was interesting to uncover what the computer reads as "text", plus this gave me an opportunity to learn more about OCR. I do this a gold-embossed print of these would look pretty nice, but I will leave that as a future project for myself.

## Takeaways
Overall I found learning about WFC and OCR to be an extremely fun and rewarding experience. While generating these tilings, I was immediately drawn to the non-repeating patterns. I think it would be interesting to reproduce these as textiles for clothing, but I will leave that as a project for the future.

**An interesting note:** while generating these WFC patterns using my handdrawn tiles, the letter R had the most contradictions (about ~85% of the time). I'm not too sure what the reason for this high frequency is, but perhaps the diagonal part of an "R" is prone to contradiction. Despite my frustrations with the letter R, I personally found the resulting tiling the be the most visually appealing. 

![r](../images/code/wfc/r.png)

Perhaps hard work does pay off in the end?
