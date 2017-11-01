---
permalink: /goodies/tutorial/game-boy-comparison
layout: "tutorial"
title: "Game Boy sound comparsion (better than Herbert Weixelbaum's version)"
lastUpdated: "2017-10-24T11:57:00+11:00"
---

THIS PAGE IS STILL A WORK IN PROGRESS

Written by Aquellex<br>
Contributions from <a href="http://defensemech.com" target="_blank">DEFENSE MECHANISM</a> & <a href="https://soundcloud.com/pain-perdu" target="_blank">Pain Perdu</a><br>
Happy Hippo track by <a href="http://doussis.com" target="_blank">Stello Doussis</a>

### PREFACE

Due to the lack of up-to-date Game Boy sound comparison guides within the <a href="http://herbertweixelbaum.com/comparison.htm" target="_blank">2007-2015</a> timeframe, and with said guides showing outdated information that is still being used as a primary source by naïve chiptuners, this page intends to provide a more updated analysis of hardware recordings while contributing newer sound modifications and variables that are missing from said guides.

It should also be noted that this page should really just be used as a guideline & reference, not as a Bible of sorts.

All waveform images provided within this document are recorded with the following configuration:

* Envelope: A8
* Wave: 50% (square)
* Note: Lowest pulse note possible on PU1 (displays as C-3 on v4.9.5)

All spectrogram images provided within this document are when LSDJ is left running idle.

The Game Boys were played at their highest volumes. Steinberg UR22 and M-Audio Fast Track Ultra audio interfaces were used for recording. The recordings (and the waveforms) have all been normalised to -0.01dB with the exception of the sonogram images. No other further post-processing was done. Rendered in 44.1khz 16-bit, then exported to .ogg (Q10).

You will hear the following in SNDTEST.lsdsng: 6 bars of intro, 2 bars of the infamous 'clicking' side-effect when using volume/pan commands, 19 bars of a full track, then an isolation of a granular synthesis technique and other various waveforms (pulses, sine, saw, kits, sine kick, square kick, periodic noise), then at least 2 seconds of LSDJ running idle.

LSDJ 4.9.5 was used for all SNDTEST.lsdsng recordings since the project file uses the old logarithmic pitch bend table. Later versions of LSDJ can have positive impacts (e.g. 5.0.0: you can get away with an extra V command on the DMG | 5.1.9 makes P/L commands less CPU-intensive)

### PORTABLE

#### DMG

Ahh, the good old staple of Game Boy music. Thick, bassy sound straight out of the box. Background noise is negligable during playback. A bit of virtually unnoticable hiss can be found at resonances 9.1-9.4khz and 18-18.7khz. Need I say more? Actually...

One major downside of DMG units is the processor speed. When a track gets too complicated, the unit will choke during playback. Ways to choke a DMG unit include:

* Using two high-frequency vibrato commands simultaneously
* Kit playback
* Using the granular synthesis technique
* Using a tempo setting greater than 220

Fortunately, LSDJ versions greater than 4.3.x are more optimised compared to the 3.x.x days.

Another shortcoming I might add is that the 'clicking' side-effect is very prominent (as demonstrated in the Happy Hippo example), but depending on the enjoyment of the composition of your tracks, it's a nitpick at best.

That being said, this unit is still very accessible today, and the CPU-choking shortcoming ultimately depends on the complexity of your tracks. Great for beginners.

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| <li>CPU-06</li><li>Bivert backlight</li>| ![wf_dmg.png](/img/wf_dmg.png)<br>![sg_dmg.png](/img/sg_dmg.png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_dmg.ogg"><a href="/snd/sndtest_dmg.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_dmg.ogg"><a href="/snd/happyhippo_color_dmg.ogg"> .ogg</a></audio>|

#### DMG (prosound)

Virtually the same as above, but with some major key differences:

* The background noise is gone entirely
* The hiss resonances can be still found between 9.1-9.4khz and 18-18.7khz (you can eliminate these in recording using surgical EQs)

Highly recommended mod for those getting into scenarios where a line-out jack is involved (especially live performance and recording).

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| <li>CPU-06</li><li>Bivert backlight</li>| ![wf_dmg[ps].png](/img/wf_dmg[ps].png)<br>![sg_dmg[ps].png](/img/sg_dmg[ps].png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_dmg_[ps].ogg"><a href="/snd/sndtest_dmg_[ps].ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_dmg_[ps].ogg"><a href="/snd/happyhippo_color_dmg_[ps].ogg"> .ogg</a></audio>|

#### Pocket

Use BGB or get yourself a throwaway DMG (or GBC/GBA/GBASP if you need the CPU firepower) instead. There are very little advantages to using a vanilla Pocket unit (except for when in a pinch):

* The processor speed issue from the DMG is still present
* Fuzzy sound
* Hiss (9-9.4khz, 13.7-13.8khz, 18.2-18.7khz) and hum (0-262hz) are noticable during playback (though the hiss becomes less noticable when LSDJ is idle)

If you really need to use one as a last resort, don't forget to turn up the bass on the EQ + remove unwanted resonances when post-processing.

On the other hand, the sound is more tolerable than a vanilla Color unit.

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| <li>LCPU-02</li>| ![wf_pocket.png](/img/wf_pocket.png)<br>![sg_pocket.png](/img/sg_pocket.png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_pocket.ogg"><a href="/snd/sndtest_pocket.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_pocket.ogg"><a href="/snd/happyhippo_pocket.ogg"> .ogg</a></audio>|

#### Color

Ahh yes, the infamous Game Boy Color that every chipscener loves to blindly dismiss as one of the noisiest Game Boys that are simply not worth your time at all. While it's true it does suffer the same symptoms from the stock Pocket (only much worse), at least you can throw heavy-duty commands that would make a DMG choke to oblivion, and there's always turning up the bass EQ and surgically removing the unwanted resonances in post-processing. Also, there's noise-cancelling and bass mods available for the Color, but we'll get to that soon.

* Hiss resonances: 9-9.4khz, 13.7-13.9khz, 18.2-18.7khz
* Hum resonances: 0-260hz, 1.1-1.3khz, 4.3-4.7khz

There's also a noise cancellation through stereo inversion technique <a href="https://chipmusic.org/forums/topic/6976/gameboy-noise-cancellation-through-stereo-inversion/" target="_blank">here</a>, discovered by EvilWezil. Useful for those in a pinch when recording.

If you had to pick between a Color and the Advance series with no mods factored in, go for the Advance series instead (especially SP if you're factoring in button ergonomics).

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| <li>CPU-04</li>| ![wf_gbc.png](/img/wf_gbc.png)<br>![sg_gbc.png](/img/sg_gbc.png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_gbc.ogg"><a href="/snd/sndtest_gbc.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_gbc.ogg"><a href="/snd/happyhippo_gbc.ogg"> .ogg</a></audio>|

#### Color (noise cancel + bass boost)

Thanks to this <a href="https://chipmusic.org/forums/topic/14184/gbc-bass-mod-and-noise-filtering-mod-a-comprehensive-photo-guide/" target="_blank">wonderful modification</a> pioneered by katsumbhong, the Color now gets a \*major\* upper hand against the DMG that is universally praised for its thick bass. This mod has thicker bass than the DMG, better sample playback than the DMG, your CPU-intensive tracks not choking your device in the middle of playback, virtually ZERO background noise (except for a virtually inaudible sub hum which you can see in the spectrogram), what have you not? The infamous 'clicking' side-effect when using too many volume envelopes and hardpans is still present, however.

That being said, the mod is more involved than your typical prosound mod, given the extra capacitors required. But if you are able to execute the mod (or find somebody who can) correctly, it pays great dividends. Excellent for every scenario imaginable!

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| <li>RCA</li> <li>CPU-05</li> <li>AGS-001 frontlight</li>| ![wf_gbc[nc+bb].png](/img/wf_gbc[nc+bb].png)<br>![sg_gbc[nc+bb].png](/img/sg_gbc[nc+bb].png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_color_[nc+bb].ogg"><a href="/snd/sndtest_color_[nc+bb].ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_color_[nc+bb].ogg"><a href="/snd/happyhippo_color_[nc+bb].ogg"> .ogg</a></audio>|

#### Advance

Bassy sound straight out of the box, which is very nice, and a powerful CPU to boot. The Advance series are also best known for being the least clickiest Game Boys in the series, which is a big plus, especially with tracks like Happy Hippo.

The hum and hisses are at their most noticable when LSDJ is idle, and become less noticable than the stock Pocket during playback.

* Hiss resonances: 6.6-7khz, 9-9.4khz, 13.1-14.0khz, 20.2-20.6khz
* Hum resonances: 0-260hz

Sample playback is less satisfying than the pure GB models, even with the antispike patch introduced in v4.7.0, though it's a negligible nitpick at best.

Button ergonomics are awkward, though there are mods to reroute the Start/Select buttons to L/R respectively, if you're willing to sacrifice those buttons solely for LSDJ.

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| <li>???</li>| ![wf_gba.png](/img/wf_gba.png)<br>![sg_gba.png](/img/sg_gba.png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_gba.ogg"><a href="/snd/sndtest_gba.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_gba.ogg"><a href="/snd/happyhippo_gba.ogg"> .ogg</a></audio>|

#### SP

\*will write more info here eventually + require more data from Pain Perdu\*

Background noise (hum & hiss) is negligable during playback for the AGS-001 used in the recording; hum is very noticable during playback for the AGS-101 used, unfortunately. Sample playback is still a negligable nitpick.

There is a chance that resonance severity may vary from motherboard to motherboard, but we don't have enough data for the time being.

* Hiss resonances: 8.2-8.5khz, 9.9-10.4khz, 12.8-13.2khz, 17.3-17.7khz
* Hum resonances: 0-265hz, 3.2-3.9khz

Don't forget this stereo inversion technique <a href="https://chipmusic.org/forums/topic/6976/gameboy-noise-cancellation-through-stereo-inversion/" target="_blank">here</a>.

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| <li>AGS-001</li>| ![wf_sp001.png](/img/wf_sp001.png)<br>![sg_sp001.png](/img/sg_sp001.png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_sp001.ogg"><a href="/snd/sndtest_sp001.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_sp001.ogg"><a href="/snd/happyhippo_sp001.ogg"> .ogg</a></audio>|
| ![placeholder.png](/img/placeholder.png)| <li>AGS-101</li>| ![wf_sp101.png](/img/wf_sp101.png)<br>![sg_sp101.png](/img/sg_sp101.png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_sp101.ogg"><a href="/snd/sndtest_sp101.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_sp101.ogg"><a href="/snd/happyhippo_sp101.ogg"> .ogg</a></audio>|

### HOME

#### Super Game Boy

\*will write more info here eventually + require more data from DEFENSE MECHANISM\*

* Hiss resonances: 7.8-8.2khz, 9.2-9.6khz, 15-16.4k, 18.7-19khz
* Hum resonances: 0-250hz, 1.1-1.3khz, 2.2-2.5khz, 3.4-3.7khz, 4.5-4.9khz, 5.8-6khz

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| <li>???</li>| ![wf_sgb.png](/img/wf_sgb.png)<br>![sg_sgb.png](/img/sg_sgb.png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_sgb.ogg"><a href="/snd/sndtest_sgb.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_sgb.ogg"><a href="/snd/happyhippo_sgb.ogg"> .ogg</a></audio>|

#### Super Game Boy (prosound)

\*will write more info here eventually + require more data from DEFENSE MECHANISM\*

See above for resonances, they're still the same.

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| <li>???</li>| ![wf_sgb[ps].png](/img/wf_sgb[ps].png)<br>![sg_sgb[ps].png](/img/sg_sgb[ps].png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_sgb_[ps].ogg"><a href="/snd/sndtest_sgb_[ps}.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_sgb_[ps].ogg"><a href="/snd/happyhippo_sgb_[ps].ogg"> .ogg</a></audio>|

#### Super Game Boy 2

\*will write more info here eventually + require more data from DEFENSE MECHANISM\*

* Hiss resonances: 7.8-8.2khz, 9-9.4khz, 13.5-14khz, 15.4-16.1khz, 17.5-18khz, 18.3-18.5khz, 21.6-21.8khz
* Hum resonances: 3.3-3.6khz, 5.8-6.1khz

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| <li>???</li>| ![wf_sgb2.png](/img/wf_sgb2.png)<br>![sg_sgb2.png](/img/sg_sgb2.png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_sgb2.ogg"><a href="/snd/sndtest_sgb2.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_sgb2.ogg"><a href="/snd/happyhippo_sgb2.ogg"> .ogg</a></audio>|

#### Super Game Boy 2 (prosound)

\*will write more info here eventually + require more data from DEFENSE MECHANISM\*

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| <li>???</li>| ![wf_sgb2[ps].png](/img/wf_sgb2[ps].png)<br>![sg_sgb2[ps].png](/img/sg_sgb2[ps].png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_sgb2_[ps].ogg"><a href="/snd/sndtest_sgb2_[ps}.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_sgb2_[ps].ogg"><a href="/snd/happyhippo_sgb2_[ps].ogg"> .ogg</a></audio>|

#### Game Boy Player

\*will write more info here eventually + require more data from DEFENSE MECHANISM\*

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| <li>???</li>| ![wf_gbp.png](/img/wf_gbp.png)<br>![sg_gbp.png](/img/sg_gbp.png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_gbp.ogg"><a href="/snd/sndtest_gbp.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_gbp.ogg"><a href="/snd/happyhippo_gbp.ogg"> .ogg</a></audio>|

#### Game Boy Player (prosound)

\*the recording used in question is a Japanese motherboard--I'm still waiting for DEFENSE MECHANISM to record a <a href="https://clyp.it/bswgp3sl" target="_blank">US motherboard</a> + will write more info here eventually\*

On par with, if not better than the Color noise cancel + bass boost, with the added edge of the 'clicking' side-effect being a lot more muted in akin to the GBA series as expected. The background noise is on par with, if not a couple more resonances than the stock DMG & GBAs, but during playback, it's negligable at best, especially when compared with the pocket series.

A magnificent companion for the Color/SP-seasoned composer.

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![placeholder.png](/img/placeholder.png)| <li>RCA</li><li>DOL-GBS-01</li> <li>LPF Resistor</li><li>LPF Capacitor</li>| ![wf_gbp[ps+c].png](/img/wf_gbp[ps+c].png)<br>![sg_gbp[ps+c].png](/img/sg_gbp[ps+c].png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_gbp_[ps+c].ogg"><a href="/snd/sndtest_gbp_[ps+c].ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_gbp_[ps+c].ogg"><a href="/snd/happyhippo_gbp_[ps+c].ogg"> .ogg</a></audio>|

### EMULATED

#### BGB (PC)

Believe it or not, BGB's emulator is better than the stock Color & Color w/ prosound (and yes, even the pocket series). There's also virtually no background noise (there's a bit of air that can be found within the spectrogram, but it's virtually impossible to hear). Good for home use, and always excellent for beginners.

|                 Image                   | Variables | Waveform & spectrogram         | Sound examples |
|:--------------------------------------- |:-------   |:------------------------------ |:-------------- |
| ![pho_bgb.png](/img/pho_bgb.png)| <li>WAV output</li>| ![wf_bgb.png](/img/wf_bgb1.png)<br>![sg_bgb1.png](/img/sg_bgb1.png)| SNDTEST.lsdsng<audio controls><source src="/snd/sndtest_bgb.ogg"><a href="/snd/sndtest_bgb.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls><source src="/snd/happyhippo_bgb.ogg"><a href="/snd/happyhippo_bgb.ogg"> .ogg</a></audio>|

### NOTES

If you would like to help contribute more sound data, please do not hesitate to get in touch with me via <a href="mailto:aquellex@f0xpa.ws" target="_blank">e-mail</a>, or join the discussion in <a href="https://discord.io/psgcabal" target="_blank">The PSG Cabal</a> Discord server in #technical for more details.

If you would like to help contribute a more ergonomic design for this page, the website can be found on <a href="https://github.com/Aquellex/aquellexws" target="_blank">GitHub</a>.

### TODO

* Analyse more CPU revisions (yes, they can make a difference)
* Note down CPU revisions used from some of DEFENSE MECHANISM's recordings
* Lights on/off variables for GBASP series
* DMG (bass boost) [CPU-06 recommended]
* Pocket (prosound)
* Light (stock, prosound)
* Color (prosound) [CPU-04 OR CPU 05 recommended] {DO NOT GET ANY EUROPEAN -02 - CONTAINS A FATAL ENVELOPE BUG UPON USING P AND V COMMANDS}
* Advance (prosound)
* SP (both models) (prosound)
* VisualBoyAdvance (PC)
* MasterBoy (Sony PSP)
* Consider Nanoloop GBA?
* Add pros/cons/verdict segments
* Pinpoint more resonances
