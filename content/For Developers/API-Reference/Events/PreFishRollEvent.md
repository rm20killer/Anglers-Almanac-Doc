---
draft: false
tags:
  - API
  - Dev
  - Development
---
The `PreFishRollEvent` is dispatched by `CatchUtils` right before the system randomly selects a catch from the loot tables. This event acts as a high-priority interceptor, allowing you to forcefully bypass the random roll and "rig" the specific item the player will receive. Setting an overridden loot ID will automatically cancel the standard rolling process in favor of your specified reward.

### Class Location

`dev.rm20.anglersalmanac.IEvents.PreFishRollEvent;`

### Getters & Setters

Use these methods within your listener to evaluate environmental conditions or force a specific loot drop:

|**Method**|**Return Type**|**Description**|
|---|---|---|
|`getPlayer()`|`Player`|Returns the `Player` entity who is currently fishing.|
|`getBobberRef()`|`Ref<EntityStore>`|Returns the reference to the bobber entity in the world.|
|`getContext()`|`FishingContext`|Returns the current environmental conditions (e.g., biome, weather, time).|
|`getOverriddenLootId()`|`String`|Returns the manually assigned loot ID override, if any has been set yet.|
|`getOverridingModName()`|`String`|Returns the identifier of the mod responsible for forcing the loot selection.|
|`setOverriddenLootId(String loot, String modName)`|`void`|Overrides the drop with a specific `FishLootManager` file ID and tags your mod's name. **Automatically cancels the normal random roll.**|

### Implementation Example


```Java
import dev.rm20.anglersalmanac.IEvents.PreFishRollEvent;
import com.hypixel.hytale.server.core.entity.entities.Player;
import dev.rm20.anglersalmanac.Metadata.FishingContext;

public static void onPreFishRoll(PreFishRollEvent event) {
    Player player = event.getPlayer();
    FishingContext fishingCtx = event.getContext();

    // 1. Check a progression or quest requirement
    if (isPlayerOnQuest(player) && "ocean".equalsIgnoreCase(fishingCtx.zone) {
        
        String specialQuestFishId = "Stick";
        String myModName = "QuestExpansionMod";
        
        // 2. Override the loot table roll entirely
        // This forces the game to reward this exact item ID and skips the RNG roll.
        event.setOverriddenLootId(specialQuestFishId, myModName);
    }
}

private static boolean isPlayerOnQuest(Player player) {
    // Placeholder custom quest validation logic
    return true;
}
```