---
draft: true
tags:
  - Config
  - Rod
  - Visuals
---

*Server/AnglersAlmanacRodStats/AA_Rod_Cobalt.json*
```json
{  
  "Stats": {  
    "Control": 1.3,  
    "Difficulty": 0.8,  
    "Forgiveness": 2,  
    "Stamina": 1.5,  
    "FishWeightMul": 1,  
    "RarityMul": 1  
  }  
}
```


### 1. Identity & Visuals

These fields identify the rod within the mod's registry and provide UI information.
- **`id`**: The unique internal asset ID (e.g., `AA_Rod_Cobalt`). Used by the code to fetch stats via `getRodStatsFromRodId`.
	- This need to match the rod item name


### 2. Rod Stats (`Stats`)

The `Stats` object (mapped via `RodStats.CODEC`) defines how the rod performs during the active fishing minigame.
- **`Line_Strength`**: Determines how much tension the line can take before snapping.
- **`Reel_Speed`**: How quickly the progress bar fills when the player successfully reels.
- **`Minigame_Difficulty_Offset`**: A modifier to the movement speed or size of the fish icon in the minigame. Negative values make it easier; positive values make it harder.

### 3. Fishing Modifiers

The `Modifiers` object contains specific boosts or penalties applied to the fishing loot pool. Unlike previous versions, modifiers are now categorized by their target type.
#### Global Settings
- **`Fishing_Power`**: A flat addition to the player's fishing skill/power while this bait is equipped.
- **`DefaultMultiplier`**: A global multiplier applied to every item in the loot pool not specifically listed in the categories below.

#### Target Groups (`Items`, `Biomes`, `Zones`, `Regions`, `Families`)

Each of these categories accepts an array of objects to fine-tune catch rates:
- **`TargetId`**: The internal ID of the target (e.g., a fish item ID in the `Items` list, or a biome ID in the `Biomes` list).
- **`Multiplier`**: A float value that multiplies the base weight of the target.
    - `1.0`: No change.
    - `3.5`: Increases the likelihood of catching the target by 350%.
    - `0.1`: Reduces the likelihood of catching the target to 10% (useful for filtering out "trash" items like Ore).

### 4. Modifier Categories

| **Category**   | **Purpose**                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| **`Items`**    | Affects specific item id.                                                             |
| **`Biomes`**   | Multiplies weights when fishing in a specific Biome (e.g., `hytale:overworld_ocean`). |
| **`Zones`**    | Affects catch rates within specific world Zones.                                      |
| **`Regions`**  | Affects catch rates within specific world Regions.                                    |
| **`Families`** | Affects entire groups of fish (e.g., `tropical`, `predatory`).                        |
