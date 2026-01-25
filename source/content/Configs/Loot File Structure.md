---
draft: false
tags:
  - Config
  - Fish
  - Loot
  - Visuals
---

*Server/AnglersAlmanac/FishLootTable/Zone1/fish/Legendary_Frostgill.json*
```json
{
  "ItemId": "Fish_Frostgill_Item",
  "Name": "Frostgill",
  "Description": "An ice-cold fish with scales like frosted glass.",
  "FamilyId": "Frostgill_family",
  "Rarity": "Legendary",
  "Weight": 20,
  "Size": 85,
  "IsGlobal": false,
  "Habitats": {
    "Zones": ["3"],
    "Tiers": [],
    "Regions": [],
    "Biomes": [],
    "Time_of_day": ["Any"],
    "Required_weather": ["Any"],
    "Moon_phase": -1,
    "Min_depth": 3,
    "Height": {
      "Min_y": 50,
      "Max_y": -1
    },
    "Exclude_zones": [],
    "Exclude_tiers": [],
    "Exclude_biomes": ["Lava_Caves"],
    "Exclude_regions": [],
    "Weight_multiplier": 0.0
  },
  "Minigame_stats": {
    "Difficulty": 14,
    "Behavior": "aggressive",
    "Stamina": 180
  }
}
```


### ### 1. Identity & Data
- **`ItemId`**: Internal string ID for the item.
- **`FamilyId`**: Groups fish for specific mechanics or Almanac sorting.
- **`Weight`**: The base probability value (rolled against the total pool).
- **`IsGlobal`**: If `true`, the fish ignores Zone/Region/Biome requirements (but still respects environment checks like depth and height).

### 2. Habitat Requirements
The fish is eligible for the loot pool if it matches **any** of these (if defined):
- **`Zones`**: String array of IDs (e.g., `["1", "2", "3", "4", "Ocean"]`).
- **`Tiers`**: Integer array. If a Zone matches, it must also match the Tier (if tiers are specified).
- **`Regions` / `Biomes`**: Specific world locations.
- **`Height`**:
    - `Min_y`: Lowest altitude.
    - `Max_y`: Highest altitude (`-1` to disable the ceiling).

### 3. Environmental Checks
These must **always** return true, or the fish is removed from the pool:
- **`Time_of_day`**: `["dawn", "day", "dusk", "night"]` or `["Any"]`.
- **`Required_weather`**: `["Any"]`. (Not working atm)
- **`Moon_phase`**: Exact integer match. Use `-1` to ignore.
- **`Min_depth`**: The water must be at least this many blocks deep.

### 4. The Exclusion & Multiplier System
This logic determines if a fish is "Rare" in a specific area or completely blocked.
This bypasses IsGlobal
- **`Exclude_zones / Exclude_tiers / Exclude_biomes / Exclude_regions`**: If the player is in one of these areas, the `Weight_multiplier` is applied to the fish's base `Weight`.
- **`Weight_multiplier`**: (Float)
    - **`0.0`**: The fish is completely removed from the pool in excluded areas.
    - **`0.5`**: The fish is twice as rare in excluded areas.
    - **`2.0`**: The fish is twice as common in excluded areas.
    
### 5. Minigame Stats (WIP)
- **`Difficulty`**: Universal speed/timing multiplier.
- **`Behavior`**: AI movement pattern (e.g., `normal`, `heavy`, `aggressive`, `darting`).
- **`Stamina`**: The "health" of the fish; higher numbers mean a longer struggle.
