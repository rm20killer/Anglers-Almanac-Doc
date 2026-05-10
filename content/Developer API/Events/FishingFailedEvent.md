---
draft: false
tags:
  - API
  - Dev
  - Development
---
The `FishingFailedEvent` is dispatched by the **Minigame System** *(e.g MinigameSystem_TensionBar)* when a player fails a Minigame. It allows you to identify exactly what the player missed out on.

### Class location:

```java
dev.rm20.anglersalmanac.IEvents.FishingFailedEvent;
```

### Getter:
Use these methods within your listener to handle failed fishing attempts:

| **Method**        | **Return Type** | **Description**                                                  |
| ----------------- | --------------- | ---------------------------------------------------------------- |
| `getMissedLoot()` | [[FishLoot]]    | Returns the loot object that the player failed to catch.         |
| `getLootID()`     | `String`        | A shortcut to get the ID of the missed item (e.g., for logging). |
| `getPlayer()`     | `Player`        | Returns the `Player` entity who was fishing.                     |

### Implementation Example

```java
import dev.rm20.anglersalmanac.IEvents.FishingFailedEvent;
import com.hypixel.hytale.server.core.entity.entities.Player;
import dev.rm20.anglersalmanac.Models.FishLootManager;

public static void onFishingFailed(FishingFailedEvent event) {
    Player player = event.getPlayer();
    String missedID = event.getLootID();
    FishLootManager missedLoot = event.getMissedLoot();

    // 1. Send a sympathetic message
    player.sendMessage("The " + missedID + " got away! Don't give up.");

    // 2. Check the rarity of the missed fish
    // If it was a high-tier fish, maybe play a specific sound or logic
    if (missedLoot.getRarity().equalsIgnoreCase("legendary")) {
        player.sendMessage("Ouch! That looked like a rare one...");
    }
    
    // 3. Log the failure for statistics
    System.out.println("User " + player.getName() + " failed to catch " + missedID);
}
```