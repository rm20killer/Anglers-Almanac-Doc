---
draft: false
tags:
  - API
  - Dev
  - Development
---
The `LootCaughtEvent` is dispatched by the **Minigame Manager** within the `SaveLoot` function. It triggers when a player successfully completes the fishing minigame.

### Class location:

```java
dev.rm20.anglersalmanac.IEvents.LootCaughtEvent;
```

### Getter:
Use these methods within your listener to extract data about the catch:

| **Method**         | **Return Type** | **Description**                                                           |
| ------------------ | --------------- | ------------------------------------------------------------------------- |
| `getLoot()`        | [[FishLoot]]    | Returns the full loot manager object containing catch details.            |
| `getLootID()`      | `String`        | A shortcut to get the unique ID of the item caught.                       |
| `getPlayer()`      | `Player`        | Returns the `Player` entity who performed the catch.                      |
| `isNewDiscovery()` | `boolean`       | Returns `true` if this is the first time the player has caught this loot. |
| `isLegendary()`    | `boolean`       | Returns `true` if the caught item has the Legendary flag.                 |
| `getPerformance()` | `float`         | Returns the raw precision score of the minigame completion.               |
| `getPRating()`     | `String`        | Returns a human-readable string rating (e.g., "perfect", "great").        |

>[!note]
Prefer using `getLootID()` for simple logic (like checking for a specific fish), but use `getLoot()` if you need to access to more data.

#### Performance Logic Table
The `getPRating()` method categorizes the `float performance` based on these thresholds:
- **95+**: `"perfect"`
- **80 - 94**: `"great"`
- **40 - 79**: `"good"`
- **-1**: `"nil"`
- **Other**: `"fail"`

### Implementation Example

```java
import dev.rm20.anglersalmanac.IEvents.LootCaughtEvent;
import com.hypixel.hytale.server.core.entity.entities.Player;
import dev.rm20.anglersalmanac.Models.FishLootManager;

public static void onLootCaught(LootCaughtEvent event) {
    Player player = event.getPlayer();
    String lootID = event.getLootID();
    
    // Check if this is a "First Catch"
    if (event.isNewDiscovery()) {
        player.sendMessage((Message.raw("NEW DISCOVERY! You just caught a " + lootID + " for the first time!"));
    } else {
        player.sendMessage((Message.raw("You caught a " + lootID));
    }
    
    if (event.isLegendary()) { 
	    player.sendMessage("✨ A LEGENDARY CATCH! ✨"); 
    }
    
    if (rating.equals("perfect")) { 
	    player.sendMessage("Incredible! That was a perfect catch."); 
    }
    
    // Getting info about the loot from the Loot Manager class.
    FishLootManager Loot = event.getLoot();
    String Rarity = Loot.getRarity()
    String RarityColour = FishLootManager.getRarityColour(Rarity)
}
```


