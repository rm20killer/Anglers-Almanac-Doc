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
  "ItemId": "Tool_Trap_Bait",
  "Modifiers": [
    {
      "targetId": "Fish_Frostgill_Item",
      "chanceMultiplier": 3.5
    },
    {
      "targetId": "Ore_Iron",
      "chanceMultiplier": 0.1
    }
  ]
}
```


### 1. Identity & Item Link
The primary purpose of this file is to link a Hytale item to the mod's bait logic.
- `ItemId`: The actual Hytale ID of the item (e.g., `Tool_Trap_Bait`) that will be consumed from the player's inventory when fishing.
- `id`: The unique internal asset ID used by the mod's registry.

### 2. Fishing Modifiers

The `Modifiers` section defines how the bait influences the loot pool when equipped.
- `TargetId`: The internal `ItemId` of the fish or loot item you want this bait to affect (e.g., `Fish_Frostgill_Item`).
- `ChanceMultiplier`: A float value that multiplies the base `Weight` of the target item.
    - `1.0`: No change to the base weight.
    - `2.0`: Doubles the likelihood of catching the target.
    - `0.5`: Halves the likelihood of catching the target.