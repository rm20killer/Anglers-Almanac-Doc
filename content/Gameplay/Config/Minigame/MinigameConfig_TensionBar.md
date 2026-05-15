---
draft: false
tags:
  - Minigame
---
## File Location

To modify the tension bar mechanics, locate the configuration file at: 

```
{server/world}/mods/dev.rm20_AnglersAlmanac/configs/MinigameConfig_TensionBar.json
```


## Default Configuration

If the file does not exist, the system defaults to these values:

```JSON
{  
  "MaxHookTime": 6.0,  
  "FishEscapeRate": 0.07999999821186066,  
  "FishReelRate": 0.20000000298023224,  
  "BarRadius": 0.10000000149011612,  
  "FishMaxVeocity": 0.44999998807907104,  
  "FishMinSpeed": 0.0,  
  "MinigameModelVerticalOffset": 1.0,  
  "MinigameScaleMin": 1.5,  
  "MinigameScaleMax": 14.0,  
  "MinigameScaleMultiplier": 1.0,  
  "CastCooldown": 0.5,  
  "BarGravity": 0.6499999761581421,  
  "BarSpeed": 0.6000000238418579,  
  "BarAcceleration": 0.27000001072883606,  
  "FishChangeDirectionMaxInterval": 0.44999998807907104,  
  "FishAcceleration": 0.15000000596046448,  
  "FishBouyancy": 0.0  
}
```

---

### Key Sections Explained

**1. Winning & Losing**
- **FishReelRate:** How fast you win while the fish is inside your bar.
- **FishEscapeRate:** How fast the fish gets away when you miss it.
- **MaxHookTime:** The wait time before a fish bites.

**2. The Player's Bar**
- **BarSpeed:** How fast you "swim" up when holding the button.
- **BarGravity:** How fast the bar falls when you let go.
- **BarAcceleration:** How "heavy" the bar feels to start moving.

**3. The Fish's Movement**
- **FishMaxVeocity:** The top speed the fish can reach.
- **FishAcceleration:** How twitchy or "darty" the fish moves.
- **FishBouyancy:** Whether the fish naturally floats up or sinks down.

**4. Visual Settings**
- **MinigameModelVerticalOffset:** How high the minigame floats above the water.
- **MinigameScaleMax/Min:** Controls how large the UI appears on your screen.