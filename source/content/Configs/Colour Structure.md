---
draft: false
tags:
  - Config
  - Fish
  - Visuals
---

*assets/almanac/palettes/tropical_colours.json*
```json
{
  "id": "almanac:tropical_standard",
  "profiles": [
    {
      "name": "Blue",
      "weight": 50,
      "base_hex": "#00F2FF",
      "variance": 0.10,
      "glowing": 0
    },
    {
      "name": "Orange",
      "weight": 40,
      "base_hex": "#FF5E00",
      "variance": 0.10,
      "glowing": 0
    },
    {
      "name": "Green",
      "weight": 10, 
      "base_hex": "#4E6B3E",
      "location_bonuses": [
        {
          "target": "hytale:swamp",
          "new_weight": 80  // It becomes the most common colour in swamps
        }
      ]
    },
    {
      "name": "Amethyst",
      "weight": 10,
      "base_hex": "#9D00FF",
      "variance": 0.05,
      "glowing": 0
    }
  ]
}
```

Used on [[Loot File Structure]] in `"palette"`

### 1. Identity & Rules
- **`"id": "almanac:tropical_ocean"`** The internal ID that fish JSONs use to "subscribe" to this colour list.
- **`"profiles"`** An array of different colour variations possible for any fish using this palette.

### 2. Profile Logic
- **`"weight": 70`** The probability of this specific colour being chosen.
- **`"base_hex": "#00F2FF"`** The target colour applied to the greyscale texture.
- **`"variance": 0.15`** Small changes to the colour.
    - **Effect:** A 0.15 variance means the final RGB values can fluctuate by 15%, ensuring that even two "Neon Blue" fish are slightly different shades.
- `"glowing: 0` If the fish should be glowing and how much it should be. *May not work*

### 3. Regional Overrides
- **`"location_bonuses": []`** A list of rules that change how common a colour is in specific areas.
    - **`"target": "hytale:swamp"`** The specific biome or zone where this rule applies.
    - **`"new_weight": 80`** The boosted probability used only in that location.
    - **Effect:** Allows a colour to be rare globally but common in one specific biome.