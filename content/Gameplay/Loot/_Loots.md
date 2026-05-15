---
draft: false
tags:
  - loot
title: Loots
aliases:
  - Loot
  - Loots
---

```dataview
TABLE 
    category AS "Category",
    weight AS "Rarity",
    difficulty AS "Diff",
    stamina AS "Stamina",
    habitat AS "Habitat"
FROM #LootItem
WHERE item_id != null
SORT category ASC, item_id ASC
```



