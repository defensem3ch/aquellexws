---
path: "/goodies/tutorial/game-boy-comparison"
layout: "tutorial"
title: "Game Boy sound comparsion (better than Herbert Weixelbaum's version)"
lastUpdated: "2017-10-20T15:55:00Z"
---

THIS PAGE IS STILL A WORK IN PROGRESS

Written by Aquellex<br>
Contributions from <a href="http://defensemech.com" target="_blank">Defense Mechanism</a> & <a href="https://soundcloud.com/pain-perdu" target="_blank">Pain Perdu</a><br>
Happy Hippo track by <a href="http://doussis.com" target="_blank">Stello Doussis</a>

### PREFACE

Due to the lack of up-to-date Game Boy sound comparison guides within the 2007-2015 timeframe, and with said guides showing outdated information that is still being used as a primary source by naïve chiptuners, this page intends to provide a more succinct and raw analysis of hardware recordings while contributing newer sound modifications and variables that are missing from said guides.

All waveform images provided within this document are recorded with the following configuration:

* Envelope: A8
* Wave: 50% (square)
* Note: Lowest pulse note possible on PU1 (displays as C-3 on v4.9.5)

The recordings (and the waveforms) have also been normalised to -0.01dB. No other further post-processing was done. Rendered in 44.1khz 16-bit, then exported to .ogg (Q10).

You can expect the following devices:

### PORTABLE

* DMG (stock, prosound, bass boost) [CPU-06 recommended]
* Pocket (stock, prosound)
* Light (stock, prosound)
* GBC (stock, prosound, noise cancel, bass boost) [CPU-04 OR CPU 05 recommended] {DO NOT GET ANYTHING -03 OR LOWER}
* Advance (stock, prosound)
* SP (stock, prosound)

### HOME

* Super Game Boy (stock, prosound)
* Super Game Boy 2 (stock, prosound)
* Nintendo GameCube GB Player (stock, prosound)

### EMULATED

#### BGB (PC)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

BGB's emulator is better than the stock Color & Color w/ prosound, but is outclassed by the Color bassboost, which also outclasses the DMG prosound.

|                 Image                   | Variables | Waveform                       | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| N/A       | ![wf_bgb.png](/img/wf_bgb1.png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_bgb.ogg"><a href="/snd/sndtest_bgb.ogg"> .ogg</a></audio><br>Virtual Insanity <audio controls><source src="/snd/virtual_bgb.ogg"><a href="/snd/virtual_bgb.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_bgb.ogg"><a href="/snd/happyhippo_bgb.ogg"> .ogg</a></audio>|

#### VisualBoyAdvance (PC)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

#### MasterBoy (Sony PSP)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### NOTES

If you would like to help contribute more sound data, please do not hesitate to get in touch with me via <a href="mailto:aquellex@f0xpa.ws" target="_blank">e-mail</a>, or join the discussion in <a href="https://discord.io/psgcabal" target="_blank">The PSG Cabal</a> Discord server in #technical for more details.

If you would like to help contribute a more ergonomic design for this page, the website can be found on <a href="https://github.com/Aquellex/aquellexws" target="_blank">GitHub</a>.
