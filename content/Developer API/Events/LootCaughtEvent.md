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

| **Method**         | **Return Type**   | **Description**                                                                          |
| ------------------ | ----------------- | ---------------------------------------------------------------------------------------- |
| `getLoot()`        | `FishLootManager` | Returns the full loot manager object containing catch details.                           |
| `getLootID()`      | `String`          | A shortcut to get the unique identifier of the item caught                               |
| `getPlayer()`      | `Player`          | Returns the `Player` entity who performed the catch.                                     |
| `isNewDiscovery()` | `boolean`         | Returns `true` if this is the first time this player has caught this specific loot type. |

Code from event class:
```java
    public FishLootManager getLoot() { return loot; }  
    public String getLootID() {return loot.getItemID();}  
    public Player getPlayer() { return player; }  
    public boolean isNewDiscovery() { return newDiscovery; }  
```


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
    
    // Getting info about the loot from the Loot Manager class.
    FishLootManager Loot = event.getLoot();
    String Rarity = Loot.getRarity()
    String RarityColour = FishLootManager.getRarityColour(Rarity)
}
```


### Notes
 **Loot Identification:** Prefer using `getLootID()` for simple logic (like checking for a specific fish), but use `getLoot()` if you need to access to more data.


