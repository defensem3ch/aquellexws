---
layout: tutorial
title: 'The Compendium of Custom Refresh Rate Techniques in FamiTracker'
lastUpdated: '2017-11-11T23:55:47+11:00'
---

Written by <a href=https://soundcloud.com/dj-dimeback>Thomas Palensky</a>

Document version: 1.1a

This document is kind of a work in progress, which means I'll update it whenever I feel like it, but what's here should give you a basic idea.

### PREFACE

Okay, before even beginning to write a Dubstep song in any way, I recommend getting a nice pair of headphones.<br>
It's really necessary because everything sounds much more crisp and it brings the bass out much better than stock earphones.

### INTRODUCTION

To start, make sure the bass filtering is set to the lowest possible frequency. To set this, go to File --> Configuration --> Sound

Now, the first thing you need to do is find the right engine speed.<br>
FamiTracker currently allows up to 800 Hz. 401-800 can be achieved via text export, anything higher requires hacking.<br>
This is important for the tuning of the notes. More on that later in the document.

Secondly, wubs can be produced with any of the instrument sequences, but I recommend using the volume or arpeggio sequences. They have to be looped.<br>
The duty cycle you use will also have an effect on the sound of the wub. 12.5% sounds the softest, and 75% sounds the loudest. (Yes, there is a difference between 25% and 75%)

Thirdly, I recommend writing the song using the speed 1 formula, mainly for the benefit of the non-dubstep instruments.

You should also calculate the associated tempo.<br>
The equation: Engine Speed\*2.5/8<br>
If you get a decimal, use the closest whole value or use Engine Speed\*2.5/4 instead.

### USING VOLUME SEQUENCES

Start off by entering this in the MML string: | 15 0<br>
When you play a note, you will not hear what corresponds to the note you just played, but what's entered in the sequence.<br>
Increasing or decreasing the step size will change the pitch of the tone.<br>
Playing different notes on the keyboard will affect the sound of the tone.<br>
For the sequence shape, I recommend square waves because it produces the best result.

### USING ARPEGGIO SEQUENCES

The formula works the same as volume sequences. It also works best on 2A03.<br>
However, this requires a little more playing around. The note you play on the keyboard also matters.<br>
I just recommend adjusting the steps in the sequence and playing different notes until it sounds good.

### THE WUB CHART

I have devised a chart that tells you the resulted note from each step size.<br>
The base note is represented by variable x.<br>
x-# represents the output note relative to x.

| Sequence | Output note | MML String in the shape of a square wave:                                    |
| :------- | :---------- | :--------------------------------------------------------------------------- |
| 2 steps  | x           | 15 0                                                                         |
| 3 steps  | x-7         | 15 0 0 / 15 15 0                                                             |
| 4 steps  | x-12        | 15 15 0 0                                                                    |
| 5 steps  | x-16\*      | 15 15 0 0 0 / 15 15 15 0 0                                                   |
| 6 steps  | x-19        | 15 15 15 0 0 0                                                               |
| 7 steps  | x-22        | 15 15 15 0 0 0 0 / 15 15 15 15 0 0 0                                         |
| 8 steps  | x-24        | 15 15 15 15 0 0 0 0                                                          |
| 9 steps  | x-26        | 15 15 15 15 0 0 0 0 0 / 15 15 15 15 15 0 0 0 0                               |
| 10 steps | x-28\*      | 15 15 15 15 15 0 0 0 0 0                                                     |
| 11 steps | x-29        | 15 15 15 15 15 0 0 0 0 0 0 / 15 15 15 15 15 15 0 0 0 0 0                     |
| 12 steps | x-31        | 15 15 15 15 15 15 0 0 0 0 0 0                                                |
| 13 steps | x-32        | 15 15 15 15 15 15 0 0 0 0 0 0 0 / 15 15 15 15 15 15 15 0 0 0 0 0 0           |
| 14 steps | x-34        | 15 15 15 15 15 15 15 0 0 0 0 0 0 0                                           |
| 15 steps | x-35        | 15 15 15 15 15 15 15 0 0 0 0 0 0 0 0 / 15 15 15 15 15 15 15 15 0 0 0 0 0 0 0 |
| 16 steps | x-36        | 15 15 15 15 15 15 15 15 0 0 0 0 0 0 0 0                                      |

\*Might be out of tune.

As you can see, it works very similarly to the DPCM steps. Of course, this means you're limited to what notes you can produce, but it shouldn't be too hard to get around restrictions like this.

I'll use 392 Hz as an example:

| Sequence | Output note |
| :------- | :---------- |
| 2 steps  | G-3         |
| 3 steps  | C-3         |
| 4 steps  | G-2         |
| 5 steps  | D#2\*       |
| 6 steps  | C-2         |
| 7 steps  | A-1         |
| 8 steps  | G-1         |
| 9 steps  | F-1         |
| 10 steps | D#1\*       |
| 11 steps | D-1         |
| 12 steps | C-1         |
| 13 steps | B-0         |
| 14 steps | A-0         |
| 15 steps | G#0         |
| 16 steps | G-0         |

Remember when I said finding the right engine speed is important for the tuning of the notes?<br>
If you adjust the engine speed, the tuning of all the notes will change. Adjust it until everything sounds the way you like.<br>
Let's say you want to transpose the notes a whole step up. Change the engine speed to 448 Hz and you get this:

| Sequence | Output note |
| :------- | :---------- |
| 2 steps  | A-3         |
| 3 steps  | D-3         |
| 4 steps  | A-2         |
| 5 steps  | F-2\*       |
| 6 steps  | D-2         |
| 7 steps  | B-1         |
| 8 steps  | A-1         |
| 9 steps  | G-1         |
| 10 steps | F-1\*       |
| 11 steps | E-1         |
| 12 steps | D-1         |
| 13 steps | C#0         |
| 14 steps | B-0         |
| 15 steps | A#0         |
| 16 steps | A-0         |

And that's it... For now.

### SECTION 4. CARRIER TONES: HOW TO USE SEQUENCES WITH HIGH REFRESH RATES
By now you've hopefully picked out a refresh rate to use. If not, we'll use 392 Hz as an example. The easiest way to get a surface level understanding of how this all works is through the instrument sequences. Start by making a volume sequence {| 15 0}, then hit a few notes on your keyboard. On top of the usual frequency you'll hear, you will also hear a constant bass frequency. In the case of this sequence, it's a G-2. In the sequence editor, if you increase the size of the sequence, you will hear the carrier tone descend in pitch. The bigger the sequence, the lower the pitch gets.

Here's a chart that shows what pitch you will get based on the size of the sequence. x = the note set by the refresh rate:

|    Sequence     |   Output note   | Volume string in the shape of a square wave: |
|-----------------|-----------------|----------------------------------------------|
| 2 steps         | x               | 15 0                                         |
| 3 steps         | x-7             | 15 0 0                                       |
| 4 steps         | x-12            | 15 15 0 0                                    |
| 5 steps         | x-16*           | 15 15 0 0 0                                  |
| 6 steps         | x-19            | 15 15 15 0 0 0                               |
| 7 steps         | x-22*           | 15 15 15 0 0 0 0                             |
| 8 steps         | x-24            | 15 15 15 15 0 0 0 0                          |
| 9 steps         | x-26            | 15 15 15 15 0 0 0 0 0                        |
| 10 steps        | x-28*           | 15 15 15 15 15 0 0 0 0 0                     |
| 11 steps        | x-29            | 15 15 15 15 15 0 0 0 0 0 0                   |
| 12 steps        | x-31            | 15 15 15 15 15 15 0 0 0 0 0 0                |
| 13 steps        | x-32            | 15 15 15 15 15 15 0 0 0 0 0 0 0              |
| 14 steps        | x-34            | 15 15 15 15 15 15 15 0 0 0 0 0 0 0           |
| 15 steps        | x-35            | 15 15 15 15 15 15 15 0 0 0 0 0 0 0 0         |
| 16 steps        | x-36            | 15 15 15 15 15 15 15 15 0 0 0 0 0 0 0 0      |
|-----------------------------------|----------------------------------------------|
*Slightly out of tune

With a refresh rate of 392 Hz, this is the table of notes we would have:
<pre>
╔═════════════════╦═════════════════╗
║    Sequence     ║   Output note   ║
╠═════════════════╬═════════════════╣
║ 2 steps         ║ G-3             ║
║ 3 steps         ║ C-3             ║
║ 4 steps         ║ G-2             ║
║ 5 steps         ║ D#2*            ║
║ 6 steps         ║ C-2             ║
║ 7 steps         ║ A-1*            ║
║ 8 steps         ║ G-1             ║
║ 9 steps         ║ F-1             ║
║ 10 steps        ║ D#1*            ║
║ 11 steps        ║ D-1             ║
║ 12 steps        ║ C-1             ║
║ 13 steps        ║ B-0             ║
║ 14 steps        ║ A-0             ║
║ 15 steps        ║ G#0             ║
║ 16 steps        ║ G-0             ║
╚═════════════════╩═════════════════╝
</pre>
The great thing is that if you adjust the refresh rate, you will get a different set of notes to work with.
Here's the chart again at 350 Hz:
<pre>
╔═════════════════╦═════════════════╗
║    Sequence     ║   Output note   ║
╠═════════════════╬═════════════════╣
║ 2 steps         ║ F-3             ║
║ 3 steps         ║ A#2             ║
║ 4 steps         ║ F-2             ║
║ 5 steps         ║ C#2*            ║
║ 6 steps         ║ A#2             ║
║ 7 steps         ║ G-1*            ║
║ 8 steps         ║ F-1             ║
║ 9 steps         ║ D#1             ║
║ 10 steps        ║ C#1*            ║
║ 11 steps        ║ C-1             ║
║ 12 steps        ║ A#1             ║
║ 13 steps        ║ A-0             ║
║ 14 steps        ║ G-0             ║
║ 15 steps        ║ F#0             ║
║ 16 steps        ║ F-0             ║
╚═════════════════╩═════════════════╝
</pre>
It's very similar to how the DPCM pitch levels work, in that the bigger the sequences gets, the finer the tuning gets.

### EXAMPLES
<br>
<video controls width="320" height="240">
  <source src="/vid/2019-06-25_14-23-03.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

| Track name      | Composer        | Audio                                                                                                                                 | Source files                                                                                             |
| :-------------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------- |
| Adrenaline Rush | Thomas Palensky | <audio controls preload="none"><source src="/snd/Adrenaline_Rush_224hz.ogg"><a href="/snd/Adrenaline_Rush_224hz.ogg">.ogg</a></audio> | <a href="/fami_other/adrenaline_rush.ftm">.ftm</a><br><a href="/fami_other/adrenaline_rush.nsf">.nsf</a> |
| Blitter Spitter | Strobe (TiTAN)  | <audio controls preload="none"><source src="/snd/blitterspitter.ogg"><a href="/snd/blitterspitter.ogg">.ogg</a></audio>               | <a href="/fami_other/blitterspitter.ftm">.ftm</a><br><a href="/fami_other/blitterspitter.nsf">.nsf</a>   |
| Wub Club        | Thomas Palensky | <audio controls preload="none"><source src="/snd/wub_club.ogg"><a href="/snd/wub_club.ogg">.ogg</a></audio>                           | <a href="/fami_other/wub_club.ftm">.ftm</a><br><a href="/fami_other/wub_club.nsf">.nsf</a>               |

### DOCUMENT CHANGELOG

- 1.1 - Initial release.
- 1.1a - Added examples.
