---
draft: false
tags:
  - Config
  - Rod
  - Visuals
---
>[!warning]
>WORK IN PROGRESS


*assets/almanac/rod/thorium_rod.json*
```json
{
  "id": "almanac:thorium_rod",
  "name": "Thorium Rod",
  "bonuses": {
    "difficulty_multiplier": 1.2, 
    "stamina_modifier": -10, 
    "rarity_boost": 1.2, 
    "size_multiplier": 1.15 
  },
  "attachments": {
    "hook": "almanac:empty",
    "reel": "almanac:empty",
    "line": "almanac:empty"
  },
  "specializations": [ 
    {
      "type": "behavior",
      "target": "heavy",
      "weight_multiplier": 2.0
    },
    {
      "type": "regions",
      "target": "hytale:deep_caves",
      "weight_multiplier": 1.5
    }
  ],
  "visuals": {
    "base_model": "almanac:geo/rod_standard",
    "texture": "almanac:textures/item/rod/thorium_rod",
    "particle_effect": "almanac:thorium_sparks"
  }
}
```


### 1. Identity & Core Stats

- **`"id": "..."`** The unique internal ID for this rod, used for crafting recipes and player inventories.
- **`"name": "..."`** The display name shown in-game.
- **`"bonuses"`** A set of universal multipliers that apply to every fishing attempt made with this rod.
- `"specializations":[]` A set of multipliers to specific fishing needs. 

### 2. Gameplay Modifiers (The "Bonuses")
- **`"difficulty_multiplier": 1.2`** Scales the speed/reaction time of the minigame.
    - **Effect:** Increase the overall difficulty by 20%. A `difficulty: 10` fish will play like a `difficulty: 12` fish.
- **`"stamina_modifier": -10`** A flat reduction to the fish's health/stamina.
    - **Effect:** The game ends faster. If a fish has `60` stamina, you only need to earn `50` points to catch it.
- **`"rarity_boost": 1.2`** A global luck multiplier.
    - **Effect:** Increases the `rarity_weight` of Rare, Epic, and Legendary fish in the pool by 20%, making high-tier fish appear more often.
- **`"size_multiplier": 1.15`** Influences the physical length of the fish.
    - **Effect:** Caught fish are 15% larger on average.

### 3. Attachments
Attachments can be applied to rods in game, it would be a way to upgrade the rod. See [[Rod Attachment Structure]] for more info

### 4. Types of Specializations
- **`"target_category": "heavy"`** Defines which fish **Behaviour** this rod is designed to counter.

| **Specialization Type** | **Target Example**           | **Effect**                                                                        |
| ----------------------- | ---------------------------- | --------------------------------------------------------------------------------- |
| **`behavior`**          | `darting`, `heavy`, `sinker` | If you want a **Heavy** fish, this rod makes them bite more often than fast ones. |
| **`Regions`**           | `hytale:deep_ocean`          | Makes you much luckier in one place, like the **Swamp** or the **Deep Ocean**.    |
| **`zone`**              | `3`                          | Works best in one specific part of the world (like the **Snow Zone**).            |
| **`rarity_tier`**       | `epic`, `legendary`          | Makes **Legendary** fish bite more often, while ignoring common fish.             |
| **`category`**          | `junk`                       | If you want **Junk**, this rod attracts boots and cans instead of fish.           |
- **`"category_weight_bonus": 2.0`** The specific lure strength for the target category.
    - **Effect:** While using this rod, any fish with the `heavy` behaviour is **twice as likely** to be hooked during the "Initial Hook" roll.


### 5. Visuals & Assets
This is Subject to change depending on Hytale
- **`"model": "..."`** Points to the Model file
- **`"texture": "..."`** Points to the Texture file.