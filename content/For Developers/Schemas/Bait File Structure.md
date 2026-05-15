---
draft: false
tags:
  - Config
  - Bait
---
>[!seealso]
>Learn how to use this file in [[5. Adding new bait]]

*Server/AnglersAlmanacBaitData/Tool_Trap_Bait.json*
```json
{
  "id": "tool_trap_bait",
  "ItemId": "Tool_Trap_Bait",
  "Modifiers": {
    "Fishing_Power": 5.0,
    "Items": [
      {
        "TargetId": "Fish_Frostgill_Item",
        "Multiplier": 3.5
      },
      {
        "TargetId": "Ore_Iron",
        "Multiplier": 0.1
      }
    ],
    "Biomes": [],
    "Zones": [],
    "Regions": [],
    "Families": [],
    "DefaultMultiplier": 1.0
  }
}
```


### 1. Identity & Item Link
The primary purpose of this file is to link a Hytale item to the mod's bait logic.
- `ItemId`: The actual Hytale ID of the item (e.g., `Tool_Trap_Bait`) that will be consumed from the player's inventory when fishing.
- `id`: The unique internal asset ID used by the mod's registry.

### 2. Fishing Modifiers

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


### 3. Modifier Categories

| **Category**   | **Purpose**                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| **`Items`**    | Affects specific item id.                                                             |
| **`Biomes`**   | Multiplies weights when fishing in a specific Biome (e.g., `hytale:overworld_ocean`). |
| **`Zones`**    | Affects catch rates within specific world Zones.                                      |
| **`Regions`**  | Affects catch rates within specific world Regions.                                    |
| **`Families`** | Affects entire groups of fish (e.g., `tropical`, `predatory`).                        |
