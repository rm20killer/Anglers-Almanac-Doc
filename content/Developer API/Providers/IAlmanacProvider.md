---
draft: false
tags:
  - API
  - Dev
  - Loot
---
The `IAlmanacProvider` allow to access player specific fishing statistics and historical catch data. This provider allows you to check if a player has completed certain milestones or to retrieve their total catch counts for specific species.

### Class location:
```java
dev.rm20.anglersalmanac.api.IAlmanacProvider;
```

**Accessing the Provider:** You can retrieve the active implementation via the `AnglersAlmanacAPI` class:

```java
IAlmanacProvider almanac = AnglersAlmanacAPI.getAlmanac();
```

### Available Methods

Use these methods to query fishing data for a specific player:

| **Method**                      | **Return Type**        | **Description**                                                                            |
| ------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------ |
| `getPlayerStats(uuid)`          | `PlayerStatsData`      | Returns a data object containing total catches, legendary counts, and performance ratings. |
| `hasPlayerCaught(uuid, fishId)` | `boolean`              | Checks if a player has ever successfully caught the specified fish ID.                     |
| `getAllFishCounts(uuid)`        | `Map<String, Integer>` | Returns a map of every fish caught by the player and their respective catch counts.        |

---

### Implementation Example

This example demonstrates how to check a player's progress and reward them if they reach a specific milestone using the `AlmanacInstance`.

```java

```
