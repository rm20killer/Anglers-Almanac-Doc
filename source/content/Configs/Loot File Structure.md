---
draft: false
tags:
  - Config
  - Fish
  - Loot
  - Visuals
---

*assets/almanac/loot/fish/giant_catfish.json*
```json
{
  "id": "almanac:giant_catfish",
  "category": ["fish", "freshwater", "predator"],
  "name": "Giant Catfish",
  "description": "A heavy bottom-feeder known for its stubborn strength.",
  "size": 200, //for fish only
  "rarity_weight": 15,
  "habitats": {
    "is_global": false,
    "zones": [1, 2],
    "regions": ["hytale:swamp", "hytale:muddy_river"],
    "time_of_day": ["night"], //?
    "required_weather": "any", //?
    "moon_phase": ["full", "new"], //?
    "min_depth": 5,
    "height": { 
	  "min_y": 0,
	  "max_y": 64 //-1 is no limit
  },
  "minigame_stats": {
    "difficulty": 7,
    "behavior": "heavy",
	"stamina": 60
  },
  "visuals": {
    "model": "almanac:geo/clownfish",
    "texture": "almanac:textures/entity/fish/clownfish_grey",
    "palette": "almanac:tropical_standard" //for tinted fish only leave blank for no tilting and texture should be black and white
  }
}
```


### 1. Identity & Lore

- **`"id": "almanac:giant_catfish"`** The internal technical name (subject to change)
- `"category": "fish"` An Array of tags used in [[Rod Structure]] and [[Bait Structure]]
- **`"name": "Giant Catfish"`** The "Display Name"
- **`"description": "..."`** The "Description Text"
- `"size": 200` The base size of the fish.

### 2. The Loot Logic
- **`"rarity_weight": 15`** This is the number used in your **Hierarchical Lookup**.
    The game adds up all weights in the current region and rolls a random number to pick the winner

| **Rarity Tier** | **rarity_weight** | **Description**                    |
| --------------- | ----------------- | ---------------------------------- |
| **Junk**        | `150 - 200`       | Old boots, seaweed, rusted cans.   |
| **Common**      | `100 - 150`       | Your common fish (Minnows, Perch). |
| **Uncommon**    | `50 - 80`         | Slightly larger, more useful fish  |
| **Rare**        | `20 - 40`         | Harder to catch, unique colours    |
| **Epic**        | `5 - 15`          | High-tier rewards                  |
| **Legendary**   | `1 - 3`           | The rarest catches                 |

### 3. The Habitat System 
- **`"is_global": false`** If `true`, put this fish into the "Always Catchable" bucket. Since it's `false`, it only appears in the specific places listed below.
- **`"zones": [1, 2]`** An array of Zone IDs.
- **`"regions": ["hytale:swamp", ...]`** The Region Bucket list. 
- **`"min_depth": 5`** It checks the blocks below the bobber. If the water is only 1-4 blocks deep, this fish is removed from the possible loot list.
- **`"time_of_day": []`** / **`"any"`**
    - **Multiple Options:** `["morning", "day", "dusk", "night"]`. The fish will only appear during the times listed. 
    - **Any Mode:** Set to `"any"` to allow the fish to be caught at any time of day.
- **`"required_weather": []`** / **`"any"`**
    - **Multiple Options:** `["clear", "rain", "thunder", "snow"]`.
    - **Any Mode:** Set to `"any"` so the weather doesn't block the fish from appearing.
- **`"moon_phase": []`** / **`"any"`**
    - **Multiple Options:** `["new", "waxing", "full", "waning"]`.
    - **Any Mode:** Set to `"any"` to ignore lunar cycles.
- **`"height": {}`** Controls the vertical depth of the fish.
	- **`min_y` / `max_y`:** The Y-level range (e.g., `0` to `64` for sea level).
	- *setting `max_y` to -1 will disable it min and max height*

### 4. The Minigame Engine 
- **`"difficulty": 7`** (Scale 1-10)
    - This is the Universal Speed Multiplier.
    - **Effect:** Higher numbers make the fish icon move faster, arrows fall quicker, or the timing needle spin at higher RPMs.
- **`"behavior": "heavy"`** (Keywords: `steady`, `heavy`, `darting`, `sinker`)
    - This defines the **AI Movement Pattern**.
    - **Effect:** A `heavy` fish resists being moved, making the player's controls feel sluggish. A `darting` fish would make sudden, unpredictable jumps.
- **`"stamina": 60`** (Total Progress Points)
    - This determines the **Length of the Fight**.
    - **Effect:** Higher stamina requires the player to maintain focus for a longer period to complete the catch.

### 5. Visuals & Assets
This is Subject to change depending on Hytale
- **`"model": "..."`** Points to the Model file
- **`"texture": "..."`** Points to the Texture file.
- `"palette": "..."` Points to the colour palette to tint the fish colour
	- **Benefit:** If you want to change the "Neon Blue" across 50 different tropical fish, you only change it in the one palette file.
	- See [[Colour Structure]] to set up a colour palette
