---
publish: true
aliases:
  - Release Note Index
  - Release Note
title: Release Notes
modified:
tags:
  - PatchNotes
cssclasses: ""
draft: false
---
## [1.0.5](app://obsidian.md/ReleaseNotes/1.0.5.md)22 Apr 2026

Moved away from commandBuffer.removeEntity and now using store.removeEntity new attempt to fix [#19](https://github.com/rm20killer/Anglers-Almanac/issues/19)

---

## [1.0.4](app://obsidian.md/ReleaseNotes/1.0.4.md)14 Apr 2026

- Fixed [#18](https://github.com/rm20killer/Anglers-Almanac/issues/18) - no longer show WIP rods in workbench
- Attempted fix of [#19](https://github.com/rm20killer/Anglers-Almanac/issues/19) & zeto_glitch issue

---

## [1.0.3](app://obsidian.md/ReleaseNotes/1.0.3.md)11 Apr 2026

## NEW FEATURES

- Bait system
- Bait can be used to help improve or change the odds of fish to get fish you want
- The system is in place, but only 1 bait is available
- You can turn on or off if each cast needs bait to get fish in the config `(Default: false)`
- Config UI with `/OpenConfig` while being OP
- Turn off/on minigame
- Turn off/on bait required

**Bug fixes**

- Fixed issue with ref not being valid, fix #16
- Fixed catfish height config
- Renamed Minnow
- [ImgBot] Optimise images (decreased file size)

## New steps

We are working on new content, like items that you can fish, while we are also working on other core features we want to add, including integration with XP mods, quests, and fish sizes.

---

## [1.0.2](app://obsidian.md/ReleaseNotes/1.0.2.md)26 Mar 2026

- Updated to update 4 (server version: 2026.03.26-89796e57b)

---

## [1.0.1](app://obsidian.md/ReleaseNotes/1.0.1.md)19 Mar 2026

- Made fishing work in an instance world
- Lower resolution on UI images to try and fix [#13](https://github.com/rm20killer/Anglers-Almanac/issues/13)

---

## [1.0.0](app://obsidian.md/ReleaseNotes/1.0.0.md)18 Mar 2026

- Added in [Almanac Book](app://obsidian.md/_The%20Almanac%20Book)
    - Track your stats
        - How many fish
        - Top fish
        - Great/Perfect score count
        - Collection progress
    - Show what fish you have caught
    - Discover some facts about certain fish
- Reworked Tension Bar [_Minigames](app://obsidian.md/_Minigames)
    - You can now see top and bottom bounds
    - See your progress with the bobber moving to a goal
    - More fun patterns which are unique to each fish
- Added more "junk" items to the loot pool for all zones
- Fixed issue with rods not working if you leave during a minigame
- Fixed issue with some fish not being in the loot table
- Updated the loot table config to make it easier
- Added some tool tips to the asset editor when adding fish the loot table.
- Audio is now per person for certain events

---

## [0.0.7](app://obsidian.md/ReleaseNotes/0.0.7.md)4 Feb 2026

- Removed log spam (sorry)
- Fixed UI issue with UI being black
- Fixed sound issue
- Fixed an issue with the mod not loading on some servers.

---

## [0.0.6](app://obsidian.md/ReleaseNotes/0.0.6.md)2 Feb 2026

- Fixed an issue with server startup on some machines relating to `java.lang.NoClassDefFoundError: com/google/common/reflect/ClassPath`

---

## [0.0.5](app://obsidian.md/ReleaseNotes/0.0.5.md)1 Feb 2026

- Added new command `/SetMinigame <minigame>`
- Fixed issues when the minigame is set to "NoMinigame"

---

## [0.0.4](app://obsidian.md/ReleaseNotes/0.0.4.md)31 Jan 2026

- Added sound effects to Stardew Valley minigame

---

## [0.0.3](app://obsidian.md/ReleaseNotes/0.0.3.md)28 Jan 2026

- Added Stardew Valley fishing
- Added sounds
- Fixed issue with players floating

---

## [0.0.2](app://obsidian.md/ReleaseNotes/0.0.2.md)25 Jan 2026

- Basic fishing with zone and biome-based loot.