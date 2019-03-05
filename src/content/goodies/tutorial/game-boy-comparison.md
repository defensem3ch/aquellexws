---
layout: 'tutorial'
title: "Game Boy sound comparison (better than Herbert Weixelbaum's version)"
lastUpdated: '2019-03-05T22:25:03+11:00'
---

Page Version: 0.9.8

Written by Aquellex<br>
Contributions from <a href="http://defensemech.com" target="_blank">DEFENSE MECHANISM</a>, <a href="https://soundcloud.com/pain-perdu" target="_blank">Pain Perdu</a>, <a href="https://soundcloud.com/odaxelagnia
" target="_blank">odaxelagnia</a>, Jack L., <a href="https://soundcloud.com/vaultkid" target="_blank">Vault Kid</a>, <a href="https://www.cheapbeats.net/" target="_blank">cheapshot</a>, <a href="http://kabcorp.fr/" target="_blank">Kabcorp</a>, <a href="https://trash80.com/" target="_blank">Trash80</a> & <a href="https://twitter.com/ImATrackMan/" target="_blank">ImATrackMan</a>
<br>Happy Hippo track by <a href="http://doussis.com" target="_blank">Stello Doussis</a>

### PREFACE

This guide aims to extend the work done by <a href="http://herbertweixelbaum.com/comparison.htm" target="_blank">Herbert Weixelbaum</a> and append more sound comparisons that are missing from his page.

The title is by no means a malicious attack on Weixelbaum's work (I got the "better than" phrase from a series of satirical Sonic ROM Hacks, so take it as cheeky banter)--what he has done so far for the chipmusic community has been an amazing starting point, but as time has passed over several years, newer discoveries have been made such as the usage of new capacitors, difference between major motherboard revisions etc. (e.g. a CGB-CPU-02 uses the most noisiest headphone amps in contrast to the quieter CGB-CPU-05)

It should also be noted that any documentation regarding sound comparsions will never truly be completed, as advancements in technology will inevitably allow for newer discoveries to be made. Please view any guide you see on the Internet as reference, and be aware of sources that may not be up-to-date, including this one.

That being said, if you see any misinformation within this page, please notify me immediately via any means necessary (email aquellex@f0xpa.ws or Twitter @Aquellex) so I can correct them as soon as possible.

All waveform images provided within this document are recorded with the following configuration:

- Envelope: A8
- Wave: 50% (square)
- Note: Lowest pulse note possible on PU1 (displays as C-3 on v4.9.5)
- The waveform is isolated & normalised once more just for the screenshot

All spectrogram images provided within this document are when the Game Boy is left running idle/silent. No normalisation is applied towards this period.

All DC offset images provided within this document are immediately after the squarewave notekill that occurs @ ~6.82s per SNDTEST.lsdsng recording.

The units were played at their highest volumes and recorded peaking at -12dB. The recordings (and the waveforms) have all been normalised to -0.01dB with the exception of the sonogram images. No other further post-processing was done. Rendered in 44.1khz 16-bit, then exported to .ogg (Q10).

LSDJ 4.9.5 was used for all SNDTEST.lsdsng recordings (unless specified otherwise, which use SNDTEST.lsdsng compiled into .gb) since the project file uses the old logarithmic pitch bend table. Later versions of LSDJ can have positive impacts (e.g. 5.0.0: you can get away with an extra V command on the DMG | 5.1.9 makes P/L commands less CPU-intensive), but will also consequently require workarounds to get pre-5.0.3 quirks to run correctly on higher versions.

You will hear the following in SNDTEST.lsdsng (starting at 110BPM groove 3/3): 6 bars of intro, 2 bars of the infamous 'clicking' side-effect when using volume/pan commands, 19 bars of a full track, then an isolation of a granular synthesis technique. Tempo is then set to T01 (40BPM for DMGs unless using the compiled .gb, 80BPM for GBCs) along with various waveforms (pulses, sine, saw, kits, sine kick, square kick, periodic noise), then at least 0.1 to 2 seconds of LSDJ (or the compiled .gb) running idle.

### PORTABLE

#### DMG

Ahh, the good old staple of Game Boy music. Thick, bassy sound straight out of the box. Background noise is negligable during playback. A bit of virtually unnoticable hiss can be found at resonances 9.1-9.4khz and 18-18.7khz. Need I say more? Actually...

One major downside of DMG units is the processor speed. When a track gets too complicated, the unit will choke during playback. Ways to choke a DMG unit include:

- Using two high-frequency vibrato commands simultaneously
- Kit playback
- Using the granular synthesis technique
- Using a tempo setting greater than 220

Fortunately, LSDJ versions greater than 4.3.x are more optimised compared to the 3.x.x days.

Another shortcoming I might add is that the 'clicking' side-effect is very prominent (as demonstrated in the Happy Hippo example), but depending on the enjoyment of the composition of your tracks, it's a nitpick at best.

That being said, this unit is still very accessible today, and the CPU-choking shortcoming ultimately depends on the complexity of your tracks. Great for beginners.

![cautionary.gif](/img/cautionary.gif) The type of backlighting kit you use may have a very minor impact on the noise floor.

| Image                                    | Variables                                | Waveform, spectrogram & DC offset                               | Sound examples                                                                                                                                                                                                                                                                |
| :--------------------------------------- | :--------------------------------------- | :--------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![dmg_1.jpg](/img/dmg_1.jpg) | <li>DMG-CPU-06</li><li>Bivert backlight (HHLv2)</li> | ![wf_dmg.png](/img/wf_dmg.png)<br>![sg_dmg.png](/img/sg_dmg.png)<br>![dc_dmg.png](/img/dc_dmg.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_dmg.ogg"><a href="/snd/sndtest_dmg.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_dmg.ogg"><a href="/snd/happyhippo_color_dmg.ogg"> .ogg</a></audio> |

#### DMG (prosound)

Virtually the same as above, but with some major key differences:

- The background noise is gone entirely
- The hiss resonances can be still found between 9.1-9.4khz and 18-18.7khz (you can eliminate these in recording using surgical EQs)

Highly recommended mod for those getting into scenarios where a line-out jack is involved (especially live performance and recording).

| Image                                    | Variables                                | Waveform, spectrogram & DC offset                                                           | Sound examples                                                                                                                                                                                                                                                                                    |
| :--------------------------------------- | :--------------------------------------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![dmgps_1.jpg](/img/dmgps_1.jpg) | <li>DMG-CPU-06</li> | ![wf_dmg[ps].png](/img/wf_dmg[ps].png)<br>![sg_dmg[ps].png](/img/sg_dmg[ps].png)<br>![dc_dmg[ps].png](/img/dc_dmg[ps].png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_dmg_[ps].ogg"><a href="/snd/sndtest_dmg_[ps].ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_dmg_[ps].ogg"><a href="/snd/happyhippo_color_dmg_[ps].ogg"> .ogg</a></audio> |

#### DMG (capacitor upgrade)

<a href="http://www.inspektorgadjet.com/gameboy-bass-boost/" target="_blank">Now you're playing with power!</a> Thanks, Kabcorp!

![cautionary.gif](/img/cautionary.gif) Changing original capacitor values may result in sub-frequency anomalies (e.g. DC offset issues). This can be mitigated by applying a low-shelf EQ below audible range (30 Hz is recommended).

| Image                                    | Variables                                | Waveform, spectrogram & DC offset                                                           | Sound examples                                                                                                                                                                                                                                                                                    |
| :--------------------------------------- | :--------------------------------------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![pho_dmg[cap].jpg](/img/pho_dmg[cap].jpg) | <li>CPU-06</li> <li>6.8µF capacitor</li> <li>Compiled SNDTEST.gb</li> | ![wf_dmg[cap].png](/img/wf_dmg[cap].png)<br>![sg_dmg[cap].png](/img/sg_dmg[cap].png)<br>![dc_dmg[cap].png](/img/dc_dmg[cap].png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_dmg[cap].ogg"><a href="/snd/sndtest_dmg[cap].ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_dmg[cap].ogg"><a href="/snd/happyhippo_color_dmg[cap].ogg"> .ogg</a></audio> |

#### Pocket

Use BGB or get yourself a throwaway DMG (or GBC/GBA/GBASP if you need the CPU firepower) instead. There are very little advantages to using a vanilla Pocket unit (except for when in a pinch):

- The processor speed issue from the DMG is still present
- Fuzzy sound
- Hiss (9-9.4khz, 13.7-13.8khz, 18.2-18.7khz) and hum (0-262hz) are noticable during playback (though the hiss becomes less noticable when LSDJ is idle)

If you really need to use one as a last resort, don't forget to turn up the bass on the EQ + remove unwanted resonances when post-processing.

On the other hand, the sound is more tolerable than a vanilla Color unit.

| Image                                    | Variables        | Waveform, spectrogram & DC offset                                                       | Sound examples                                                                                                                                                                                                                                                                      |
| :--------------------------------------- | :--------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![placeholder.png](/img/placeholder.png) | <li>MGB-LCPU-02</li> | ![wf_pocket.png](/img/wf_pocket.png)<br>![sg_pocket.png](/img/sg_pocket.png)<br>![dc_pocket.png](/img/dc_pocket.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_pocket.ogg"><a href="/snd/sndtest_pocket.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_pocket.ogg"><a href="/snd/happyhippo_pocket.ogg"> .ogg</a></audio> |

#### Light

Thank you ImATrackMan for the recordings!

Very similar to the pocket.

| Image                                    | Variables        | Waveform, spectrogram & DC offset                                                       | Sound examples                                                                                                                                                                                                                                                                      |
| :--------------------------------------- | :--------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![temu.jpg](/img/temu.jpg) | <li>MGL-CPU-01</li> <li>Lights off</li>| ![wf_lightoff.png](/img/wf_lightoff.png)<br>![sg_lightoff.png](/img/sg_lightoff.png)<br>![dc_lightoff.png](/img/dc_lightoff.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_lightoff.ogg"><a href="/snd/sndtest_lightoff.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_lightoff.ogg"><a href="/snd/happyhippo_lightoff.ogg"> .ogg</a></audio> |
| ![temu_light.jpg](/img/temu_light.jpg) | <li>MGL-CPU-01</li> <li>Lights on</li>| ![wf_lighton.png](/img/wf_lighton.png)<br>![sg_lighton.png](/img/sg_lighton.png)<br>![dc_lighton.png](/img/dc_lighton.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_lighton.ogg"><a href="/snd/sndtest_lighton.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_lighton.ogg"><a href="/snd/happyhippo_lighton.ogg"> .ogg</a></audio> |

#### Color

Ahh yes, the infamous Game Boy Color that every chipscener loves to blindly dismiss as one of the noisiest Game Boys that are simply not worth your time at all. While it's true it does suffer the same symptoms from the stock Pocket (only much worse), at least you can throw heavy-duty commands that would make a DMG choke to oblivion, and there's always turning up the bass EQ and surgically removing the unwanted resonances in post-processing. Also, there's noise-cancelling and bass mods available for the Color, but we'll get to that soon.

- Hiss resonances: 9-9.4khz, 13.7-13.9khz, 18.2-18.7khz
- Hum resonances: 0-260hz, 1.1-1.3khz, 4.3-4.7khz

There's also a noise cancellation through stereo inversion technique <a href="https://chipmusic.org/forums/topic/6976/gameboy-noise-cancellation-through-stereo-inversion/" target="_blank">here</a>, discovered by EvilWezil. Useful for those in a pinch when recording.

If you had to pick between a Color and the Advance series with no mods factored in, go for the Advance series instead (especially SP if you're factoring in button ergonomics).

![cautionary.gif](/img/cautionary.gif) Avoid European CPU-02 motherboards, as they contain a fatal envelope bug that kills notes unexpectedly upon using pitch bends & vibrato commands. CPU-02s also have the noisiest built-in amp.

| Image                                    | Variables       | Waveform, spectrogram & DC offset                                                           | Sound examples                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :--------------------------------------- | :-------------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![placeholder.png](/img/placeholder.png) | <li>CGB-CPU-03</li> | ![wf_gbc.png](/img/wf_gbc.png)<br>![sg_gbc.png](/img/sg_gbc.png)<br>![dc_gbc.png](/img/dc_gbc.png)                 | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_gbc.ogg"><a href="/snd/sndtest_gbc.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_gbc.ogg"><a href="/snd/happyhippo_gbc.ogg"> .ogg</a></audio>                                                                                                                                                                                  |
| ![placeholder.png](/img/placeholder.png) | <li>CGB-CPU-02</li> | ![wf_cgb[02].png](/img/wf_cgb[02].png)<br>![sg_cgb[02].png](/img/sg_cgb[02].png)<br>![dc_cgb[02].png](/img/dc_cgb[02].png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_cgb_[02].ogg"><a href="/snd/sndtest_cgb_[02].ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_cgb_[02].ogg"><a href="/snd/happyhippo_cgb_[02].ogg"> .ogg</a></audio><br>Pitch bend & vibrato test<audio controls preload="none"><source src="/snd/pitchbend_cgb_[02].ogg"><a href="/snd/pitchbend_cgb_[02].ogg"> .ogg</a></audio> |

#### Color (prosound)

An improvement that salvages the vanilla Color's noisy environment. One thing to note that while the Color is tacet, it's a pretty silent system with the hum/hiss resonances from the vanilla Color being inaudible, but during playback, the resonances become a lot more obvious. That can be rectified with a capacitor mod that we'll get to immediately after this section.

Don't forget to turn up the bass on the EQ during a live performance, as the bass without any kind of EQ is pretty tame compared to the stock DMG.

- Hiss resonances: Same as above
- Hum resonances: Same as above

| Image                                    | Variables                   | Waveform, spectrogram & DC offset                                                           | Sound examples                                                                                                                                                                                                                                                                                      |
| :--------------------------------------- | :-------------------------- | :------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![placeholder.png](/img/placeholder.png) | <li>CGB-CPU-04</li><li>RCA</li> | ![wf_gbc[ps].png](/img/wf_gbc[ps].png)<br>![sg_gbc[ps].png](/img/sg_gbc[ps].png)<br>![dc_gbc[ps].png](/img/dc_gbc[ps].png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_color_[ps].ogg"><a href="/snd/sndtest_color_[ps].ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_color_[ps].ogg"><a href="/snd/happyhippo_color_[ps].ogg"> .ogg</a></audio> |

#### Color (pin3 mod)

BennVenn's pin3 mod that is also used for his GBC backlight mod. ~~Kinda looks like a hybrid of a stock & prosound Color, but the hiss & hum resonances are less obnoxious compared to the stock GBC. Again, don't forget to turn up the bass on the EQ during a live performance, as the bass without any kind of EQ is pretty tame compared to the stock DMG.~~

![cautionary.gif](/img/cautionary.gif) I need more samples to really know what's going on since I suspect my pin3 GBC is just outputting what one would expect out of a stock CPU-05.

- Hiss resonances: Same as above
- Hum resonances: Same as above

| Image                                    | Variables                                                       | Waveform, spectrogram & DC offset                                                                   | Sound examples                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :--------------------------------------- | :-------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![gbcpin3_1.jpg](/img/gbcpin3_1.jpg) | <li>CGB-CPU-05</li><li>BennVenn GBC Backlight</li><li>Pin3 Mod</li> | ![wf_cgb[pin3].png](/img/wf_cgb[pin3].png)<br>![sg_cgb[pin3].png](/img/sg_cgb[pin3].png)<br>![dc_cgb[pin3].png](/img/dc_cgb[pin3].png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_cgb_[pin3].ogg"><a href="/snd/sndtest_cgb_[pin3].ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_cgb_[pin3].ogg"><a href="/snd/happyhippo_cgb_[pin3].ogg"> .ogg</a></audio><br>Pitch bend & vibrato test<audio controls preload="none"><source src="/snd/pitchbend_cgb_[pin3].ogg"><a href="/snd/pitchbend_cgb_[pin3].ogg"> .ogg</a></audio> |

#### Color (noise cancel + bass boost)

Thanks to this <a href="https://chipmusic.org/forums/topic/14184/gbc-bass-mod-and-noise-filtering-mod-a-comprehensive-photo-guide/" target="_blank">wonderful modification</a> pioneered by katsumbhong, the Color now gets a \*major\* upper hand against the DMG that is universally praised for its thick bass. This mod places the Color on par with the DMG, with an upper hand on CPU firepower. The infamous 'clicking' side-effect when using too many volume envelopes and hardpans is still present, however.

That being said, the mod is more involved than your typical prosound mod, given the extra capacitors required. But if you are able to execute the mod (or find somebody who can) correctly, it pays great dividends. Excellent for every scenario imaginable!

![cautionary.gif](/img/cautionary.gif) Changing original capacitor values may result in sub-frequency anomalies (e.g. DC offset issues). This can be mitigated by applying a low-shelf EQ below audible range (30 Hz is recommended).

| Image                                    | Variables                                                | Waveform, spectrogram & DC offset                                                                       | Sound examples                                                                                                                                                                                                                                                                                                  |
| :--------------------------------------- | :------------------------------------------------------- | :------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![gbcbbnc_1.jpg](/img/gbcbbnc_1.jpg) | <li>RCA</li> <li>CGB-CPU-05</li> <li>AGS-001 frontlight</li> | ![wf_gbc[nc+bb].png](/img/wf_gbc[nc+bb].png)<br>![sg_gbc[nc+bb].png](/img/sg_gbc[nc+bb].png)<br>![dc_gbc[nc+bb].png](/img/dc_gbc[nc+bb].png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_color_[nc+bb].ogg"><a href="/snd/sndtest_color_[nc+bb].ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_color_[nc+bb].ogg"><a href="/snd/happyhippo_color_[nc+bb].ogg"> .ogg</a></audio> |

#### Advance

Thank you DEFENSE MECHANISM for the recordings!

Bassy sound straight out of the box, which is very nice, and a powerful CPU to boot. The Advance series are also best known for being the least clickiest Game Boys in the series, which is a big plus, especially with tracks like Happy Hippo.

The hum and hisses are at their most noticable when LSDJ is idle, and become less noticable than the stock Pocket during playback.

- Hiss resonances: 6.6-7khz, 9-9.4khz, 13.1-14.0khz, 20.2-20.6khz
- Hum resonances: 0-260hz

Sample playback is less satisfying than the pure GB models, even with the antispike patch introduced in v4.7.0, though it's a negligible nitpick at best.

Button ergonomics are awkward, though there are mods to reroute the Start/Select buttons to L/R respectively, if you're willing to sacrifice those buttons solely for LSDJ.

| Image                                    | Variables    | Waveform, spectrogram & DC offset                                           | Sound examples                                                                                                                                                                                                                                                          |
| :--------------------------------------- | :----------- | :--------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![placeholder.png](/img/placeholder.png) | <li>???</li> | ![wf_gba.png](/img/wf_gba.png)<br>![sg_gba.png](/img/sg_gba.png)<br>![dc_gba.png](/img/dc_gba.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_gba.ogg"><a href="/snd/sndtest_gba.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_gba.ogg"><a href="/snd/happyhippo_gba.ogg"> .ogg</a></audio> |

#### SP

Thank you DEFENSE MECHANISM for the recordings!

Background noise (hum & hiss) is negligable during playback for the AGS-001 used in the recording; hum is very noticable during playback for the AGS-101 used, unfortunately. Sample playback is still a negligable nitpick.

There is a chance that resonance severity may vary from motherboard to motherboard, but we don't have enough data for the time being.

- Hiss resonances: 8.2-8.5khz, 9.9-10.4khz, 12.8-13.2khz, 17.3-17.7khz
- Hum resonances: 0-265hz, 3.2-3.9khz

Don't forget this stereo inversion technique <a href="https://chipmusic.org/forums/topic/6976/gameboy-noise-cancellation-through-stereo-inversion/" target="_blank">here</a>.

| Image                                    | Variables        | Waveform, spectrogram & DC offset                                                   | Sound examples                                                                                                                                                                                                                                                                  |
| :--------------------------------------- | :--------------- | :----------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![placeholder.png](/img/placeholder.png) | <li>AGS-001</li> | ![wf_sp001.png](/img/wf_sp001.png)<br>![sg_sp001.png](/img/sg_sp001.png)<br>![dc_sp001.png](/img/dc_sp001.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_sp001.ogg"><a href="/snd/sndtest_sp001.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_sp001.ogg"><a href="/snd/happyhippo_sp001.ogg"> .ogg</a></audio> |
| ![placeholder.png](/img/placeholder.png) | <li>AGS-101</li> | ![wf_sp101.png](/img/wf_sp101.png)<br>![sg_sp101.png](/img/sg_sp101.png)<br>![dc_sp101.png](/img/dc_sp101.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_sp101.ogg"><a href="/snd/sndtest_sp101.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_sp101.ogg"><a href="/snd/happyhippo_sp101.ogg"> .ogg</a></audio> |

#### SP (prosound)

Thank you Cheapshot for the recordings!

| Image                                    | Variables        | Waveform, spectrogram & DC offset                                                   | Sound examples                                                                                                                                                                                                                                                                  |
| :--------------------------------------- | :--------------- | :----------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![pho_gbasp[ps].png](/img/pho_gbasp[ps].png) | <li>3.5mm prosound</li>  <li>AGS-101</li> | ![wf_gbasp[ps].png](/img/wf_gbasp[ps].png)<br>![sg_gbasp[ps].png](/img/sg_gbasp[ps].png)<br>![dc_gbasp[ps].png](/img/dc_gbasp[ps].png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_gbasp[ps].ogg"><a href="/snd/sndtest_gbasp[ps].ogg"> .ogg</a></audio> |

### HOME

#### Super Game Boy

Thank you DEFENSE MECHANISM for the recordings!

There is a high pitched hiss that can easily be heard in recordings.

Word of caution: <a href="https://youtu.be/BjtD1mOZlPc?t=1099" target="_blank">the Super Game Boy is faster than any other Game Boy hardware</a> (about 2.4% faster; cheers My Life in Gaming!) and the tunings are off by a semitone higher for any game (as evident by the Happy Hippo recording). LSDJ corrects this tuning issue through software when in SGB mode, however.

- Hiss resonances: 7.8-8.2khz, 9.2-9.6khz, 15-16.4k, 18.7-19khz
- Hum resonances: 0-250hz, 1.1-1.3khz, 2.2-2.5khz, 3.4-3.7khz, 4.5-4.9khz, 5.8-6khz

| Image                                    | Variables    | Waveform, spectrogram & DC offset                                           | Sound examples                                                                                                                                                                                                                                                          |
| :--------------------------------------- | :----------- | :--------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sgb_1.jpg](/img/sgb_1.jpg) | <li>???</li> | ![wf_sgb.png](/img/wf_sgb.png)<br>![sg_sgb.png](/img/sg_sgb.png)<br>![dc_sgb.png](/img/dc_sgb.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_sgb.ogg"><a href="/snd/sndtest_sgb.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_sgb.ogg"><a href="/snd/happyhippo_sgb.ogg"> .ogg</a></audio> |

#### Super Game Boy (prosound)

Thank you DEFENSE MECHANISM for the recordings!

What an interesting looking waveform compared to the non-prosound...

See above for resonances, they're still the same.

| Image                                    | Variables    | Waveform, spectrogram & DC offset                                                           | Sound examples                                                                                                                                                                                                                                                                              |
| :--------------------------------------- | :----------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![sgbps_1.jpg](/img/sgbps_1.jpg) | <li>???</li> | ![wf_sgb[ps].png](/img/wf_sgb[ps].png)<br>![sg_sgb[ps].png](/img/sg_sgb[ps].png)<br>![dc_sgb[ps].png](/img/dc_sgb[ps].png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_sgb_[ps].ogg"><a href="/snd/sndtest_sgb_[ps}.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_sgb_[ps].ogg"><a href="/snd/happyhippo_sgb_[ps].ogg"> .ogg</a></audio> |

#### Super Game Boy 2

Thank you DEFENSE MECHANISM for the recordings!

The Super Game Boy 2 corrects the speed issue from the original SGB. Alas, it was only released in Japan. An obnoxious hiss can be heard during recordings, and has a tendency to tack onto PCM samples.

- Hiss resonances: 7.8-8.2khz, 9-9.4khz, 13.5-14khz, 15.4-16.1khz, 17.5-18khz, 18.3-18.5khz, 21.6-21.8khz
- Hum resonances: 3.3-3.6khz, 5.8-6.1khz

| Image                                    | Variables    | Waveform, spectrogram & DC offset                                               | Sound examples                                                                                                                                                                                                                                                              |
| :--------------------------------------- | :----------- | :------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sgb2_1.jpg](/img/sgb2_1.jpg) | <li>???</li> | ![wf_sgb2.png](/img/wf_sgb2.png)<br>![sg_sgb2.png](/img/sg_sgb2.png)<br>![dc_sgb2.png](/img/dc_sgb2.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_sgb2.ogg"><a href="/snd/sndtest_sgb2.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_sgb2.ogg"><a href="/snd/happyhippo_sgb2.ogg"> .ogg</a></audio> |

#### Super Game Boy 2 (prosound)

Thank you DEFENSE MECHANISM for the recordings!

The funky-looking waveform sideeffect still occurs from the SGB1!

| Image                                    | Variables    | Waveform, spectrogram & DC offset                                                               | Sound examples                                                                                                                                                                                                                                                                                  |
| :--------------------------------------- | :----------- | :----------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![placeholder.png](/img/placeholder.png) | <li>???</li> | ![wf_sgb2[ps].png](/img/wf_sgb2[ps].png)<br>![sg_sgb2[ps].png](/img/sg_sgb2[ps].png)<br>![dc_sgb2[ps].png](/img/dc_sgb2[ps].png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_sgb2_[ps].ogg"><a href="/snd/sndtest_sgb2_[ps].ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_sgb2_[ps].ogg"><a href="/snd/happyhippo_sgb2_[ps].ogg"> .ogg</a></audio> |

#### Game Boy Player

Thank you DEFENSE MECHANISM for the US motherboard recordings!

Uses the same authentic hardware as the original GBA! Background noise is somewhat negligible during normal playback.

While the original GameCube controller lacks a SELECT button, you have a few good options:

* Remap the SELECT button to the L-Trigger in software
* Purchase one of HORI's <a href="https://www.ebay.com/b/Hori-Nintendo-GameCube-Controllers/117042/bn_3143028" target="_blank"> Game Boy Player digital controllers</a> (beware: these are almost as expensive as the infamous component cables)
* Purchase one of raphnet technologies' <a href="https://www.raphnet-tech.com/products/snes_to_wii/index.php" target="_blank">SNES-to-GameCube adaptors</a> (much more affordable!)

| Image                                    | Variables                 | Waveform, spectrogram & DC offset                                                 | Sound examples                                                                                                                                                                                                                                                                  |
| :--------------------------------------- | :------------------------ | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![ngc_1.jpg](/img/ngc_1.jpg) | <li>DOL-GBS-01 (JPN)</li> | ![wf_gbp.png](/img/wf_gbp.png)<br>![sg_gbp.png](/img/sg_gbp.png)<br>![dc_gbp.png](/img/dc_gbp.png)       | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_gbp.ogg"><a href="/snd/sndtest_gbp.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_gbp.ogg"><a href="/snd/happyhippo_gbp.ogg"> .ogg</a></audio>         |
| ![placeholder.png](/img/placeholder.png) | <li>DOL-GBS-20 (US)</li>  | ![wf_gbp.png](/img/wf_gbpus.png)<br>![sg_gbpus.png](/img/sg_gbpus.png)<br>![dc_gbpus.png](/img/dc_gbpus.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_gbpus.ogg"><a href="/snd/sndtest_gbpus.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_gbpus.ogg"><a href="/snd/happyhippo_gbpus.ogg"> .ogg</a></audio> |

#### Game Boy Player (prosound)

Thank you DEFENSE MECHANISM for the recordings and <a href="https://www.gc-forever.com/forums/viewtopic.php?t=1703" target="_blank">finding an appropriate page regarding the mod!</a>

On par with, if not better than the Color noise cancel + bass boost, with the added edge of the 'clicking' side-effect being a lot more muted in akin to the GBA series as expected. The background noise is on par with, if not a couple more resonances than the stock DMG & GBAs, but during playback, it's negligable at best, especially when compared with the pocket series.

A magnificent companion for the Color/SP-seasoned composer.

![cautionary.gif](/img/cautionary.gif) Changing original capacitor values may result in sub-frequency anomalies (e.g. DC offset issues). This can be mitigated by applying a low-shelf EQ below audible range (30 Hz is recommended).

| Image                                    | Variables                                                                              | Waveform, spectrogram & DC offset                                                                           | Sound examples                                                                                                                                                                                                                                                                                              |
| :--------------------------------------- | :------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![ngcps_1.jpg](/img/ngcps_1.jpg) | <li>RCA</li><li>DOL-GBS-01 (JPN)</li> <li>LPF Resistor</li><li>LPF Capacitor</li>      | ![wf_gbp[ps+c].png](/img/wf_gbp[ps+c].png)<br>![sg_gbp[ps+c].png](/img/sg_gbp[ps+c].png)<br>![dc_gbp[ps+c].png](/img/dc_gbp[ps+c].png)         | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_gbp_[ps+c].ogg"><a href="/snd/sndtest_gbp_[ps+c].ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_gbp_[ps+c].ogg"><a href="/snd/happyhippo_gbp_[ps+c].ogg"> .ogg</a></audio>         |
| ![ngcps_2.jpg](/img/ngcps_2.jpg) | <li>RCA</li><li>DOL-GBS-20 (US)</li> <li>470 Ohm Resistor</li><li>.01uF Capacitor</li> | ![wf_gbpus[ps+c].png](/img/wf_gbpus[ps+c].png)<br>![sg_gbpus[ps+c].png](/img/sg_gbpus[ps+c].png)<br>![dc_gbpus[ps+c].png](/img/dc_gbpus[ps+c].png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_gbpus_[ps+c].ogg"><a href="/snd/sndtest_gbpus_[ps+c].ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_gbpus_[ps+c].ogg"><a href="/snd/happyhippo_gbpus_[ps+c].ogg"> .ogg</a></audio> |

### EMULATED

#### BGB (PC)

Believe it or not, BGB's emulator is better than the stock Color & Color w/ prosound (and yes, even the pocket series). There's also virtually no background noise (there's a bit of air that can be found within the spectrogram, but it's virtually impossible to hear). Good for home use, and always excellent for beginners.

| Image                            | Variables                            | Waveform, spectrogram & DC offset                                              | Sound examples                                                                                                                                                                                                                                                          |
| :------------------------------- | :----------------------------------- | :------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![pho_bgb.png](/img/pho_bgb.png) | <li>WAV output</li><li>GBC mode</li> | ![wf_bgb.png](/img/wf_bgb1.png)<br>![sg_bgb1.png](/img/sg_bgb1.png)<br>![dc_bgb.png](/img/dc_bgb.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_bgb.ogg"><a href="/snd/sndtest_bgb.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_bgb.ogg"><a href="/snd/happyhippo_bgb.ogg"> .ogg</a></audio> |

#### VisualBoyAdvance

You'd think the illustrations below would represent a behemoth of a sound unit, but there are three major problems: the timbre for very high notes & noise channel are off, the temperament is slightly sharper than the standard A440, and a DC offset more severe than any hardware upgrade documented above. It does carry the GBA's less-clicky characteristic, however.

| Image                            | Variables                            | Waveform, spectrogram & DC offset                                              | Sound examples                                                                                                                                                                                                                                                          |
| :------------------------------- | :----------------------------------- | :------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![pho_vba.png](/img/pho_vba.png) | <li>WAV output</li><li>GBC mode</li> <li>44 Khz</li> | ![wf_vba.png](/img/wf_vba.png)<br>![sg_vba.png](/img/sg_vba.png)<br>![dc_vba.png](/img/dc_vba.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_vba.ogg"><a href="/snd/sndtest_vba.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_vba.ogg"><a href="/snd/happyhippo_vba.ogg"> .ogg</a></audio> |

#### DS Lite

Thank you odaxelagnia for the recordings!

Poor PCM emulation.<br>
Lameboy has timbre issues similar to VisualBoyAdvance.

| Image                              | Variables        | Waveform, spectrogram & DC offset                                                                           | Sound examples                                                                                                                                                                                                                                                                                          |
| :--------------------------------- | :--------------- | :----------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![dslite_1.png](/img/dslite_1.png) | <li>Gameyob</li> | ![wf_dsl_gameyob.png](/img/wf_dsl_gameyob.png)<br>![sg_dsl_gameyob.png](/img/sg_dsl_gameyob.png)<br>![dc_dslite_1.png](/img/dc_dslite_1.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_dsl_gameyob.ogg"><a href="/snd/sndtest_dsl_gameyob.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_dsl_gameyob.ogg"><a href="/snd/happyhippo_dsl_gameyob.ogg"> .ogg</a></audio> |
| ![dslite_2.png](/img/dslite_2.png) | <li>Lameboy</li> | ![wf_dsl_lameboy.png](/img/wf_dsl_lameboy.png)<br>![sg_dsl_lameboy.png](/img/sg_dsl_lameboy.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_dsl_lameboy.ogg"><a href="/snd/sndtest_dsl_lameboy.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_dsl_lameboy.ogg"><a href="/snd/happyhippo_dsl_lameboy.ogg"> .ogg</a></audio> |

#### PSP

Excellent bass, but is ruined by poor PCM emulation with the two best emulator choices we have. Periodic noise emulation is a bit finicky as well (you can hear it towards the ends of SNDTEST.lsdsng). Tempo is faster than standard recordings.

| Image                                    | Variables                                 | Waveform, spectrogram & DC offset                                           | Sound examples                                                                                                                                                                                                                                                          |
| :--------------------------------------- | :---------------------------------------- | :--------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![placeholder.png](/img/placeholder.png) | <li>MasterBoy v2.10</li><li>TA-090v2</li> | ![wf_psp.png](/img/wf_psp.png)<br>![sg_psp.png](/img/sg_psp.png)<br>![dc_psp.png](/img/dc_psp.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_psp.ogg"><a href="/snd/sndtest_psp.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_psp.ogg"><a href="/snd/happyhippo_psp.ogg"> .ogg</a></audio> |
| ![pho_psp1000.jpg](/img/pho_psp1000.jpg) | <li>Homer's RIN</li><li>TA-081</li> | ![wf_psp1000.png](/img/wf_psp1000.png)<br>![sg_psp1000.png](/img/sg_psp1000.png)<br>![dc_psp1000.png](/img/dc_psp1000.png) | SNDTEST.lsdsng<audio controls preload="none"><source src="/snd/sndtest_psp1000.ogg"><a href="/snd/sndtest_psp.ogg"> .ogg</a></audio><br>Happy Hippo<audio controls preload="none"><source src="/snd/happyhippo_psp1000.ogg"><a href="/snd/happyhippo_psp1000.ogg"> .ogg</a></audio> |
### NOTES

If you would like to help contribute more sound data, please do not hesitate to get in touch with me via <a href="mailto:aquellex@f0xpa.ws" target="_blank">e-mail</a>, <a href="https://twitter.com/Aquellex" target="_blank">Twitter</a>, or join the discussion in <a href="https://discord.io/psgcabal" target="_blank">The PSG Cabal</a> Discord server in #technical for more details.

If you would like to help contribute a more ergonomic design for this page, the website can be found on <a href="https://github.com/Aquellex/aquellexws" target="_blank">GitHub</a>.

### TODO

I'll be requiring 44.1khz 16-bit stereo .flac files, and I'll be crossing the second list out one-by-one once I've acquired + verified the recordings. NO FURTHER POST-PROCESSING IS TO BE DONE, PLEASE. MINIMUM OF -12.0dB.

Further instructions are provided in the README.txt within the .zip file provided below.

<a href="/lsdj/gbhwsoundrec.zip">Source files required for hardware recordings</a>

- Complete all photos
- Analyse more CPU revisions (yes, they can make a difference)
- Note down CPU revisions used from some of DEFENSE MECHANISM's recordings
- Lights on/off variables for GBASP series
- Pocket (prosound, capacitor upgrade)
- Light (prosound, capacitor upgrade)
- Advance (prosound, capacitor upgrade)
- SP (both models) (capacitor upgrade if possible)
- Kong Feng GB Boy Colour (carries the CGB-CPU-02 envelope bug)
- Investigate non-GB mode for GBA devices
- Add pros/cons/verdict segments
- Pinpoint more resonances

### DOCUMENT CHANGELOG

- 0.9.0 - Initial release.
- 0.9.1 - Added DS Lite recordings. Thanks odaxelagnia!
- 0.9.1a - Added photos for DS Lite section. Thanks odaxelagnia! Also added .zip for sound recordings under <a href="/goodies/tutorial/game-boy-comparison#todo">todo</a>.
- 0.9.2 - Added Color (prosound). Also changed CPU-04 to CPU-03 in DEFENSE MECHANISM's vanilla Color recording.
- 0.9.3 - Added PSP-3000 (TA-090v2).
- 0.9.4 - Added recordings CGB-CPU-02 Stock (along w/ pitch bend & vibrato test), CPU-CGB-05 w/ Pin3 Mod (along w/ pitch bend & vibrato test), and Game Boy Player (stock & prosound) using a US motherboard. Thanks Jack L. For lending the CGB-CPU-02! Thanks DEFENSE MECHANISM for more Game Boy Player recordings!
- 0.9.4a - Replaced gbhwsoundrec.zip with SNDTEST compiled into a .gb file for greater convenience.
- 0.9.5 - Finally got around to adding some photos and appended more text here and there. Thanks DEFENSE MECHANISM!
- 0.9.6 - Added Vault Kid's PSP-1000 running Homer's RIN, cheapshot's prosound SP and Kabcorp's bass boost mod. Thank you all very much!
- 0.9.7 - Added DC offset information & changed 'DMG (bass boost)' to 'DMG (capacitor upgrade)'. Kudos to Trash80! Also added additional notes to Color pin3 mod.
- 0.9.7a - I just noticed I misspelled 'comparison' as 'comparsion' all this time. Whoops! Also, changed cautionary tips as advised by Trash80.
- 0.9.7b - Added a link to a page DEFENSE MECHANISM used for the Game Boy Player sound mod.
- 0.9.7c - Added a sentence notifying readers to inform me of any misinformation to correct as soon as possible.
- 0.9.8 - Changed the preface to be much less antagonistic-sounding and appended: Game Boy Light (thanks ImATrackMan!), VisualBoyAdvance.
