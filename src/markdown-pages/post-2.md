---
slug: "/axidraw-metaballs"
date: "2021-09-25"
title: "Squamous Isthmus"
featuredImage: "../../static/images/code/axidraw/squamous.jpg"
featuredImageAlt: "a plot of generative cells"
tags: ["Code"]
showDate: true
---

---
## Inspiration
I was inspired by the blob-tastic quality cells have. It's also interesting how much cells and tissue look like topographical lines on a map. The notion that the microscopic and the gigantic can be visually linked despite their numerous differences was what inspired the name "squamous ithmus."

## Process
I traced the contours of 2D metaballs (which is based off of this [sketch](https://github.com/CodingTrain/website/blob/main/CodingChallenges/CC_028_MetaBalls/Processing/CC_028_MetaBalls/CC_028_MetaBalls.pde) by Dan Shiffman). I altered the code by removing velocity and changing how initial positions were instantiated, since my goal was just to produce svgs not animations. 

I generated the position of the metaballs using a variation of the [Thomas cluster point process](https://hpaulkeeler.com/simulating-a-thomas-cluster-point-process/#:~:text=An%20example%20of%20this%20is,tend%20to%20form%20random%20clusters.&amp;text=The%20only%20difference%20between%20the,the%20points%20are%20randomly%20located.) in order to produce clusters that looked more blob-like (in my opinion. However, it is conceptually different from this point process because I only use a Poisson Distribution on the parent points and not on the daughter points. The code I used to generate the distribution for the cluster centers can be found [here](https://sighack.com/post/poisson-disk-sampling-bridsons-algorithm). 

I trace six layers worth of isolines using this [library](https://github.com/atduskgreg/Processing-Isolines/tree/master/examples/IsolinesFromHeatMap) which uses the marching squares algorithm at varying thresholds. I simultaneously generate bit masks for each of the six isometric layers, rasterize hatch patterns over top of these masks and trace the lines from the masked result. The hatch patterns consist of noise fields of varying stroke weight + circles but when the masked hatch is traced only the outline remains, which give the blobs a striated pattern similar to those found in muscle tissue. I also chose the small circle hatch because it also seemed very cell-like to me.

## More documentation
![squamous2](../images/code/axidraw/squamous2.jpg)

## Takeaways
I've learned that blobs are deceptively simple because they look organic (they aren't your average polygon). There are so many variations of blobs and so many ways to code blobs -- using metaballs is only one of ways you can create blobs. It might be interesting to revisit these blobs using a different approach in the future.