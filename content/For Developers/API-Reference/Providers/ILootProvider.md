---
draft: false
tags:
  - API
  - Dev
  - Loot
---
## ILootProvider

The `ILootProvider` interface serves as the primary mechanism for handling fish loot tables and logic. It allows you to query specific fish data, retrieve the entire catalog of available fish, or calculate a randomized catch based on the player's current environment and active modifiers.

**Class location:**

```java
dev.rm20.anglersalmanac.api.ILootProvider;
```

### Accessing the Provider

Like other API components, you can retrieve the active implementation via the `AnglersAlmanacAPI` class:

```Java
ILootProvider lootProvider = AnglersAlmanacAPI.getLootProvider();
```

---

### Available Methods

Use these methods to interact with the fish loot system:

| **Method**                      | **Return Type**                  | **Description**                                                                                                    |
| ------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `getFishData(id)`               | [[FishLoot]]                     | Static method to retrieve the data model for a specific fish ID.                                                   |
| `getAllLoot()`                  | `Collection<? extends FishLoot>` | Static method that returns a collection of all registered fish in the plugin.                                      |
| `getRandomFish(ctx, modifiers)` | [[FishLoot]]                     | Calculates and returns a random fish based on the `FishingContext` (biome, time, etc.) and any optional modifiers. |

---

### Implementation Example


```Java

```