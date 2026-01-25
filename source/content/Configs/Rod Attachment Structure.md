---
draft: false
tags:
  - Config
  - Rod
  - Visuals
---
>[!warning]
>WORK IN PROGRESS

*assets/almanac/attachment/heavy_iron_hook.json*
```json
{
  "id": "almanac:heavy_iron_hook",
  "name": "Heavy Iron Hook",
  "slot": "hook",
  "specializations": [
    {
      "type": "behavior",
      "target": "heavy",
      "weight_multiplier": 2.5
    }
  ]
}
```

### 1. Identity & Slot Rules
- **`"id": "..."`** The unique internal technical ID used for saving the attachment to a rod.
- **`"name": "..."`** The display name shown in the UI and tooltips.
- **`"slot": "..."`** Defines which part of the rod this item occupies.
    - **Valid Slots:** `hook`, `reel`, or `line`.
    - **Rule:** A rod can only hold **one** item per slot at a time.
- **`"bonuses": {}`** (Optional) Adds flat modifiers or multipliers to the rod's base stats (Difficulty, Stamina, Rarity, or Size).
- **`"specializations": []`** Adds a boost to the rod to attract specific fish types.
    

### 2. Specialization Logic 
When an attachment is slotted, it adds its **weight multipliers** to the rod's logic.

| **Specialization Type** | **Target Example**           | **Effect**                                                                        |
| ----------------------- | ---------------------------- | --------------------------------------------------------------------------------- |
| **`behavior`**          | `darting`, `heavy`, `sinker` | If you want a **Heavy** fish, this rod makes them bite more often than fast ones. |
| **`regions`**           | `hytale:deep_ocean`          | Makes you much luckier in one place, like the **Swamp** or the **Deep Ocean**.    |
| **`zone`**              | `3`                          | Works best in one specific part of the world (like the **Snow Zone**).            |
| **`rarity_tier`**       | `epic`, `legendary`          | Makes **Legendary** fish bite more often, while ignoring common fish.             |
| **`category`**          | `junk`                       | If you want **Junk**, this rod attracts boots and cans instead of fish.           |


Those attachments can be attached to [[Rods]] in game.